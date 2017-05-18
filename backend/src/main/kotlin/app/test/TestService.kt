package app.test

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

/**
 * Created by michal on 18/05/2017.
 */
@Service
class TestService {
    @Autowired
    lateinit var answerRepository: AnswerRepository
    fun verifyTest(solvedTest:Map<String,Int>) :HashMap<String,Boolean?>{
        var verifiedTest = hashMapOf<String,Boolean?>()
        for((k, v)in solvedTest) {
            verifiedTest[k] = answerRepository.findOne(v.toLong())!!.isRightAnser
        }
        return verifiedTest
    }
}

