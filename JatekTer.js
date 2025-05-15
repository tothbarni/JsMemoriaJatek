import kepekLista from "./kepekLista.js";
import Kartya from "./Kartya.js";

export default class JatekTer {
    #szElem;

    constructor(szElem) {
        this.#szElem = szElem;
        this.#megjelenit();
    }

    #megjelenit(){
        for (let i = 0; i < kepekLista.length; i++) {
            new Kartya(this.#szElem,i);
        }
    }
}