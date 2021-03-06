import { Injectable } from '@angular/core';
import { QuestionDropdown } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './textbox-question';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {
 
    let questions: QuestionBase<any>[] = [
 
      new QuestionDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
 
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }


}