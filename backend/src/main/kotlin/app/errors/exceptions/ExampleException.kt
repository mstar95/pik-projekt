package app.errors.exceptions

class ExampleException(message: String?) : ApiException(message) {
    override val code = "EXAMPLE_ERROR"
}