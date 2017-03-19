package controler


import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


/**
 * Created by robeek on 19.03.17.
 */
@RestController
class HelloControler {

    @GetMapping("/")
    @ResponseBody
    open fun getHello(): String {
        return "Hello world!"
    }
}