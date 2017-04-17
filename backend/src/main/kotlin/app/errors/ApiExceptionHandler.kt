package app.errors

import app.errors.exceptions.ApiException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody

@ControllerAdvice
class ApiExceptionHandler {

    @ExceptionHandler(ApiException::class)
    @ResponseBody
    fun handleApiException(ex: ApiException): ResponseEntity<ErrorResponse> {
        return ResponseEntity(ErrorResponse(ex), ex.status)
    }

    @ExceptionHandler(Exception::class)
    @ResponseBody
    fun handleGenericException(ex: Exception): ResponseEntity<ErrorResponse> {
        return ResponseEntity(ErrorResponse("API_ERROR", ex.message), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}