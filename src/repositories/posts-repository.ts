export interface PostsRepository {
  create: (postsData:any) => Promise<any>
  findAll: (filters:any) => Promise<any>
}