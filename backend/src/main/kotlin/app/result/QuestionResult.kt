package app.result

import app.test.Question
import com.fasterxml.jackson.annotation.JsonIgnore
import app.test.Answer
import javax.persistence.*


@Entity
@Table(name="\"Question_result\"")
data class QuestionResult(@ManyToOne  @JoinColumn(name = "question_id")
                          val question: Question? = null,
                          @ManyToOne  @JoinColumn(name = "answer_id")
                          var answer: Answer? = null,
                          @ManyToOne  @JoinColumn(name = "result_id") @JsonIgnore
                          val result: Result? = null,
                          @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
