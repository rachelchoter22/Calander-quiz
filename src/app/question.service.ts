import { Component, Output, EventEmitter } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from 'src/app/question.model';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
    constructor(private httpClient: HttpClient) {

    }
    getAllQuestions(): Observable<QuestionModel[]> {
        return this.httpClient.get<QuestionModel[]>("../assets/data.json")
            .pipe(
                map((res: any) => res),
                catchError(this.handleError)
            );
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}
