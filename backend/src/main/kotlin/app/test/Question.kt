package app.test

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */
@Entity
@Table(name="\"Question\"")
data class Question (val title: String? = null,
                     @ManyToOne  @JoinColumn(name = "test_id") @JsonIgnore
                     val test: Test? = null,
                     @OneToMany(mappedBy = "question", cascade = arrayOf(CascadeType.ALL))
                     var answers:  List<Answer>? = null,
                     @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
