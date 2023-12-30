/*
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // simulate waiting on loading
  await new Promise((resolve) => setTimeout(resolve, 5000))

  // Simulate Error
  // throw new Error('Loading meals failed')
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}*/
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}