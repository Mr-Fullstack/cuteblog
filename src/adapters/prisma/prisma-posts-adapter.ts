import { Categories, Posts, Prisma } from '@prisma/client';
import { PrismaAdapter } from './prisma-adapter';
import { PostsRepository } from 'src/repositories/posts-repository';
import { Post } from 'src/entities/post-entity';


export class PrismaPostsAdapter extends PrismaAdapter implements PostsRepository{

  async create( postData:PostProps ): Promise<Post|ApiErrorProps> {
    
    const { authorId, content, categories, title } = postData;

    try {

      const createdPost = await this.database.posts.create({ data:{
            title,
            authorId,
            content
          }
        }
      )

      if(categories)
      {
        const filterCategories: { 
          categoryId:number,
          postId:number
        }[] = [];

        categories.map(async category => {
          const getCategory = await this.database.categories.findFirst({where:{label:{equals:category}}})
          if(getCategory)
          {
            filterCategories.push(
              { 
                categoryId:getCategory.id,
                postId:createdPost.id
              }
            )
          }
          
        })

        if(filterCategories)
        {
          await this.database.categoriesOnPosts.createMany({data:filterCategories})
        }

      }
    
      const getCategories = await this.database.categoriesOnPosts.findMany({where:{ postId :{ equals: createdPost.id } },include:{category:true}})
      const PostAddedCategories = Object.assign(createdPost,{categories:getCategories.map(category=> category.category.label)});
      
      const newPost = new Post(PostAddedCategories);

      return newPost;

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

  async find<T extends Prisma.PostsFindFirstArgsBase>(filters?:T) :Promise<Posts | ApiErrorProps> {
    const post = await this.database.posts.findFirst(filters);
    let error : ApiErrorProps = {
      message:'',
      code:0
    }
    if(post)
    {
      return post;
    }
    return error;
  }

  async findAll<T extends Prisma.PostsFindManyArgs>(filters?:T)  {
    return null;
  }
  
}