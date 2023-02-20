const startBtn = document.querySelector(".start-btn button"),
infoBox = document.querySelector(".info-box"),
exitBtn = infoBox.querySelector(".buttons .quit"),
continueBtn = infoBox.querySelector(".buttons .restart"),
quizBox = document.querySelector(".que-box"),
queText = document.querySelector(".que-text"),
optionList = document.querySelector(".option-list"),
nextBtn = quizBox.querySelector(".next-btn"),
resultBox = document.querySelector(".box"),
quitBtn = resultBox.querySelector(".quit"),
replayBtn = resultBox.querySelector(".restart"),
bottomQuesCounter = quizBox.querySelector(".total-que"),
option = optionList.querySelectorAll(".option");

let queCount = 0,
    queNumber = 1;

startBtn.onclick = () => {
    infoBox.classList.add("activeinfo");
}

exitBtn.onclick = () => {
    infoBox.classList.remove("activeinfo");
}

continueBtn.onclick = () => {
    infoBox.classList.remove("activeinfo");
    quizBox.classList.add("activequiz");
    showQuestions(0);
    queCounter(1);
}
nextBtn.onclick = () => {
    if(queCount < questions.length - 1){
        queCount++;
        queNumber++;
        showQuestions(queCount);
        queCounter(queNumber);
    } else{
        console.log("questions complected");
        resultBox.classList.add("activebox");
        quizBox.classList.remove("activequiz");
    }
    
}

quitBtn.onclick = () => {
    resultBox.classList.remove("activebox");

}

replayBtn.onclick = () => {
    resultBox.classList.remove("activebox");
    quizBox.classList.add("activequiz");
    showQuestions(0);
    queCounter(1);
}
function showQuestions(index){
    let queTag = '<span>' + questions[index].num + ". " + questions[index].question + '</span>';
    queText.innerHTML = queTag;
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                  + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                  + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                  + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    optionList.innerHTML = optionTag;
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
function queCounter(index){
    let totalQueTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomQuesCounter.innerHTML = totalQueTag;
}

