class Square {
	constructor(a) {
		this.side = a;
	}

	static help() {
		console.log("Квадрат - це геометрична фігура яка за формою нагадує квадрат");
	}

	length() {
		return 4 * this.side;
	}

	square() {
		return Math.pow(this.side, 2);
	}

	info() {
		console.log("Квадрат");
		console.log("Сторона:", this.side);
		console.log("Величини кутів: 90°");
		console.log("Сума довжин сторін:", this.length());
		console.log("Площа:", this.square());
	}
}

class Rectangle extends Square {
	constructor(a, b) {
		super(a);
		this.width = b;
	}

	static help() {
		console.log("Прямокутник - це щось на подобу квадрата, але трохи інше");
	}

	length() {
		return 2 * (this.side + this.width);
	}

	square() {
		return this.side * this.width;
	}

	info() {
		console.log("Прямокутник");
		console.log("Довжина:", this.side);
		console.log("Ширина:", this.width);
		console.log("Величини кутів: 90°");
		console.log("Сума довжин сторін:", this.length());
		console.log("Площа:", this.square());
	}
}

class Rhombus extends Square {
	constructor(a, alpha, beta) {
		super(a);
		this._alpha = alpha;
		this._beta = beta;
	}
	get side() {
		return this._side;
	}

	set side(value) {
		this._side = value;
	}

	get alpha() {
		return this._alpha;
	}

	set alpha(value) {
		this._alpha = value;
	}

	get beta() {
		return this._beta;
	}

	set beta(value) {
		this._beta = value;
	}

	static help() {
		console.log("Ромб - це, якби то пояснити... Коли я йшов до церкви там плитка мала таку фігуру");
	}

	length() {
		return 4 * this.side;
	}

	square() {
		return Math.pow(this.side, 2) * Math.sin(this.alpha * Math.PI / 180);
	}

	info() {
		console.log("Ромб");
		console.log("Сторона:", this.side);
		console.log("Тупий кут:", this.alpha, "°");
		console.log("Гострий кут:", this.beta, "°");
		console.log("Сума довжин сторін:", this.length());
		console.log("Площа:", this.square());
	}
}

class Parallelogram extends Rectangle {
	constructor(a, b, alpha, beta) {
		super(a, b);
		this.alpha = alpha;
		this.beta = beta;
	}

	static help() {
		console.log("Паралелограм це -- вставте ці слова у пошук вашого браузера");
	}

	length() {
		return 2 * (this.side + this.width);
	}

	square() {
		return this.side * this.width * Math.sin(this.alpha * Math.PI / 180);
	}

	info() {
		console.log("ХПаралелограм");
		console.log("Довжина:", this.side);
		console.log("Ширина:", this.width);
		console.log("Тупий кут:", this.alpha);
		console.log("Гострий кут:", this.beta);
		console.log("Сума довжин сторін:", this.length());
		console.log("Площа:", this.square());
	}
}

// Виклик хелпів
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// Створення об'єктів
const square = new Square(5);
const rectangle = new Rectangle(4, 6);
const rhombus = new Rhombus(5, 90, 90);
const parallelogram = new Parallelogram(4, 6, 90, 90);

// Виклик інфорів
square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
