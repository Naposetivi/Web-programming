import { games } from './gameData.js';

let currentGameIndex = 0;
let currentSteps = 0;
let startTime;
let timer;

document.getElementById('newGame').addEventListener('click', () => setupGame(currentGameIndex));
document.getElementById('changeGame').addEventListener('click', () => {
	currentGameIndex = (currentGameIndex + 1) % games.length;
	setupGame(currentGameIndex);
});

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
			cellElement.classList.add('cell');
			if (cell === 1) cellElement.classList.add('on');
			cellElement.addEventListener('click', () => toggleCells(r, c));
			board.appendChild(cellElement);
		});
	});
}

function toggleCells(row, col) {
	currentSteps++;
	updateSteps();
	toggleCell(row, col);
	toggleCell(row - 1, col);
	toggleCell(row + 1, col);
	toggleCell(row, col - 1);
	toggleCell(row, col + 1);
}

function toggleCell(row, col) {
	const board = document.getElementById('gameBoard');
	const rows = board.children;
	if (row >= 0 && row < rows.length / 5 && col >= 0 && col < 5) {
		const cell = rows[row * 5 + col];
		cell.classList.toggle('on');
	}
}

function updateSteps() {
	document.getElementById('currentSteps').textContent = currentSteps;
}

function updateTime() {
	const elapsed = Math.floor((Date.now() - startTime) / 1000);
	document.getElementById('timeElapsed').textContent = elapsed;
}

setupGame(currentGameIndex);
