
/** Enumerations **/

export enum Classes {
    Bard,
    Barbarian,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard
}

export enum Direction {
    NORTH,
    NORTH_WEST,
    NORTH_EAST,
    SOUTH,
    SOUTH_WEST,
    SOUTH_EAST,
    EAST,
    WEST
}

/** Interfaces **/

export interface IAbilities {
    wisdom      : number,
    strength    : number,
    charisma    : number,
    dexterity   : number,
    intelligence: number,
    constitution: number
}


export interface ISkills {
    acrobatics      : number,
    animalHandling  : number,
    arcana          : number,
    athletics       : number,
    deception       : number,
    history         : number,
    insight         : number,
    intimidation    : number,
    medicine        : number,
    nature          : number,
    perception      : number,
    performance     : number,
    persuasion      : number,
    religion        : number,
    sleightOfHand   : number,
    stealth         : number,
    survival        : number
}

