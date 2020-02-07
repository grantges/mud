import Item from "../items/Item";
import Character from "../mobs/Character";

export default class Room {

    public name         : string;
    public description  : string;

    protected items     : Item[];
    protected npcs      : Character[];
    protected mobs      : Character[];
    protected exits     : Room[];
    
    constructor(props?:any){
        this.name = props.name;
        this.description = props.description;
        this.items = props.items || null;
        
    }

}