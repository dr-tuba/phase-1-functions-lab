function distanceFromHqInBlocks(a) {
    if (a > 42) {
        return a - 42;
    } else if (a <= 42) {
        return 42 - a;
    }
};

function distanceFromHqInFeet(a) {
    return distanceFromHqInBlocks(a)*264;
}

function distanceTravelledInFeet(a, b) {
    if (b > a) {
        return ((b - a)*264)
    } else if (a > b) {
        return ((a - b)*264)
    }
};

function calculatesFarePrice(start, destination) {
    let totalFare;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) { 
      totalFare = 0;
    } else if (distance > 400 && distance <= 2000) { 
      totalFare = (distance - 400)*.02; 
    } else if (distance > 2000 && distance <= 2500) {
        totalFare = 25;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
    return totalFare;
};