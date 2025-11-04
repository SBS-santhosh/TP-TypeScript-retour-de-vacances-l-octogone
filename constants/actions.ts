import { Action } from "../src/types/action";

export const WARRIOR_ACTIONS: Action[] = [
  { name: "Commit atomique", type: "attack", minDamage: 10, maxDamage: 10 },
  { name: "Coup de Merge", type: "attack", minDamage: 12, maxDamage: 16 },
  { name: "Bouclier Git", type: "defense" },
];

export const MAGE_ACTIONS: Action[] = [
  { name: "Sort de Compilation", type: "attack", minDamage: 6, maxDamage: 14 },
  { name: "Correction magique", type: "attack", minDamage: 8, maxDamage: 10 },
   { name: "Bouclier de TypeScript", type: "defense" },
];

export const ARCHER_ACTIONS: Action[] = [
  { name: "Coup de C++", type: "attack", minDamage: 7, maxDamage: 13 },
  { name: "Typhon de Typescript ", type: "attack", minDamage: 9, maxDamage: 12 },
  { name: "Justice de Javascript", type: "defense" },
];


// Ajouter les actions pour les mages et archers


