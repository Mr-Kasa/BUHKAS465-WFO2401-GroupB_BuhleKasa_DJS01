/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)

const acceleration = {
  metersPerSecond: 3, // acceleration (m/s^2)
  kilometersPerHour: 38880, // acceleration (km/h^2)
};

const time = {
  seconds: 3600, // 3600 seconds equal to 1 hour
  hours: 1,
};

const fuelBurnRate = {
  kgPerSecond: 0.5, // fuel burn rate (kg/s)
  kgPerHour: 1800, // kg per hour
};

const distance = 0; // distance (km)

// Function to calculate new distance
function calculateNewDistance(initialDistance, velocity, time) {
  if (
    typeof initialDistance !== "number" ||
    typeof velocity !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error("Invalid parameters. Distance, velocity, and time must be numbers.");
  }
  return initialDistance + velocity * time;
}

let startingFuel = 5000; // starting fuel

if (typeof startingFuel !== "number") {
  throw new Error("Invalid parameter. Starting fuel must be a number.");
}

const remainingFuel = startingFuel - fuelBurnRate.kgPerHour * time.hours; // calculates remaining fuel
if (remainingFuel < 0) {
  throw new Error("Fuel cannot be negative. Check fuel burn rate and time.");
}

const secondVelocity = calculateNewVelocity(
  acceleration.kilometersPerHour,
  initialVelocity,
  time.hours
);

const secondDistance = calculateNewDistance(distance, initialVelocity, time.hours); // calculates new distance

// Function to calculate new velocity
function calculateNewVelocity(acc, vel, time) {
  if (
    typeof acc !== "number" ||
    typeof vel !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid parameters. Acceleration, velocity, and time must be numbers."
    );
  }
  return vel + acc * time;
}

console.log(`Corrected New Velocity: ${secondVelocity} km/h`);
console.log(`Corrected New Distance: ${secondDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
