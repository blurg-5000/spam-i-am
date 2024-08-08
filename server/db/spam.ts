import connection from './connection.ts'
import { Spam } from '../../models/spam.ts'

export async function getAllSpams(db = connection): Promise<Spam[]> {
  return db('spam').select()
}

export async function getSpam(id: number, db = connection): Promise<Spam> {
  return db('spam').where({ id }).first()
}

export async function createSpam(spam: Spam, db = connection) {
  return db('spam').insert(spam)
}

export async function deleteSpam(id: number, db = connection) {
  return db('spam').where({ id }).del()
} 

export async function updateSpam(id: number, spam: Spam, db = connection) {
  return db('spam').where({ id }).update(spam)
}     

export async function getAllRatings( db = connection) {
  return db('ratings').select('*')
}
export async function getRating(spamId: number, db = connection) {
  return db('ratings').where('id', spamId).avg('rating as average_rating').groupBy('spam_id')
}

export async function addRating(spamId: number, rating: number, userId: number, db = connection) {
  return db('ratings').insert({ spam_id: spamId, rating, user_id: userId }).onConflict().merge(['rating'])
} 