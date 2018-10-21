import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService} from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qs.toFormGroup(this.questions);
  }

   onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}