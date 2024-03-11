

car1 = new Object();


car1.color = "green";
car1.maxSpeed = 390;
car1.driver = new Object();
car1.tuning = true;
car1.number_of_accidents = 0;

car1.driver.name = "Михайло Мороз";
car1.driver.category = "C";
car1.driver.personal_limitations = "No driving at night";

console.log(car1);

car2 = {
	color: "blue",
	maxSpeed: 400,
	driver: {
		name: "Михайло Мороз",
		category: "B",
		personalLimitations: null
	},
	tuning: false,
	numberOfAccidents: 2
};

console.log(car2);

car1.drive = function () {
	console.log("I am not driving at night");
};

car1.drive();

car2.drive = function () {
	console.log("I can drive anytime");
};

car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
	this.color = color;
	this.weight = weight;
	this.avgSpeed = avgSpeed;
	this.brand = brand;
	this.model = model;
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
	this.driver = {
		name: name,
		nightDriving: nightDriving,
		experience: experience
	};
};

Truck.prototype.trip = function () {
	if (!this.driver) {
		console.log("No driver assigned");
		return;
	}

	console.log("Driver", this.driver.name);


	if (this.driver.nightDriving) {
		console.log("drives at night");
	} else {
		console.log("does not drive at night");
	}
	console.log(" and has " + this.driver.experience + " years of experience");

};


var truck1 = new Truck("blue", 600, 100, "BMW", "X5");
truck1.AssignDriver("Михайло Мороз", true, 70);
truck1.trip();


var truck2 = new Truck("red", 700, 90, "Mercedes-Benz", "GLS");
truck2.AssignDriver("Михайло Мороз", false, 5);
truck2.trip();