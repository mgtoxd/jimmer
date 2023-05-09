package org.babyfish.jimmer.sql.runtime;

import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

class ExecutorForLog implements Executor {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExecutorForLog.class);

    private final Executor raw;

    static Executor wrap(Executor raw) {
        if (raw == null) {
            return new ExecutorForLog(DefaultExecutor.INSTANCE);
        }
        if (raw instanceof ExecutorForLog) {
            return raw;
        }
        return new ExecutorForLog(raw);
    }

    private ExecutorForLog(Executor raw) {
        this.raw = raw;
    }

    @Override
    public <R> R execute(@NotNull Args<R> args) {
        if (args.sqlClient.getSqlFormatter().isPretty()) {
            return prettyLog(args);
        }
        simpleLog(args);
        return raw.execute(args);
    }

    private void simpleLog(Args<?> args) {
        ExecutorContext ctx = args.ctx;
        String sql = args.sql;
        List<Object> variables = args.variables;
        if (ctx == null) {
            LOGGER.info(
                    "jimmer> sql: " +
                            sql +
                            ", variables: " +
                            variables +
                            ", purpose: " +
                            args.purpose
            );
        } else {
            Logger logger = LoggerFactory.getLogger(ctx.getPrimaryElement().getClassName());
            logger.info(
                    "jimmer> sql: " +
                            sql +
                            ", variables: " +
                            variables +
                            ", purpose: " +
                            args.purpose
            );
            for (StackTraceElement element : ctx.getMatchedElements()) {
                logger.info(
                        "jimmer stacktrace-element)> {}",
                        element
                );
            }
        }
    }

    private <R> R prettyLog(Args<R> args) {
        long millis = System.currentTimeMillis();
        R result;
        result = raw.execute(args);
        millis = System.currentTimeMillis() - millis;
        int affectedRowCount = -1;
        char ch = args.sql.charAt(0);
        if (ch == 'i' || ch == 'u' || ch == 'd') {
            affectedRowCount = (Integer)result;
        }
        return result;
    }
}
