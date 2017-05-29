package app.user

import app.test.Test
import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 * Created by robeek on 28.03.17.
 */
@Entity
@Table(name="\"User\"")
data class User (val username: String? = null,
                 @JsonIgnore
                 val password: String? = null,
                 val authority: String? = null,
                 @OneToMany(mappedBy = "user", cascade = arrayOf(CascadeType.ALL))
                 var tests: List<Test>? = null,
                 @Id
                 @GeneratedValue(strategy = GenerationType.AUTO)
                 val id: Long? = null)
