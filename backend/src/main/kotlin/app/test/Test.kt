package app.test

import app.result.Result
import app.user.User
import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */

@Entity
@Table(name="\"Test\"")
data class Test (val title: String? = null,
                 @ManyToOne  @JoinColumn(name = "user_id")  @JsonIgnore
                 var user: User? = null,
                 @OneToMany(mappedBy = "test", cascade = arrayOf(CascadeType.ALL))  @JsonIgnore
                 var result:  MutableList<Result>? = null,
                 @OneToMany(mappedBy = "test", cascade = arrayOf(CascadeType.ALL))
                 var questions: List<Question>? =null,
                 @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)


