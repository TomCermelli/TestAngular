
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  emailValidator: boolean = true;

  constructor(private loginService: LoginServiceService, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.emailValidator = true;
    this.loginService.findByEmail(this.email).subscribe(res => {
      if (res.length) {
        localStorage.setItem("token", res[0].email);
        this.toastr.success("Vous allez être rediriger dans quelque seconde", "Vous êtes connecté " +res[0].name)
        setTimeout(() => { this.router.navigate(['users']); }, 3000);
      }
      else {
        this.toastr.error("Votre email ou votre mot de passe sont incorrectes", "Login invalide")
        this.emailValidator = false
      }
    });
  }
}

