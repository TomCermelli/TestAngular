import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BodyListComponent } from './templates/body-list/body-list.component';
import { UsersAddComponent } from './templates/users-add/users-add.component';
import { UserEditComponent } from './templates/user-edit/user-edit.component';
import { LoginComponent } from './templates/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "users", component: BodyListComponent , canActivate: [AuthGuard]},
    { path: 'users/add', component: UsersAddComponent, canActivate: [AuthGuard] },
    { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: "login" }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }