import { User } from "src/entities/user-entity"

export interface UsersRepository {
  create: (user:UserPropsRequest) => Promise<User|ApiErrorProps>
  findAll: (filters:any) => Promise<User[]|any[]>
}