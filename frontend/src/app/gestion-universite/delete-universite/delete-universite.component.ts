import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-universite',
  templateUrl: './delete-universite.component.html',
  styleUrls: ['./delete-universite.component.scss']
})
export class DeleteuniversiteComponent {
  idUniversiteToDelete: any;
  closeButtonDelete: any;
  sfoyer: any;

  removeUniversite(i: any) {
    this.idUniversiteToDelete = i.idUniversite
    console.log(this.idUniversiteToDelete)
  }

  deleteAction() {
    this.sfoyer.delete(this.idUniversiteToDelete).subscribe(() => {
      this.closeButtonDelete.nativeElement.click()
      this.get()
    })
  
}  get() {
    throw new Error('Method not implemented.');
  }
}
