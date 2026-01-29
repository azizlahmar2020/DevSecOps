import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-afficher-bloc',
  templateUrl: './afficher-bloc.component.html',
  styleUrls: ['./afficher-bloc.component.scss']
})
export class AfficherBlocComponent implements OnInit {
  blocs: Bloc[] = [];
  searchTerm: string = '';

  constructor(
    private sBloc: BlocService,
    private router: Router,
  ) {   }

  ngOnInit(): void {
    this.sBloc.getAllBloc().subscribe((data: any) => {
      this.blocs = data;
      // Vérifier la disponibilité pour chaque bloc
      this.blocs.forEach(bloc => {
        this.verifie(bloc);
      });
    });
  }

  verifie(bloc: Bloc) {
    this.sBloc.estBlocComplet(bloc.idBloc).subscribe((result: boolean) => {
      bloc.disponible = result;
    });
  }

  deleteCh(bloc: Bloc) {
    this.sBloc.deleteBloc(bloc).subscribe(() => {
      alert('Bloc supprimé avec succès');
      window.location.reload();
    });
  }

  editCh(bloc: Bloc) {
    this.router.navigate(['gestion-bloc/modify-bloc', bloc.idBloc]);
  }

  afficherBloc(bloc: Bloc) {
    this.router.navigate(['gestion-bloc/detail-bloc', bloc.idBloc]);
  }

  get filteredBloc() {
    return this.blocs.filter(
      (bloc) =>
        bloc.idBloc.toString().includes(this.searchTerm) ||
        bloc.capaciteBloc.toString().includes(this.searchTerm) ||
        bloc.nomBloc.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
