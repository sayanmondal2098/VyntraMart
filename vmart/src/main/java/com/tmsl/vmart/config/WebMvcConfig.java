package com.tmsl.vmart.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


@Configuration
@ComponentScan({"com.tmsl.vmart.controller"})
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

	/*
	 * Define the bean for view resolver so that it can be used to resolve the JSP
	 * files which are existing in /WEB-INF/views folder. A ViewResolver is capable
	 * of mapping logical view names to actual views, such as a JSP or a HTML page.
	 */
	
	@Bean
	public InternalResourceViewResolver internalResourceViewResolver()
	{
		InternalResourceViewResolver ivr=new InternalResourceViewResolver();
		ivr.setPrefix("/WEB-INF/views");
		ivr.setSuffix(".jsp");
		return ivr;
	}

}
