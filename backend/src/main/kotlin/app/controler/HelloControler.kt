package app.controler


import app.entity.User
import app.repository.UserRepository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


/**
 * Created by robeek on 19.03.17.
 */
@RestController
class HelloControler {
    @Autowired
    lateinit var repository:UserRepository


    @GetMapping("/users")
    @ResponseBody
    fun getHello(): MutableIterable<User>? {
        repository.deleteAll()
        repository.save(User("Robert"))
        repository.save(User("Michal"))
        return repository.findAll()
    }
}