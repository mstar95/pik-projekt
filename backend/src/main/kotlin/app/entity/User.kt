package app.entity

import javax.persistence.*

/**
 * Created by robeek on 28.03.17.
 */
@Entity
@Table(name="\"User\"")
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public var id = 0
    public var  name :String = ""
    constructor(){

    }
    constructor(name : String){
        this.name=name
    }
}