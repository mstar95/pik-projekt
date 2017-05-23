package app.security

import app.user.UserRepository
import org.junit.Test
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.junit.runner.RunWith
import org.mockito.Mockito
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


/**
 * Created by michal on 18/05/2017.
 */
@RunWith(SpringJUnit4ClassRunner::class)
@ContextConfiguration(classes = arrayOf(UserRepositoryConfig::class))
class SecurityControllerTest {

    @Autowired
    internal var userRepository: UserRepository? = null

    //@Test
    @Throws(Exception::class)
    fun testMyEvents() {
        val auth = UsernamePasswordAuthenticationToken("user", "password")
        val securityContext = SecurityContextHolder.getContext()
        securityContext.authentication = auth

        userRepository!!.findByUsername("user")
        SecurityContextHolder.clearContext()
    }

    //@Test(expected = AuthenticationCredentialsNotFoundException::class)
    @Throws(Exception::class)
    fun testForbiddenEvents() {
        userRepository!!.findByUsername("user")
    }

    //@Test(expected = AccessDeniedException::class)
    @Throws(Exception::class)
    fun testWrongUserEvents() {
        val auth = UsernamePasswordAuthenticationToken("user2@example.com", "user2")
        val securityContext = SecurityContextHolder.getContext()
        securityContext.authentication = auth

        userRepository!!.findByUsername("user")
        SecurityContextHolder.clearContext()
    }
}

@Configuration
class UserRepositoryConfig {

    // this bean will be injected into the OrderServiceTest class
    @Bean
    fun userRepository(): UserRepository {
        return Mockito.mock(UserRepository::class.java)
    }
}