package app.controler

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping



/**
 * Created by robeek on 26.04.17.
 */
@Controller
class IndexController {

    @RequestMapping("/")
    fun index(): String {
        return "index.html"
    }

    @RequestMapping(value = *arrayOf("/login/**","/tests/**","/home/**"))
    fun forward(): String {
        return "forward:/"
    }
}