(function(){
function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
};

Question.prototype.displayAnswer = function () {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
        console.log(i + ': ' + this.answer[i])
    }

}

Question.prototype.chechAnswer = function (ans,callback) {
    var sc;
    if (ans === this.correct) {
        console.log('correct answer');
         sc= callback(true);
    } else {
        console.log('worng answer! try again');
        sc= callback(false);
    }
    this.displayScore(sc);
}

  Question.prototype.displayScore = function (score) {
      console.log('Your current score is: ' + score);
      console.log('------------------------------');
  }




var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

var q2 = new Question('capital of india?',
    ['Goa', 'Bangalore', 'Delhi'],
    2);

var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

var question = [q1, q2, q3];

function score() {
    var sc = 0;
    return function (correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();



function  repet(){

        var n = Math.floor(Math.random() * question.length);

        question[n].displayAnswer();

        var prmo =prompt('select the correct answer');


        if (prmo !== 'exit') {
         question[n].chechAnswer(parseInt(prmo),keepScore);
        
          repet();
        }
        

}
repet();

}());