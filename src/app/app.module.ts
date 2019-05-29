import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component'
import { NextPrevComponent } from './next-prev/next-prev.component'
import { QuestionService } from 'src/app/question.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalanderService } from 'src/app/calander/calander.service';
import { CalanderComponent } from 'src/app/calander/calander.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    NextPrevComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [QuestionService,CalanderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
