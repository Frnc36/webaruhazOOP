import { ADATLISTA } from "./adat.js";
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

kartyakFeltoltes(ADATLISTA);
szuresek(ADATLISTA, Termekek);
rendezes(ADATLISTA,Termekek);
kosarInit(ADATLISTA);

/* Admin */

import Aruk from "./Aruk.js";

tablazatFeltoltes(ADATLISTA, Aruk);
sajatEsemeny();
minusGomb(ADATLISTA);
plusGGomb(ADATLISTA);
torlesGomb();
visszaGomb();
szuresek(ADATLISTA, Aruk);
rendezes(ADATLISTA,Aruk);

