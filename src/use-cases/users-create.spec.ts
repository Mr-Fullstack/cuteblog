import { describe, expect, it } from 'vitest'
import { CreateUser } from './create-user';

import { User } from 'src/entities/user-entity';
import { InMemoryUserRepository } from 'src/repositories/in-memory/in-memory-user-repository';


describe('Create User',()=>{

  it('shlould be able to create an user',()=> {

  const userRepository = new InMemoryUserRepository();
  const createUser = new CreateUser(userRepository);

  expect(createUser.execute({
    email:"marcosfullstack@gmail.com",
    name:"Marcos antonio",
    password:"12345678"
  })).resolves.toBeInstanceOf(User)

  })
})