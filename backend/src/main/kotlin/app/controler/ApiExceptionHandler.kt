package app.controler

import app.errors.ApiException
import app.errors.ErrorResponse
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
}