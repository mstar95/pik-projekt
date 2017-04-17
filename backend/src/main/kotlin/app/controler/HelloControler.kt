package app.controler


import app.errors.exceptions.ExampleException
import app.user.User
import app.user.UserRepository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


@RestController
class HelloControler {
    @Autowired
    lateinit var repository: UserRepository


    @GetMapping("/api/users")
    @ResponseBody
    fun getHello(): MutableIterable<User>? {
        repository.deleteAll()
        repository.save(User("Robert"))
        repository.save(User("Michal"))
        return repository.findAll()
    }

    @GetMapping("/api/error")
    @ResponseBody
    fun getError() {
        throw ExampleException("example")
    }
}
