import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Request } from '../utils/request';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public showModal = false;

  constructor(private fb: FormBuilder, private request: Request) {
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
        Validators.nullValidator
      ])]
    });
  }

  ngOnInit() {
  }

  addCredit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.request.post('http://localhost:64343/api/credits', data)
        .then(result => {
          if (result) {
            this.clearInput();
            console.log(1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  clearInput() {
    this.form.get('name').setValue('');
  }

}
