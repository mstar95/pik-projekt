package app.security

import app.errors.ErrorResponse
import app.errors.exceptions.ApiException
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletResponse

@Component
class ServletResponseErrorSender {
    @Autowired
    lateinit var mapper: ObjectMapper

    fun sendError(response: HttpServletResponse, ex: ApiException) {
        response.status = ex.status.value()
        response.contentType = "application/json;charset=UTF-8"
        response.writer.write(mapper.writeValueAsString(ErrorResponse(ex)))
    }
}
