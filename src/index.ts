import { Warrior } from './types/Warrior';
import { Mage } from './types/Mage';
import { Archer } from './types/Archer';
import { determineAttackOrder } from './helpers/determine-attack-order';

function battle(p1: any, p2: any) {
  console.log(`Début du combat : ${p1.name} vs ${p2.name}`);
  while (p1.isAlive() && p2.isAlive()) {
    const { first, second } = determineAttackOrder(p1, p2);
    console.log(`➡️ ${first.name} attaque en premier ce tour.`);

    // premier attaque
    first.performTurn(second);

    // si la cible est toujours vivante, elle riposte
    if (second.isAlive()) {
      second.performTurn(first);
    }

    console.log('---');
  }

  if (p1.isAlive() && !p2.isAlive()) {
    console.log(`🏆 ${p1.name} remporte le combat !`);
  } else if (p2.isAlive() && !p1.isAlive()) {
    console.log(`🏆 ${p2.name} remporte le combat !`);
  } else {
    console.log(`🤝 Match nul, les deux combattants sont morts.`);
  }
}

// Exemple : Booba (guerrier) vs Kaaris (mage) — tu peux changer les classes
const booba = new Warrior('Booba');
const kaaris = new Mage('Kaaris');

battle(booba, kaaris);