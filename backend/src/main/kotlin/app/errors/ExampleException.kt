package app.errors

import org.springframework.http.HttpStatus

class ExampleException(message: String?) : ApiException(message) {
    override val error = "EXAMPLE_ERROR"
}