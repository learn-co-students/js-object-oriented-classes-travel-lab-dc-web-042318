const eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];

class Driver {
  constructor(name, datestring) {
    this.name = name;
    this.startDate = new Date(datestring);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const verticalTravelled = Math.abs(
      this.beginningLocation["vertical"] - this.endingLocation["vertical"]
    );
    const horizontalTravelled = Math.abs(
      eastWest.indexOf(this.beginningLocation["horizontal"]) -
        eastWest.indexOf(this.endingLocation["horizontal"])
    );
    return verticalTravelled + horizontalTravelled;
  }
  estimatedTime(rush) {
    if (rush) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
