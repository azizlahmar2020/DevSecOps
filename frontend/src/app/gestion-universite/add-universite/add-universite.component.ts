import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { universiteService } from 'src/app/services/universite.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss'],
})
export class AdduniversiteComponent {
  addUn: FormGroup;
  universiteService: any;
 

  constructor(private fb: FormBuilder, private suniversite:universiteService , private router:Router) {
    this.addUn = this.fb.group({
    
      nomUniversite: ['', Validators.required],
      adresse:['',Validators.required]
    });
  }
 

  onSubmit() {
    if (this.addUn.valid) {
      const foyer = this.addUn.value;
      console.log(foyer); // Vérifiez la valeur de estValid ici
      this.suniversite.addUniversite(foyer).subscribe((data) => {
        console.log(data);
        alert('foyer ajoutée avec succès');
      });
    }
  }
}  

