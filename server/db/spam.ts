import connection from './connection.ts'
import { Rating, Spam } from '../../models/spam.ts'

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

export async function getAllRatings(db = connection): Promise<Rating[]> {
  return db('ratings').select()
}

export async function getAvgRatingBySpamId(spamId: number, db = connection) {
  return db('ratings')
    .where('spam_id', spamId)
    .avg('rating as average_rating')
    .groupBy('spam_id')
}

export async function addRating(
  spamId: number,
  rating: number,
  userId: number,
  db = connection,
) {
  // return db('ratings').insert({ 'spam_id': spamId, rating, 'user_id': userId })
  return db('ratings').insert({
    user_id: userId,
    spam_id: spamId,
    rating: rating,
  })
}

export async function getAllQuestionsAndOptions(db = connection) {
  // TODO: Make a db query to get data arranged in this structure:
  // {
  //   "id": 11,
  //   "question": "blah blah blah",
  //   "options": [
  //     {
  //       "image": "img.jpg",
  //       "text": "blah blah",
  //       "category": "a"
  //     },
  //     {
  //       "image": "img.jpg",
  //       "text": "blah blah",
  //       "category": "b"
  //     },
  //     {
  //       "image": "imng.jpg",
  //       "text": "blah blah",
  //       "category": "d"
  //     },
  //     {
  //       "image": "img.jpg",
  //       "text": "blah blah",
  //       "category": "c"
  //     }
  //   ]
  // }
  // Think about how you can use array methods to re-organise the data into the correct data structure, once you have retrieved it from the db.
}

export async function getQuizResultByCategory(
  category: string,
  db = connection,
) {
  // TODO: return db results by category
}
