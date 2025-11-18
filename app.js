const getgo = require("./Thihan_GetGo.js");

console.log("Function 1: Registering User");
console.log(getgo.registerUser("Thi Han", "T0401234D", "Blk 123 Yishun Ave 1 #03-149", "81234567"));

console.log("\nFunction 2: Adding of new Car");
console.log(getgo.addCar("SMY7906E", "Toyota", "Sienta Hybrid 3rd Gen", "Grey", "$50 per Hour", "MPV"));

console.log("\nFunction 3: View Available Cars");
console.log(getgo.viewAllAvailableCars());

console.log("\nFunction 4: Renting a Car");
console.log(getgo.rentCar("T0401234D", "Thi Han", "SMU992D", 2));

console.log("\nFunction 5: Returning a Car");
console.log(getgo.returnCar("T0401234D", "SMU992D"));
