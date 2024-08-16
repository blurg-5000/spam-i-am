export interface Spam {
  name: string
  image: string
  description: string
  flavour_profile: string
}

export interface SpamData extends Spam {
  id: number
}

export interface Rating {
  id: number
  user_id: number
  spam_id: number
  rating: number
}

export interface AvgRating {
  rating: AvgRatingDetails[]
}

export interface AvgRatingDetails {
  average_rating: number
}

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
  option_1: Option
  option_2: Option
  option_3: Option
  option_4: Option
}

type Option = [string, string]
