function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    return Math.abs(location - hqLocation);
  }
  
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264; 
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }