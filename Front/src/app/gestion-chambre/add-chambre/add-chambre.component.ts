import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeChambre } from 'src/app/model/typeChambre';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss'],
})
export class AddChambreComponent implements OnInit {
  addCh !: FormGroup;
  typeChambre = TypeChambre;
  blocs: any[] = [];

  constructor(
    private fb: FormBuilder,
    private chService: ChambreService,
    private sBloc: BlocService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.sBloc.getAllBloc().subscribe((data: any) => {
      this.blocs = data;
    });

    this.addCh = this.fb.group({
      numeroChambre: ['', [Validators.required,Validators.min(1)]],
      typeC: ['', Validators.required],
      blocChambre: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.addCh.valid) {
      const chambre = this.addCh.value;

      this.chService.addChambre(chambre).subscribe({
        next: (data) => {
          const idBloc = chambre.blocChambre;

          this.chService.affecterChambreABloc(data.idChambre, idBloc).subscribe({
            next: (data) => {
              console.log('Chambre affectée à un bloc avec succès');
              alert('Chambre affectée à un bloc avec succès');
              this.router.navigate(['/gestion-chambre/show-chambre']);
            },
            error: (data) => {

              alert('Erreur lors de l\'affectation de la chambre à un bloc. Vérifiez la console pour plus de détails.');
            }
          });
        },
        error: () => {
         // console.error('Erreur lors de l\'ajout de la chambre:', error);
          alert('Erreur lors de l\'ajout de la chambre. Vérifiez la console pour plus de détails.');
        }
      });
    }
  }





  afficherChambre() {
    this.router.navigate(['/gestion-chambre/show-chambre']);
    window.location.reload()
  }
}
