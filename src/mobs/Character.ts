
import { IAbilities, ISkills } from '../entities/types';
import {Weapons} from '../items';
import _ from 'lodash';
import randomInt from 'random-int';
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
    protected items            : any[];
    protected equipedWeapon    : Weapons.Weapon;
    protected equipedArmor     : any[];

    constructor(props?:any) {
        if(props) {
            this.name = props.name;
            this.hitPoints = this.maxHitPoints = props.hitPoints;
        }
        this.isDead = this.isUnconscious = this.isBlinded = this.isPoisoned = this.isStunned = false;
        this.roll();
    }

    private roll = ():void => {
        this.wisdom = randomInt(8,20);
        this.charisma = randomInt(8,20);
        this.strength = randomInt(8,20);
        this.dexterity = randomInt(8,20);
        this.constitution = randomInt(8,20);
        this.intelligence = randomInt(8,20); 

        this.applyRacialTraits();
    }

    private applyRacialTraits = ():void => {

    }

    private applyItemStats = ():void => {
       // this.armorClass = 
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

    public takeDamage = (damage: number):void => {
        
        if(!this.isUnconscious && !this.isDead) {
            //console.log(this.name + " takes " + damage + " points of damage");
            this.hitPoints = this.hitPoints - damage;
            
            if(this.hitPoints <= 0){
                this.hitPoints = 0;
                this.isDead = true;
                console.log( (this.name || "The "+this.race()) + " is dead!");
            }
        }

    }

    public attack = (character: Character):void => {

        console.log(this.equipedWeapon.getDamage);
        
        if(!this.isUnconscious && !this.isDead) {
            let atackee = character.name || ("a " + character.race());
            let atk = this.equipedWeapon.getDamage();
            character.takeDamage(atk);
            console.log((this.name || "A "+this.race()) + " attacks " + atackee + " for " + atk + " points of damnage." );
        }

    }

    public equipWeapon = (item: any):void => {
        this.equipedWeapon = item;
    }

    public equipArmor = (item: any):void => {

    }

    public addItemToInventory = (item: any):void => {
        this.items.push(item);
    }

    public removeItemFromInventory = (name: string):void => {
        _.remove(this.items, function(item){
            return item.name = name;
        });
    }

}