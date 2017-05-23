package app.test

import org.springframework.data.repository.CrudRepository

/**
 * Created by michal on 19/05/2017.
 */

interface QuestionRepository : CrudRepository<Question, Long> {
}
