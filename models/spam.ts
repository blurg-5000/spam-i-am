export interface Spam {
  name: string
  image: string
  description: string
  flavour_profile: string
}

export interface SpamData extends Spam {
  id: number
}

// RATINGS MODELS
export interface Rating {
  id: number
  spam_id: number
  rating: number
}

export interface AddRating {
  spamId: number
  rating: number
  token: string
}
export interface AvgRating {
  rating: AvgRatingDetails[]
}

export interface AvgRatingDetails {
  average_rating: number
}

//  QUIZ MODELS
export interface QuizAnswers {
  a1: null | string
  a2: null | string
  a3: null | string
  a4: null | string
  a5: null | string
}

export interface QuizQuestions {
  id: number
  question: string
  options: Option[]
}

export interface Option {
  image: string
  text: string
  category: string
}

export interface QuizResult {
  id: number
  category: string
  name: string
  image: string
  info: string
}

// COMMENTS MODELS
export interface Comment {
  user_id: string
  spam_id: number
  comment_text: string
}

export interface CommentData extends Comment {
  id: number
  created_date: number
}

export interface AddComment {
  spamId: number
  comment: string
  token: string
}
