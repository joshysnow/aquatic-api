process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const WaterUtils = require('./waterUtils');

describe('Water Utils', () => {
  describe('Get Request ID', () => {
    it('returns id from request params', () => {
      const req = {params: {id: '1'}};
      const result = WaterUtils.getRequestId(req);
      expect(result).to.equal('1');
    });
  });
  describe('Get Request Water', () => {
    const req = {
      body: {
        ph: '7.2',
        kh: '3',
        gh: '4',
        ammonia: '0.25',
        nitrite: '0.1',
        nitrate: '10',
        phosphate: '0.2'
      }
    };
    it('extracts ph', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.ph).to.equal('7.2');
    });
    it('extracts kh', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.kh).to.equal('3');
    });
    it('extracts gh', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.gh).to.equal('4');
    });
    it('extracts ammonia', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.ammonia).to.equal('0.25');
    });
    it('extracts nitrite', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.nitrite).to.equal('0.1');
    });
    it('extracts nitrate', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.nitrate).to.equal('10');
    });
    it('extracts phosphate', () => {
      const result = WaterUtils.getRequestWaterTest(req);
      expect(result.phosphate).to.equal('0.2');
    });
  });
});
