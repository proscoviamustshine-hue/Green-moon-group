const request = require('supertest');
const app = require('../app'); // Adjust path as necessary

describe('Groups API', () => {
  // Test for GET /groups
  describe('GET /groups', () => {
    it('should return a list of groups', async () => {
      const res = await request(app).get('/groups');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });

  // Test for POST /groups
  describe('POST /groups', () => {
    it('should create a new group', async () => {
      const newGroup = { name: 'New Group', description: 'A test group' };
      const res = await request(app).post('/groups').send(newGroup);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toEqual(newGroup.name);
    });

    it('should return 400 if required fields are missing', async () => {
      const res = await request(app).post('/groups').send({});
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });
  });
});
