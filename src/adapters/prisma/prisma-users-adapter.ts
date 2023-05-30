import { Prisma } from '@prisma/client';
import { UsersRepository } from "src/repositories/users-repository";
import { User} from 'src/entities/user-entity';
import { PrismaAdapter } from './prisma-adapter';

import {createUserWithEmailAndPassword } from "firebase/auth";


export class PrismaUsersAdapter extends PrismaAdapter implements UsersRepository{

  async create(userData:UserPropsRequest): Promise<User|ApiErrorProps> {

    const { email, name, password } = userData;

    const userCount = await this.database.users.count()+1;
  
    try {

      const user = await this.database.users.create({
        data: {
          id:"user_"+userCount,
          token:"teste",
          email, 
          name, 
        }
      })
  
      const newUser = new User(user);

      return newUser;

    } catch (e) {

      let error : ApiErrorProps = {
        message:'',
        code:0
      }

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          error = {
            message:'Email já cadastrado',
            code:409
          }
        }
      }

      return error;
    }

  }

  async findAll<T extends Prisma.UsersFindManyArgs>(filters?:T):  Promise<User[]> {

    const users  = await this.database.users.findMany(filters);

    const usersFounded: User[] = [];

    users.map(user => {
      usersFounded.push( new User({...user}));
    })

    return usersFounded;

  }

  async findToEmail(email:string): Promise<User|null> {

    const user  = await this.database.users.findFirst({where:{email:{equals:email}}});

    if(user)
    {
      return new User({...user});
    }

    return null;

  }
}