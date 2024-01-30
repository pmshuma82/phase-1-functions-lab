function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInFeet(10, 20, 30, 40);
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTraveledInFeet
}