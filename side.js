questions.forEach((question, index) => {
			if(questionIndex.value === index.value) {
				console.log(question); 
			}

			const newQuestion = `quiz${index}`; 
				console.log(newQuestion); 
				const currentQuestion = newQuestion.question;
				const currentOptions = question.options;
				const currentCorrectAnswer = question.correctAnswer; 
				console.log(currentQuestion);
				console.log(currentOptions);  
				console.log(currentCorrectAnswer);
				questionContainer.innerHTML = currentQuestion;  
				optionA.innerHTML = currentOptions[0];
				optionB.innerHTML = currentOptions[1]; 
				optionC.innerHTML = currentOptions[2]; 
			}



			class UI {
	static displayQuestion() { 
		console.log(questions);
		console.log(currentQuestionIndex);  
		if(currentQuestionIndex === 0) {
			const currentQuestion = new Question ('What is the capital of Switzerland?', ['Bern', 'Zurich', 'Lucerne'], 'Bern')
			console.log(currentQuestion); 
			console.log(question1);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 1) {
			const currentQuestion = new Question ('Which of these countries borders Greece?', ['Serbia', 'Albania', 'Croatia'], 'Albania')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 2) {
			const currentQuestion = new Question ('Which game was the highest selling in Japan in 1999?', ['Resident Evil 3', 'Pokemon Gold/Silver', 'Final Fantasy 8'], 'Pokemon Gold/Silver')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 3) {
			const currentQuestion = new Question ('Which game was the highest selling in the USA in 2002?', ['Super Mario Sunshine', 'Spider-Man: The Movie', 'GTA: Vice City'], 'GTA: Vice City')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 4) {
			const currentQuestion = new Question ('Which is the highest-sellling game in 2023 so far?', ['Hogwarts Legacy', 'Diablo 4', 'LOZ: Tears of the Kingdom'], 'Hogwarts Legacy')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 5) {
			const currentQuestion = new Question ('What was the highest-grossing film of 2000?', ['Cast Away', 'Gladiator', 'Mission Impossible 2'], 'Mission Impossible 2')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 6) {
			const currentQuestion = new Question ('Who has written the most novels of all time?', ['Steven King', 'L Ron Hubbard', 'Kathleen Mary Lindsay'], 'L Ron Hubbard')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 7) {
			const currentQuestion = new Question ('Which country has the highest life expextancy?', ['Japan', 'Switzerland', 'Hong Kong'], 'Hong Kong')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 8) {
			const currentQuestion = new Question ('Which country has the highest linguistic diversity?', ['Nigeria', 'Papua New Guinea', 'India'], 'Papua New Guinea')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} else if (currentQuestionIndex === 9) {
			const currentQuestion = new Question ('Which is the most expensive city to live in globally?', ['New York', 'Singapore', 'Hong Kong'], 'Hong Kong')
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		} 			
	}
