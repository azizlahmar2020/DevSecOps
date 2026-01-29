// backfront.component.ts
import { Component, OnInit } from '@angular/core';
import { Chambre } from '../model/Chambre';
import { Bloc } from '../model/Bloc';
import { ChambreService } from '../services/chambre.service';
import { BlocService } from '../services/bloc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-backfront',
  templateUrl: './backfront.component.html',
  styleUrls: ['./backfront.component.scss']
})
export class BackfrontComponent implements OnInit {
  showNavbar: boolean = false;

  chambres: Chambre[] = [];
  blocs: Bloc[] = [];
  selectedChambre: Chambre | null = null;
  noteFilter: number | null = null;
  filteredChambres: Chambre[] = [];
  noteEvaluation: number | null = null;

  constructor(
    private chambreService: ChambreService,
    private blocService: BlocService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('BackfrontComponent initialized');
    this.loadChambres();
  }
  loadChambres() {
    forkJoin({
      chambres: this.chambreService.getAllChambre(),
      blocs: this.blocService.getAllBloc()  // Ne pas ajouter de cast ici
    }).subscribe({
      next: (data: { chambres: Chambre[]; blocs: any }) => {
        this.chambres = data.chambres;
        this.blocs = data.blocs as Bloc[]; // Ajout du cast vers un tableau de type Bloc[]
      },
      error: (error) => {
        console.error('Error loading data:', error);
      }
    });
  }

  refreshChambres() {
    this.chambreService.getAllChambre().subscribe(
      (chambres) => {
        this.chambres = chambres;
      },
      (error) => {
        console.error('Erreur lors de la récupération des chambres après la suppression:', error);
      }
    );
  }

  showDetails(idChambre: number) {
    console.log('Navigating to details for Chambre ID:', idChambre);
    this.router.navigate(['/dashboard/User-chambre-details', idChambre]);
  }
}
