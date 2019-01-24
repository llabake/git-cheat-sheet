import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';
import Category from '../model/category';

const baseUrl = '/api/v1/categories';

describe('Category Controller', () => {
  after((done) => {
    Category.remove({}).then(() => {
      done();
    });
  });
  it('should successfully fetch all  categories', (done) => {
    request(app)
      .get(`${baseUrl}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(`Categories retrieved successfully`);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });
});
