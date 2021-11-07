import Joi from "joi"
import joiCustomErrors from "../config/joiCustomErrors"

const JoiLib = Joi.defaults( schema => {
    return schema.options( {
        // Do not abort early by default, thats my primary use case.
        abortEarly: false,
        messages: joiCustomErrors
    } )
} )

export default JoiLib