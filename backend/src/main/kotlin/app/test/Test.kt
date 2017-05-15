package app.test

import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */

@Entity
@Table(name="\"Test\"")
data class Test (val title: String? = null,
                 val ownerId: Long? = null,
                 @OneToMany  @JoinColumn(name = "testId")
                 var questions: List<Question>? = null,
                 @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)


