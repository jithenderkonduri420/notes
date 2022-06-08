import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });

  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(): any {
    this.submitted = true;
    if(this.registerForm.invalid) return false;

    this.api.register(this.registerForm.value).subscribe(res => {
      alert('test');
    });
  //  console.log(this.registerForm.value);
  }

}
