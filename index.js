function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = Math.abs(start.slice(0, -2) - end.slice(0, -2))
    if(distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    }
    else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {return tip * fare}
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
