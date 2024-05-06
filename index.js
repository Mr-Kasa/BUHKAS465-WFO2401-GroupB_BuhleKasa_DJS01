/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = {metersPerSecond:3,
                      kilometersPerHour:38880}     // acceleration (km/h^2)
const time = {seconds : 3600,    //3600 seconds equal to 1 hour
              hours : 1}; 
const distance = 0; // distance (km)
let Startingfuel = 5000; // remaining fuel (kg)
const fuelBurnRate = {kgPerSecond: 0.5,                         // fuel burn rate (kg/s)
                      kgPerHour: 1800}                           //kg per hour
const secondDistance = distance + (initialVelocity*time.hours) //calcultes new distance
const remainingFuel =Startingfuel - fuelBurnRate.kgPerHour*time.hours //calculates remaining fuel
const secondVelocity = calculateNewVelocity(acceleration.kilometersPerHour, initialVelocity, time.hours) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity(acc, vel, time){ 

 return parseFloat(vel + (acc*time))
  
}

console.log(`Corrected New Velocity: ${secondVelocity} km/h`);
console.log(`Corrected New Distance: ${secondDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






