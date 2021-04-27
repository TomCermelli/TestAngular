import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  constructor(private userService : UserService, private toastr: ToastrService , private router : Router) { }

  ngOnInit(): void {
  }
  
  saveUser(form : NgForm){
    if(form.valid){
      if(!form.value.isActive) {
        form.value.isActive = false;
      }
      console.log("form", form.value);
      this.userService.create(form.value).subscribe(res => {
        
      });
      this.toastr.success("Vous vous êtes bien enregistré, vous allez être redirigé", "Bonjour "+ form.value.name);
      setTimeout(() => {this.router.navigate(['user']);},3000);
    }
    else {
      this.toastr.error("Le formulaire n'est pas correctement remplis", "Erreur")
    }
  }
}
