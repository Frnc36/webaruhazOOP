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

let kosar = [];

export function kosarInit(ADATLISTA) {
    const kosarUritesGomb = document.getElementById("kosarUrites");
    if (kosarUritesGomb) {
        kosarUritesGomb.addEventListener("click", () => {
            kosar = [];
            kosarMegjelenit(ADATLISTA);
        });
    }
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("kosar-gomb")) {
            const index = parseInt(e.target.dataset.index);
            const termek = ADATLISTA[index];
            const kosarMennyiseg = kosar.filter(item => item.index === index).length;
            
            if (kosarMennyiseg < termek.mennyiseg) {
                kosar.push({
                    index: index,
                    nev: termek.nev,
                    ar: parseInt(termek.ar.replace(/[^0-9]/g, ""))
                });
                kosarMegjelenit(ADATLISTA);
            } else {
                alert("Nincs elegendő készlet!");
            }
        }
        
        if (e.target.classList.contains("kosar-torles") || e.target.closest(".kosar-torles")) {
            const gomb = e.target.closest(".kosar-torles");
            if (gomb) {
                const index = parseInt(gomb.dataset.index);
                kosar.splice(index, 1);
                kosarMegjelenit(ADATLISTA);
            }
        }
    });
}

function kosarMegjelenit(ADATLISTA) {
    const kosarLista = document.getElementById("kosarLista");
    const kosarDarabSpan = document.getElementById("kosarDarab");
    const kosarOsszegSpan = document.getElementById("kosarOsszeg");
    
    if (!kosarLista) return;
    
    let osszeg = 0;
    
    if (kosar.length === 0) {
        kosarLista.innerHTML = '<div class="text-center text-muted py-4">A kosár üres</div>';
        if (kosarDarabSpan) kosarDarabSpan.textContent = "0";
        if (kosarOsszegSpan) kosarOsszegSpan.textContent = "0 FT";
        return;
    }
    
    const csoportositva = {};
    kosar.forEach((item, idx) => {
        const key = item.index;
        if (!csoportositva[key]) {
            csoportositva[key] = { ...item, darab: 0 };
        }
        csoportositva[key].darab++;
    });
    
    let html = "";
    let counter = 0;
    for (const key in csoportositva) {
        const item = csoportositva[key];
        const reszOsszeg = item.ar * item.darab;
        osszeg += reszOsszeg;
        
        html += `
            <div class="list-group-item kosar-tetel d-flex justify-content-between align-items-center">
                <div class="flex-grow-1">
                    <strong>${item.nev}</strong>
                    <small>${item.ar} FT × ${item.darab} db</small>
                    <small>= ${reszOsszeg} FT</small>
                </div>
                <button class="btn btn-sm btn-outline-danger kosar-torles" data-index="${counter}">✕</button>
            </div>
        `;
        counter++;
    }
    
    kosarLista.innerHTML = html;
    if (kosarDarabSpan) kosarDarabSpan.textContent = kosar.length;
    if (kosarOsszegSpan) kosarOsszegSpan.textContent = osszeg + " FT";
}

function arSzam(ertek) {
    return Number(ertek.replace(".", "").replace("FT", "").trim());
}

export function rendezes(ADATLISTA, osztaly) {
    let gombok = document.querySelectorAll(".rendezes button")
    gombok.forEach(function(gomb){
        gomb.addEventListener("click", function(event){
            console.log(event.target.id)
            switch (event.target.id) {
                case "ar_no":
                    ADATLISTA.sort(function (a,b) {
                        return arSzam(a.ar) - arSzam(b.ar);
                    });
                    tablazatFeltoltes(ADATLISTA, osztaly);
                    kartyakFeltoltes(ADATLISTA,osztaly);
                    break;

                case "ar_csokk":
                    ADATLISTA.sort(function (a,b) {
                        return arSzam(b.ar) - arSzam(a.ar);
                    });
                    tablazatFeltoltes(ADATLISTA, osztaly);
                    kartyakFeltoltes(ADATLISTA,osztaly);
                    break;
                case "nev_no":
                    ADATLISTA.sort(function (a,b) {
                    return a.nev > b.nev ? 1:-1;
                    })
                    tablazatFeltoltes(ADATLISTA, osztaly);
                    kartyakFeltoltes(ADATLISTA,osztaly);
                    break;
                case "nev_csokk":
                    ADATLISTA.sort(function (a,b) {
                    return a.nev < b.nev ? 1:-1;
                    })
                    tablazatFeltoltes(ADATLISTA, osztaly);
                    kartyakFeltoltes(ADATLISTA,osztaly);
                    break;
            
                default:
                    break;
            }
        })
        
    })
}