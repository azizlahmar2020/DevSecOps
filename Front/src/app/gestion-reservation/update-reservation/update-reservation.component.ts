import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})

export class UpdateReservationComponent implements OnInit {
  reservation: Reservations = new Reservations();
  idReservation!: number;

  constructor(
    private sReservation: ReservationsService,
    private ac: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const reservationIdParam = this.ac.snapshot.paramMap.get('reservationId') ?? '';

    if (reservationIdParam) {
      this.idReservation = +reservationIdParam;

      this.sReservation.getReservationById(this.idReservation).subscribe(
        (data: any) => {
          if (data !== null) {
            this.reservation = data;
          } else {
            console.error('Error: Reservation data is null');
          }
        },
        (error) => {
          console.error('Error fetching reservation details:', error);
          this.messageService.sendSuccessMessage('Error fetching reservation details. Please try again.');
        }
      );
    } else {
      console.error('Error: Reservation ID is null or undefined');
      this.messageService.sendSuccessMessage('Error: Reservation ID is null or undefined');
    }
  }

  updateReservation() {
    this.reservation.idReservation = this.idReservation;

    this.sReservation.updateReservation(this.idReservation, this.reservation).subscribe(
      () => {
        console.log('Reservation updated successfully');
        alert('Reservation updated successfully');
        this.messageService.sendSuccessMessage('Reservation updated successfully');
        this.router.navigate(['/gestion-reservation/showRes']);
      },
      (error) => {
        console.error('Error updating reservation:', error);
        this.messageService.sendSuccessMessage('Error updating reservation. Please try again.');
      }
    );
  }
}
