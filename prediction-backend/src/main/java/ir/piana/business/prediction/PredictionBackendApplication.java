package ir.piana.business.prediction;

import ir.piana.business.prediction.common.cfg.StaticResourcePropertiesModel;
import ir.piana.business.prediction.common.dev.sqlrest.ServiceProperties;
import ir.piana.business.prediction.common.dev.uploadrest.StorageProperties;
import ir.piana.business.prediction.common.dev.service.sql.SqlProperties;
import ir.piana.business.prediction.common.dev.service.store.StoreMenuProperties;
import ir.piana.business.prediction.common.util.LowerCaseKeySerializer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication(exclude = {
		DataSourceAutoConfiguration.class,
		HibernateJpaAutoConfiguration.class,
		DataSourceTransactionManagerAutoConfiguration.class })
@EnableConfigurationProperties({
		ServiceProperties.class,
		StorageProperties.class,
		SqlProperties.class,
		StaticResourcePropertiesModel.class,
		StoreMenuProperties.class
})
public class PredictionBackendApplication {
//	@Bean("spring-resource-chain-cache")
//	public String cacheName() {
//		return "piana";
//	}

//	@Bean("piana-cache")
//	public Cache cache() {
//		return new ConcurrentMapCache("spring-resource-chain-cache",
//				new ConcurrentHashMap<>(), true);
//	}



//	@Override
//	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//		return application.sources(ShopBackendApplication.class);
//	}

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(PredictionBackendApplication.class);
		app.setAdditionalProfiles("production");
		app.run(args);
//		SpringApplication.run(ShopBackendApplication.class, args);
	}

}
