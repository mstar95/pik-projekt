package app.result

import org.springframework.data.repository.CrudRepository

/**
 * Created by michal on 23/05/2017.
 */

interface ResultRepository : CrudRepository<Result, Long> {
    fun findByUserId(userId:Long?): MutableIterable<Result>
}

interface QuestionResultRepository : CrudRepository<QuestionResult, Long> {
}