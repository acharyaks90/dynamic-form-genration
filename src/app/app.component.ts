import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  questions :any[];

  constructor(private qs: QuestionService){
    this.questions = this.qs.getQuestions()
  }

}
