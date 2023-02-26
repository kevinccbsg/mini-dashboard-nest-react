import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { userDetail } from '../mocks/user';

describe('User controller', () => {
  let dbConnection: Connection;
  // we use any here because there values we want to assign we cannot give it a type
  let httpServer: any;
  let app: any;
  const collectionName = 'users';

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDBHandle();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await dbConnection.collection(collectionName).deleteMany({});
    await app.close();
  });

  describe('GET /users', () => {
    it('should return BAD_REQUEST if paginate params are not being sent', async () => {
      const response = await request(httpServer).get('/users');
      expect(response.body.message).toEqual('Page size is required');
      expect(response.status).toEqual(400);
    });
    it('getUsers after adding one in the DB', async () => {
      await dbConnection.collection(collectionName).insertOne(userDetail);
      const response = await request(httpServer).get('/users?page=1&pageSize=2')
      expect(response.body.data).toHaveLength(1);
      expect(response.body.pagination).toEqual({
        total: 1,
        page: 1,
        pageSize: 2,
        totalPages: 1,
      });
    });
  });
});
