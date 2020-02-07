
import Character from "./Character";


class Goblin extends Character {

    constructor(props?:any){
        super(props);

        this.hitPoints  = 7;
        this.armorClass = 15;
        this.speed      = 30;

    }

}

export {
    Goblin
}
