import connection from './connection.ts'
import {
  DBQuestion,
  QuizOption,
  QuizQuestions,
  QuizResult,
  Rating,
  Spam,
  CommentUserData,
} from '../../models/spam.ts'

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

export async function rateSpam(rating: number, userId: string, spamId: number) {
  return connection('ratings')
    .join('users', 'ratings.id', 'users.auth0_id')
    .insert({
      user_id: userId,
      spam_id: spamId,
      rating: rating,
    })
}

// -------------------------------------

// QUIZ
export async function getAllQuestionsAndOptions(db = connection) {
  const getQuestions: DBQuestion[] = await db('options')
    .join('questions', 'options.question_id', '=', 'questions.id')
    .select('*')

  const rfcQuestions = getQuestions.map((el) => {
    return {
      id: el.id,
      question: el.question,
      options: [
        {
          image: el.image,
          text: el.text,
          category: el.category,
        },
      ],
    }
  })
  const resArr: QuizQuestions[] = []
  rfcQuestions.forEach((curr) => {
    if (curr.id > resArr.length) {
      const options: QuizOption[] = [] as QuizOption[]

      rfcQuestions.forEach((ele) => {
        if (ele.id === curr.id) {
          options.push(ele.options[0])
        }
      })

      resArr[resArr.length] = {
        id: curr.id,
        question: curr.question,
        options: options,
      }
    }
  })

  return resArr
}

export async function getQuizResultByCategory(
  category: string,
  db = connection,
) {
  // TODO: return db results by category
  const getQuestionsById = await db('results').select('*').where({ category })

  return getQuestionsById
}

// -------------------------------------

// COMMENTS

// TODO: Get All Comments by SpamId
export async function getCommentsBySpamId(spamId: number, db = connection) {
  return db('comments').where({ spam_id: spamId }).select()
}

// TODO: Ticket 8 Stretch
export async function getCommentsUsersBySpamId(
  spamId: number,
  db = connection,
): Promise<CommentUserData[]> {
  return (await db('comments')
    .join('users', 'comments.user_id', 'users.auth0_id')
    .where('comments.spam_id', spamId)
    .select(
      'comments.id as id',
      'comments.created_date as created_date',
      'comments.user_id as user_id',
      'comments.spam_id as spam_id',
      'comments.comment_text as comment_text',
      'users.user_name as userName',
      'users.email as email',
    )) as CommentUserData[]
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

export function getAllAboutText(db = connection) {
  return db('about_text').select()
}

export function getAllAboutImages(db = connection) {
  return db('about_images').select()
}

// TODO: Update Comment

// TODO: Delete Comment
