package app.errors

import org.springframework.http.HttpStatus

open class ApiException(message: String?) : Throwable(message) {
    open val error = "API_ERROR"
    open val status = HttpStatus.BAD_REQUEST
}