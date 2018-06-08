const expect = chai.expect;

describe('driver', () => {
  let driver;
  before(() => {
    driver = new Driver('Alfie', 'Aug 9, 1995');
  });

  describe('creating a new driver', () => {
    it('can create a Driver with a name and startDate', () => {
      expect(driver.name).to.equal('Alfie');
    });

    it('sets the driver startDate as a date object', () => {
      expect(driver.startDate).to.be.instanceof(Date);
    });
  });

  describe('yearsExperienceFromBeginningOf', () => {
    it('calculates the number of years driven given an endDate', () => {
      expect(driver.yearsExperienceFromBeginningOf(2018)).to.equal(23);
    });
  });
});

describe('Route', () => {
  let route;

  describe('blocksTravelled', () => {
    it('calculates the number of blocksTravelled', () => {
      const route = new Route(
        { horizontal: 'Park', vertical: '34' },
        { horizontal: 'Park', vertical: '45' },
      );
      expect(route.blocksTravelled()).to.equal(11);
    });

    it('calculates the number of horizontal blocks travelled', () => {
      const route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '34' },
      );
      expect(route.blocksTravelled()).to.equal(4);
    });

    it('combines horizontal and vertical blocks travelled', () => {
      const route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '45' },
      );
      expect(route.blocksTravelled()).to.equal(15);
    });
  });

  describe('estimatedTime', () => {
    it('estimates time in minutes, with travel time of three blocks in a minute', () => {
      const route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '45' },
      );
      expect(route.estimatedTime()).to.equal(5);
    });

    it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', () => {
      const route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '46' },
      );
      expect(route.estimatedTime(true)).to.equal(8);
    });
  });
});
