export interface User {
  id: number
  email?: string | null
  name?: string | null
  studentCode: string
  avatar?: string | null
  generation: number
  createdAt: Date
  updatedAt?: Date | null
}
