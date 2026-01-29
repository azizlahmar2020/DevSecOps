import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-modify-bloc',
  templateUrl: './modify-bloc.component.html',
  styleUrls: ['./modify-bloc.component.scss'],
})
export class ModifyBlocComponent implements OnInit {
  bloc!: Bloc;
  updateBlocForm!: FormGroup;

  constructor(
    private sBloc: BlocService,
    private ac: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.updateBlocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capacite: ['', Validators.required],
    });

    this.ac.paramMap.subscribe((params) => {
      const idBloc = Number(params.get('id'));
      if (idBloc) {
        this.loadData(idBloc);
      }
    });
  }

  loadData(idBloc: number) {
    this.sBloc.getBlocById(idBloc).subscribe(
      (data: any) => {
        this.bloc = data;
        this.updateBlocForm.patchValue({
          nomBloc: this.bloc.nomBloc,
          capacite: this.bloc.capaciteBloc,
        });
      },
      (error: any) => {
        console.error('Error fetching bloc:', error);
      }
    );
  }
  updateBloc() {
    if (this.updateBlocForm.valid) {
      const updatedBloc: Bloc = {
        idBloc: this.bloc.idBloc, // Ajoutez ceci si l'ID ne change pas pendant la mise à jour
        nomBloc: this.updateBlocForm.get('nomBloc')?.value,
        capaciteBloc: this.updateBlocForm.get('capacite')?.value,
      };

      console.log('Updated Bloc:', updatedBloc); // Ajoutez ceci pour déboguer les données mises à jour

      this.sBloc.UpdateBloc(updatedBloc).subscribe({
        next: (data) => {
          console.log('Update Success:', data); // Ajoutez ceci pour déboguer le succès de la mise à jour
          this.router.navigate(['gestion-bloc/afficher-bloc']);
        },
        error: (error: any) => {
          console.error('Error updating bloc:', error);
        }
      });
    }
  }
}
