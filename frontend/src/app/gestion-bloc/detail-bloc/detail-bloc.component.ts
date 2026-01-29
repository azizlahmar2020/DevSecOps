import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/services/bloc.service';
import { Chart } from 'chart.js';
import { Chambre } from 'src/app/model/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-detail-bloc',
  templateUrl: './detail-bloc.component.html',
  styleUrls: ['./detail-bloc.component.scss']
})
export class DetailBlocComponent implements OnInit {
  bloc!: Bloc ;
  idBloc: any;
  count!: number;

  chambres: Chambre[] = [];

  constructor(
    private route: ActivatedRoute,
    private blocService: BlocService,
    private router: Router,
    private schambre:ChambreService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.idBloc = idParam;

        // Récupérer les chambres pour le bloc
        this.schambre.chambrebybloc(this.idBloc).subscribe(
          (data) => {
            this.chambres = data;  // Utiliser le nom correct de la variable
          },
          (error) => {
            console.error('Erreur lors de la récupération des chambres pour le bloc', error);
          }
        );

        // Récupérer le bloc par ID
        this.blocService.getBlocById(idParam).subscribe(
          (bloc) => {
            this.bloc = bloc as Bloc;
                    console.log(this.bloc.capaciteBloc);

            // Récupérer le nombre de réservations pour les chambres du bloc
            this.blocService.getCountReservationChambre(this.bloc.idBloc).subscribe({
              next: (data) => {
                this.count = data;
              },
              error: (error) => {
                console.error('Erreur lors de la récupération du nombre de réservations', error);
              }
            });

            // Récupérer le pourcentage par type de chambre et afficher un graphique à secteurs (pie chart)
            this.blocService.getPercentageByBloc(this.idBloc).subscribe(
              (percentage) => {
                this.setupPieChart(percentage);
              },
              (error) => {
                console.error('Erreur lors de la récupération du pourcentage:', error);
              }
            );
          },
          (error) => {
            console.error('Erreur lors de la récupération du bloc:', error);
          }
        );
      }
    });
  }

  private setupPieChart(percentage: any): void {
    const canvasElement = document.getElementById('myChart');

    if (canvasElement instanceof HTMLCanvasElement) {
      const ctx = canvasElement.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Chambre Simple', 'Chambre Double', 'Chambre Triple'],
            datasets: [{
              label: 'Pourcentage',
              data: [percentage.simplePercentage, percentage.doublePercentage, percentage.triplePercentage],
              backgroundColor: ['blue', 'green', 'red'],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {
        console.error('Impossible d\'obtenir le contexte 2D pour l\'élément canvas.');
      }
    } else {
      console.error('Élément avec l\'ID "myChart" introuvable ou non un élément canvas.');
    }
  }
}
