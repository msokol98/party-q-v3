package io.sokol.partyq.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/members")
            .allowedOrigins("*")
            .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
    }
}