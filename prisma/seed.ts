import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const janeDoe = await prisma.users.create({
    data: {
      email: 'jane@prisma.io',
      name: 'Jane Doe',
      token:'dlkewru3idj893jd3df',
      typeUser:{
        create:{
          id:0,
          label:"ADMIN"
        }
      },
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

  console.log({ janeDoe })
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