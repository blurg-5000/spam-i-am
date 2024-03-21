import connection from './connection.ts'
import { Spam } from '../../models/spam.ts'

export async function getAllSpams(db = connection): Promise<Spam[]> {
  return db('spam').select()
}
