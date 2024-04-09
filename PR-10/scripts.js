// JS бібліотека для сортування масивів

const LibraryForSort = {
	// метод обміну (долари чи євро?)
	bubbleSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				obminy++;
				if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					peremischennia++;
				}
			}
		}
		console.log(`метод обміну (долари чи євро?): обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// мін.елементи (Вибухонебезпечно!)
	selectionSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			let min_idx = i;
			for (let j = i + 1; j < n; j++) {
				obminy++;
				if ((ascending && arr[j] < arr[min_idx]) || (!ascending && arr[j] > arr[min_idx])) {
					min_idx = j;
				}
			}
			let temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
			peremischennia++;
		}
		console.log(`мін.елементи (Вибухонебезпечно!):  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// метод вставок (тут без коментарів)
	insertionSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 1; i < n; i++) {
			let key = arr[i];
			let j = i - 1;
			while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
				obminy++;
				arr[j + 1] = arr[j];
				j = j - 1;
				peremischennia++;
			}
			arr[j + 1] = key;
		}
		console.log(`метод вставок (тут без коментарів):  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	}
};


const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 666));

console.log("Перший ерей:", array);
console.log("Метод обмінника:", LibraryForSort.bubbleSort([...array]));
console.log("Вибухонебезпечний метод:", LibraryForSort.selectionSort([...array]));
console.log("Без коментарів:", LibraryForSort.insertionSort([...array]));
