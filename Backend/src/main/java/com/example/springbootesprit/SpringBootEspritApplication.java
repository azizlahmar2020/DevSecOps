package com.example.springbootesprit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SpringBootEspritApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootEspritApplication.class, args);
    }

}
