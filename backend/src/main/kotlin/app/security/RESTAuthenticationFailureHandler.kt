package app.security

import app.errors.exceptions.AuthException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler
import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
open class RESTAuthenticationFailureHandler : SimpleUrlAuthenticationFailureHandler() {
    @Autowired
    lateinit var servletResponseErrorSender: ServletResponseErrorSender;

    @Throws(IOException::class, ServletException::class)
    override fun onAuthenticationFailure(request: HttpServletRequest, response: HttpServletResponse,
                                         exception: AuthenticationException) {
        servletResponseErrorSender.sendError(response, AuthException(exception.message))
    }
}