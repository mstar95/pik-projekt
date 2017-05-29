package app.controler

import app.result.Result
import app.result.ResultRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.ResponseBody

class ResultController {
    @Autowired
    lateinit var resultRepository: ResultRepository

    @PreAuthorize(value="hasRole('ADMIN')")
    @GetMapping("/api/user/{id}/results")
    @ResponseBody
    fun getResultsByUser(@PathVariable id:Long): MutableIterable<Result>? {
        return resultRepository.findByUserId(id)
    }
}
