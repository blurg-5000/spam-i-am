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

// TOFU
export async function getAllTofu(db = connection): Promise<Spam[]> {
  return db('tofu').select()
}

export async function getTofu(id: number, db = connection): Promise<Spam> {
  return db('tofu').where({ id }).first()
}

export async function createTofu(tofu: Spam, db = connection) {
  return db('tofu').insert(tofu)
}

export async function deleteTofu(id: number, db = connection) {
  return db('tofu').where({ id }).del()
}

export async function updateTofu(id: number, tofu: Spam, db = connection) {
  return db('tofu').where({ id }).update(tofu)
}
