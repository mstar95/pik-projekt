package app.controler


import app.errors.exceptions.ExampleException
import app.test.Test
import app.test.TestRepository
import app.user.User
import app.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
class MainControler {
    @Autowired
    lateinit var userRepository: UserRepository

    @GetMapping("/api/isAdmin")
    @ResponseBody
    fun getIsAdmin(): Boolean {
        val auth = SecurityContextHolder.getContext().authentication.authorities
        return auth.contains(SimpleGrantedAuthority("ADMIN"))
    }

    @GetMapping("/api/users")
    @ResponseBody
    fun getHello(): List<User>? {
        val users = userRepository.findAll()
        return users.filter { user -> user.authority.equals("USER") }
    }

    @GetMapping("/api/error")
    @ResponseBody
    fun getError() {
        throw ExampleException("example")
    }
}
