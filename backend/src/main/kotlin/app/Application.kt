package app

import app.test.Question
import app.test.Test
import app.test.TestRepository
import app.user.User
import app.user.UserRepository
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class Application {
    @Bean
    open fun init(userRepository: UserRepository, testRepository: TestRepository) = CommandLineRunner { var logger = LoggerFactory.getLogger(Application::class.java)
       if(userRepository.findByUsername("user") == null)
           userRepository.save(User("user","password"))
        testRepository.deleteAll()
        var test = Test("Test1", userRepository.findByUsername("user").id)
        var questions = listOf(
            Question("Question 1", test),
            Question("Question 2", test),
            Question("Question 3", test)
        )
        test.questions = questions;

        testRepository.save(test)
        for (test in testRepository.findAll()) {
            logger.info(test.toString())
        }
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
