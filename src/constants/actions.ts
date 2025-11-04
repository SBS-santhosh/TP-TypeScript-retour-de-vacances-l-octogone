import { Action } from "../types/action";

export const WARRIOR_ACTIONS: Action[] = [
  { name: "Commit atomique", type: "attack", minDamage: 10, maxDamage: 10 },
  { name: "Coup de Merge", type: "attack", minDamage: 12, maxDamage: 16 },
  { name: "Bouclier Git", type: "defense" },
];

export const MAGE_ACTIONS: Action[] = [
  { name: "Sort de Compilation", type: "attack", minDamage: 6, maxDamage: 14 },
  { name: "Correction magique", type: "attack", minDamage: 8, maxDamage: 10 },
  { name: "Bouclier de Bash" , type: "defense" },
];

export const ARCHER_ACTIONS: Action[] = [
  { name: "Flèche Flatpak", type: "attack", minDamage: 7, maxDamage: 13 },
  { name: "Tir de Typescript ", type: "attack", minDamage: 9, maxDamage: 12 },
  { name: "Esquive Eclipse ", type: "defense" },
];


// Ajouter les actions pour les mages et archers


