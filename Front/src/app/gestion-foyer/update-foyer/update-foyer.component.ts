// update-foyer.component.ts
/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { foyer } from 'src/app/model/foyer';
import { foyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.scss']
})
export class UpdateFoyerComponent implements OnInit {
  foyer!: foyer;
  idFoyer: any;
  isAdd!: boolean;
  foyerService: any;
  closeButton: any;

  constructor(
    private ac: ActivatedRoute,
    private router: Router,
    private sFoyer: foyerService,
  ) {
    this.idFoyer = this.ac.snapshot.params['idFoyer'];
  }

  ngOnInit(): void {
    // Use the ActivatedRoute service to get the 'idFoyer' from the URL
    this.ac.paramMap.subscribe((params) => {
      const idFoyerParam = params.get('idFoyer');

      // Check if 'idFoyerParam' is not null or undefined
      if (idFoyerParam) {
        // Convert the string 'idFoyerParam' to a number
        this.idFoyer = +idFoyerParam;
        this.loadData();
      } else {
        console.error('Error: Foyer ID is null or undefined');
      }
    });
  }

  loadData() {
    this.sFoyer.foyerById(this.idFoyer).subscribe({
      next: (data) => {
        if (data !== null) {
          console.log('hetha', data);
            //this.foyer = data;
        } else {
          console.error('Error: Foyer data is null');
        }
      },
      error: (error: any) => {
        console.error('Error fetching foyer details:', error);
      }
    });
  }
 
  
  
   updateFoyer() {
    const updateSubscription = this.sFoyer.updateFoyer(this.foyer).subscribe({
      next: (data) => {
        console.log('Foyer updated successfully:', data);
        // Utilisez des notifications ou d'autres mécanismes conviviaux au lieu d'alertes.
        alert('Foyer updated successfully');
        
        // Redirigez vers une page spécifique après la mise à jour
        this.router.navigate(['/foyer-details', this.idFoyer]);
      },
      error: (error: any) => {
        console.error('Error updating foyer:', error);
        // Affichez le message d'erreur complet dans la console.
        alert(`Error updating foyer: ${error.message}`);
      },
      complete: () => {
        // Gérez la désinscription ici si nécessaire.
        updateSubscription.unsubscribe();
      }
    });
  }
}
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { foyer } from "src/app/model/foyer";
import { universite } from "src/app/model/universite";
import { foyerService } from "src/app/services/foyer.service";

// Import necessary modules and services

@Component({
    selector: 'app-update-foyer',
    templateUrl: './update-foyer.component.html',
    styleUrls: ['./update-foyer.component.scss']
  })
  export class UpdateFoyerComponent implements OnInit {
    foyer: foyer = {
        nomFoyer: 'foyer.nomFoyer', capaciteFoyer: 0, archived: false,
        idFoyer: 0,
        universite: new universite,
        id: undefined
    }; // Initialize foyer object
    idFoyer: any;
    isAdd!: boolean;
  
    constructor(
      private ac: ActivatedRoute,
      private router: Router,
      private sFoyer: foyerService,
    ) {
      this.idFoyer = this.ac.snapshot.params['idFoyer'];
    }
  
    ngOnInit(): void {
      // Use the ActivatedRoute service to get the 'idFoyer' from the URL
      this.ac.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
        const idFoyerParam = params.get('idFoyer');
  
        // Check if 'idFoyerParam' is not null or undefined
        if (idFoyerParam) {
          // Convert the string 'idFoyerParam' to a number
          this.idFoyer = +idFoyerParam;
          this.loadData();
        } else {
          console.error('Error: Foyer ID is null or undefined');
        }
      });
    }
  
    loadData() {
        console.log('hedha foyer',this.foyer)
        this.sFoyer.foyerById(this.idFoyer).subscribe({
          next: (data: Object) => { // Use the correct type for data
            if (data !== null) {
              console.log('hetha', data);
              this.foyer = data as foyer; // Update the foyer object, assuming 'foyer' is the correct type
            } else {
              console.error('Error: Foyer data is null');
            }
          },
          error: (error: any) => {
            console.error('Error fetching foyer details:', error);
          }
        });
      }
      
     
  
    updateFoyer() {
      const updateSubscription = this.sFoyer.updateFoyer(this.foyer, this.idFoyer).subscribe({
        next: (data: any) => {
          console.log('Foyer updated successfully:', data);
          // Utilisez des notifications ou d'autres mécanismes conviviaux au lieu d'alertes.
          alert('Foyer updated successfully');
          
          // Redirigez vers une page spécifique après la mise à jour
          this.router.navigate(['/foyer-details', this.idFoyer]);
        },
        error: (error: any) => {
          console.error('Error updating foyer:', error);
          // Affichez le message d'erreur complet dans la console.
          alert(`Error updating foyer: ${error.message}`);
        },
        complete: () => {
          // Gérez la désinscription ici si nécessaire.
          updateSubscription.unsubscribe();
        }
      });
    }
  }
  
