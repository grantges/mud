
import { IAbilities, ISkills } from '../entities/types';
import random from 'math-random';
import { ifError } from "assert";



export default class Character {

    public name         : string;
    public classType    : string;
    public raceType     : string;

    /* Abilities */
    protected wisdom      : number;
    protected strength    : number;
    protected charisma    : number;
    protected dexterity   : number;
    protected intelligence: number;
    protected constitution: number;     
    
    // /* Skills */
    protected acrobatics      : number;
    protected animalHandling  : number;
    protected arcana          : number;
    protected athletics       : number;
    protected deception       : number;
    protected history         : number;
    protected insight         : number;
    protected intimidation    : number;
    protected medicine        : number;
    protected nature          : number;
    protected perception      : number;
    protected performance     : number;
    protected persuasion      : number;
    protected religion        : number;
    protected sleightOfHand   : number;
    protected stealth         : number;
    protected survival        : number;
    
    /** Character Stats */
    protected maxHitPoints      : number;
    protected hitPoints         : number;
    protected armorClass        : number;
    protected inititative       : number;
    protected experiencePoints  : number;

    protected speed               : number; 
    protected inspiration         : number;      
    protected proficiencyBonus    : number;
    protected passivePerception   : number;

    /** Character State  **/
    public isUnconscious     : boolean;
    public isDead            : boolean;
    public isBlinded         : boolean;
    public isPoisoned        : boolean;
    public isStunned         : boolean;

    /** Inventory **/
    protected items          : any[];

    constructor(props?:any) {
        if(props) {
            this.name = props.name;
            this.hitPoints = this.maxHitPoints = props.hitPoints;
        }
        this.isDead = this.isUnconscious = this.isBlinded = this.isPoisoned = this.isStunned = false;
        this.roll();
    }

    private roll = ():void => {
        this.wisdom = Math.round(random()*8) + 8;
        this.wisdom = Math.round(random()*8) + 8;
        this.wisdom = Math.round(random()*8) + 8;
        this.wisdom = Math.round(random()*8) + 8;
        this.charisma = Math.round(random()*8) + 8;
        this.strength = Math.round(random()*8) + 8;
        this.dexterity = Math.round(random()*8) + 8;
        this.constitution = Math.round(random()*8) + 8;
        this.intelligence = Math.round(random()*8 ) + 8;    
        
        console.log(this.stats());
    }

    private applyRacialTraits = ():void => {

    }

    public stats = () => {
        return {
            wisdom: this.wisdom,
            charisma: this.charisma,
            strength: this.strength,
            dexterity: this.dexterity,
            constitution: this.constitution,
            intelligence: this.intelligence
        }
    }

    public race = ():any => {
        let self = this;
        return self.constructor.name;
    }

    takeDamage = (damage: number):void => {
        
        if(!this.isUnconscious && !this.isDead) {
            //console.log(this.name + " takes " + damage + " points of damage");
            this.hitPoints = this.hitPoints - damage;
            
            if(this.hitPoints <= 0){
                this.hitPoints = 0;
                this.isDead = true;
                
                console.log(this.name || this.race() + " is dead!");
            }
        }

    }

    attack = (atk: number, character: Character):void => {
        
        if(!this.isUnconscious && !this.isDead) {
            
            let atackee = character.name || ("a " + character.race());

            console.log((this.name || this.race()) + " attacks " + atackee + " for " + atk + " points of damnage." );
            character.takeDamage(atk);
        }

    }

}