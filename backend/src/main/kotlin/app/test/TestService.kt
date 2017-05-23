package app.test

import app.result.QuestionResult
import app.result.Result
import app.result.ResultRepository
import app.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service

/**
 * Created by michal on 18/05/2017.
 */
@Service
class TestService {
    @Autowired
    lateinit var answerRepository: AnswerRepository
    lateinit var userRepository: UserRepository
    lateinit var testRepository: TestRepository
    lateinit var questionRepository: QuestionRepository
    lateinit var resultRepository: ResultRepository
    fun verifyTest(solvedTest : Map<String,Int>,id : Long) :HashMap<String,Boolean?>{
        var verifiedTest = hashMapOf<String,Boolean?>()
        var result = Result()
        result.test = testRepository.findOne(id)
        val userName  = SecurityContextHolder.getContext().getAuthentication().name
        result.user = userRepository.findByUsername(userName)
        var questions :MutableList<QuestionResult> = mutableListOf()
        for((k, v)in solvedTest) {
            var answer = answerRepository.findOne(v.toLong())
            var question = questionRepository.findOne(k.toLong())
            var questionResult = QuestionResult(question,answer)
            questions.add(questionResult)
            verifiedTest[k] = answer!!.isRightAnser
        }
        result.questions = questions
        resultRepository.save(result)
        return verifiedTest
    }

}

