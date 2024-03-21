import request from 'superagent'
import { SpamData } from '../../models/spam'

const rootUrl = '/api/v1'

export function getAllSpams(): Promise<SpamData[]> {
  return request.get(rootUrl + '/spams').then((res) => {
    return res.body.spams as SpamData[]
  })
}
