package app.security

import app.errors.exceptions.AuthException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.AuthenticationEntryPoint
import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
open class RESTAuthenticationEntryPoint : AuthenticationEntryPoint {
    @Autowired
    lateinit var servletResponseErrorSender: ServletResponseErrorSender;

    @Throws(IOException::class, ServletException::class)
    override fun commence(request: HttpServletRequest, response: HttpServletResponse, authException: AuthenticationException) {
        servletResponseErrorSender.sendError(response, AuthException(authException.message))
    }
}