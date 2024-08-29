import request from 'superagent'
import {
  Rating,
  QuizQuestions,
  SpamData,
  QuizResult,
  AddComment,
  CommentData,
  Comment,
} from '../../models/spam'

const rootUrl = '/api/v1'

// SPAMS
export function getAllSpams(): Promise<SpamData[]> {
  return request.get(`${rootUrl}/spams`).then((res) => {
    return res.body.spams as SpamData[]
  })
}

export function getSpamById(id: number): Promise<SpamData> {
  return request.get(`${rootUrl}/spams/${id}`).then((res) => {
    return res.body.spam as SpamData
  })
}

// RATINGS
export function getAllRatings() {
  return request.get(`${rootUrl}/ratings`).then((res) => {
    return res.body as Rating[]
  })
}

export function getAvgRatingById(spamId: number) {
  return request.get(`${rootUrl}/ratings/${spamId}`).then((res) => {
    return res.body.rating[0].average_rating as number
  })
}

export function addRating({
  spamId,
  rating,
  userId,
}: {
  spamId: number
  rating: number
  userId: number
}) {
  return request
    .post(`${rootUrl}/ratings/${spamId}`)
    .send({ rating, userId })
    .then((res) => {
      return res.body
    })
}

// QUIZ

export async function getAllQuestions() {
  const res = await request.get(`${rootUrl}/quiz`)
  return res.body as QuizQuestions[]
}

export function getQuizResult(category: string) {
  return request.get(`${rootUrl}/quiz/${category}`).then((res) => {
    return res.body as QuizResult
  })
}

// COMMENTS

export function addComment(commentObj: AddComment): Promise<CommentData> {
  const { comment, spamId, token } = commentObj

  return request
    .post(`${rootUrl}/comments/`)
    .set('Authorization', `Bearer ${token}`)
    .send({ comment: comment, spamId: spamId })
    .then((res) => res.body)
    .catch(logError)
}

function logError(err: Error) {
  console.log(err)
  if (err.message === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it',
    )
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}

// TODO: Create a fetchCommentsBySpamId function.
export function fetchCommentsBySpamId(spamId: number): Promise<CommentData[]> {
  return request.get(`${rootUrl}/comments/${spamId}`).then((res) => {
    return res.body.comments as CommentData[]
  })
}
