import kepekLista from "./kepekLista.js";

export default class Kartya {
    #divElem;
    #index;
    constructor(divElem, index) {
        this.#divElem = divElem;
        this.#index = index; 
        this.#megjelenit();
    }

    #megjelenit() {
        let html = `<div class="kartya"><img src="${kepekLista[this.#index].src}" alt="${kepekLista[this.#index].alt}"></div>`;
        this.#divElem.insertAdjacentHTML("beforeend",html);
    }
}