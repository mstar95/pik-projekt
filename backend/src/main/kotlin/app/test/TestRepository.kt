package app.test

import app.user.User
import org.springframework.data.repository.CrudRepository

/**
 * Created by michal on 15/05/2017.
 */

interface TestRepository : CrudRepository<Test, Long> {
    fun findByTitle(titles: String): Test
    fun findByUser(user: User): MutableIterable<Test>
    fun findByUserId(userId:Long): MutableIterable<Test>
}
