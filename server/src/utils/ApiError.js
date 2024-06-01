
class ApiError extends Error {
    constructor(
        statusCode,
        message,
        stack = "",
        errror=[]
        ){
        super(message);
        this.statusCode = statusCode;   
        this.message = message;
        this.errror = errror;
        this.success = false;


        if(stack) {
            this.stack = stack    
            
        }

        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export default ApiError;