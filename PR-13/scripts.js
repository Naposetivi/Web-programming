document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
	document.getElementById('setup').style.display = 'none';
	document.getElementById('game').style.display = 'block';

	const skladnist = document.getElementById('skladnist').value;
	const color = document.getElementById('color').value;
	const target = document.getElementById('target');
	const targetArea = document.getElementById('targetArea');

	let size, radius, timeLimit;
	switch (skladnist) {
		case 'easy':
			size = 100;
			radius = 100;
			timeLimit = 10;
			break;
		case 'medium':
			size = 50;
			radius = 150;
			timeLimit = 5;
			break;
		case 'hard':
			size = 20;
			radius = 200;
			timeLimit = 2;
			break;
	}

	target.style.width = `${size}px`;
	target.style.height = `${size}px`;
	target.style.background = color;

	let clicks = 0;
	let timeLeft = timeLimit;
	document.getElementById('clicks').textContent = clicks;
	document.getElementById('timeLeft').textContent = timeLeft;

	const interval = setInterval(function () {
		timeLeft--;
		document.getElementById('timeLeft').textContent = timeLeft;
		if (timeLeft <= 0) {
			clearInterval(interval);
			if (clicks < 20) {
				alert(`Ха! Лише ${clicks} попадань. Лох!`);
			} else if (clicks >= 20 && clicks < 50) {
				alert(`Ох ти ж йо! Та ну, ти шо, ${clicks} попадань?`);
			} else if (clicks >= 50 && clicks < 100) {
				alert(`Міг би краще, але нехай, ти і так ще вчишся. У тебе ${clicks} попадань`);
			} else if (clicks >= 100) {
				alert(`Дозвольте потримаю ваше пиво! У вас, вельми-шановний ювелір: ${clicks} попадань!`);
			}


			window.location.reload();
		}
	}, 1000);

	target.addEventListener('click', function () {
		clicks++;
		document.getElementById('clicks').textContent = clicks;
		moveTarget();
		timeLeft = timeLimit + 1;
	});

	function moveTarget() {
		const x = Math.random() * (targetArea.offsetWidth - size);
		const y = Math.random() * (targetArea.offsetHeight - size);
		target.style.left = `${x}px`;
		target.style.top = `${y}px`;
	}

	moveTarget();
}
