import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formGroup=new  FormGroup({
 usuario: new FormControl(""),
    contrasenia: new FormControl(''),
})
    usuario = {
  email: '',
  password: '',
}
//  })
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.usuario);
  }
   ingrese(){
     console.log(this.usuario);
     const  { email, password } = this.usuario;
     this.authService.login(email,password).then(res =>{
     console.log("Se registro: ",res);
    })
  }
   
    
  
  IngreseConGoogle(){
    
    const  { email, password } = this.usuario;
    this.authService.loginWithGoogle(email,password).then(res =>{
      console.log("Se registro: ",res);
    })

    
  }
}
