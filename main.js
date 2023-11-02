
const questionContainer = document.querySelector('#question-container'); 
const answerContainer = document.querySelector('#answer-container');
const optionBoxes = document.querySelectorAll('.option-box');
const scoreContainer = document.querySelector('#score-container'); 
const optionA = document.querySelector('#option-a');
const optionB = document.querySelector('#option-b'); 
const optionC = document.querySelector('#option-c'); 
const totalScore = document.querySelector('#total'); 
const next = document.querySelector('#next'); 
let score = 0; 
let clickCount = 0;
let currentQuestionIndex = 0;
let currentQuestion;   

//CONSTRUCTOR CLASS FOR QUESTIONS
class Question {
	constructor(question, options, correctAnswer) {
		this.question = question; 
		this.options = options;
		this.correctAnswer = correctAnswer; 
	}
}

//UI CLASS: HANDLES MAIN METHODS OF THE QUIZ 
class UI {
//DISPLAY A QUESTION BASED ON THE CURRENT QUESTION INDEX
	static displayQuestion() { 
		console.log(questions);
		console.log(currentQuestionIndex);
		optionBoxes.forEach((box, index) => {
			box.style.backgroundColor = '#656d8c';
			clickCount = 0;  
		})
		if(currentQuestionIndex === 0) {
			currentQuestion = new Question ('What is the capital of Switzerland?', ['Bern', 'Zurich', 'Lucerne'], 'Bern');
		} else if (currentQuestionIndex === 1) {
			currentQuestion = new Question ('Which of these countries borders Greece?', ['Serbia', 'Albania', 'Croatia'], 'Albania');
		} else if (currentQuestionIndex === 2) {
			currentQuestion = new Question ('Which game was the highest selling in Japan in 1999?', ['Resident Evil 3', 'Pokemon Gold/Silver', 'Final Fantasy 8'], 'Pokemon Gold/Silver');
		} else if (currentQuestionIndex === 3) {
			currentQuestion = new Question ('Which game was the highest selling in the USA in 2002?', ['Super Mario Sunshine', 'Spider-Man: The Movie', 'GTA: Vice City'], 'GTA: Vice City');
		} else if (currentQuestionIndex === 4) {
			currentQuestion = new Question ('Which is the highest-sellling game in 2023 so far?', ['Hogwarts Legacy', 'Diablo 4', 'LOZ: Tears of the Kingdom'], 'Hogwarts Legacy');
		} else if (currentQuestionIndex === 5) {
			currentQuestion = new Question ('What was the highest-grossing film of 2000?', ['Cast Away', 'Gladiator', 'Mission Impossible 2'], 'Mission Impossible 2');
		} else if (currentQuestionIndex === 6) {
			currentQuestion = new Question ('Who has written the most novels of all time?', ['Steven King', 'L Ron Hubbard', 'Kathleen Mary Lindsay'], 'L Ron Hubbard');
		} else if (currentQuestionIndex === 7) {
			currentQuestion = new Question ('Which country has the highest life expextancy?', ['Japan', 'Switzerland', 'Hong Kong'], 'Hong Kong');
		} else if (currentQuestionIndex === 8) {
			currentQuestion = new Question ('Which country has the highest linguistic diversity?', ['Nigeria', 'Papua New Guinea', 'India'], 'Papua New Guinea');
		} else if (currentQuestionIndex === 9) {
			currentQuestion = new Question ('Which is the most expensive city to live in globally?', ['New York', 'Singapore', 'Hong Kong'], 'Hong Kong');
		} 	
		
		if (currentQuestion) {
			console.log(currentQuestion);
			questionContainer.innerHTML = currentQuestion.question;  
			optionA.innerHTML = currentQuestion.options[0];
			optionB.innerHTML = currentQuestion.options[1]; 
			optionC.innerHTML = currentQuestion.options[2];
		}	
		console.log(currentQuestion); 	
	}


	static displayAnswer(answer) {
	// DISPLAY CORRECT ANSWER WITH BACKGROUND COLOR AND TEXT
		const currentQuest = currentQuestion.question;
		const currentOpt = currentQuestion.options;
		const currentCorrect = currentQuestion.correctAnswer; 
		optionBoxes.forEach((box, index) => {
			if(box.textContent === currentCorrect) {
				box.style.backgroundColor = '#658c69'; 
			} else if (box.textContent !== currentCorrect) {
				box.style.backgroundColor = '#8c4c49';
			} else {
				questionContainer.innerHTML = 'click for the next question';
			}
		});
		// IF CLICKED ANSWER IS CORRECT, ADD TO TOTAL SCORE. MAINTAIN CLICK COUNT  
		if(answer === currentCorrect && clickCount === 0) {
			questionContainer.innerHTML = 'Correct!';
			const total = document.querySelector('#total');
			score ++; 
			clickCount++;
			total.innerHTML = `Total Score: ${score}`; 
		} else if (clickCount === 0) {
			questionContainer.innerHTML = 'Wrong!';
			total.innerHTML = `Total Score: ${score}`;
			clickCount++;
		} else {
			questionContainer.innerHTML = 'Click for the next question';
		}
	}


	static nextQuestion() {
		//INCREMENT TO THE NEXT QUESTION 
		//DISPLAY THE CURRENT QUESTION IF CLICKCOUNT IS > 0
		if (clickCount > 0) { 
			currentQuestionIndex ++;
			currentQuestion = questions[currentQuestionIndex]; 
			UI.displayQuestion();
		} else {
			questionContainer.innerHTML = 'please answer the current question';
			questionContainer.id = '';
			questionContainer.classList.add('alert'); 
			setTimeout(function() {
				questionContainer.innerHTML = currentQuestion.question;
				questionContainer.classList.remove('alert'); 
				questionContainer.id = 'question-container';
			}, 2000);

			//setTimeout(() => questionContainer.innerHTML = currentQuestion.question, 2500); 
		} 
		//PROVIDE FINAL SCORE AT END OF QUESTIONS ARRAY
		if(currentQuestionIndex > 9) {
			UI.finalScore(); 
		}
	}

	static finalScore() {
		//INCREASE THE SIZE OF THE FINAL SCORE & REMOVE OTHER DISPLAY CONTAINERS
		answerContainer.style.display = 'none';
		questionContainer.style.display = 'none'; 
		scoreContainer.id = ''; 
		scoreContainer.id = 'final-score-container'; 
		if (score < 6) {
			scoreContainer.innerHTML = `
			<h1>Your total score is ${score}<h1>
			<h1>You are NOT a smart genius.<h1>
			<img  id = "sad-ethan" src = "images/sadethan.jpg" alt = "sad-Ethan-image">`
		} else if (score > 5 && score < 9) {
			scoreContainer.style.color = '#bdbfc9'
			scoreContainer.innerHTML = `
			<h1>Your total score is ${score}<h1>
			<h1>You are a MEDIUM LEVEL smart genius.<h1>
			<img id = "pleased-ethan" src = "images/pleasedethan.jpg" alt = "pleased-Ethan-image">`
		} else {
			scoreContainer.style.color = '#e3c868'
			scoreContainer.innerHTML = `
			<h1>Your total score is ${score}<h1>
			<h1>CONGRATULATIONS! You are a SMART GENIUS!<h1>
			<img id = "genius-ethan" src = "images/geniusethan.gif" alt = "genius-Ethan-gif">`
		}
		
		// if the score is 1-5 give negative message / 6-8 positive / 9-10 extremely positive message 
	}
}

const question1 = new Question ('What is the capital of Switzerland?', ['Bern', 'Zurich', 'Lucerne'], 'Bern')
const question2 = new Question ('Which of these countries borders Greece?', ['Serbia', 'Albania', 'Croatia'], 'Albania')
const question3 = new Question ('Which game was the highest selling in Japan in 1999?', ['Resident Evil 3', 'Pokemon Gold/Silver', 'Final Fantasy 8'], 'Pokemon Gold/Silver')
const question4 = new Question ('Which game was the highest selling in the USA in 2002?', ['Super Mario Sunshine', 'Spider-Man: The Movie', 'GTA: Vice City'], 'GTA: Vice City')
const question5 = new Question ('Which is the highest-sellling game in 2023 so far?', ['Hogwarts Legacy', 'Diablo 4', 'LOZ: Tears of the Kingdom'], 'Hogwarts Legacy')
const question6 = new Question ('What was the highest-grossing film of 2000?', ['Cast Away', 'Gladiator', 'Mission Impossible 2'], 'Mission Impossible 2')
const question7 = new Question ('Who has written the most novels of all time?', ['Steven King', 'L Ron Hubbard', 'Kathleen Mary Lindsay'], 'L Ron Hubbard')
const question8 = new Question ('Which country has the highest life expextancy?', ['Japan', 'Switzerland', 'Hong Kong'], 'Hong Kong')
const question9 = new Question ('Which country has the highest linguistic diversity?', ['Nigeria', 'Papua New Guinea', 'India'], 'Papua New Guinea')
const question10 = new Question ('Which is the most expensive city to live in globally?', ['New York', 'Singapore', 'Hong Kong'], 'Hong Kong')
const questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10',];

// display first question on load
UI.displayQuestion();
console.log(currentQuestion); 
 

// event listener to display correct answer on answer selection
optionBoxes.forEach((box) => {
	box.addEventListener('mouseover', () => {
		if (clickCount === 0) {
		box.style.backgroundColor = '#a3a7bf';
		} 
	});
	box.addEventListener('mouseout', () => {
		if (clickCount === 0) {
		box.style.backgroundColor = '#656d8c';
		}
	});
	box.addEventListener('click', (e) => {
		console.log(e.target.textContent);
		UI.displayAnswer(e.target.textContent); 
	}); 
});
// event listener on button click for next question 
	next.addEventListener('click', (e) => {
		UI.nextQuestion(); 
	});

