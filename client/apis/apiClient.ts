import request from 'superagent'
import { AvgRatingDetails, QuizQuestions, SpamData } from '../../models/spam'

const rootUrl = '/api/v1'

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

export function getAvgRatingById(spamId: number) {
  return request.get(`${rootUrl}/ratings/${spamId}`).then((res) => {
    return res.body.rating as AvgRatingDetails
  })
}

export function addRating(spamId: number, rating: number, userId: number) {
  return request
    .post(`${rootUrl}/ratings/${spamId}`)
    .send({ rating, userId })
    .then((res) => {
      return res.body
    })
}

export function getAllQuestions() {
  return request.get(`${rootUrl}/questions`).then((res) => {
    return res.body as QuizQuestions[]
  })
}
