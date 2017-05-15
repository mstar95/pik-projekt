package app.test

import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */
@Entity
@Table(name="\"Question\"")
data class Question (val title: String? = null,
                     @ManyToOne  @JoinColumn(name = "test")
                     val test: Test? = null,
                 //    @OneToMany(mappedBy = "question_d", cascade = arrayOf(CascadeType.ALL))
                 //    val answers:  List<Answer>? = null,
                     @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
