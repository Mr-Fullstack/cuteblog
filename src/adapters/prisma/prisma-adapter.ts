import { prismaClient } from 'src/database';

export abstract class PrismaAdapter {
  protected database = prismaClient;
}