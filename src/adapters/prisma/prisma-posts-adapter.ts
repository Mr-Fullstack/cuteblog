import { Prisma } from '@prisma/client';
import { PrismaAdapter } from './prisma-adapter';
import { PostsRepository } from 'src/repositories/posts-repository';


export class PrismaPostsAdapter extends PrismaAdapter implements PostsRepository{

  async create(userData:UserProps) {

  }

  async findAll<T extends Prisma.UsersFindManyArgs>(filters?:T)  {

  }
  
}