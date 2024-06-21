const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contenArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];


contenArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px");

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style", "text-align: center; display: none; color: red");

    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if (h2_answer.style.display == "none")
        h2_answer.style.display = "block";
        else 
        h2_answer.style.display = "none";
    });

    flashcards.appendChild(div);
}

function addFlashCard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contenArray.push(flashcard_info)
        localStorage.setItem('items', JSON.stringify(contenArray));
        divMaker(contenArray[contenArray.length - 1]);
        question.value = '';
        answer.value = '';
}

function delFlashCards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contenArray = []
}

function showCreateCardBox(){
    createBox.style.display = "block"; /*aparece/ é "criado" */
}

function hideCreateBox(){
    createBox.style.display = "none"; /*desaparece/é "excluído" */
}

