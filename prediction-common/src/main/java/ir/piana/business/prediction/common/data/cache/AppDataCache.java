package ir.piana.business.prediction.common.data.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class AppDataCache {
    @Autowired
    private CacheLock cacheLock;

    private void run() {
    }

    void refresh() {
        cacheLock.doSynchronized(5, true, () -> this.run());
    }

    @PostConstruct
    public void init() {
        refresh();
    }
}
