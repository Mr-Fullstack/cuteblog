import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const typeUserAdmin = await prisma.typeUsers.create({
    data:{
      id:0,
      label:"ADMIN"
    }
  })

  const typeUserEditor= await prisma.typeUsers.create({
    data:{
      id:1,
      label:"EDITOR"
    }
  })

  
  const typeUserReader = await prisma.typeUsers.create({
    data:{
      id:2,
      label:"READER"
    }
  })


  const janeDoe = await prisma.users.create({
    data: {
      email: 'jane@prisma.io',
      name: 'Jane Doe',
      token:'dlkewru3idj893jd3df',
      typeUserId:typeUserAdmin.id,
      posts: {
        createMany:{
          data:[
            {
              title: 'Primeira postagem do blog',
              content: 'testando conteúdo do blog.',
              published: true,
            },
            {
              title: 'Segunda postagem do blog',
              content: 'testando conteúdo do blog.',
            }
          ]
        }
      },
    },
  })

  const jonhDoe = await prisma.users.create({
    data: {
      email: 'jonh@prisma.io',
      name: 'jonh Doe',
      token:'defru3idj8fefef933df',
      typeUserId:typeUserReader.id,
    },
  })

  console.log(janeDoe, jonhDoe);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })