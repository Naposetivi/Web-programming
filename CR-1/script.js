

// Завдання 4


function TriangleArea(fundament = 7, height = 3) {
	let area = 0.5 * fundament * height;
	console.log("Площа трикутника: ", area);
}

TriangleArea(3, 6);
TriangleArea();

//Друге завдання 4

function Boat(color, maxSpeed, max_tonnage, brand, country_of_registration) {
	this.color = color;
	this.maxSpeed = maxSpeed;
	this.max_tonnage = max_tonnage;
	this.brand = brand;
	this.country_of_registration = country_of_registration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasFamily) {
	this.captain = {
		name: name,
		yearsOfExperience: yearsOfExperience,
		hasFamily: hasFamily
	};
};

var BlackPearl = new Boat('green', 300, 500, 'BMW', 'Ukrane');
BlackPearl.AssignCaptain('Jack Sparrow', 500, false);
console.log(BlackPearl);


// Завдання 5


class SimpleCircle {
	constructor(_majorRadius) {
		this.majorRadius = _majorRadius;
	}

	set MajorRadius(value) {
		this.majorRadius = value;
	}
}

class SimpleEllipse extends SimpleCircle {
	constructor(majorRadius, _minorRadius) {
		super(majorRadius);
		this.minorRadius = _minorRadius;
	}

	static calculateArea(majorRadius, minorRadius) {
		return Math.PI * majorRadius * minorRadius;
	}
}



var circle = new SimpleCircle(8);
console.log(circle);

var ellipse = new SimpleEllipse(10, 6);
console.log(ellipse);
console.log("Площа:", SimpleEllipse.calculateArea(ellipse.majorRadius, ellipse.minorRadius));


// Завдання 6

function SubGenerator(num) {
	return function (erlier_num) {
		return erlier_num - num;
	};
}

var for_pryklad = SubGenerator(5);
console.log(for_pryklad(5));
console.log(for_pryklad(10));
