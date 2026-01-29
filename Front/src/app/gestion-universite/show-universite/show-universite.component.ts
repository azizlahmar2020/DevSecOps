import { universite } from 'src/app/model/universite';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { universiteService } from 'src/app/services/universite.service';
import { Location } from '@angular/common';
interface Universite {
  idUniversite: number;
  nomUniversite: string;
  adress: string;
 
}
@Component({
  selector: 'app-show-universite',
  templateUrl: './show-universite.component.html',
  styleUrls: ['./show-universite.component.scss'],
})
export class ShowuniversiteComponent implements OnInit {
  universite: any[] = [];

  searchTerm: string = '';


  constructor(
    private suniversite: universiteService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.suniversite.getuniversite().subscribe((data: any) => {
      console.log(data);
      this.universite = data;
    });
  }
  showDetails(idUniversite: number) {
    this.router.navigate(['/gestion-universite/detailUn', idUniversite]);
  }
  updateUniversite(id: any) {
    console.log(id)
    this.router.navigate(['/gestion-universite/updateUn/' + id]);
    //console.log(this.universite)
  }
  removeUniversite(universite: universite) {
    console.log(universite);
    this.suniversite.removeUniversite(universite).subscribe(
      (data: any) => {
        console.log(data);
        alert('universite supprimée avec succès');
        this.router.navigate(['/gestion-universite/allun']);
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting universite:', error);
  
        if (error && error.error && error.error.message) {
          // Check if the error message contains the foreign key constraint error
          const errorMessage: string = error.error.message;
          if (errorMessage.includes('foreign key constraint')) {
            alert('Cannot delete this universite as it is associated with other records.');
          } else {
            alert('universite lier avec une universite.');
          }
        } else {
          alert('universite lier avec une universite.');
        }
      }
    );
  }
  addUniversite() {
    this.router.navigate(['/gestion-universite/addun']); // Naviguer vers la page d'ajout
  }

  get filtereduniversites() {
    return this.universite.filter((universite) =>
    universite.idUniversite.toString().includes(this.searchTerm) ||
    universite.nomUniversite.toString().includes(this.searchTerm) 
       );
  }


}
