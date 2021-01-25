let question = {
    title:'gato',
    alternatives: ['dog','cat','bird','fish'],
    correctAnswer: 1
};

let questions = [
    {
        title:'gato',
        alternatives: ['dog','cat','bird','fish'],
        correctAnswer: 1
    },
    {
        title:'ave',
        alternatives: ['mouse','hamster','lizard','bird'],
        correctAnswer: 3
    },
    {
        title:'rata',
        alternatives: ['cat','fish','rat','shark'],
        correctAnswer: 2
    },
    {
        title:'mosca',
        alternatives: ['fly','puma','fish','dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function(){

        this.currPosition = 0;
        this.score = 0;

        //.alternative{} all elements that satisfy params
        let alts = document.querySelectorAll('.alternative');
        
        console.log(alts);

        //binding objects for context
        // alts.forEach(function(element,index) {

        //     console.log(this);

        //     element.addEventListener('click', function() {
        //         this.checkAnswer(index);
        //     }.bind(this));
        // }.bind(this));

        //arrow function
        alts.forEach((element,index) => {

            console.log(this);

            element.addEventListener('click', () => {
                this.checkAnswer(index);
            });
        });

        //refresh score
        this.updateStats();

        //show question at index of position
        this.showQuestion(questions[this.currPosition]);
    },

    showQuestion: function(q) {

        //select DOM
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        //.alternative{} all elements that satisfy params
        let alts = document.querySelectorAll('.alternative');
        console.log(alts);

        //
        alts.forEach(function(element,index) {
          element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function(userSelected) {
        let currQuestion = questions[this.currPosition];

        if(currQuestion.correctAnswer == userSelected) {
            //correct
            console.log('yes');
            this.score++;
            this.showResult(true);
        } else {
            //incorrect
            console.log('no');
            this.showResult(false);
        }

        //refresh score
        this.updateStats();
        //increase position
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        this.currPosition++;

        //restarts game
        if(this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your Score: ${this.score}`; // 'Your Score: ' + this.score; 
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        //checks
        if(isCorrect) {
            result = 'Correct!';
        } else {
            //get current q
            let currQuestion = questions[this.currPosition];

            //get correct ans index
            let corrAnsIndex = currQuestion.correctAnswer;

            //get correct ans in text form

            let corrAnsText = currQuestion.alternatives[corrAnsIndex];
            result = `Wrong. Correct Answer: ${corrAnsText}`;
        }

        resultDiv.textContent = result;
    }
}
//calling the start method in the app object
app.start();



// //EVENT LISTENERS
// let button = document.getElementById('btn');

// button.addEventListener('click', function() {
//     console.log('Clicked');
// });



// moved methods into object, because they are all functions of the app
/*function start() {
    //.alternative{} all elements that satisfy params
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);

    //
    alts.forEach(function(element,index) {
        element.addEventListener('click', function() {
            console.log("check correct answer");
        });
    });

    //show first question
    showQuestion(question);
}

function showQuestion(q){
    //select DOM
    let titleDiv = document.getElementById('title');

    titleDiv.textContent = q.title;

    //.alternative{} all elements that satisfy params
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);

    //
    alts.forEach(function(element,index) {
        element.textContent = q.alternatives[index];
    });
}*/


//old way of finding correct answers before creating start()
/*function showQuestion(q){
    //select DOM
    let titleDiv = document.getElementById('title');

    titleDiv.textContent = q.title;

    //.alternative{} all elements that satisfy params
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);

    //
    alts.forEach(function(element,index) {
        element.textContent = q.alternatives[index];

        element.addEventListener('click', function() {
            //check for correct answer
            if(index == q.correctAnswer) {
                console.log('Correct!');
            }else {
                console.log('Incorrect.');
            }
        });
    });
}*/



