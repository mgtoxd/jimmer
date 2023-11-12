package org.babyfish.jimmer.sql.example.cache;

import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.cache.chain.SimpleBinder;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentMap;

public class ObjectCacheBinder implements SimpleBinder<Object, Object> {

    private final ConcurrentMap<String, Object> dataMap;

    private final ImmutableType type;

    public ObjectCacheBinder(ConcurrentMap<String, Object> dataMap, ImmutableType type) {
        this.dataMap = dataMap;
        this.type = type;
    }

    @Override
    public Map<Object, Object> getAll(Collection<Object> keys) {
        Map<Object, Object> resultMap = new HashMap<>();
        for (Object key : keys) {
            Object result = dataMap.get(toDataKey(key));
            if (!"<null>".equals(result)) {
                resultMap.put(key, result);
            }
        }
        return resultMap;
    }

    @Override
    public void setAll(Map<Object, Object> map) {
        for (Map.Entry<Object, Object> e : map.entrySet()) {
            dataMap.put(toDataKey(e.getKey()), e.getValue() != null ? e.getValue() : "<null>");
        }
    }

    @Override
    public void deleteAll(Collection<Object> keys, Object reason) {
        for (Object key : keys) {
            String dataKey = toDataKey(key);
            System.out.println("------------------------------------------------");
            System.out.println("Delete object cache: " + dataKey);
            System.out.println("------------------------------------------------");
            dataMap.remove(dataKey);
        }
    }

    private String toDataKey(Object key) {
        return type.getJavaClass().getSimpleName() + '-' + key;
    }
}
