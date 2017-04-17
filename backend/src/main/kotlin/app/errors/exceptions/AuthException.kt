package app.errors.exceptions

import org.springframework.http.HttpStatus

class AuthException(message: String?) : ApiException(message) {
    override val code = "AUTHENTICATION_ERROR"
    override val status = HttpStatus.UNAUTHORIZED
}