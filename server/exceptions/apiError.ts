import {ValidationError} from "express-validator";

class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors: ValidationError[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthoraizedError() {
        return new ApiError(401, "Пользователь не авторизован")
    }

    static BadRequest(message: string, errors: ValidationError[] = []) {
        return new ApiError(400, message, errors)
    }

}

export default ApiError
