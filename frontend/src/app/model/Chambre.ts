import { Bloc } from "./Bloc";

import { TypeChambre } from "./typeChambre";

export class Chambre{
  idChambre!:number;
  numeroChambre!:number;
  typeC!:TypeChambre;
  bloc: String='';
  qrCodeUrl?: string;

}
