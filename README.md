# Assignment 1

<b> Name: Thi Han </b>
<br>
<b> Admin No: 234560W </b>
<br>
<b> Module No: L1 </b>

---

## Project Introduction

This is a Node.js module serving as a reference for a car-sharing application called GetGo. It allows users to:

1.  Register a user
2.  Add cars to the fleet
3.  View available cars
4.  Rent a car
5.  Return a car

This module uses simple in-memory arrays (`users`, `cars`, `rentals`) to store data, making it lightweight and without the need for a database.

## How to Use

1.  Ensure Node.js is installed on your system.
2.  Copy the `Thihan_GetGo.js` file into a new project folder.
3.  Create a second file, `app.js`, to test the functions within the Node.js module.
4.  Run the demo using: `node app.js`

## Functions

Here's a detailed breakdown of each function, including code snippets and possible outputs.

### 1. `registerUser(name, nric, address, contactno)`

**Purpose:** To register new users to the application.

**Code Snippet:**
```javascript
registerUser(name, nric, address, contactno) {
    const existing = this.users.find(u => u.nric === nric);
    if (existing) {
        return `User with the following NRIC ${nric} already exists!`;
    }

    const newUser = { name, nric, address, contactno };
    this.users.push(newUser);

    return `User with the following name ${name} has been registered successfully!`;
}
```

**Possible Output:**

Successful Output: 
```
User with the following name Thi Han has been registered successfully!
```

Unsuccessful output:
```
User with the following NRIC T0401234D already exists!
```

### 2. `addCar(NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status = "Available")`

**Purpose:** To add new cars to the GetGo fleet.

**Code Snippet:**
```javascript
addCar(NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status = "Available") {
    const existing = this.cars.find(c => c.NumberPlate === NumberPlate);
    if (existing) {
        return `The following car with the plate ${NumberPlate} already exists, please enter a different plate`;
    }

    const newCar = { NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status };
    this.cars.push(newCar);

    return `${Brand} ${Model} with the plate: ${NumberPlate} has been added to the fleet successfully!`;
}
```

**Possible Output:**

Successful output:
```
Successful output #1: Toyota Sienta Hybrid 3rd Gen with the plate: SMY7906E has been added to the fleet successfully!
```

Unsuccessful output :
```
Unsuccessful output #1: The following car with the plate SMY7906E already exists, please kindly enter a different number plate
```

### 3. `viewAllAvailableCars()`

**Purpose:** To display all cars currently available for rent in the GetGo fleet.

**Code Snippet:**
```javascript
viewAllAvailableCars() {
    const availableCars = this.cars.filter(c => c.Status === "Available");

    if (availableCars.length === 0) {
        return "Sorry! No available cars at the moment, please try again later.";
    }

    return availableCars;
}
```

**Possible Output:**
```javascript
[
  {
    id: 1,
    NumberPlate: 'SNH1926F',
    Brand: 'Toyota',
    Model: 'Sienta Hybrid 3rd Gen',
    Color: 'Green',
    RatePerHours: '$60 per Hour',
    VehicleType: 'MPV',
    Status: 'Available'
  },
  {
    id: 2,
    NumberPlate: 'SNA1234A',
    Brand: 'Skoda',
    Model: 'Octavia',
    Color: 'Black',
    RatePerHours: '$40 per Hour',
    VehicleType: 'Sedan',
    Status: 'Available'
  }
]
```
Or if no cars are available:
```
Sorry! No available cars at the moment, please try again later.
```

### 4. `rentCar(nric, name, NumberPlate, Hours)`

**Purpose:** To allow a registered user to rent an available car. It calculates the total rental cost.

**Code Snippet:**
```javascript
rentCar(nric, name, NumberPlate, Hours) {
    const car = this.cars.find(c => c.NumberPlate === NumberPlate);
    const renter = this.users.find(u => u.name === name && u.nric === nric);

    if (!car) return `Car with plate no: ${NumberPlate} not found`;
    if (!renter) return `Renter with the name ${name} is not registered with us. Please register first`;
    if (car.Status !== "Available") return `Car with plate no: ${NumberPlate} is not available`;

    // This code is to convert "$50 per Hour" to 50
    const hourlyRate = parseFloat(car.RatePerHours.replace(/[^0-9.]/g, ""));
    const totalRentalCost = hourlyRate * Hours;

    car.Status = "Rented";

    this.rentals.push({
        name,
        nric,
        NumberPlate,
        Hours,
        totalRentalCost,
        Status: "Ongoing"
    });

    return `${name} has successfully rented ${car.Brand} ${car.Model}, plate No: ${car.NumberPlate} for ${Hours} hour(s). Total Cost: $${totalRentalCost}.`;
}
```

**Possible Output:**

Successful Output:
```
Successful : Thi Han has successfully rented Toyota Sienta Hybrid 3rd Gen, plate No: SMY7906E for 3 hour(s). Total Cost: $150.
```

Unsuccessful output:
```
Unsuccessful output #1 : Car with plate no: SMY7906E is not available
Unsuccessful output #2 : Renter with the name Thi Han is not registered with us. Please register first
```

### 5. `returnCar(nric, NumberPlate)`

**Purpose:** To mark a rented car as returned and update its status to "Available".

**Code Snippet:**
```javascript
returnCar(nric, NumberPlate) {
    const car = this.cars.find(c => c.NumberPlate === NumberPlate);
    const rental = this.rentals.find(r =>
        r.NumberPlate === NumberPlate &&
        r.nric === nric &&
        r.Status === "Ongoing"
    );

    if (!car || !rental) {
        return `No ongoing rental booking found for car number plate: ${NumberPlate} and NRIC: ${nric}`;
    }

    car.Status = "Available";
    rental.Status = "Completed";

    return `Car with the plate ${NumberPlate} has been returned successfully. Thank you for booking with GetGo!`;
}
```

**Possible Output:**

Successful output:
```
Successful Output #1 : Car with the plate SMY7906E has been returned successfully. Thank you for booking with GetGo
```

Unsuccessful output
```

Unsuccessful Output #1 : No ongoing rental booking found for car number plate: SMY7906E and NRIC: T0401234D
```

## Example Usage from `app.js`

```javascript
const getgo = require("./ThiHan_GetGo.js");

console.log("Function 1: Registering User");
console.log(getgo.registerUser("Thi Han", "T0401234D", "Blk 123 Yishun Ave 1 #03-149", "81235175"));

console.log("\nFunction 2: Adding of new Car");
console.log(getgo.addCar("SMY7906E", "Toyota", "Sienta Hybrid 3rd Gen", "Grey", "$50 per Hour", "MPV"));

console.log("\nFunction 3: View Available Cars");
console.log(getgo.viewAllAvailableCars());

console.log("\nFunction 4: Renting a Car");
console.log(getgo.rentCar("T0401234D", "Thi Han", "SMY7906E", 3));

console.log("\nFunction 5: Returning a Car");
console.log(getgo.returnCar("T0401234D", "SMY7906E"));
```

## References

These are link of references that was used for this assignment 

Reference Website: 
*   GetGo Official Website: https://www.getgo.sg/

Readme Writing Reference : 
*   Readme Writing Guide: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
