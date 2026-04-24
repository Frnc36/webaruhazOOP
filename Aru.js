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
        let kod = `<tr class="align-middle data-index="${this.#index}">
                        <td>${this.#obj.nev}</td>
                        <td>${this.#obj.ar}</td>

                    <td style="width:150px; max-width:150px;">
                        <div class="d-flex align-items-center justify-content-between w-100 overflow-hidden">
                            
                            <button style="width:45px;" class="btn btn-outline-danger btn-sm minus">-</button>
                            
                            <span class="text-center flex-grow-1 mennyiseg">
                                ${this.#obj.mennyiseg}
                            </span>
                            
                            <button style="width:45px;" class="btn btn-outline-success btn-sm plus">+</button>
                            
                        </div>
                    </td>

                    <td style="width:140px; max-width:140px;">
                    <button style="width:100%;" class="btn btn-danger btn-sm torles">
                        Törlés
                    </button></td>`;

        this.szuloElem.insertAdjacentHTML("beforeend", kod);

        this.#sorElem = this.szuloElem.lastElementChild;

    }

    getObj(){
        return this.#obj;
    }
}