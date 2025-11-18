# <b> Assignment 1 </b>

<b>Name: Thi Han</b>
<br>
<b>Admin No: 234560W</b>
<br>
<b>Module No: L1 </b>
<br>
--------------------------------------

# Project Introduction:

This is a Node.js Module as a reference of Car sharing application called GetGo, which allows users to

[1] - Register a user

[2] - Adding Cars
 
[3] - View available cars in GetGo fleet

[4] - Renting of car

[5] - Returning a car 



This Node.js module only uses arrays such as users, cars, rentals to store the necessary data , making it simple and lightweight without the use of a database.



# How to use?

1. Make sure you have Node.js installed.

2. Copy the file Thihan_GetGo.js into a new project folder

3. Create a second file called "app.js" to test the functions inside the node.js module file

4. Run the demo using : node app.js 

========================================================

# Functions

- Function 1 -  Registering User

- Function 2 - Adding of new new Cars

- Function 3 - View all available cars in GetGo Fleet

- Function 4 - Renting of car

- Function 5 - Returning of rental car

- Function 6 - Apply Promo Code

# References
Provide the references that you have used to support your assignment. 
- GetGo Offical Website : https://www.getgo.sg/
- ReadMe writing guide : https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


# Example Usage from `app.js`

```js
const getgo = require("./ThiHan_GetGo.js");

console.log("Function 1: Registering User");
console.log(getgo.registerUser("Thi Han", "T0407944I", "Blk 123 Yishun Ave 1 #03-149", "81235175"));

console.log("\nFunction 2: Adding of new Car");
console.log(getgo.addCar("SMY7906E", "Toyota", "Sienta Hybrid 3rd Gen", "Grey", "$50 per Hour", "MPV"));

console.log("\nFunction 3: View Available Cars");
console.log(getgo.viewAllAvailableCars());

console.log("\nFunction 4: Renting a Car");
console.log(getgo.rentCar("T0407944I", "Thi Han", "SMY7906E", 3));

console.log("\nFunction 5: Returning a Car");
console.log(getgo.returnCar("T0407944I", "SMY7906E"));
