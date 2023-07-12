export interface User {
  id: number
  email?: string | null
  name?: string | null
  studentCode: string
  avatar?: string | null
  generation: number
  createdAt: Date
  updatedAt?: Date | null
  bio?: string
  github?: string
  facebook?: string
  linkedIn?: string
  dateOfBirth?: string
  phone?: string
  class?: string
  address?: string
}

export interface Contributor {
  name: string
  avatar: string
  github: string
}

export type UserGeneralInfoForm = Partial<
  Omit<
    User,
    'id' |
    'createdAt' |
    'updatedAt' |
    'avatar' |
    'github' |
    'facebook' |
    'linkedIn'
  >
>
