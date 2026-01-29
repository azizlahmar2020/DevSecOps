import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit{

  users: any[] = [];
searchTerm: string = '';

  constructor(
    private userservice: UserService, private router: Router
    ) {}

  ngOnInit(): void {
    this.userservice.getallUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }

  addUser() {
    this.router.navigate(['/gestion-utilisateur/addUser']); 
   }
   showDetails(id: any) {
    this.router.navigate(['/gestion-utilisateur/detailUser', id]);
  }

  deleteUser(user: User) {
    this.userservice.deleteUser(user).subscribe((data) => {
      console.log(data);
    });
  }
  editUser(id: number) {
    console.log('Editing user with ID:', id);
    this.router.navigate(['/gestion-utilisateur/updateUser', id]);
  }
  

  get filteredUsers() {
    return this.users.filter(
      (user) =>
        user.id.toString().includes(this.searchTerm) ||
        user.firstname.toString().includes(this.searchTerm) ||
        user.lastname.toString().includes(this.searchTerm) ||
        user.email.toString().includes(this.searchTerm)

    );
  }
}
