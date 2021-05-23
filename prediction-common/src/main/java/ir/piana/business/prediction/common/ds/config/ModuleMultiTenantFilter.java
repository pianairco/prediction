package ir.piana.business.prediction.common.ds.config;

import ir.piana.business.prediction.common.data.cache.AppDataCache;
import ir.piana.business.prediction.common.data.cache.DataSourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.annotation.PostConstruct;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE + 1)
@Profile("module-application")
public class ModuleMultiTenantFilter extends OncePerRequestFilter {
    @Autowired
    private DataSourceService dataSourceService;

    @Value("${debug.tenant.if-null:piana.ir}")
    private String ifTenantNull;

    @Autowired
    private AppDataCache appDataCache;

    @PostConstruct
    public void init() {
    }

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws IOException, ServletException {
        String hostString = request.getHeader("Host") != null
                && !request.getHeader("Host").startsWith("localhost") ?
                request.getHeader("Host") : request.getHeader("dsCode") != null ?
                request.getHeader("dsCode") : null;
        if(hostString != null && hostString.contains(":"))
            hostString = hostString.substring(0, hostString.indexOf(":"));
        String host = hostString == null ?
                (ifTenantNull != null && !ifTenantNull.isEmpty() ? ifTenantNull : null) : hostString;
        request.setAttribute("tenant", host);
        request.setAttribute("host", host);
        request.setAttribute("resource-prefix", "prediction-ui/");

        /*if(appDataCache.getDomain().equalsIgnoreCase(host)) {
            request.setAttribute("resource-prefix", "multishop-cp/");
        } else {
            request.setAttribute("resource-prefix", "multishop-ui/");
        }
        if (host == null) {
            throw new TenantNotSpecifiedException();
        } else if (host.equalsIgnoreCase(appDataCache.getDomain())) {
            TenantContext.setTenantId(host);
            request.setAttribute("tenantId", host);
            filterChain.doFilter(request, response);
            return;
        } else if (request.getServletPath().startsWith("/login") || request.getServletPath().startsWith("/h2")) {
            TenantContext.setTenantId(appDataCache.getDomain());
            request.setAttribute("tenantId", appDataCache.getDomain());
            request.setAttribute("host", appDataCache.getDomain());
            filterChain.doFilter(request, response);
            return;
        } else if(dataSourceService.checkAndAddDatasource(host)) {
            TenantContext.setTenantId(host);
            request.setAttribute("tenantId", host);
            request.setAttribute("host", host);
            filterChain.doFilter(request, response);
            return;
        } else {
            throw new TenantNotSpecifiedException();
        }*/
    }

}
