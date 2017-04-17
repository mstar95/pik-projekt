package app.errors

class ErrorResponse(ex: ApiException) {
    val message = ex.message;
    val error = ex.error;
}