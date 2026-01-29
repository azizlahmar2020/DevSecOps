import { ActivatedRoute, Router } from '@angular/router';
import { universite } from '../../model/universite';
import { Component, OnInit } from '@angular/core';
import { universiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-detail-universite',
  templateUrl: './detail-universite.component.html',
  styleUrls: ['./detail-universite.component.scss'],
})
export class DetailuniversiteComponent implements OnInit {
  universite: any;
  iduniversite:any;
  
  selecteduniversites!: number;
  constructor(
    private route: ActivatedRoute,
    private suniversite: universiteService,private router:Router,private universiteService:universiteService
  ) {}
  ngOnInit() {
    this.loadUniversite();
    
  }
  
  addUniversite() {
    this.router.navigate(['/gestion-universite/addUn']); // Naviguer vers la page d'ajout
  }
  loadUniversite() {
    this.suniversite.getuniversite().subscribe((data: any) => {
      this.universite = data;
    });
}


}
