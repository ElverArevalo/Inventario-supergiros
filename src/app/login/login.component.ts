import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../modelos/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:  FormGroup;
  constructor(public fb: FormBuilder, public router: Router) { }


  ngOnInit() {
    this.crearFormularioLogin();  }

  crearFormularioLogin(){
    this.formLogin = this.fb.group({
      correo: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    console.log(this.formLogin.value);
    this.router.navigate(['/home']);
    
  }

}
