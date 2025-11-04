import { Action } from '../types/action';
import { getRandomInt } from '../helpers/random-int';

export abstract class Character {
  public name: string;
  public health: number;
  public attackSpeed: number;
  public possibleActions: Action[];
  private shieldActive: boolean = false;

  constructor(
    name: string,
    health: number,
    attackSpeed: number,
    possibleActions: Action[]
  ) {
    this.name = name;
    this.health = health;
    this.attackSpeed = attackSpeed;
    this.possibleActions = possibleActions;
  }

  public isAlive(): boolean {
    return this.health > 0;
  }

  /**
   * takeDamage: applique des dégâts en tenant compte du bouclier (shield)
   */
  public takeDamage(amount: number): void {
    if (this.shieldActive) {
      console.log(`🛡️ ${this.name} bloque une attaque de ${amount} points de dégâts !`);
      this.shieldActive = false;
      return;
    }

    this.health -= amount;
    console.log(`${this.name} a pris ${amount} points de dégâts`);

    if (this.health <= 0) {
      this.health = 0;
      console.log(`💀 ${this.name} est vaincu`);
    } else {
      console.log(`${this.name} a ${this.health} points de vie restants`);
    }
  }

  /**
   * performTurn: choisit une action aléatoire et l'applique sur la cible
   */
  public performTurn(target: Character): void {
    if (this.possibleActions.length === 0) {
      return;
    }

    const i = getRandomInt(0, this.possibleActions.length - 1);
    const action = this.possibleActions[i];

    if (action.type === 'defense') {
      // activation du bouclier
      this.shieldActive = true;
      console.log(`${this.name} utilise "${action.name}" et se protège !`);
      return;
    }

    // action de type attack
    let minDamage = action.minDamage ?? 0;
    let maxDamage = action.maxDamage ?? minDamage;
    maxDamage = Math.max(maxDamage, minDamage);

    const damage = getRandomInt(minDamage, maxDamage);
    console.log(`${this.name} utilise "${action.name}" sur ${target.name} !`);
    target.takeDamage(damage);
  }
}
