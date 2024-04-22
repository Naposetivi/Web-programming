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
	const game = games[index];
	document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

	const board = document.getElementById('gameBoard');
	board.innerHTML = '';
	game.grid.forEach((row, r) => {
		row.forEach((cell, c) => {
			const cellElement = document.createElement('div');
			cellElement.className = 'cell';
			if (cell === 1) cellElement.classList.add('lightOn');
			cellElement.addEventListener('click', () => toggleCells(r, c));
			board.appendChild(cellElement);
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
		alert("Ви виграли!");
	}
}

function checkWin(grid) {
	return grid.every(row => row.every(cell => cell === 0));
}

function resetGame() {
	setupGame(currentGameIndex);
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
