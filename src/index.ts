import * as MOBS from "./mobs";
import * as Items from "./items";
import inquirer from "inquirer";
import chalk from "chalk";

let quitGame = false;

let player = new MOBS.Character({
    name: "Bert",
    hitPoints: 20
});
player.equipWeapon(new Items.Weapons.ShortSword());

let enemy = new MOBS.Goblins.Goblin();
enemy.equipWeapon(new Items.Weapons.ShortSword());

while(!player.isDead && !enemy.isDead){
    player.attack(enemy);
    enemy.attack(player);
}




