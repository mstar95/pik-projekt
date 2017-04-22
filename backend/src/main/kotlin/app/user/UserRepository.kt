package app.user

import org.springframework.data.repository.CrudRepository

/**
 * Created by robeek on 28.03.17.
 */

interface UserRepository : CrudRepository<User, Long> {
    fun findByUsername(username: String): User
}