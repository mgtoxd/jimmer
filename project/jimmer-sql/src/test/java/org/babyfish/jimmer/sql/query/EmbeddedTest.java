package org.babyfish.jimmer.sql.query;

import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.model.embedded.*;
import org.junit.jupiter.api.Test;

public class EmbeddedTest extends AbstractQueryTest {

    @Test
    public void testFindById() {
        TransformTable transform = TransformTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(transform)
                        .where(transform.id().eq(1L))
                        .select(transform),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, " +
                                    "tb_1_.`LEFT`, tb_1_.TOP, tb_1_.`RIGHT`, tb_1_.BOTTOM, " +
                                    "tb_1_.TARGET_LEFT, tb_1_.TARGET_TOP, tb_1_.TARGET_RIGHT, tb_1_.TARGET_BOTTOM " +
                                    "from TRANSFORM as tb_1_ " +
                                    "where tb_1_.ID = ?"
                    ).variables(1L);
                    ctx.rows(
                            "[" +
                                    "--->{" +
                                    "--->--->\"id\":1," +
                                    "--->--->\"source\":{" +
                                    "--->--->--->\"leftTop\":{\"x\":100,\"y\":120}," +
                                    "--->--->--->\"rightBottom\":{\"x\":400,\"y\":320}" +
                                    "--->--->}," +
                                    "--->--->\"target\":{" +
                                    "--->--->--->\"leftTop\":{\"x\":800,\"y\":600}," +
                                    "--->--->--->\"rightBottom\":{\"x\":1400,\"y\":1000}" +
                                    "--->--->}" +
                                    "--->}" +
                                    "]"
                    );
                }
        );
    }

    @Test
    public void testFindBySourceLeftTopX() {
        TransformTable transform = TransformTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(transform)
                        .where(transform.source().leftTop().x().eq(100L))
                        .select(transform),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, " +
                                    "tb_1_.`LEFT`, tb_1_.TOP, tb_1_.`RIGHT`, tb_1_.BOTTOM, " +
                                    "tb_1_.TARGET_LEFT, tb_1_.TARGET_TOP, tb_1_.TARGET_RIGHT, tb_1_.TARGET_BOTTOM " +
                                    "from TRANSFORM as tb_1_ " +
                                    "where tb_1_.`LEFT` = ?"
                    ).variables(100L);
                }
        );
    }

    @Test
    public void testFindBySourceLeftTop() {
        TransformTable transform = TransformTable.$;
        Point point = PointDraft.$.produce(draft -> draft.setX(100).setY(120));
        executeAndExpect(
                getSqlClient()
                        .createQuery(transform)
                        .where(transform.source().leftTop().eq(point))
                        .select(transform),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, " +
                                    "tb_1_.`LEFT`, tb_1_.TOP, tb_1_.`RIGHT`, tb_1_.BOTTOM, " +
                                    "tb_1_.TARGET_LEFT, tb_1_.TARGET_TOP, tb_1_.TARGET_RIGHT, tb_1_.TARGET_BOTTOM " +
                                    "from TRANSFORM as tb_1_ " +
                                    "where (tb_1_.`LEFT`, tb_1_.TOP) = (?, ?)"
                    ).variables(100L, 120L);
                }
        );
    }

    @Test
    public void testFindBySource() {
        TransformTable transform = TransformTable.$;
        Rect rect = RectDraft.$.produce(draft ->
                draft
                        .setLeftTop(leftTop -> leftTop.setX(100).setY(120))
                        .setRightBottom(leftTop -> leftTop.setX(400).setY(320))
        );
        executeAndExpect(
                getSqlClient()
                        .createQuery(transform)
                        .where(transform.source().eq(rect))
                        .select(transform),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, " +
                                    "tb_1_.`LEFT`, tb_1_.TOP, tb_1_.`RIGHT`, tb_1_.BOTTOM, " +
                                    "tb_1_.TARGET_LEFT, tb_1_.TARGET_TOP, tb_1_.TARGET_RIGHT, tb_1_.TARGET_BOTTOM " +
                                    "from TRANSFORM as tb_1_ " +
                                    "where (tb_1_.`LEFT`, tb_1_.TOP, tb_1_.`RIGHT`, tb_1_.BOTTOM) = (?, ?, ?, ?)"
                    ).variables(100L, 120L, 400L, 320L);
                }
        );
    }
}
