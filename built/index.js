"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./mobs/Character"));
const MOBS = __importStar(require("./mobs"));
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let quitGame = false;
const sword = {
    name: "sword",
    damage: 5
};
const axe = {
    name: "Axe",
    damage: 8
};
let player = new Character_1.default({
    name: "Tyrian",
    hitPoints: 11
});
let goblin = new MOBS.Goblin();
console.log("You are being approached by a " + chalk_1.default.redBright(goblin.race()));
inquirer_1.default
    .prompt([
    {
        type: 'list',
        name: 'battle',
        message: 'What do you want to do?',
        choices: [
            'Stand and Fight',
            'Run away!',
        ]
    },
    {
        type: 'list',
        name: 'weapon',
        message: 'Attack the ' + goblin.constructor.name + "with my ",
        choices: ['Sword', 'Axe'],
        filter: function (val) {
            return val.toLowerCase();
        }
    }
])
    .then(answers => {
    console.log(answers);
    while (!player.isDead && !goblin.isDead) {
        player.attack(Math.round(Math.random() * sword.damage), goblin);
        goblin.attack(Math.round(Math.random() * sword.damage), player);
    }
    if (player.isDead) {
        console.log(chalk_1.default.blueBright(player.name) + " has died. Thanks for playing!");
        quitGame = true;
    }
});
