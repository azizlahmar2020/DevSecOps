import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeChambre } from 'src/app/model/typeChambre';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Chambre } from 'src/app/model/Chambre';
import { BlocService } from 'src/app/services/bloc.service';
import { Bloc } from 'src/app/model/Bloc';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
})
export class UpdateChambreComponent implements OnInit {
  ch!: Chambre;
  nomdebloc!: String;
  updateChForm: FormGroup;
  typeChambre = TypeChambre;
  bloc!: Bloc;
  blocs: any[] = [];
  idblocmodifier!: number;
  blocChambre: string = '';

  constructor(
    private sChambre: ChambreService,
    private sBloc: BlocService,
    private ac: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateChForm = this.fb.group({
      numeroChambre: ['', Validators.required],
      typeC: ['', Validators.required],
      blocChambre: [''],
    });
  }

  ngOnInit() {
    // Récupérer la liste de tous les blocs disponibles
    this.sBloc.getAllBloc().subscribe({
      next: (data: any) => {
        this.blocs = data;
        console.log(this.blocs);

        // Mettez à jour la propriété 'blocs' dans le service BlocService
        // Une fois que les blocs sont chargés, on peut récupérer les paramètres de l'URL
        this.ac.paramMap.subscribe((params) => {
          const idChambre = params.get('id');
          if (idChambre) {
            this.loadData(idChambre);
          }
        });
      },
      error: (error: any) => {
        console.error('Error fetching blocs:', error);
      },
    });
  }

  loadData(idChambre: string) {
    const chambreRequest = this.sChambre.getChambreById(idChambre);
    const blocRequest = this.sChambre.getBlocById(idChambre);

    forkJoin([chambreRequest, blocRequest])
      .pipe(finalize(() => this.updateForm()))
      .subscribe({
        next: ([chambreData, blocData]: [Chambre, Bloc]) => {
          this.ch = chambreData;
          this.bloc = blocData;

          console.log('Chambre: ', this.ch);
          console.log('Bloc: ', this.bloc);

          // Call updateForm only when both ch and bloc are available
          this.updateForm();
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          window.location.reload();
        },
      });
  }

  updateForm() {
    if (!this.ch || !this.bloc) {
      console.error('Chambre or Bloc data not available:', this.ch);
      return;
    }

    this.updateChForm.patchValue({
      numeroChambre: this.ch.numeroChambre,
      typeC: this.ch.typeC,
      blocChambre: this.bloc.idBloc, // Assurez-vous que la propriété idBloc est correcte
    });
  }

  onSubmit() {
    if (this.ch && 'idChambre' in this.ch && this.updateChForm.valid) {
      this.sChambre.updateChambre(this.ch.idChambre, this.updateChForm.value).subscribe({
        next: (updateData) => {
          console.log('Chambre mise à jour avec succès:', updateData);

          // Désaffecter la chambre du bloc actuel
          this.sChambre.desaffecterChambreABloc(this.ch.idChambre);

          const idBlocModifier: number = this.updateChForm.value.blocChambre;

          console.log('this ', idBlocModifier);
          this.sChambre.affecterChambreABloc(this.ch.idChambre, idBlocModifier).subscribe({
            next: (affectationData) => {
              console.log('Chambre affectée à un nouveau bloc avec succès:');
               alert('Chambre affectée à un nouveau bloc avec succès');

              // Add any additional logic or UI updates for the success case here
              // For example, display a success message to the user
              this.router.navigate(['gestion-chambre/show-chambre']);
            },
            error: (error) => {
              console.error('Error affecter chambre à un nouveau bloc:', error);
              // Handle error scenarios specific to affecting chambre à un nouveau bloc
            },
          });
        },
        error: (error) => {
          console.error('Error updating Chambre:', error);

          // Handle error scenarios specific to updating Chambre
        },
      });

    }
  }
}
