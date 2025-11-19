class Car {
    static #carID = 1;
    constructor(NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status = "Available") {
        this.id = Car.#carID++;
        this.NumberPlate = NumberPlate;
        this.Brand = Brand;
        this.Model = Model;
        this.Color = Color;
        this.RatePerHours = RatePerHours;
        this.VehicleType = VehicleType;
        this.Status = Status;
    }
}


let carList = [
    new Car("SNH1926F", "Toyota", "Sienta Hybrid 3rd Gen", "Green", "$60 per Hour", "MPV"),
    new Car("SNA1234A", "Skoda", "Octavia", "Black", "$40 per Hour", "Sedan"),
    new Car("SLD8923Y", "Hyundai", "I30 Wagon", "Silver", "$50 per Hour", "Wagon"),
    new Car("SMU992D", "BYD", "Atto 3", "Red", "$70 per Hour", "SUV")
];

module.exports = {

    users: [],
    cars: carList,
    rentals: [],


    // [Function 1] - Registering User
    registerUser(name, nric, address, contactno) {
        const existing = this.users.find(u => u.nric === nric);
        if (existing) {
            return `User with the following NRIC ${nric} already exists!`;
        }

        const newUser = { name, nric, address, contactno };
        this.users.push(newUser);

        return `User with the following name ${name} has been registered successfully!`;
    },


    // [Function 2] - Add new Car 
    addCar(NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status = "Available") {
        const existing = this.cars.find(c => c.NumberPlate === NumberPlate);
        if (existing) {
            return `The following car with the plate ${NumberPlate} already exists, please enter a different plate`;
        }

        const newCar = { NumberPlate, Brand, Model, Color, RatePerHours, VehicleType, Status };
        this.cars.push(newCar);

        return `${Brand} ${Model} with the plate: ${NumberPlate} has been added to the fleet successfully!`;
    },


    // [Function 3] - View Available Cars
    viewAllAvailableCars() {
        const availableCars = this.cars.filter(c => c.Status === "Available");

        if (availableCars.length === 0) {
            return "Sorry! No available cars at the moment, please try again later.";
        }

        return availableCars;
    },


    // [Function 4] - Rent a Car
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
    },


    // [Function 5] Return Car
    returnCar(nric, NumberPlate) {
        const car = this.cars.find(c => c.NumberPlate === NumberPlate);
        const rental = this.rentals.find(r => r.NumberPlate === NumberPlate && r.nric === nric && r.Status === "Ongoing");

        if (!car || !rental) {
            return `No ongoing rental booking found for car number plate: ${NumberPlate} and NRIC: ${nric}`;
        }

        car.Status = "Available";
        rental.Status = "Completed";

        return `Car with the plate ${NumberPlate} has been returned successfully. Thank you for booking with GetGo!`;
    },


    // [Function 6 - View user's rental history]
    viewUserHistory(nric) {
        const history = this.rentals.filter(r => r.nric === nric);
        return history.length ? history : `No rental history for Name: ${this.users.name}, NRIC: ${nric}`;
    },

    // [Function 7] -  Estimate Cost Before Renting
    estimateCost(NumberPlate, Hours) {
        const car = this.cars.find(c => c.NumberPlate === NumberPlate);
        if (!car) return `Car with plate ${NumberPlate} not found`;
        const hourlyRate = parseFloat(car.RatePerHours.replace(/[^0-9.]/g, ""));
        const estimatedTotal = hourlyRate * Hours;
        return `Estimated cost for renting ${car.Brand} ${car.Model} ${NumberPlate} for ${Hours} hour(s) is $${estimatedTotal}.`;
    }




};
