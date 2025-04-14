const fetchQuiz = async () => {
	try {
		const response = await fetch(
			"https://api.sampleapis.com/futurama/questions",
		);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
	}
	return fetchQuiz();
};

export default fetchQuiz;
