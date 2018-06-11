class Driver {
  constructor(name, joinDay) {
    this.name = name;
    this.startDate = new Date(joinDay);
  }

  yearsExperienceFromBeginningOf(date) {
    let startYear = this.startDate.getFullYear();
    return date - startYear;
  }
}

let eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontalStartIndex = eastWest.indexOf(
      this.beginningLocation["horizontal"]
    );
    let horizontalEndIndex = eastWest.indexOf(
      this.endingLocation["horizontal"]
    );
    let verticalDistance = Math.abs(
      this.endingLocation["vertical"] - this.beginningLocation["vertical"]
    );
    let horizontalDistance = Math.abs(
      horizontalEndIndex - horizontalStartIndex
    );
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
