import { Component, Output, EventEmitter } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { QuestionService } from 'src/app/question.service';
import { retry } from 'rxjs/internal/operators/retry';
import { QuestionModel } from 'src/app/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'CommIT-quiz';
  questions: QuestionModel[];
  currentStep = 0;
  arrayCount: any;
  currentQuestion: QuestionModel;
  grade = 0;
  isLast: boolean;
  countArray: any;
  constructor(private httpClient: HttpClient, private questionService: QuestionService) {
    this.culcCount();
  }
  ngOnInit() {
    this.questionService.getAllQuestions().
      subscribe((data: QuestionModel[]) => {
        this.questions=data;  
        this.currentQuestion = this.questions[this.currentStep];
      });;
  }

  prev() {
    this.currentStep--;
    this.currentQuestion = this.questions[this.currentStep];
  }
  next() {
    this.currentStep == this.countArray ? this.culcGrage() : null;
    this.currentStep++;
    this.currentQuestion = this.questions[this.currentStep];
  }
  updateChoosen(i) {
    this.questions[this.currentStep].options.forEach(element => {
      element.isChoosen = false;
    });
    this.questions[this.currentStep].options[i].isChoosen = true;
  }
  culcGrage() {
    for (let i in this.questions) {
      this.grade += this.questions[i].options.filter(x => x.isRight == true && x.isChoosen == true).length * 10;
    }
    this.isLast = true;
  }
  culcCount() {
    for (let i in this.questions) {
      this.countArray = i;
    }
  }
}
