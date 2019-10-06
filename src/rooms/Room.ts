import Item from "../items/item";
import Character from "../mobs/Character";

export default class Room {

    public name         : string;
    public description  : string;
    public weight       : number;

    protected items     : Item[];
    protected npcs      : Character[];
    protected mobs      : Character[];
    protected exits     : Room[];
    
    constructor(props?:any){

    }

}