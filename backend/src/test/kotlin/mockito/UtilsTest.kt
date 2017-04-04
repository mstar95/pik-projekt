package mockito

import org.junit.Assert.assertEquals
import org.junit.Test
import org.mockito.Mockito.`when`
import org.mockito.Mockito.mock

/**
 * Created by michal on 27/03/2017.
 */
class UtilsTest {
    @Test
    @Throws(Exception::class)
    fun testMockedHelloWorld() {
        val mockedUtils = mock(Utils::class.java)
        `when`(mockedUtils.getHelloWorld()).thenReturn("Hello mocked world!")
        val helloWorld = mockedUtils.getHelloWorld()
        assertEquals("Hello mocked world!", helloWorld)
    }
}