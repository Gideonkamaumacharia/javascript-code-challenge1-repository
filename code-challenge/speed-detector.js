function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const pointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Speed: Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        if (demeritPoints > pointsThreshold) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}


calculateDemeritPoints(80); 
calculateDemeritPoints(95);  
calculateDemeritPoints(150);
