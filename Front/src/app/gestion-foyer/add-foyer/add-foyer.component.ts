import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { foyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.scss']
})
export class AddfoyerComponent {
  addFoy: FormGroup;


  constructor(private fb: FormBuilder, private sfoyer: foyerService) {
    this.addFoy = this.fb.group({
      idFoyer: [''],
      nomFoyer: ['', Validators.required],
      archived: [false], // Utilisez archived au lieu de estValid
      capaciteFoyer: ['', Validators.required]
    });

  }


onSubmit() {
  if (this.addFoy.valid) {
    const foyer = this.addFoy.value;
    console.log(foyer); // Vérifiez la valeur de estValid ici
    this.sfoyer.addFoyer(foyer).subscribe((data) => {
      console.log(data);
      alert('foyer ajoutée avec succès');
    });
  }
}

}
