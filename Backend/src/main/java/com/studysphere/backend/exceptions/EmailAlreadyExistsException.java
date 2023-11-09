package com.studysphere.backend.exceptions;

import org.springframework.http.HttpStatus;

public class EmailAlreadyExistsException extends Throwable {
    private HttpStatus status;
    private String message;

    public EmailAlreadyExistsException(HttpStatus status, String message){
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
