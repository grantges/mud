"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_random_1 = __importDefault(require("math-random"));
class Character {
    constructor(props) {
        this.roll = () => {
            this.wisdom = Math.round(math_random_1.default() * 8) + 8;
            this.wisdom = Math.round(math_random_1.default() * 8) + 8;
            this.wisdom = Math.round(math_random_1.default() * 8) + 8;
            this.wisdom = Math.round(math_random_1.default() * 8) + 8;
            this.charisma = Math.round(math_random_1.default() * 8) + 8;
            this.strength = Math.round(math_random_1.default() * 8) + 8;
            this.dexterity = Math.round(math_random_1.default() * 8) + 8;
            this.constitution = Math.round(math_random_1.default() * 8) + 8;
            this.intelligence = Math.round(math_random_1.default() * 8) + 8;
            console.log(this.stats());
        };
        this.applyRacialTraits = () => {
        };
        this.stats = () => {
            return {
                wisdom: this.wisdom,
                charisma: this.charisma,
                strength: this.strength,
                dexterity: this.dexterity,
                constitution: this.constitution,
                intelligence: this.intelligence
            };
        };
        this.race = () => {
            let self = this;
            return self.constructor.name;
        };
        this.takeDamage = (damage) => {
            if (!this.isUnconscious && !this.isDead) {
                //console.log(this.name + " takes " + damage + " points of damage");
                this.hitPoints = this.hitPoints - damage;
                if (this.hitPoints <= 0) {
                    this.hitPoints = 0;
                    this.isDead = true;
                    console.log(this.name || this.race() + " is dead!");
                }
            }
        };
        this.attack = (atk, character) => {
            if (!this.isUnconscious && !this.isDead) {
                let atackee = character.name || ("a " + character.race());
                console.log((this.name || this.race()) + " attacks " + atackee + " for " + atk + " points of damnage.");
                character.takeDamage(atk);
            }
        };
        if (props) {
            this.name = props.name;
            this.hitPoints = this.maxHitPoints = props.hitPoints;
        }
        this.isDead = this.isUnconscious = this.isBlinded = this.isPoisoned = this.isStunned = false;
        this.roll();
    }
}
exports.default = Character;
