// Code your solution in this file!

function distanceFromHqInBlocks(currentLocation) {
    return Math.abs(currentLocation - 42)
}
distanceFromHqInBlocks(43)

function distanceFromHqInFeet(currentLocation) {
    const distanceInFeet = (Math.abs(currentLocation - 42) * 264)
    return distanceInFeet
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet(currentLocation, destination) {
    const distanceTravelled = (Math.abs(currentLocation - destination) * 264)
    return distanceTravelled
}

function calculatesFarePrice(start, destination) {
   const distanceTravelled = (Math.abs(start - destination) * 264)
   if (distanceTravelled < 400) {
    return 0;
   } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
   } else if (distanceTravelled > 2500) {
    return 'cannot travel that far';
   } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return ((distanceTravelled - 400) * .02);
   }
}
calculatesFarePrice(34, 24)