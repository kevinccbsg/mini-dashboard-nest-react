import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { validate as isValidUUID } from 'uuid';
import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { userDetail, newUserRequest } from '../mocks/user';

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

  afterEach(async () => {
    await dbConnection.collection(collectionName).deleteMany({});
  });

  afterAll(async () => {
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

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const response = await request(httpServer)
        .post('/users')
        .send(newUserRequest);
      expect(response.status).toEqual(201);
      const users = await dbConnection.collection(collectionName).find({}).toArray();
      expect(users).toHaveLength(1);
      expect(isValidUUID(users[0]._id)).toBeTruthy();
      expect(isValidUUID(users[0].isOnline)).toBeFalsy();
    });
  });

  describe('PUT /users/:id', () => {
    it('should update an old user', async () => {
      await request(httpServer)
        .post('/users')
        .send(newUserRequest);
      let users = await dbConnection.collection(collectionName).find({}).toArray();
      const insertedUser = users[0];
      const response = await request(httpServer)
        .put(`/users/${insertedUser._id}`)
        .send({
          name: 'update name',
          lastName: 'update lastname',
        });
      expect(response.status).toEqual(202);
      users = await dbConnection.collection(collectionName).find({}).toArray();
      expect(users[0].name).toEqual('update name');
      expect(users[0].lastName).toEqual('update lastname');
      expect(users[0].phone).toEqual(newUserRequest.phone);
    });
  });
});
