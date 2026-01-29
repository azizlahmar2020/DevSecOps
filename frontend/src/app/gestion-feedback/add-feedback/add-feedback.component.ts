import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddfeedbackComponent {

  addFed: FormGroup;


  constructor(private fb: FormBuilder, private sfeedback: FeedbackService) {
    this.addFed = this.fb.group({
      id: [''],
      commentaire: ['', Validators.required],
      idFoyer:['', Validators.required], // Utilisez archived au lieu de estValid
      idUniversite: ['', Validators.required]
    });

  }


onSubmit() {
  if (this.addFed.valid) {
    const feedback = this.addFed.value;
    console.log(feedback); // Vérifiez la valeur de estValid ici
    this.sfeedback.ajouterFeedback(feedback).subscribe((data) => {
      console.log(data);
      alert('feedback ajoutée avec succès');
      this.sfeedback.getStatistics().subscribe((data) => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
      });


    });
  }
}

}
