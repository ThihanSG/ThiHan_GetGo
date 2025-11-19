# Assignment 1

<b> Name: Thi Han </b>
<br>
<b> Admin No: 234560W </b>
<br>
<b> Module No: L1 </b>

---

## Overview

This is a Node.js module serving as a reference for a car-sharing application called GetGo. It allows users to perform the following tasks:

1.  Register a user
2.  Add cars to the fleet
3.  View available cars
4.  Rent a car
5.  Return a car



## How to Use

1.  Ensure Node.js is installed on your system.
2.  Copy the `Thihan_GetGo.js` file into a new project folder.
3.  Create a second file, `app.js`, to test the functions within the Node.js module.
4.  Run the demo using: `node app.js`

## Functions


### Function 1:  Register User

**Purpose:** To register new users to the application. The function checks if the NRIC already exists and adds the new user if they don't exist.

**Parameter** :

- name 
- nric
- address
- contactNo
<br>


**Possible Output:**

Successful Output: 
```
User with the following name Thi Han has been registered successfully!
```

Unsuccessful output:
```
User with the following NRIC T0401234D already exists!
```

### Function 2. `addCar(NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status = "Available")`

**Purpose:** To add new cars to the GetGo fleet. When a vehicle is added , the default status would be set to "Available"

**Parameter**:
- NumberPlate
- Brand
- Model
- Color
- RatePerHours
- VehicleType
- Status

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

**Purpose:** To display all cars currently available for rent in the GetGo fleet. This function will check if the status of the car is "Available" and will compile all of the cars with the status "Available" and display as a list


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

**Purpose:** To allow a registered user to rent an available car. This function will calculates the total rental cost depending on the cost per hours * the number of hours rented.

**Parameter**:
- nric
- name
- NumberPlate
- Hours

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

**Parameters**
- nric
- NumberPlate


**Possible Output:**

Successful output:
```
Car with the plate SMY7906E has been returned successfully. Thank you for booking with GetGo
```

Unsuccessful output
```

No ongoing rental booking found for car number plate: SMY7906E and NRIC: T0401234D
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