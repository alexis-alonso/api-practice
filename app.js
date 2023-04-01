const button = document.getElementById('button');
const container = document.getElementById('container');
const question = document.getElementById('question');
const correct = document.getElementById('answer1');
const incorrect1 = document.getElementById('answer2');
const incorrect2 = document.getElementById('answer3');
const incorrect3 = document.getElementById('answer4');
const done = document.getElementsByClassName('done');

// had to use https://www.youtube.com/watch?v=SgJ_femmsfg for some code to understand how to use API
// decided to practice using fetch API instead of async/await
function getQuestion() {
    fetch('https://opentdb.com/api.php?amount=15')
    .then(response => response.json())
    .then((data) => {

        // should be 2 because there are 2 (main) keys in the entire json data (paste URL to check it)
        // console.log(data);

        // should be # because of how many questions are in the array which is the property/value of the key 'results'
        const length = data.results.length;

        const randomNum = Math.floor(Math.random() * length);
        // console.log(randomNum);

        const Questions = data.results

        // now the question can be pasted somewhere!
        const ask = Questions[randomNum].question;
        question.innerHTML = ask;
        
        correct.innerHTML = Questions[0].correct_answer[0];

        incorrect1.innerHTML = Questions[0].incorrect_answers[0];
        incorrect2.innerHTML = Questions[0].incorrect_answers[1];
        incorrect3.innerHTML = Questions[0].incorrect_answers[2];



    })
    .catch(error => console.log('data could not be retrieved'));
}

correct.addEventListener('click', () => {
    correct.classList.add('correct');
})

