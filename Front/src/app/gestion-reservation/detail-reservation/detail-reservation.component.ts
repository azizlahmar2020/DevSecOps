import { ChambreService } from './../../services/chambre.service';
import { Reservations } from './../../model/Reservations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Chambre } from 'src/app/model/Chambre';


@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss']
})
export class DetailReservationComponent implements OnInit {
  reservation: any;
  idReservation:any;
  chambres: Chambre[] = [];
  selectedchambres!: number;
  constructor(
    private route: ActivatedRoute,
    private sReservation: ReservationsService,private router:Router,private chambreService:ChambreService
  ) {}
  ngOnInit() {
    this.loadChambre();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idReservation');
      if (idParam !== null) {
        //const resId = +idParam;//persister pour convertir l'id en number
        this.sReservation.getReservationById(idParam).subscribe(reservation => {
          this.reservation = reservation;
        });
      } else {

      }
    });
  }
  addReservation() {
    this.router.navigate(['/gestion-reservation/addRes']); // Naviguer vers la page d'ajout
  }
  loadChambre() {
    this.chambreService.getAllChambre().subscribe(
      (data: any) => {
        this.chambres = data;
        console.log('Chambres:', this.chambres); // Log retrieved data
      },
      (error) => {
        console.error('Error fetching Chambres:', error);
      }
    );
  }

  affecterReservationAChambre() {
    if (this.reservation && this.reservation.idReservation) {
      if (this.selectedchambres) {
        this.sReservation
          .affecterReservationChambre(
            this.reservation.idReservation,
            this.selectedchambres
          )
          .subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              this.router.navigate(['/gestion-reservation/allres']);
              console.error(
                "Erreur lors de l'affectation du reservation au chambre :",
                error
              );
            }
          );
      } else {
        console.error('Veuillez sélectionner une chambre.');
      }
    } else {
      console.error('Veuillez sélectionner une réservation.');
    }
  }

  desaffecterReservationDeChambre() {
    console.log('chambre' + this.selectedchambres);
    if (this.reservation && this.reservation.idReservation) {
      this.sReservation
        .desaffacterReservationChambre(this.reservation.idReservation)
        .subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/dashboard/gestion-reservation/allres']);
          },
          (error) => {
            this.router.navigate(['/dashboard/gestion-reservation/allres']);
            console.error(
              'Erreur lors de la désaffectation de la réservation de la chambre :',
              error
            );
          }
        );
    } else {
      console.error('Veuillez sélectionner une réservation.');
    }
  }



}
