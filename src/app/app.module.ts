import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuestionControlService, QuestionService]
})
export class AppModule { }
