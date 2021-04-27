import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user : User
  natIdValidator : boolean = true;
  nameValidator : boolean = true;

  constructor(private userService: UserService, private toastr: ToastrService, private activateRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById() {
    this.activateRoute.params.subscribe(res => {
      this.userService.findById(res.id).subscribe(params =>{
        this.user = params;
        console.log(this.user);
      })
    });
  }

  editUser() {
    this.nameValidator = !this.user.name ? this.nameValidator = false : this.nameValidator = true;
    this.natIdValidator = !this.user.natId ? this.natIdValidator = false : this.natIdValidator = true;

    if(this.nameValidator && this.natIdValidator){
      this.userService.update(this.user).subscribe(res =>{
      });
      this.toastr.success("Vous avez bien mis à jour votre profile, vous allez être redirigé", "Bonjour "+ this.user.name);
      setTimeout(() => {this.router.navigate(['user']);},3000);
    }
    else{
      this.toastr.error("Le formulaire n'est pas valide, recommencez s'il vous plait", "Erreur de mise à jour");
  
    }
  }
}
