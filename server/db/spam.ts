import connection from './connection.ts'
import { Rating, Spam } from '../../models/spam.ts'

// SPAMS
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

// -------------------------------------

// RATINGS
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
  return db('ratings').insert({
    user_id: userId,
    spam_id: spamId,
    rating: rating,
  })
}

export async function rateSpam(
  rating: Rating,
  auth0_id: string,
  spamId: number,
) {
  return connection('ratings')
    .join('users', 'users.auth0_id', 'ratings.user_id')
    .where('users.auth0_id', auth0_id)
    .where('spam_id', spamId)
    .insert(rating)
}

// -------------------------------------

// QUIZ
export async function getAllQuestionsAndOptions(db = connection) {
  // TODO: Make a db query to get data arranged in this structure:
  // [
  //   {
  //     id: 1,
  //     question: 'Question 1',
  //     options: [
  //       {
  //         image: 'https://placehold.co/300x200',
  //         text: 'Option 1',
  //         category: 'a',
  //       },
  //       {
  //         image: 'https://placehold.co/300x200',
  //         text: 'Option 2',
  //         category: 'b',
  //       },
  //       {
  //         image: 'https://placehold.co/300x200',
  //         text: 'Option 3',
  //         category: 'd',
  //       },
  //       {
  //         image: 'https://placehold.co/300x200',
  //         text: 'Option 4',
  //         category: 'c',
  //       },
  //     ],
  //   },
  // ]
  // Think about how you can use array methods to re-organise the data into the correct data structure, once you have retrieved it from the db.
}

export async function getQuizResultByCategory(
  category: string,
  db = connection,
) {
  // TODO: return db results by category
}

// -------------------------------------

// COMMENTS

// TODO: Get All Comments by SpamId
export async function getCommentsBySpamId(spamId: number, db = connection) {
  return db('comments').where({ spam_id: spamId })
}

// TODO: Create a Comment:

export async function createComment(
  spamId: number,
  comment: string,
  userId: string,
  db = connection,
) {
  return db('comments')
    .insert({
      user_id: userId,
      spam_id: spamId,
      comment_text: comment,
      created_date: Date.now(),
    })
    .returning('*')
}

// TODO: Update Comment

// TODO: Delete Comment
