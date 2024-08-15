import request from 'superagent'
import { AvgRatingDetails, SpamData } from '../../models/spam'

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

export function getAvgRatingById(id: number) {
  return request.get(`${rootUrl}/ratings/${id}`).then((res) => {
    return res.body.rating as AvgRatingDetails
  })
}
