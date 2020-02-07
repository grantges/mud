import Item from './Item';
import {Dice} from '../entities/types';
import randomInt from 'random-int';

const DAMAGE_TYPE_SLASHING = 'Slashing';
const DAMAGE_TYPE_PIERCING = 'Piercing';
const DAMAGE_TYPE_BLUDGEONING = 'Bludgeoning';


export class Weapon extends Item {

    protected damage:any;
    protected damageType:string;
    protected twoHands:boolean;
    
    
    constructor(props?:any) {
        super(props);

    }

    public getDamage = ():number => {
        return randomInt(1,Dice.D6);
    }

    public getDamageType = ():string => {
        return this.damageType;
    }

    public isTwoHanded = ():boolean => {
        return this.twoHands;
    }
}

export class ShortSword extends Weapon {

    constructor(props?:any) {
        super(props);
        this.name = "Short Sword";
        this.description = "A small Sword";
        this.damageType = DAMAGE_TYPE_SLASHING;
        this.weight = 2;
    }
}