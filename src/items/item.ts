

export default class Item {

    public name         : string;
    public description  : string;
    public weight       : number;
    
    constructor(props?:any){
        if(props){
            this.name = props.name;
            this.description = props.description;
            this.weight = props.weight;
        }
    }
}

