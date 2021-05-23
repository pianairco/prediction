package ir.piana.business.prediction.common.cfg;

import ir.piana.business.prediction.common.data.cache.AppDataCache;
import ir.piana.business.prediction.common.data.cache.DataSourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Profile("module-application")
public class ModulesWebMvcConfigure implements WebMvcConfigurer {
    @Autowired
    private AppDataCache appDataCache;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
//                .allowCredentials(true)
                .allowCredentials(false)
                .allowedMethods("*")
                .allowedOrigins("*");
//                .allowedOrigins("https://piana.ir", "https://localhost");
    }

    public ResourceHandlerRegistryProvider resourceHandlerRegistryProvider = new ResourceHandlerRegistryProvider();

    @Bean
    public ResourceHandlerRegistryProvider getResourceHandlerRegistryProvider() {
        return resourceHandlerRegistryProvider;
    }
}
