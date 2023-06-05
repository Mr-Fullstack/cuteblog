import { User } from "src/entities/user-entity";
import { InMemoryUserRepository } from "src/repositories/in-memory/in-memory-user-repository";

type CreateUserRequest = UserPropsRequest;

type CreateUserResponse = User;

export class CreateUser {

  constructor(private userRepository : InMemoryUserRepository){}

  async execute({ email, name }:CreateUserRequest): Promise<CreateUserResponse> {

    const user = await this.userRepository.create({ email, name });

    return user;
  };

}