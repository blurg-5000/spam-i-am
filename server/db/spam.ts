import connection from './connection.ts'
import { Rating, Spam } from '../../models/spam.ts'

// SPAM
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
  // return db('ratings').insert({ 'spam_id': spamId, rating, 'user_id': userId })
  return db('ratings').insert({
    user_id: userId,
    spam_id: spamId,
    rating: rating,
  })
}

// QUIZ
export async function getAllQuestionsAndOptions(db = connection) {
  try {
    const result = await db('questions')
      .leftJoin('options', 'questions.id', 'options.question_id')
      .select(
        'questions.id as question_id',
        'questions.question',
        'options.image',
        'options.text',
        'options.category',
      )
      .orderBy('questions.id', 'asc') // Optional: order by question ID

    // Transform the result into a more usable format
    const questionsMap = result.reduce((acc, row) => {
      const { question_id, question, image, text, category } = row

      if (!acc[question_id]) {
        acc[question_id] = {
          id: question_id,
          question,
          options: [],
        }
      }

      if (image && text && category) {
        acc[question_id].options.push({ image, text, category })
      }

      return acc
    }, {})

    return Object.values(questionsMap)
  } catch (error) {
    console.error('Error fetching questions with options:', error)
    throw error
  }
}

export async function getQuizResultByCategory(
  category: string,
  db = connection,
) {
  return db('results').where({ category }).first()
}

// COMMENTS

// TODO: Get All Comments by SpamId
export async function getCommentsBySpamId(spamId: number, db = connection) {
  return db('comments').where({ spam_id: spamId })
}

// TODO: Add Comment

// TODO: Update Comment

// TODO: Delete Comment
