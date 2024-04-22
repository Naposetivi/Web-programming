let currentGameIndex = 0;
let currentSteps = 0;
let games = [];
let startTime;
let timer;

function fetchGames() {
	fetch('../Data/lightOut.json')
		.then(response => response.json())
		.then(data => {
			games = data.games;
			setupGame(currentGameIndex);
		});
}

function setupGame(index) {
	clearInterval(timer);
	startTime = Date.now();
	timer = setInterval(updateTime, 1000);

	currentSteps = 0;
	updateSteps();
	let game = games[index];
	document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

	const board = document.getElementById('gameBoard');
	board.innerHTML = '';

	game.grid.forEach((row, r) => {
		let tr = board.insertRow();
		row.forEach((cell, c) => {
			let td = tr.insertCell();
			td.className = cell === 1 ? 'lightOn' : '';
			td.onclick = () => toggleLights(r, c, game.grid);
		});
	});
}

function toggleLights(r, c, grid) {
	let toggle = (r, c) => {
		if (r >= 0 && r < 5 && c >= 0 && c < 5) {
			grid[r][c] = 1 - grid[r][c];
			let cell = document.getElementById('gameBoard').rows[r].cells[c];
			cell.className = grid[r][c] === 1 ? 'lightOn' : '';
		}
	};

	toggle(r, c);
	toggle(r - 1, c);
	toggle(r + 1, c);
	toggle(r, c - 1);
	toggle(r, c + 1);

	currentSteps++;
	updateSteps();

	if (checkWin(grid)) {
		clearInterval(timer);
		alert("Ох ти ж йо! Та не може бути! Ти виграв!");
	}
}

function checkWin(grid) {
	return grid.every(row => row.every(cell => cell === 0));
}

function changeCombination() {
	currentGameIndex = (currentGameIndex + 1) % games.length;
	setupGame(currentGameIndex);
}

function updateSteps() {
	document.getElementById('currentSteps').textContent = currentSteps;
}

function updateTime() {
	let elapsed = Math.floor((Date.now() - startTime) / 1000);
	document.getElementById('gameTime').textContent = elapsed;
}

window.onload = fetchGames;


document.getElementById('resetGame').addEventListener('click', () => {
	localStorage.setItem('currentGameIndex', currentGameIndex);
	location.reload();
});

const savedGameIndex = localStorage.getItem('currentGameIndex');
if (savedGameIndex !== null) {
	currentGameIndex = parseInt(savedGameIndex);
}

setupGame(currentGameIndex);
