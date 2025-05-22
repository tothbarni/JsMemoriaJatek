import kepekLista from "./kepekLista.js";
import Kartya from "./Kartya.js";

export default class JatekTer {
  #kartyaLista = [];
  #szElem = document.querySelector(".art");
  #kivalasztottKartyaLista = [];

  constructor(KartyaLista) {
    this.#kartyaLista = KartyaLista;
    this.#megjelenit();
  }

  #megjelenit() {
    this.#kever();
    for (let i = 0; i < this.#kartyaLista.length; i++) {
      new Kartya(i, this.#kartyaLista[i].src, this.#szElem);
    }
    this.#ellenorzes();
  }

  #kever() {
    this.#kartyaLista.sort(() => {
      return Math.random() - 0.5;
    });
  }

  #ellenorzes() {
    window.addEventListener("fordit", (event) => {
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
        if (this.#kivalasztottKartyaLista.length === 2) {
          this.#triggerBlocked();
          let f1 = this.#kivalasztottKartyaLista[0];
          let f2 = this.#kivalasztottKartyaLista[1];
          if (f1.getFajlNev() === f2.getFajlNev()) {
            console.log("találat");
            this.#kivalasztottKartyaLista.splice(0);
            this.#triggerUnBlocked();
          } else {
            console.log("nem találat");
            setTimeout(() => {
              f1.setAllapot();
              f2.setAllapot();
              this.#kivalasztottKartyaLista.splice(0);
              this.#triggerUnBlocked();
            }, 2000);
          }
        }
      }
      console.log(this.#kivalasztottKartyaLista);
    });
  }

  #triggerBlocked(){
    //létrehoz egy gameBlocked eseményt, amire majd feltud iratkozni a kártya
    const e = new CustomEvent("gameBlocked");
    window.dispatchEvent(e);
  }

  #triggerUnBlocked(){
    const e = new CustomEvent("gameUnBlocked");
    window.dispatchEvent(e);
  }
}
