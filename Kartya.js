import kepekLista from "./kepekLista.js";

export default class Kartya {
    #id;
    #fajlNev="";
    #allapot=false; //false -> nincs felfordítva
    #divElem;
    #imgElem;
    #blokkolt=false; // false -> nem blokkolt, true -> blokkolt
    constructor(id,fajlNev,szuloElem) {
        this.#id = id;
        this.#fajlNev = fajlNev;
        this.#divElem = szuloElem;
        this.#megjelenit();
        this.#kattintasTrigger();
        window.addEventListener("gameBlocked",()=>{
            this.#blokkolt=true;
        });
        window.addEventListener("gameUnBlocked",()=>{
            this.#blokkolt=false;
        });
    }

    #megjelenit() {
        let html = `<div class="kartya">
                        <img src="kepek/hatter.jpg" alt="${this.#fajlNev}">
                    </div>`;
        this.#divElem.insertAdjacentHTML("beforeend",html);
    }

    setAllapot(){
        this.#allapot = !this.#allapot;
        this.setLap();
    }

    setLap(){
        if (this.#allapot){
            this.#imgElem.src=this.#fajlNev;
        }else{
            this.#imgElem.src="kepek/hatter.jpg";
        }
    }

    getFajlNev(){
        return this.#fajlNev;
    }

    //custum event
    #kattintasTrigger(){
        this.#imgElem=this.#divElem.querySelector(".kartya:last-child img");
        this.#imgElem.addEventListener("click",()=>{
            if(!this.#blokkolt){
                const e = new CustomEvent("fordit",{detail:this});
                window.dispatchEvent(e);
                this.setAllapot();
            }
        });
    }
}