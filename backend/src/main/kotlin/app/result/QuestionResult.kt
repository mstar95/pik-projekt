package app.result

import app.test.Question
import com.fasterxml.jackson.annotation.JsonIgnore
import app.test.Answer
import javax.persistence.*


@Entity
@Table(name="\"Question_result\"")
data class QuestionResult(@ManyToOne  @JoinColumn(name = "question_id") @JsonIgnore
                          val question: Question? = null,
                          @ManyToOne  @JoinColumn(name = "answer_id") @JsonIgnore
                          var answer: Answer? = null,
                          @ManyToOne  @JoinColumn(name = "test_id") @JsonIgnore
                          val result: Result? = null,
                          @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
