package org.babyfish.jimmer.sql.kt.model.inheritance

import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.KTransientResolver
import org.babyfish.jimmer.sql.kt.ast.expression.count
import org.babyfish.jimmer.sql.kt.ast.expression.valueIn
import org.babyfish.jimmer.sql.kt.event.getUnchangedFieldRef
import java.sql.Connection
import java.util.*

class RolePermissionCountResolver(
    private val sqlClient: KSqlClient
) : KTransientResolver.Parameterized<Long, Int> {

    private val filter = sqlClient.filters.getCacheableTargetFilter(Role::permissions)

    init {
        sqlClient.triggers.addAssociationListener(Role::permissions) {
            sqlClient
                .caches
                .getPropertyCache<Long, Int>(Role::permissionCount)
                ?.delete(it.sourceId as Long)
        }
        sqlClient.triggers.addEntityListener(Permission::class) {
            if (filter !== null && filter.isAffectedBy(it)) {
                val role = it.getUnchangedFieldRef(Permission::role)?.value
                if (role !== null) {
                    sqlClient
                        .caches
                        .getPropertyCache<Long, Int>(Role::permissionCount)
                        ?.delete(role.id)
                }
            }
        }
    }

    override fun resolve(ids: Collection<Long>, con: Connection): Map<Long, Int> =
        sqlClient
            .createQuery(Permission::class) {
                where(table.role.id valueIn ids)
                groupBy(table.role.id)
                select(
                    table.role.id,
                    count(table)
                )
            }
            .execute(con)
            .associateBy({
                it._1
            }) {
                it._2.toInt()
            }

    override fun getParameters(): SortedMap<String, Any> =
        filter?.getParameters() ?: sortedMapOf()
}