import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent {
  addBl: FormGroup;

  constructor(private fb: FormBuilder, private blocService: BlocService, private router: Router) {
    this.addBl = this.fb.group({
      capaciteBloc: ['', [Validators.required,Validators.min(1)]], // Example: Minimum value is set to 1
      nomBloc: ['', [Validators.required,]] // Example: Maximum length is set to 50

    });
  }
ngOnInit():void{



}

  get capaciteBloc() {
    return this.addBl.get('capaciteBloc');
  }

  get nomBloc() {
    return this.addBl.get('nomBloc');
  }

  onSubmit() {
    console.log(this.addBl.value); // Check the submitted values
    if (this.addBl.valid) {
      const bloc = this.addBl.value;
      this.blocService.addBloc(bloc).subscribe(
        (data) => {
          console.log(data);
          alert('Bloc ajouté avec succès');
          this.router.navigate(['/gestion-bloc/afficher-bloc']);
        },
        (error) => {
          console.error(error);
          // Handle error, show error message to the user if necessary
        }
      );
    }
  }
}
