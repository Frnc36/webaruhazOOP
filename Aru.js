export default class Aru{
    #obj = {};
    #index = 0;

    constructor(obj={nev,ar,mennyiseg}, index, szuloElem){
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem;

        this.megjelenit();
        this.esemeny();
    }

    sajatEsemeny(){
        const e = new CustomEvent("torol",{detail:this.#index});
        window.dispatchEvent(e);
    }

    esemeny(){
        const gombElem = document.querySelectorAll("button");

        gombElem.forEach((gomb, index)=>{
            gomb.addEventListener("click", (event)=>{
            console.log("index ", index);

            this.sajatEsemeny();
        })
        })
        
    }

    megjelenit(){
        let kod = `<table>
                    <tr>
                        <td>${this.#obj.nev}</td>
                        <td>${this.#obj.ar}</td>
                        <td>${this.#obj.mennyiseg}</td>
                    </tr>
                    </table>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    getObj(){
        return this.#obj;
    }
}