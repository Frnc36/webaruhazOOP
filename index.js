/* Public  */


/* Admin */
import {ADATLISTA} from "./adat.js";
import Aruk from "./Aruk.js";


const tablazatElem = document.querySelector(".tablazat_tartalom");

new Aruk(ADATLISTA, tablazatElem)

window.addEventListener("torol",function(event) {
    console.log(event.detail);
})