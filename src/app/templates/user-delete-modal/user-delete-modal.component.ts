import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.css']
})
export class UserDeleteModalComponent implements OnInit {
  @Input() user : User

  constructor(private userService : UserService, private modale : NgbActiveModal) { }

  ngOnInit(): void {

  }

  close(){
    this.modale.dismiss()
  }

  deleteUser(user: User) {
    console.log(user);
    this.userService.delete(user).subscribe(res => {
    });
    this.modale.close()
  }

}
