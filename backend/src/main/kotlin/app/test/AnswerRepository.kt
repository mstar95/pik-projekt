package app.test

import app.user.User
import org.springframework.data.repository.CrudRepository

/**
 * Created by michal on 19/05/2017.
 */

interface AnswerRepository : CrudRepository<Answer, Long> {
}
