import { universite } from 'src/app/model/universite';
import {foyerService } from 'src/app/services/foyer.service';
import { foyer } from '../../model/foyer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-foyer',
  templateUrl: './show-foyer.component.html',
  styleUrls: ['./show-foyer.component.scss'],
})
export class ShowfoyerComponent implements OnInit {
  foyer: any[] = [];
  searchTerm: string = '';


  constructor(
    private sfoyer: foyerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sfoyer.getfoyer().subscribe((data: any) => {
      console.log(data);
      this.foyer = data;
    });
  }
  addFoyer() {
    this.router.navigate(['/gestion-foyer/addFoy']); // Naviguer vers la page d'ajout
  }
  showDetails(idFoyer: any) {
    this.router.navigate(['/gestion-foyer/detailFoy', idFoyer]);
  }

  removeFoyer(foyer: foyer) {
    console.log(foyer);
    this.sfoyer.removeFoyer(foyer).subscribe(
      (data: any) => {
        console.log(data);
        alert('foyer supprimée avec succès');
        this.router.navigate(['/gestion-foyer/allun']);
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting foyer:', error);
  
        if (error && error.error && error.error.message) {
          // Check if the error message contains the foreign key constraint error
          const errorMessage: string = error.error.message;
          if (errorMessage.includes('foreign key constraint')) {
            alert('Cannot delete this foyer as it is associated with other records.');
          } else {
            alert('Foyer lier avec une universite.');
          }
        } else {
          alert('Foyer lier avec une universite.');
        }
      }
    );
  }
  
  updateFoyer(id: any) {
    console.log(id)
    this.router.navigate(['/gestion-foyer/updateFoy/' + id]);
    //console.log(this.foyer)
  }

  get filteredfoyer() {
    return this.foyer.filter(
      (foyer) =>
      foyer.idFoyer.toString().includes(this.searchTerm) ||
      foyer.nomFoyer.toString().includes(this.searchTerm) ||
      foyer.capaciteFoyer
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())||
          (foyer.universite && foyer.universite.nomUniversite.toString().includes(this.searchTerm))
    );
  }
}
