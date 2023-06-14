import { Prisma } from '@prisma/client';
import { UsersRepository } from "src/repositories/users-repository";
import { User} from 'src/entities/user-entity';
import { PrismaAdapter } from './prisma-adapter';

export class PrismaUsersAdapter extends PrismaAdapter implements UsersRepository{

  async create(userData:UserPropsRequest,typeUserDefault?:number): Promise<ResponseData<User>> {

    const response: ResponseData<User> = {
      statusCode:200
    }
    
    const { email, name } = userData;

    try 
    {
      const createUser = await this.database.users.create({
        data: {
          email, 
          name,
          typeUser:{
            connect:{ 
              id:( typeUserDefault ? typeUserDefault : 2 ) //  typeUser === 0 => 'ADMIN', typeUser === 1 => 'EDITOR', typeUser === 2 => 'READER'
            } 
          }
        },
        include:{
          typeUser:true
        }
      })

      const typeUser = createUser.typeUser as UserTypeProps;
      response.payload = new User({...createUser,typeUser});    
    } 
    catch (e) 
    {
      if (e instanceof Prisma.PrismaClientKnownRequestError) 
      {
        if (e.code === 'P2002') 
        {
          response.error = 'Email já cadastrado';
          response.statusCode = 409;
        }
      }
    }

    return response;
  }

  async find(email:string): Promise<ResponseData<User>> {

    const response:ResponseData<User> = {
      statusCode:200
    }

    const findUser = await this.database.users.findUnique({
      where:{
        email
      },
      include:{
        typeUser:true
      }
    });
  
    if(findUser)
    {
      const typeUser = findUser.typeUser as UserTypeProps;
      const user = new User({...findUser,typeUser})
      response.payload = user;
    }
    else
    {
      response.error= 'Not founded user';
      response.statusCode= 404;
    }

    return response;
  }

  async findAll<T extends Prisma.UsersFindManyArgs>(filters?:T): Promise<ResponseData<User[]>>{

    const users = await this.database.users.findMany({
      ...filters,
      include:{
        typeUser:true
      }
    });
 
    const response:ResponseData<User[]> = {
      payload:users.map( user => {
        const typeUser =  user.typeUser as UserTypeProps;
        const userMount:UserEntityProps = {...user,typeUser}
        return new User({...userMount});
      }),
      statusCode:200
    }

    return response;
  }

  async findToEmail(email:string): Promise<ResponseData<User>> {

    const response:ResponseData<User> = {
      statusCode:200
    }

    const user = await this.database.users.findFirst({
      where:{
        email:{
          equals:email
        }
      },
      include:{
        typeUser:true
      }
    });

    if(user)
    {
      const typeUser = user.typeUser as UserTypeProps;
      response.payload = new User({...user,typeUser});
    }
    else
    {
      response.error = 'Not founded user to email';
      response.statusCode= 404;
    }

    return response;
  }

  async getType(typeUserId:number): Promise<ResponseData<UserTypeProps>>{

    const response:ResponseData<UserTypeProps> = {
      statusCode:200
    }

    const findTypeUser = await this.database.typeUsers.findFirst({
      where:{
        id:{
          equals:typeUserId
        }
      }
    });

    if(findTypeUser)
    {
      const typeUser = findTypeUser as UserTypeProps;
      response.payload = typeUser;
    }
    else
    {
      response.error= "Not found type to user";
      response.statusCode= 404;
    }

    return response;
  }

  async usersCount(): Promise<ResponseData<number>>{
    const response:ResponseData<number> = {
      statusCode:200
    }
    const user_count = await this.database.users.count();
    response.payload = user_count;
    return response;
  }
}