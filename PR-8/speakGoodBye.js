var speakGoodBye = (function () {
	var speakWord = "Goodbye";

	function speak(name) {
		console.log(speakWord + " " + name);
	}

	return {
		speak: speak
	};
})();