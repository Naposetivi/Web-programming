document.getElementById('Yes_it_is_really_a_button').addEventListener('click', function () {
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var meal = document.querySelector('input[name="meal"]:checked');
	var dishes = document.querySelectorAll('input[name="dish"]:checked');
	var comment = document.getElementById('comment').value;

	if (!username || !email || !meal || dishes.length === 0) {
		alert('Міша, всьо  . . . . .  давай па новай');
		return;
	}

	var mealValue = meal ? meal.value : 'не вказано';
	var dishesValue = Array.from(dishes).map(function (dish) {
		return dish.value;
	}).join(', ');

	var outputText = username + ' (' + email + ') з’їв на ' + mealValue + ' ' + dishesValue;
	if (comment) {
		outputText += ' та залишив такий коментар: "' + comment + '"';
	}

	document.getElementById('output').innerText = outputText;
});