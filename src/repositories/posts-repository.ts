import { Posts } from "@prisma/client"
import { Post } from "src/entities/post-entity"

export interface PostsRepository {
  create: (postsData:any) => Promise<any>
  findAll: (filters:any) => Promise<Posts[]|null>
  find: (filters:any) => Promise<Posts|ApiErrorProps>
}