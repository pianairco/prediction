package ir.piana.business.prediction.common;

import ir.piana.business.prediction.common.data.component.SpecificSchemaQueryExecutorProvider;
import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.InputStream;

public abstract class BaseInitializer {
    protected SpecificSchemaQueryExecutorProvider queryExecutorProvider;

    public abstract InputStream getSupportSql();
    public abstract InputStream getAllSchemaSql();

    public void initData() {
        try (InputStream resourceAsStream = getSupportSql()) {
            if(resourceAsStream != null) {
                String[] split = new String[0];
                split = IOUtils.toString(resourceAsStream).split(";");

                for (String script : split) {
                    queryExecutorProvider.executeOnSupport(script);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
//        try (InputStream resourceAsStream = getAllSchemaSql()) {
//            if(resourceAsStream != null) {
//                String[] split = new String[0];
//                split = IOUtils.toString(resourceAsStream).split(";");
//
//                for (String script : split) {
////                    queryExecutorProvider.executeOnAllDataSources(script);
//                }
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }
}
