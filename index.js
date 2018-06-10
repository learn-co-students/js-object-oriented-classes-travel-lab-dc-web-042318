class Driver {
	constructor(name, startDate) {
		this.name = name
		this.startDate = new Date(startDate)
	}
}

Driver.prototype.yearsExperienceFromBeginningOf = function (year) {
	let difference = new Date()
	difference.setFullYear(year)
	return difference.getFullYear() - this.startDate.getFullYear()
}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}
}

Route.prototype.blocksTravelled = function() {
	let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
	let verticalDistance = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
	let begHorizontal, endHorizontal;
	for (let i = 0; i < eastWest.length; i++) {
		if (eastWest[i] === this.beginningLocation.horizontal) {
			begHorizontal = i
		}
		if (eastWest[i] === this.endingLocation.horizontal) {
			endHorizontal = i
		}
	}
	let horizontalDistance = Math.abs(begHorizontal - endHorizontal)
	return verticalDistance + horizontalDistance
}

Route.prototype.estimatedTime = function(peakTime) {
	if (peakTime === true) {
		return this.blocksTravelled() /2
	} else {
		return this.blocksTravelled() /3
	}
}

