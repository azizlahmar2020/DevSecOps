import { Location } from '@angular/common';
// show-reservation.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { MessageService } from 'src/app/services/message.service';
import { Reservations } from '../../model/Reservations';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.scss'],
})
export class ShowReservationComponent implements OnInit {
  @Input() newReservation: Reservations | null = null; // Change the type to Reservations | null
  @Output() reservationDeleted = new EventEmitter<Reservations>();

  reservations: Reservations[] = [];
  searchTerm: string = '';

  constructor(
    private sReservation: ReservationsService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Retrieve all reservations on component initialization
    this.sReservation.getAllReservations().subscribe((data: Reservations[]) => {
      console.log(data);
      this.reservations = data;
    });

    // Subscribe to the success message
    this.messageService.successMessage$.subscribe((message) => {
      if (message) {
        console.log('Success message:', message);
        // Display the success message as needed (you can show a toast, alert, etc.)
      }
    });

    // Handle new reservation
    if (this.newReservation) {
      this.reservations.push(this.newReservation);
      this.messageService.sendSuccessMessage('Reservation ajoutée avec succès');
    }
  }

  addReservation() {
    this.router.navigate(['/gestion-reservation/addRes']);
  }

  showDetails(idReservation: any) {
    this.router.navigate(['/gestion-reservation/detailRes', idReservation]);
  }

  deleteReservation(resv: Reservations) {
    this.sReservation.deleteReservation(resv).subscribe((data) => {
      console.log(data);
      // Send success message after deleting reservation
      this.messageService.sendSuccessMessage('Reservation deleted successfully');
      this.reservationDeleted.emit(resv);
      //window.reload(); // Emit the deleted reservation
    });
  }

  editReservation(reservationId: number) {
    console.log('Editing reservation with ID:', reservationId);
    this.router.navigate(['/gestion-reservation/updateReservation', reservationId]);
  }

  get filteredReservations() {
    return this.reservations.filter(
      (reservation) =>
        reservation.idReservation.toString().includes(this.searchTerm) ||
        reservation.anneeUniversite.toString().includes(this.searchTerm) ||
        reservation.commentaire.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (reservation.chambre && reservation.chambre.numeroChambre.toString().includes(this.searchTerm))
    );
  }
}
