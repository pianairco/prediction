package ir.piana.business.prediction.common.data.cache;


import com.zaxxer.hikari.HikariDataSource;
import ir.piana.business.prediction.common.data.util.SpecificSchemaQueryExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service("dataSourceService")
@DependsOn({ "supportExecutor",
        "entityManagerFactoryBean", "entityManagerFactory", "txManager"})
@Transactional(propagation = Propagation.REQUIRED)
@Slf4j
public class DataSourceService {
    private HikariDataSource supportDatasource;

    @Autowired
    @Qualifier("supportExecutor")
    private SpecificSchemaQueryExecutor supportExecutor;

    @Autowired
    @Qualifier("dataSources")
    private Map<String, HikariDataSource> dataSourceMap;

    @Autowired
    private AppDataCache appDataCache;

    @Autowired
    private CacheLock cacheLock;

    public DataSourceService() {

    }

    @PostConstruct
    public void init() throws Exception {
        this.supportDatasource = supportExecutor.getDatasource();
        refreshDataSources();
        log.info("DataSourceService => initialized");
    }

    public Map<String, HikariDataSource> refreshDataSources()
            throws Exception {
        try {
            TenantContext.lock();
            while (TenantContext.getCounter() > 0) {
                Thread.sleep(1000);
            }
            dataSourceMap.clear();
            dataSourceMap.put("support", supportDatasource);
            return dataSourceMap;
        } catch (Exception e) {
            return null;
        } finally {
            TenantContext.unlock();
        }
    }
}
