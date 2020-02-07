import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.nullValidator],
      password: [null, Validators.required]
    });
  }

  showInvalidFeedback(fieldPath: string) {
    const control = this.form.get(fieldPath);
    return !control.valid && control.touched;
  }

  sendForm(){
    
  }

}
