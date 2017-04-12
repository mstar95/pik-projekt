package app.entity

import javax.persistence.*

/**
 * Created by robeek on 28.03.17.
 */
@Entity
@Table(name="\"User\"")
data class User (val name: String? = null, @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null)
