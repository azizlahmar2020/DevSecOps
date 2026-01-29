
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.scss'],
})
export class ShowfeedbackComponent implements OnInit {
  feedback: any[] = [];
  searchTerm: string = '';


  constructor(
    private sfeedback: FeedbackService,
    private router: Router
  ) {}
  ngOnInit(): void {
    /* this.sfeedback.getfeedback().subscribe((data: any) => {
      console.log(data);
      this.feedback = data;
    });*/
  }
  ajouterFeedback() {
    this.router.navigate(['/gestion-feedback/addFed']); // Naviguer vers la page d'ajout
  }
 

  

  get filteredfeedback() {
    return this.feedback.filter(
      (feedback) =>
      feedback.id.toString().includes(this.searchTerm) ||
      feedback.commentaire.toString().includes(this.searchTerm) 
    );
  }
}
