process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;

const Water = require('./Water');
const WaterController = require('./waterController');

describe('Water Controller', () => {
  describe('GET /water', () => {
    beforeEach(() => {
      sinon.stub(Water, 'find');
    });
    afterEach(() => {
      Water.find.restore();
    });

    it('should query for any documents', () => {
      const spyCallback = sinon.spy();

      Water.find.yields(true);
      WaterController.getAllWaterTests(spyCallback);

      assert.isTrue(spyCallback.called);
      assert.isTrue(Water.find.calledBefore(spyCallback));
    });

    it('should return documents', () => {
      const expectedResults = [{hasAttribute: true}];
      const spyCallback = sinon.spy();

      Water.find.yields(false, expectedResults);
      WaterController.getAllWaterTests(spyCallback);

      assert.isTrue(spyCallback.calledWith(false, expectedResults));
    });

    it('should raise an error', () => {
      const spyCallback = sinon.spy();

      Water.find.yields(true);
      WaterController.getAllWaterTests(spyCallback);

      assert.isTrue(spyCallback.calledWith(true));
    });

    it('should not raise an error', () => {
      const spyCallback = sinon.spy();

      Water.find.yields(false, undefined);
      WaterController.getAllWaterTests(spyCallback);

      assert.isTrue(spyCallback.calledWith(false, undefined));
    });
  });
});
