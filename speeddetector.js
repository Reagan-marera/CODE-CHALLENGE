const speedLimit = parseInt(prompt("Enter the speed of the car (km/h): "));
let demeritPoints = 0;

if (speedLimit > 70) {
    demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log("Points:", demeritPoints);
    }
} else {
    console.log("Ok");
}