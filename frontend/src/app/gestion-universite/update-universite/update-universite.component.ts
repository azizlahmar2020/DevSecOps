// update-universite.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { universite } from 'src/app/model/universite';
import { universiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss'] 
})
export class UpdateuniversiteComponent implements OnInit {
  Formupdate!: FormGroup;
  idUniversite!: any;

  constructor(
    private fb: FormBuilder,
    private sUniversite: universiteService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.idUniversite = this.ac.snapshot.params['idUniversite'];

    this.Formupdate = this.fb.group({
      idUniversite: [this.idUniversite],
      nomUniversite: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    this.sUniversite.universiteById(this.idUniversite).subscribe(data => {
      this.Formupdate.patchValue(data || new universite());
    });
  }

  updateUniversite() {
    
    const updateData = this.Formupdate.value;console.log(updateData)
    const updateSubscription = this.sUniversite.updateUniversite(updateData, this.idUniversite).subscribe({
      next: (data: any) => {
        console.log('Universite updated successfully:', data);
        alert('Universite updated successfully');
        this.router.navigate(['gestion-universite/allun']);
      },
      error: (error: any) => {
        console.error('Error updating Universite:', error);
        alert(`Error updating Universite: ${error.message}`);
      },
      complete: () => {
        updateSubscription.unsubscribe();
      }
    });
  }

}
