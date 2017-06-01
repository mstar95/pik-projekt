package app

import app.result.QuestionResultRepository
import app.result.ResultRepository
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
    open fun init(userRepository: UserRepository, testRepository: TestRepository,resultRepository: ResultRepository,questionResultRepository: QuestionResultRepository) = CommandLineRunner { var logger = LoggerFactory.getLogger(Application::class.java)
        questionResultRepository.deleteAll()
        resultRepository.deleteAll()
        userRepository.deleteAll()
        var user=User("user", "password","USER")
        var admin=User("admin", "password","ADMIN")
//        if(userRepository.findByUsername("user") == null) {
//            userRepository.save(user)
//        }
        var test = Test(title = "Test1")
        test.result = mutableListOf()
        test.user=user


        var questions = listOf(
            Question("Question A", test),
            Question("Question B", test),
            Question("Question C", test)
        )
        var answers1= listOf(
                Answer(title = "Opcja A1", question = questions[0],isRightAnser = true),
                Answer(title = "Opcja A2", question = questions[0]),
                Answer(title = "Opcja A3", question = questions[0]),
                Answer(title = "Opcja A4", question = questions[0])
        )
        questions[0].answers= answers1

        var answers2= listOf(
                Answer(title = "Opcja B1", question = questions[1]),
                Answer(title = "Opcja B2", question = questions[1],isRightAnser = true),
                Answer(title = "Opcja B3", question = questions[1]),
                Answer(title = "Opcja B4", question = questions[1])
        )
        questions[1].answers= answers2

        var answers3= listOf(
                Answer(title = "Opcja C1", question = questions[2]),
                Answer(title = "Opcja C2", question = questions[2]),
                Answer(title = "Opcja C3", question = questions[2],isRightAnser = true),
                Answer(title = "Opcja C4", question = questions[2])
        )
        questions[2].answers= answers3
        
        
        test.questions = questions;
        user.tests= listOf(test)
        userRepository.save(user)
        userRepository.save(admin)
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
