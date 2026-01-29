import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {
  @Output() reservationAdded = new EventEmitter<string>(); // Change the type to string

  addRes: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private sReservation: ReservationsService
  ) {
    this.addRes = this.fb.group({
      idReservation: ['', Validators.required],
      anneeUniversite: ['', Validators.required],
      estValide: [false],
      commentaire: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.addRes.valid) {
      const reservation: Reservations = this.addRes.value;

      this.sReservation.addReservation(reservation).subscribe(() => {
        this.reservationAdded.emit('Reservation ajoutée avec succès'); // Emit the success message
        this.resetForm();
        alert('Reservation ajoutée avec succès');

      });
    }
  }

  resetForm() {
    this.addRes.reset();
    this.formSubmitted = false;
  }
}
