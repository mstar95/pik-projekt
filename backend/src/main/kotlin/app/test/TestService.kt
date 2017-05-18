package app.test

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

/**
 * Created by michal on 18/05/2017.
 */
@Service
class TestService {
    @Autowired
    lateinit var testRepository: TestRepository
    fun verifyTest(solvedTest:Map<String,Int>) :HashMap<String,Boolean?>{
        val answerTest =  testRepository.findAll().lastOrNull()
        val verifiedTest = hashMapOf<String,Boolean?>()
        for((k, v)in solvedTest) {
            verifiedTest[k] = answerTest!!.questions!![k.toInt()].answers!![v].isRightAnser
        }
        return verifiedTest
    }
}

