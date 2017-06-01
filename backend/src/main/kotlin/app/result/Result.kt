package app.result

import app.test.Test
import app.user.User
import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 * Created by michal on 23/05/2017.
 */

@Entity
@Table(name="\"Result\"")
data class Result ( @ManyToOne @JoinColumn(name = "test_id")
                    var test: Test? = null,
                    @ManyToOne @JoinColumn(name = "user_id")  @JsonIgnore
                    var user: User? = null,
                    @OneToMany(mappedBy = "result", cascade = arrayOf(CascadeType.ALL))
                    var questions: List<QuestionResult>? = null,
                    var result : Int? = null,
                    @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)