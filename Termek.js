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
    let kod = `
      <div class="col">
        <div class="card h-100 shadow-sm d-flex flex-column">
          <img src="${this.#obj.kep}" class="card-img-top w-100" alt="${this.#obj.nev}" style="aspect-ratio: 1 / 1; object-fit: contain; background: #f8f9fa; padding: 10px;">
          <div class="card-body d-flex flex-column flex-grow-1">
            <h2 class="card-title h5 fw-bold">${this.#obj.nev}</h2>
            <p class="card-text flex-grow-1">${this.#obj.jellemzo}</p>
            <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
              <span class="h5 text-primary mb-0 fw-bold">${this.#obj.ar}</span>
              <span class="badge bg-secondary fs-6 p-2">📦 Készlet: ${this.#obj.mennyiseg} db</span>
            </div>
            <button class="btn btn-warning mt-3 w-100 kosar-gomb fw-semibold" data-index="${this.#index}">
              🛒 Kosárba
            </button>
          </div>
        </div>
      </div>
    `;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }

  getObj() {
    return this.#obj;
  }
} //class
