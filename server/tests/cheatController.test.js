import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';
import Cheat from '../model/cheat';

const baseUrl = '/api/v1/cheats';

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
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });
});
