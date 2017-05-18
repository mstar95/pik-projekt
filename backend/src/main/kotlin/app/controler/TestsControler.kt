package app.controler

import app.test.Test
import app.test.TestRepository
import app.test.TestService
import app.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.annotation.PostConstruct

/**
 * Created by robeek on 16.05.17.
 */
@RestController
class TestsControler{
    @Autowired
    lateinit var testRepository: TestRepository
    @Autowired
    lateinit var userRepository: UserRepository
    @Autowired
    lateinit var testService: TestService
    @GetMapping("/api/tests")
    @ResponseBody
    fun getTests(): MutableIterable<Test>?  {
        return testRepository.findAll();
    }

    @PostMapping("/api/tests")
    fun saveTests(@RequestBody  test:Test)  {
        testRepository.save(test);
    }

    @GetMapping("/api/test/{id}")
    @ResponseBody
    fun getTestById(@PathVariable id:Long): Test? {
        return testRepository.findOne(id);
    }

    @PostMapping("/api/test/{id}")
    fun saveTestById(@PathVariable id:Long,  @RequestBody test: Test){
        var user=userRepository.findOne(id);
        user.tests= listOf(test)
        test.user=user
        userRepository.save(user)
    }

    @GetMapping("/api/user/{id}/tests")
    @ResponseBody
    fun getTestByUser(@PathVariable id:Long):  MutableIterable<Test>? {
        return testRepository.findByUserId(id);
    }

    @GetMapping("/api/default_test")
    @ResponseBody
    fun getTest():  Test? {
            return testRepository.findAll().lastOrNull();
    }

    @PostMapping("/api/verify_test")
    @ResponseBody
    fun verifyTest(@RequestBody test:Map<String,Int>):  Map<String,Boolean?> {
        return testService.verifyTest(test)
    }
}