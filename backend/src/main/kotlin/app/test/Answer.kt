package app.test

import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */
@Entity
@Table(name="\"Test\"")
data class Answer (val title: String? = null,
                   val testId: Long? = null,
                   val isRightAnser: Boolean? = false,
                   @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)