import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';
import Cheat from '../model/cheat';

const baseUrl = 'api/v1/cheats';

describe('Cheat Controller', () => {
  after((done) => {
    Cheat.remove({}).then(() => {
      done();
    });
  });
  it('should successfully fetch all cheats', (done) => {
    request(app)
      .get(`${baseUrl}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(`Cheats retrieved successfully`);
        expect(res.body).to.haveOwnProperty('cheats');
        done()
      })
  });

  xit('should return authentication failed for password incorrect', (done) => {
    User.create({ username: 'test_user', password: 'test_password' }).then((createdUser) => {
      request(app)
        .post(`${baseUrl}/login`)
        .send({ username: 'test_user', password: 'password'})
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body.message)
            .to.eql('Authentication failed. Incorrect credentials.');
          expect(res.body.success).to.eql(false);
          done()
        })
    })
  });
  xit('should sign a user in successfully', (done) => {
    User.create({ username: 'test_user', password: 'test_password' }).then((createdUser) => {
      request(app)
        .post(`${baseUrl}/login`)
        .send({ username: 'test_user', password: 'test_password'})
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(`Welcome ${createdUser.username}, you're logged in`);
          expect(res.body.token).to.be.a('string');
          done()
        })
    })
  });
});