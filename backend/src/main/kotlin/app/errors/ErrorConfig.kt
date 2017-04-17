package app.errors

import org.springframework.boot.autoconfigure.web.DefaultErrorAttributes
import org.springframework.boot.autoconfigure.web.ErrorAttributes
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.context.request.RequestAttributes

@Configuration
class ErrorConfig {

    /**
     * This is required because not all errors are caught by ControllerAdvice.
     * It overrides default Spring Boot behaviour.
     */
    @Bean
    fun errorAttributes(): ErrorAttributes {
        return object : DefaultErrorAttributes() {
            override fun getErrorAttributes(requestAttributes: RequestAttributes, includeStackTrace: Boolean): Map<String, Any?> {
                val message = super.getErrorAttributes(requestAttributes, includeStackTrace)["message"]
                if (message is String) {
                    return ErrorResponse("UNKNOWN_ERROR", message).asMap()
                } else {
                    return ErrorResponse("UNKNOWN_ERROR", null).asMap()
                }
            }

        }
    }
}