package app.test

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 * Created by michal on 15/05/2017.
 */
@Entity
@Table(name="\"Answer\"")
data class Answer (val title: String? = null,
                   @ManyToOne  @JoinColumn(name = "question_id")
                   @JsonIgnore
                   val question: Question? = null,
                   val isRightAnser: Boolean? = false,
                   @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)