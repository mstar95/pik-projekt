package app.controler


import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.Resource
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody


@Controller
class StaticController {
    @Value("classpath:static/index.html")
    lateinit var index: Resource;

    @RequestMapping(value = "/app/**")
    @ResponseBody
    fun root(): String {
        return index.file.reader().readText();
    }

}
