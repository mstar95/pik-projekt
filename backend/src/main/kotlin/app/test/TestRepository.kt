package app.test

import org.springframework.data.repository.CrudRepository

/**
 * Created by michal on 15/05/2017.
 */

interface TestRepository : CrudRepository<Test, Long> {
    fun findByTitle(titles: String): Test
}
