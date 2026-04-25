export default class Termek {
  #obj = {};
  #index = 0;
  constructor(obj = { nev, ar, mennyiseg, jellemzo, kep }, index, szuloElem) {
    this.#obj = obj;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    let k = `<div class="card">
      <img src="${this.#obj.kep}" alt="${this.#obj.nev}" title="${this.#obj.nev}">
      <h2>${this.#obj.nev}</h2>
      <p>${this.#obj.jellemzo}</p>
      <p>${this.#obj.ar}</p>
      <p>${this.#obj.mennyiseg}</p>
    </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", k);
  }

  getObj() {
    return this.#obj;
  }
} //class
