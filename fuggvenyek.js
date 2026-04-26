import Termekek from "./Termekek.js";

export function kartyakFeltoltes(ADATLISTA) {
    const KARTYAKELEM = document.querySelector(".kartyak");

    if (KARTYAKELEM) {
        new Termekek(ADATLISTA, KARTYAKELEM);
    }
}

export function tablazatFeltoltes(ADATLISTA, osztaly){
    const tablazatElem = document.querySelector(".tablazat_tartalom");
    if (tablazatElem) {
        new osztaly(ADATLISTA, tablazatElem);
    }
}

export function minusGomb(ADATLISTA){
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
}

export function plusGGomb(ADATLISTA){
    let plusElemek = document.querySelectorAll(".plus");
    
    plusElemek.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            ADATLISTA[index].mennyiseg++;
            
            console.log("plus kattintva");
            console.log(ADATLISTA[index].mennyiseg)
    
            e.target.closest("tr").querySelector(".mennyiseg").textContent = ADATLISTA[index].mennyiseg;
    
        });
    });
}

export function sajatEsemeny(){
    window.addEventListener("torol",function(event) {
    console.log(event.detail);
})
}

/*
let torlesElemek = document.querySelectorAll(".torles");

torlesElemek.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        
        ADATLISTA.splice(index, 1);
        console.log("torles kattintva");
        e.target.closest("tr").remove();

    });
});*/

export function torlesGomb(){
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
}

export function visszaGomb() {
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
}

export function szuresek(ADATLISTA, osztaly){
    const szuresGombElemek = document.querySelectorAll(".szures button")
    szuresGombElemek.forEach(function (button){

        button.addEventListener("click", function(event){
            let szurt = event.target.innerText

            let szurtLista;

            if (szurt === "Összes") {
                szurtLista = ADATLISTA; // teljes lista
            } else {
                szurtLista = ADATLISTA.filter(function(a){
                    return a.kategoria === szurt;
                });
            }
            tablazatFeltoltes(szurtLista, osztaly);
            kartyakFeltoltes(szurtLista,osztaly);
        })

    })
}