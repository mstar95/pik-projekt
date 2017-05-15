package app.test

import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */
@Entity
@Table(name="\"Test\"")
data class Question (val title: String? = null,
                     val testId: Long? = null,
                     @OneToMany  @JoinColumn(name = "questionId") val answers:  List<Answer>? = null,
                     @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
