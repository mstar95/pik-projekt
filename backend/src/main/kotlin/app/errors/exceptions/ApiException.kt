package app.errors.exceptions

import org.springframework.http.HttpStatus

open class ApiException(message: String?) : Throwable(message) {
    open val code = "API_ERROR"
    open val status = HttpStatus.BAD_REQUEST
}