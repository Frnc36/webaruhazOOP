/* Public  */


/* Admin */
import {ADATLISTA} from "./adat.js";
import Aruk from "./Aruk.js";


const tablazatElem = document.querySelector(".tablazat_tartalom");

new Aruk(ADATLISTA, tablazatElem)

window.addEventListener("torol",function(event) {
    console.log(event.detail);
})

let minusElemek = document.querySelectorAll(".minus");

minusElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        if(ADATLISTA[index].mennyiseg>0){
            ADATLISTA[index].mennyiseg--;
        }
        
        console.log("minus kattintva");
        console.log(ADATLISTA[index].mennyiseg)

        e.target.closest("tr").querySelector(".mennyiseg").textContent = ADATLISTA[index].mennyiseg;

    });
});

let plusElemek = document.querySelectorAll(".plus");

plusElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
            ADATLISTA[index].mennyiseg++;
        
        console.log("plus kattintva");
        console.log(ADATLISTA[index].mennyiseg)

        e.target.closest("tr").querySelector(".mennyiseg").textContent = ADATLISTA[index].mennyiseg;

    });
});