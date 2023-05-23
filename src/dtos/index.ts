import { PrismaPostsAdapter } from "src/adapters/prisma/prisma-posts-adapter";
import { PrismaUsersAdapter } from "src/adapters/prisma/prisma-users-adapter";

class UserDTO extends PrismaUsersAdapter{}
class PostDTO extends PrismaPostsAdapter{}

const usersDTO = new UserDTO();
const postDTO = new PostDTO();

export { 
  usersDTO,
  postDTO
}

