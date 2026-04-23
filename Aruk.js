import Aru from "./Aru.js"

export default class Aruk{
    #lista = [];

    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach(
            (elem, index)=>{
                new Aru(elem,index,this.szuloElem)
            }
        )
    }
}