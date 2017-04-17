package app.errors

import app.errors.exceptions.ApiException

class ErrorResponse(code:String, message:String?) {
    val code = code;
    val message = message;

    constructor(ex: ApiException): this(ex.code, ex.message) {}

    fun asMap(): Map<String, Any?> {
        return hashMapOf(
                "code" to code,
                "message" to message
        )
    }
}