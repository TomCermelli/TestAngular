import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import _ from 'underscore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { UserDeleteModalComponent } from '../user-delete-modal/user-delete-modal.component';

@Component({
  selector: 'app-body-list',
  templateUrl: './body-list.component.html',
  styleUrls: ['./body-list.component.css']
})
export class BodyListComponent implements OnInit {
  users: User[] = [];
  pagination: any;
  query: any;
  pages: any;
  constructor(private userService: UserService, protected modalService: NgbModal) { }

  ngOnInit(): void {
    this.pagination = { currentPage: 1, itemPerPage: 3, totalElement: 0 }
    this.query = { status: '', q: '' }
    this.populateUsers()
  }

  // Récupère les données de User avec une pagination incluse
  populateUsers() {
    this.userService.get(this.pagination.currentPage, this.pagination.itemPerPage, _.values(this.query).join('')).subscribe((response: any) => {
      this.pagination.totalElement = response.headers.get('X-Total-Count')
      this.pages = _.range(1, Math.ceil(this.pagination.totalElement / this.pagination.itemPerPage) + 1)
      this.users = response.body
    })
  }

  // Change la page courrante avec celle cliqué
  paginate(numberPage) {
    this.pagination.currentPage = numberPage;
    this.populateUsers();
  }
  searchByName(event: any) {
    this.query.q = '&q=' + event.target.value
    this.pagination.currentPage = 1
    this.populateUsers()
  }

  filterByStatus(status: any = undefined) {
    this.pagination.currentPage = 1
    if (status === undefined) {
      this.query.status = ''
    } else {
      this.query.status = '&isActive=' + status;
    }
    this.populateUsers()
    console.log('query', this.query)
  }

  deleteUser(user: User) {
    let modalRef = this.modalService.open(UserDeleteModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then((confirm) => {
      this.userService.delete(user).subscribe(res => {
      });
      this.populateUsers();
    }, (close) => {
    });

  }

}
