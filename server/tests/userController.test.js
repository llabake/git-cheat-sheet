import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { expect } from 'chai';

import app from '../../app';
import config from "../config";

const baseUrl = '/api/v1/users';

dotenv.config();

describe('User Controller', () => {
  before((done) => {
    const { prefix, host, database } = config;
    const mongoUri = `${prefix}://${host}:${config.port}/${database}`;
    mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
  });
  
  it('should return welome message', (done) => {
    request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Welcome to the coolest API on earth!');
        done();
      });
  })

  it('should sign a user up successfully', (done) => {
    request(app)
      .post(`${baseUrl}/signup`)
      .send({ username: 'test_user', password: 'test_password' })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal(`Your Signup was successful test_user`);
        expect(res.body.data.token).to.be.a('string');
        done();
      });
  });

  it('should handle unique validation  of username', (done) => {
    request(app)
      .post(`${baseUrl}/signup`)
      .send({ username: 'test_user', password: 'test_password' })
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body.message).to.equal(`username already exist`);
        done();
      });
  });
  it('should handle invalid password field', (done) => {
    request(app)
      .post(`${baseUrl}/signup`)
      .send({ username: 'test_user', password: '' })
      .end((err, res) => {
        expect(res.status).to.equal(500);
        expect(res.body.message).to.equal("The field `password` is required");
        done();
      });
  });
  it('should return authentication failed for password incorrect', (done) => {
    request(app)
      .post(`${baseUrl}/login`)
      .send({ username: 'test_user', password: 'password' })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message)
          .to.eql('Authentication failed. Incorrect credentials.');
        expect(res.body.success).to.eql(false);
        done();
      });
  });
  it('should sign a user in successfully', (done) => {
    request(app)
      .post(`${baseUrl}/login`)
      .send({ username: 'test_user', password: 'test_password' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(`Welcome test_user, you're logged in`);
        expect(res.body.data.token).to.be.a('string');
        done();
      });
  });
});