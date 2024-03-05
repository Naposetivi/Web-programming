

function MyMathPower(b, n) {
	if (n === 0) {
		return 1;
	}
	else {
		let r = b;

		for (let i = 1; i < n; i++) {
			r *= b;
		}

		return r;
	}
}

function MyMathPowerDefault1(b, n) {
	if (!b || !n) {
		return MyMathPower(2, 2)
	}
	return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 2) {
	return MyMathPower(b, n);
}

function TestAllFunctions() {
	console.log(`The ${4}th power of ${5} equals ${MyMathPowerDefault1(5, 4)}`);
	console.log(`The ${2}th power of ${2} equals ${MyMathPowerDefault1(5)}`);
	console.log(`The ${2}th power of ${2} equals ${MyMathPowerDefault1(undefined, 4)}`);
	console.log(`The ${2}th power of ${2} equals ${MyMathPowerDefault1()}`);

	console.log(`The ${4}th power of ${5} equals ${MyMathPowerDefault2(5, 4)}`);
	console.log(`The ${2}th power of ${5} equals ${MyMathPowerDefault2(5)}`);
	console.log(`The ${4}th power of ${2} equals ${MyMathPowerDefault2(undefined, 4)}`);
	console.log(`The ${2}th power of ${2} equals ${MyMathPowerDefault2()}`);
}

//Приклад/перевірка
b = 2;
n = 6;

// const r = MyMathPowerDefault2(b, n);

// console.log(`The ${n}th power of ${b} equals ${r}`);

TestAllFunctions();
