import {ADATLISTA} from "./adat.js";
/* Public  */
import Termekek from "./Termekek.js";
const KARTYAKELEM = document.querySelector(".kartyak");
if (KARTYAKELEM) {
    new Termekek(ADATLISTA, KARTYAKELEM);
}

/* Admin */

import { tablazatFeltoltes, minusGomb, plusGGomb, torlesGomb, visszaGomb, sajatEsemeny} from "./fuggvenyek.js";

tablazatFeltoltes(ADATLISTA);
sajatEsemeny();
minusGomb(ADATLISTA);
plusGGomb(ADATLISTA);
torlesGomb();
visszaGomb();

