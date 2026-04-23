export default class Aru{
    #obj = {};
    #index = 0;
    #sorElem;

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
        const gombElem = this.#sorElem.querySelector(" button");
        
            gombElem.addEventListener("click", ()=>{
            console.log("index ", this.#index);
            this.sajatEsemeny();
        });
        
        
    }

    megjelenit(){
        let kod = `<tr class="align-middle">
                        <td>${this.#obj.nev}</td>
                        <td>${this.#obj.ar}</td>
                        <td>${this.#obj.mennyiseg}</td>
                        <td><button class="btn btn-danger btn-sm">Törlés</button></td>
                    </tr>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);

        this.#sorElem = this.szuloElem.lastElementChild;

    }

    getObj(){
        return this.#obj;
    }
}