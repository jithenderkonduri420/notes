import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });

  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit(): any {
    this.submitted = true;
    if(this.loginForm.invalid) return false;
    if(this.loginForm.value.email == 'admin@yopmail.com' && this.loginForm.value.password == '123') {
      localStorage.setItem('user',JSON.stringify({'isAdmin': true}));
      this.router.navigate(['dashboard'])
    } else if(this.loginForm.value.email == 'user@yopmail.com' && this.loginForm.value.password == '123') {
      localStorage.setItem('user',JSON.stringify({'isAdmin': false}));
      this.router.navigate(['dashboard'])
    } else {
      alert('invalid credentioals');
    }
    // this.api.register(this.loginForm.value).subscribe(res => {
    //   alert('test');
    // });
  //  console.log(this.registerForm.value);
  }

}
