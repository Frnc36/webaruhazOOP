import Services from "./Services.js";


import {
  tablazatFeltoltes,
  minusGomb,
  plusGGomb,
  torlesGomb,
  visszaGomb,
  sajatEsemeny,
  szuresek,
  kartyakFeltoltes,
  kosarInit,
  rendezes,
} from "./fuggvenyek.js";

/* Public */

import Termekek from "./Termekek.js";



/* Admin */

import Aruk from "./Aruk.js";

sajatEsemeny();
torlesGomb();
visszaGomb();
const services = new Services();
services.getAdat('http://localhost:3000/api/termekek',termekMegjelenit)

let taroloElem = document.querySelector("#termekLista");

let ADATLISTA=[];

function termekMegjelenit(data){
    ADATLISTA = data;
   
    kartyakFeltoltes(ADATLISTA);
szuresek(ADATLISTA, Termekek);
rendezes(ADATLISTA,Termekek);
kosarInit(ADATLISTA);
tablazatFeltoltes(ADATLISTA, Aruk);

minusGomb(ADATLISTA);
plusGGomb(ADATLISTA);

szuresek(ADATLISTA, Aruk);
rendezes(ADATLISTA,Aruk);
}