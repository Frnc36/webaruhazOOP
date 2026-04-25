import {ADATLISTA} from "./adat.js";
/* Public  */
import Termekek from "./Termekek.js";
const KARTYAKELEM = document.querySelector(".kartyak");
if (KARTYAKELEM) {
    new Termekek(ADATLISTA, KARTYAKELEM);
}

/* Admin */
import Aruk from "./Aruk.js";

const tablazatElem = document.querySelector(".tablazat_tartalom");
if (tablazatElem) {
    new Aruk(ADATLISTA, tablazatElem);
}

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

/*
let torlesElemek = document.querySelectorAll(".torles");

torlesElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        
        ADATLISTA.splice(index, 1);
        console.log("torles kattintva");
        e.target.closest("tr").remove();

    });
});*/

let torlesElemek = document.querySelectorAll(".torles");

torlesElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {

        const sor = e.target.closest("tr");

        sor.style.opacity = "0.3";
        sor.style.textDecoration = "line-through";
        sor.querySelectorAll(".minus, .plus").forEach(btn => {
            btn.style.pointerEvents = "none";
        });

        console.log("inaktiv");
    });
});

let visszaElemek = document.querySelectorAll(".vissza");

visszaElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {

        const sor = e.target.closest("tr");

        sor.style.opacity = "1";
        sor.style.textDecoration = "none";
        sor.querySelectorAll(".minus, .plus").forEach(btn => {
            btn.style.pointerEvents = "auto";
        });

        console.log("visszaállítva");
    });
});