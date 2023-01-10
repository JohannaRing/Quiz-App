let questions = [
    {
        "question": "Was ist die nationale Blume Japans?",
        "answer_1": "Rosen",
        "answer_2": "Sonnenblume",
        "answer_3": "Kirschblüte",
        "answer_4": "Orchideen",
        "right_answer": 3
    },
    {
        "question": "Wie viele Zeitzonen gibt es in Russland?",
        "answer_1": "11",
        "answer_2": "8",
        "answer_3": "3",
        "answer_4": "16",
        "right_answer": 1
    },
    {
        "question": "Welcher ist der längste Fluss der Welt?",
        "answer_1": "Nil",
        "answer_2": "Rhein",
        "answer_3": "Po",
        "answer_4": "Amazonas",
        "right_answer": 1
    },
    {
        "question": "Welches Land hat die meisten Inseln in der Welt? ",
        "answer_1": "Island",
        "answer_2": "Schweden",
        "answer_3": "Norwegen",
        "answer_4": "Finnland",
        "right_answer": 2
    },
    {
        "question": "Wie lautet der Name des Cafés in der Sitcom Friends?",
        "answer_1": "Central Cafe",
        "answer_2": "Centrale Caffe",
        "answer_3": "Central Park",
        "answer_4": "Central Perk",
        "right_answer": 4
    },
    
    {"question": "Wann wurde die Londoner U-Bahn eröffnet?",
        "answer_1": "1863",
        "answer_2": "1890",
        "answer_3": "1855",
        "answer_4": "1843",
        "right_answer": 1
    },
    {"question": "Was ist die Hauptstadt von Kanada?",
        "answer_1": "Vancouver",
        "answer_2": "Ottawa",
        "answer_3": "Montreal",
        "answer_4": "Toronto",
        "right_answer": 2
    }

];
let rightQuestions = 0;
let currentQuestion = 0;
let audio_Succes = new Audio('audio/sound-power.mp3');
let audio_Fail = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end').style = '';
        document.getElementById('question-body').style = 'display:none';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/cup.jpg';

    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        console.log(percent);

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_Succes.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_Fail.play();
    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restart() {
    document.getElementById('header-image').src = 'img/brainstorm.jpg';
    document.getElementById('end').style = 'display:none';
    document.getElementById('question-body').style = '';

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}


