function Triangular(a = 3, b = 4, c = 5) {
	return { a, b, c };
}

var triangle1 = Triangular();
var triangle2 = Triangular(1, 2, 3);
var triangle3 = Triangular(4, 5, 6);

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);



function PiMultiplier(num) {
	return function () {
		return Math.PI * num;
	};
}



var PiMultiply1 = PiMultiplier(2);
var PiMultiply2 = PiMultiplier(2 / 3);
var PiMultiply3 = PiMultiplier(0.5);

console.log(PiMultiply1());
console.log(PiMultiply2());
console.log(PiMultiply3());



function Painter(color) {
	return function (obj) {
		if (obj.type) {
			console.log(`Color: ${color}, Type: ${obj.type}`);
		}
		else {
			console.log(`Color: ${color}, No 'type' property occurred!`);
		}
	};
}

const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

// 1.2.9
const object1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
const object2 = { type: 'Truck', avg_speed: 90, load_capacity: 2400 };
const object3 = { maxSpeed: 180, color: 'purple', isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
