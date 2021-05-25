package ir.piana.business.prediction.module.auth.initializr;

import ir.piana.business.prediction.common.BaseInitializer;
import ir.piana.business.prediction.common.data.component.SpecificSchemaQueryExecutorProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import javax.annotation.PostConstruct;
import java.io.InputStream;

@Configuration
@Slf4j
@DependsOn("SpecificSchemaQueryExecutorProvider")
public class PredictionInitializer extends BaseInitializer {
    @Autowired
    public void setQueryExecutorProvider(
            SpecificSchemaQueryExecutorProvider executorProvider) {
        this.queryExecutorProvider = executorProvider;
    }

    @PostConstruct
    public void init() {
        initData();
        log.info("PredictionModuleInitializer => initialized");
    }

    @Override
    public InputStream getSupportSql() {
        return PredictionInitializer.class.getResourceAsStream("/comptition.sql");
    }

    @Override
    public InputStream getAllSchemaSql() {
        return null;
//        return AuthInitializer.class.getResourceAsStream("/comptition.sql");
    }
}
