import { User } from "src/entities/user-entity"

export interface UsersRepository {
  create: (user:UserPropsRequest) => Promise<ResponseData<any>>
  findAll: (filters?:any) => Promise<ResponseData<any>>
  find: (email:string) => Promise<ResponseData<any>>
  findToEmail:(email:string)=>Promise<ResponseData<any>>
  usersCount:()=>Promise<ResponseData<any>>
  getType:(typeUserId:number)=>Promise<ResponseData<any>>
}
