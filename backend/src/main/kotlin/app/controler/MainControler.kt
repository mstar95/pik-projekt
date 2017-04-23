package app.controler


import app.errors.exceptions.ExampleException
import app.user.User
import app.user.UserRepository
import org.apache.tomcat.util.http.fileupload.IOUtils

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.Resource
import org.springframework.ui.Model
import org.springframework.util.FileCopyUtils
import org.springframework.web.bind.annotation.*
import java.io.InputStream



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

    @Value("classpath:static/index.html")
    lateinit var sampleHtml: Resource;
    @RequestMapping(value = *arrayOf("/","/login/**","/tests/**","/home/**"))
    fun getIndex( ):String {
        return sampleHtml.file.reader().readText();
    }


}
