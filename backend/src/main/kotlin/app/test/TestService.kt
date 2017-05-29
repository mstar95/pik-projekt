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
    @Autowired
    lateinit var userRepository: UserRepository
    @Autowired
    lateinit var testRepository: TestRepository
    @Autowired
    lateinit var questionRepository: QuestionRepository
    @Autowired
    lateinit var resultRepository: ResultRepository
    fun verifyTest(solvedTest : Map<String,Int>,id : Long) :HashMap<String,Boolean?>{
        val verifiedTest = hashMapOf<String,Boolean?>()
        val result = Result()
        val test = testRepository.findAll().lastOrNull()
        result.test = test
        val userName  = SecurityContextHolder.getContext().getAuthentication().name
        result.user = userRepository.findByUsername(userName)
        val questions :MutableList<QuestionResult> = mutableListOf()
        for((k, v)in solvedTest) {
            val answer = answerRepository.findOne(v.toLong())
            val question = questionRepository.findOne(k.toLong())
            val questionResult = QuestionResult(question,answer)
            questions.add(questionResult)
            verifiedTest[k] = answer!!.isRightAnser
        }
        result.questions = questions
        resultRepository.save(result)
        return verifiedTest
    }
}

