package ir.piana.business.multishop.common.exceptions;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zaxxer.hikari.HikariDataSource;
import ir.piana.business.multishop.common.data.util.SpecificSchemaQueryExecutor;
import ir.piana.business.multishop.common.data.cache.TenantContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@Slf4j
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    @Qualifier("dataSources")
    private Map<String, HikariDataSource> dataSourceMap;

    public void checkDatabaseConnection(Exception ex) {
        String tenantId = TenantContext.getTenantId();
        if(ex instanceof SQLException) {
            try {
                SpecificSchemaQueryExecutor executor = new SpecificSchemaQueryExecutor(
                        (HikariDataSource) dataSourceMap.get(tenantId));
                executor.queryInt("select 1 from dual");
            } catch (SQLException e) {
                dataSourceMap.remove(tenantId);
            }
        }
    }

    @ExceptionHandler(TenantNotSpecifiedException.class)
    public ResponseEntity<ErrorModel> tenantNotSpecifiedExceptionHandler(
            TenantNotSpecifiedException ex, WebRequest request) {
        checkDatabaseConnection(ex);
        ErrorModel errorModel = ErrorModel.builder()
                .errorCode(403)
                .descriptionEN("tenant is not specified!")
                .build();
        return ResponseEntity.status(errorModel.getErrorCode())
                .header("content-type", MediaType.APPLICATION_JSON_VALUE + "; charset=utf-8")
                .body(errorModel);
    }
}
