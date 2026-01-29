import { universite } from 'src/app/model/universite';
import { foyer } from './foyer';
export class feedback {
  id!: number;
  commentaire!:String;
  idFoyer!:foyer["idFoyer"];
  idUniversite!:universite["idUniversite"];


  
}
