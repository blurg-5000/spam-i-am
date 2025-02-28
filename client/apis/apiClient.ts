import request from 'superagent'
import {
  Rating,
  QuizQuestions,
  SpamData,
  QuizResult,
  CommentData,
  AddComment,
  AddRating,
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

export function getAvgRatingById(spamId: number): Promise<number> {
  return request.get(`${rootUrl}/ratings/${spamId}`).then((res) => {
    return res.body.rating[0].average_rating as number
  })
}

export function addRating(ratingObj: AddRating): Promise<Rating> {
  const { spamId, rating, token } = ratingObj
  return request
    .post(`${rootUrl}/ratings`)
    .set('Authorization', `Bearer ${token}`)
    .send({ rating, spamId })
    .then((res) => {
      return res.body
    })
}

// QUIZ
export function getAllQuestions() {
  return request.get(`${rootUrl}/quiz`).then((res) => {
    return res.body as QuizQuestions[]
  })
}

export function getQuizResult(category: string) {
  return request.get(`${rootUrl}/quiz/${category}`).then((res) => {
    return res.body as QuizResult
  })
}

// COMMENTS
export function getAllCommentsBySpamId(spamId: number) {
  return request.get(`${rootUrl}/comments/${spamId}`).then((res) => {
    return res.body.comments as CommentData[]
  })
}

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
