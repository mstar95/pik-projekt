package app.repository

import app.entity.User
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository

/**
 * Created by robeek on 28.03.17.
 */

interface UserRepository : CrudRepository<User, Long> {
    fun findByName(name: String): List<User>
}