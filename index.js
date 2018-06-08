function nycBlocks() {
  return {
    '1st Avenue': 1,
    '2nd Avenue': 2,
    '3rd Avenue': 3,
    'Lexington Avenue': 4,
    Park: 5,
    'Madison Avenue': 6,
    '5th Avenue': 7,
  };
}

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf() {
    return new Date().getFullYear() - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const horizontalBlocks = Math.abs(nycBlocks()[this.endingLocation.horizontal] - nycBlocks()[this.beginningLocation.horizontal]);
    return verticalBlocks + horizontalBlocks;
  }

  estimatedTime(isPeak) {
    return isPeak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
