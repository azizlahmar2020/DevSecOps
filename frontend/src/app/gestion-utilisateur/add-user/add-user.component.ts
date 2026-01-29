import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  adduser: FormGroup;


  constructor(private fb: FormBuilder, private userservice: UserService,private router: Router,private route: ActivatedRoute) {
    this.adduser = this.fb.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    });

  }
  
onSubmit() {
  if (this.adduser.valid) {
    const user:User = this.adduser.value;
    console.log(user); // Vérifiez la valeur de estValid ici
    this.userservice.addUser(user).subscribe((data) => {
      console.log(data);
      alert('user ajoutée avec succès');
    });
  }
  this.router.navigate(['/addUser']);
}
}
