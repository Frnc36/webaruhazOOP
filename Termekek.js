import Termek from "./Termek.js";

export default class Termekek {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = "";
    this.megjelenit();
  }

  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Termek(elem, index, this.szuloElem);
    });
  }
} //class
