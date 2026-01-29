import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ChambreService } from 'src/app/services/chambre.service';
import { BlocService } from 'src/app/services/bloc.service';
import { Chambre } from 'src/app/model/Chambre';
import { Bloc } from './../../model/Bloc';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-show-chambre',
  templateUrl: './show-chambre.component.html',
  styleUrls: ['./show-chambre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  blocs: Bloc[] = [];
  searchTerm: string = '';
  filteredChambres: Chambre[] = [];

  constructor(
    private sChambre: ChambreService,
    private router: Router,
    private sBloc: BlocService,
    private location: Location,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchChambresData();
    this.cdr.detectChanges();

  }
  searchChambres() {
    console.log('Search term:', this.searchTerm);

    // Si le terme de recherche est vide, afficher toutes les chambres
    if (!this.searchTerm.trim()) {
      this.filteredChambres = this.chambres;
    } else {
      // Filtrer les chambres en fonction du terme de recherche
      this.filteredChambres = this.chambres.filter(chambre => {
        const searchTermLower = this.searchTerm.toLowerCase();
        return (
          chambre.typeC.toLowerCase().includes(searchTermLower) ||
          chambre.bloc.toLowerCase().includes(searchTermLower)
        );
      });
    }




    console.log('Filtered chambres:', this.filteredChambres);

    this.cdr.detectChanges();
  }



  filteredBloc() {
    return this.blocs.filter(
      (bloc) =>
        bloc.idBloc.toString().includes(this.searchTerm) ||
        bloc.capaciteBloc.toString().includes(this.searchTerm) ||
        bloc.nomBloc.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  private fetchChambresData() {
    this.sChambre.getAllChambre().subscribe({
      next: (chambres: Chambre[]) => {
        const requests = chambres.map(chambre => this.sChambre.getBlocById(chambre.idChambre));

        forkJoin(requests).subscribe({
          next: (blocs: Bloc[]) => {
            this.chambres = chambres.map((chambre, index) => ({
              ...chambre,
              qrCodeUrl: '',
              bloc: blocs[index] ? blocs[index].nomBloc : ''
            }));

            this.cdr.detectChanges();

            console.log('Chambres: ', this.chambres);
          },
          error: (error) => {
            console.error('Error loading data:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching chambres:', error);
      }
    });
  }

  showDetails(idChambre: any) {
    this.router.navigate(['/gestion-chambre/detail-chambre', idChambre]);
  }

  editCh(idChambre: any) {
    this.router.navigate(['/gestion-chambre/update-chambre', idChambre]);
    this.cdr.detectChanges();
  }

  deleteCh(ch: Chambre) {
    this.sChambre.deleteChambre(ch).subscribe(
      (data) => {
        console.log(data);
        alert('Chambre supprimée avec succès');
       // this.router.navigate(['/gestion-chambre/show-chambre']);
        window.location.reload();
      },
      (error) => {
        if (error.status === 500) {
          alert('La chambre est réservée et ne peut pas être supprimée.');
        } else {
          console.error('Une erreur s\'est produite lors de la suppression de la chambre:', error);
        }
      }
    );
  }

  addChambre() {
    console.log('addChambre method called');
    this.router.navigate(['gestion-chambre/add-chambre']);
  }

  generateQRCode(ch: any) {
    this.sChambre.generateQRCode(ch.idChambre).subscribe(
      (response) => {
        if (response) {
          const blob = new Blob([response.body as BlobPart], { type: 'image/jpeg' });
          const qrCodeUrl = URL.createObjectURL(blob);
          ch.qrCodeUrl = qrCodeUrl;
        } else {
          console.error('La réponse était null');
        }
      },
      (error) => {
        console.error('Erreur lors de la génération du QR code:', error);
      }
    );
  }
}
