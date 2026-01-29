import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-foyer',
  templateUrl: './delete-foyer.component.html',
  styleUrls: ['./delete-foyer.component.scss']
})
export class DeletefoyerComponent {
  idFoyerToDelete: any;
  closeButtonDelete: any;
  sfoyer: any;

  removeFoyer(i: any) {
    this.idFoyerToDelete = i.ididFoyer
    console.log(this.idFoyerToDelete)
  }

  deleteAction() {
    this.sfoyer.delete(this.idFoyerToDelete).subscribe(() => {
      this.closeButtonDelete.nativeElement.click()
      this.get()
    })
  
}  get() {
    throw new Error('Method not implemented.');
  }
}
