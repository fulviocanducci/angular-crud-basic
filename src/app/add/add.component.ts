import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Request } from '../utils/request';
import { DateTime } from '../utils/datetime';
import { DatetimeValidation } from '../utils/datetime.validation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public showModal = false;

  constructor(
      private fb: FormBuilder,
      private request: Request,
      private datetime: DateTime
    ) {
    this.form = this.fb.group({
      id: [0, Validators.compose([
        Validators.required
      ])],
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      status: [true, Validators.compose([
        Validators.required
      ])],
      created: ['', Validators.compose([
        DatetimeValidation.dateValid
      ])]
    });
  }

  ngOnInit() {

  }

  addCredit() {
    if (this.form.valid) {
      const data = this.form.value;
      data.created = this.datetime.formatFromTo(data.created, 'DD/MM/YYYY', 'YYYY-MM-DD');
      this.request.post('credits', data)
        .then(result => {
          if (result) {
            this.clearInput();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  clearInput() {
    this.form.reset();
    this.form.get('id').setValue(0);
    this.form.get('status').setValue(true);
  }

}
