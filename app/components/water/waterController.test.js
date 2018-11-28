process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const chai = require('chai');

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

  describe('GET /water/:id', () => {
    beforeEach(() => {
      sinon.stub(Water, 'findById');
    });
    afterEach(() => {
      Water.findById.restore();
    });

    it('should query for document', () => {
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findById.yields(true);
      WaterController.getWaterTestById(id, spyCallback);

      assert.isTrue(spyCallback.called);
      assert.isTrue(Water.findById.calledBefore(spyCallback));
    });

    it('should return document', () => {
      const expectedResults = {hasAttribute: true};
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findById.yields(false, expectedResults);
      WaterController.getWaterTestById(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, expectedResults));
    });

    it('should raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findById.yields(true);
      WaterController.getWaterTestById(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(true));
    });

    it('should not raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findById.yields(false, undefined);
      WaterController.getWaterTestById(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, undefined));
    });
  });

  describe('POST /water', () => {
    beforeEach(() => {
      sinon.stub(Water, 'create');
    });
    afterEach(() => {
      Water.create.restore();
    });

    it('should query to create document', () => {
      const spyCallback = sinon.spy();
      const waterTest = 'test';

      Water.create.yields(true);
      WaterController.createWaterTest(waterTest, spyCallback);

      assert.isTrue(spyCallback.called);
      assert.isTrue(Water.create.calledBefore(spyCallback));
    });

    it('should create document', () => {
      const spyCallback = sinon.spy();
      const waterTest = 'test';

      Water.create.yields(false, waterTest);
      WaterController.createWaterTest(waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, waterTest));
    });

    it('should raise an error', () => {
      const spyCallback = sinon.spy();
      const waterTest = 'test';

      Water.create.yields(true);
      WaterController.createWaterTest(waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(true));
    });

    it('should not raise an error', () => {
      const spyCallback = sinon.spy();
      const waterTest = 'test';

      Water.create.yields(false, undefined);
      WaterController.createWaterTest(waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, undefined));
    });
  });

  describe('PUT /water/:id', () => {
    beforeEach(() => {
      sinon.stub(Water, 'findByIdAndUpdate');
    });
    afterEach(() => {
      Water.findByIdAndUpdate.restore();
    });

    it('should query to update document', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndUpdate.yields(true);
      WaterController.updateWaterTest(id, waterTest, spyCallback);

      assert.isTrue(spyCallback.called);
      assert.isTrue(Water.findByIdAndUpdate.calledBefore(spyCallback));
    });

    it('should update document', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndUpdate.yields(false, waterTest);
      WaterController.updateWaterTest(id, waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, waterTest));
    });

    it('should raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndUpdate.yields(true);
      WaterController.updateWaterTest(id, waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(true));
    });

    it('should not raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndUpdate.yields(false, undefined);
      WaterController.updateWaterTest(id, waterTest, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, undefined));
    });
  });

  describe('DELETE /water/:id', () => {
    beforeEach(() => {
      sinon.stub(Water, 'findByIdAndRemove');
    });
    afterEach(() => {
      Water.findByIdAndRemove.restore();
    });

    it('should query to delete document', () => {
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findByIdAndRemove.yields(true);
      WaterController.deleteWaterTest(id, spyCallback);

      assert.isTrue(spyCallback.called);
      assert.isTrue(Water.findByIdAndRemove.calledBefore(spyCallback));
    });

    it('should delete document', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndRemove.yields(false, waterTest);
      WaterController.deleteWaterTest(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, waterTest));
    });

    it('should raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';

      Water.findByIdAndRemove.yields(true);
      WaterController.deleteWaterTest(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(true));
    });

    it('should not raise an error', () => {
      const spyCallback = sinon.spy();
      const id = 'id';
      const waterTest = 'test';

      Water.findByIdAndRemove.yields(false, waterTest);
      WaterController.deleteWaterTest(id, spyCallback);

      assert.isTrue(spyCallback.calledWith(false, waterTest));
    });
  });
});
