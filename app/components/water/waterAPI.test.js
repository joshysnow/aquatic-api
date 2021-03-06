process.env.NODE_ENV = 'test';

const express = require('express');
const proxyquire = require('proxyquire');
const supertest = require('supertest');
const sinon = require('sinon');
const chai = require('chai');

describe('Water API', () => {
  let app, router, request;

  describe('GET /water', () => {
    let getWaterStub;

    beforeEach(() => {
      getWaterStub = sinon.stub();
      app = express();
      router = proxyquire('./waterAPI', {
        './waterController': { // dependency of water API
          getAllWaterTests: getWaterStub
        }
      });

      app.use(router);

      request = supertest(app);
    });

    it ('returns status 500 on error', (done) => {
      getWaterStub.yields(true, undefined);

      request
        .get('/')
        .expect(500, (err, res) => {
          done();
        });
    });
    it ('returns status 200 and data', (done) => {
      const testData = [{test: 'test'}];
      getWaterStub.yields(false, testData);

      request
        .get('/')
        .expect(200, (err, res) => {
          chai.expect(res.body).to.deep.equal(testData);
          done();
        });
    });
  });

  describe('GET /water/:id', () => {
    let getWaterByIdStub;

    beforeEach(() => {
      getWaterByIdStub = sinon.stub();
      app = express();
      router = proxyquire('./waterAPI', {
        './waterController': { // dependency of water API
          getWaterTestById: getWaterByIdStub
        }
      });

      app.use(router);

      request = supertest(app);
    });

    it ('returns status 500 on error', (done) => {
      getWaterByIdStub.yields(true, undefined);

      request
        .get('/1')
        .expect(500, (err, res) => {
          done();
        });
    });
    it ('returns status 200 and data', (done) => {
      const testData = [{test: 'test'}];
      getWaterByIdStub.yields(false, testData);

      request
        .get('/1')
        .expect(200, (err, res) => {
          chai.expect(res.body).to.deep.equal(testData);
          done();
        });
    });
  });

  describe('POST /water', () => {
    let createWaterStub;

    beforeEach(() => {
      createWaterStub = sinon.stub();
      app = express();
      router = proxyquire('./waterAPI', {
        './waterController': { // dependency of water API
          createWaterTest: createWaterStub
        }
      });

      app.use(router);

      request = supertest(app);
    });

    it ('returns status 500 on error', (done) => {
      createWaterStub.yields(true, undefined);

      request
        .post('/')
        .expect(500, (err, res) => {
          done();
        });
    });
    it ('returns status 200 and data', (done) => {
      const testData = [{test: 'test'}];
      createWaterStub.yields(false, testData);

      request
        .post('/')
        .expect(200, (err, res) => {
          chai.expect(res.body).to.deep.equal(testData);
          done();
        });
    });
  });

  describe('PUT /water/:id', () => {
    let updateWaterStub;

    beforeEach(() => {
      updateWaterStub = sinon.stub();
      app = express();
      router = proxyquire('./waterAPI', {
        './waterController': { // dependency of water API
          updateWaterTest: updateWaterStub
        }
      });

      app.use(router);

      request = supertest(app);
    });

    it ('returns status 500 on error', (done) => {
      updateWaterStub.yields(true, undefined);

      request
        .put('/1')
        .expect(500, (err, res) => {
          done();
        });
    });
    it ('returns status 200 and data', (done) => {
      const testData = [{test: 'test'}];
      updateWaterStub.yields(false, testData);

      request
        .put('/1')
        .expect(200, (err, res) => {
          chai.expect(res.body).to.deep.equal(testData);
          done();
        });
    });
  });

  describe('DELETE /water/:id', () => {
    let deleteWaterStub;

    beforeEach(() => {
      deleteWaterStub = sinon.stub();
      app = express();
      router = proxyquire('./waterAPI', {
        './waterController': { // dependency of water API
          deleteWaterTest: deleteWaterStub
        }
      });

      app.use(router);

      request = supertest(app);
    });

    it ('returns status 500 on error', (done) => {
      deleteWaterStub.yields(true, undefined);

      request
        .delete('/1')
        .expect(500, (err, res) => {
          done();
        });
    });
    it ('returns status 200 and data', (done) => {
      deleteWaterStub.yields(false);

      request
        .delete('/1')
        .expect(200, (err, res) => {
          done();
        });
    });
  });
});
