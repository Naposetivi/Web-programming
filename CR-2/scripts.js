// 4
let array = [];
for (let i = 0; i < 20; i++) {
	array.push(Math.floor(Math.random() * 100));
}
array.sort((a, b) => a - b);

document.getElementById('ForMasyv').innerHTML = "<p>Відсортований масив: " + array.join(', ') + "</p>";

// 5


function generate() {
	const height = document.getElementById('Vubirka').value;
	const ForKvadrat = document.getElementById('ForKvadrat');
	const samKvadrat = document.getElementById('samKvadrat');

	if (samKvadrat) {
		samKvadrat.remove();
	}

	ForKvadrat.innerHTML += '<div id="samKvadrat" style="background-color: blue; width: 30px; height: ' + height + 'px;"></div>';
}


// 6

function moveLeft() {
	const ForKvadrat = document.getElementById('ForKvadrat');
	const computedStyle = window.getComputedStyle(ForKvadrat);
	let currentLeft = parseInt(computedStyle.getPropertyValue('left')) || 0;
	ForKvadrat.style.left = (currentLeft - 20) + 'px';
}

function moveRight() {
	const ForKvadrat = document.getElementById('ForKvadrat');
	const computedStyle = window.getComputedStyle(ForKvadrat);
	let currentLeft = parseInt(computedStyle.getPropertyValue('left')) || 0;
	ForKvadrat.style.left = (currentLeft + 20) + 'px';
}
