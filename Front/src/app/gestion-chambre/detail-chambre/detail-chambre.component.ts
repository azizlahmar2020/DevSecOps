import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../model/Chambre';
import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';
import { Bloc } from 'src/app/model/Bloc';

@Component({
  selector: 'app-detail-chambre',
  templateUrl: './detail-chambre.component.html',
  styleUrls: ['./detail-chambre.component.scss'],
})
export class DetailChambreComponent implements OnInit {
  chambre: Chambre | null = null; // Initialize chambre as null to avoid undefined errors
  idChambre: any;
  blocs: Bloc[] = [];
  blocName: String | null = null;

  constructor(
    private route: ActivatedRoute,
    private sChambre: ChambreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idChambre');
      if (idParam !== null) {
        this.idChambre = idParam;
        this.sChambre.getChambreById(idParam).subscribe(chambre => {
          this.chambre = chambre;
        });
        this.sChambre.getBlocById(idParam).subscribe(blocData => {
          this.blocName = blocData?.nomBloc || '';
          console.log(this.blocName)
        });
      } else {
        // Handle the case where no idParam is provided
      }
    });
  }

  editCh(idChambre: any) {
    this.router.navigate(['/gestion-chambre/update-chambre', idChambre]);
  }

}
