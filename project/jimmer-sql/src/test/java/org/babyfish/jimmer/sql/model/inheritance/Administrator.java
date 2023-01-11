package org.babyfish.jimmer.sql.model.inheritance;

import org.babyfish.jimmer.pojo.StaticTypeNameOverride;
import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.GeneratedValue;
import org.babyfish.jimmer.sql.GenerationType;
import org.babyfish.jimmer.sql.Id;

@StaticTypeNameOverride(alias = "default", topLevelName = "TheAdministratorInput")
@Entity
public interface Administrator extends AdministratorBase {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long getId();
}
