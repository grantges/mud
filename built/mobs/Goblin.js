"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Goblin extends Character_1.default {
    constructor(props) {
        super(props);
        this.hitPoints = 7;
        this.armorClass = 15;
        this.speed = 30;
    }
}
exports.default = Goblin;
