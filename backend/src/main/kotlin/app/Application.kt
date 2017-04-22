package app

import app.user.User
import app.user.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class Application {
    @Bean
    open fun init(repository: UserRepository) = CommandLineRunner {
       if(repository.findByUsername("user") == null)
           repository.save(User("user","password"))
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
