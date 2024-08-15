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
