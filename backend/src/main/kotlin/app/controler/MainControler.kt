package app.controler


import app.errors.exceptions.ExampleException
import app.user.User
import app.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
class MainControler {
    @Autowired
    lateinit var repository: UserRepository


    @GetMapping("/api/users")
    @ResponseBody
    fun getHello(): MutableIterable<User>? {
        return repository.findAll()
    }

    @GetMapping("/api/error")
    @ResponseBody
    fun getError() {
        throw ExampleException("example")
    }

}
