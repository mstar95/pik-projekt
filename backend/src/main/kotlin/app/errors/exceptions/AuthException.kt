package app.errors.exceptions

class AuthException(message: String?) : ApiException(message) {
    override val code = "AUTHENTICATION_ERROR"
}