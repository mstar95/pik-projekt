package app

import app.test.Answer
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
        userRepository.deleteAll()

        var user=User("user", "password");
//        if(userRepository.findByUsername("user") == null) {
//            userRepository.save(user)
//        }
        var test = Test(title = "Test1")
        test.user=user;


        var questions = listOf(
            Question("Question 1", test),
            Question("Question 2", test),
            Question("Question 3", test)
        )
        var answers= listOf(Answer(title = "Siema", question = questions[0]))
        questions[0].answers= answers
        test.questions = questions;
        user.tests= listOf(test)
        userRepository.save(user)
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
