import { User } from "src/entities/user-entity";
import { UsersRepository } from "../users-repository";

export class InMemoryUserRepository implements UsersRepository{

  public users: User[];

  constructor(){
    this.users = [];
  }

  async create(userData: UserPropsRequest) {
    
    const user = new User({
      ...userData,
      id:"TextDecoderStream",
      token:"oijnfneufne"
    });

    this.users.push(user);

    return user ;
  }

  async findAll() : Promise<any[] | User[]> {
    
    return this.users;

  }

}