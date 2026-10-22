const logoImg = document.getElementById(`logoImg`);
const checkBtn = document.getElementById(`checkBtn`);
const answer = document.getElementById(`answer`);
const nextBtn = document.getElementById(`nextBtn`);
let logoPos;
let usedOrd= [];
let randOrd;

const logoImgs = [`Apple`, `ChatGPT`, `Facebook`, `Gmail`, `Google`, `Hawassa`, `Illustrator`, `Instagram`, `Microsoft Word`, `Photoshop`, `Twitter`, `Whatsapp`, `YouTube`];

generateRand();
showLogo();

function generateRand(){
    randOrd = Math.floor(Math.random() * 13);
    if (usedOrd.length == logoImgs.length){
        answer.classList.remove('correctAnswer');
        answer.classList.remove('wrongAnswer');
        answer.classList.add('answerClass');
        answer.textContent = "You have reached the end! Thank you for playing my game!";
    }
    if (usedOrd.includes(randOrd)){
        generateRand();
    }
}

function showLogo(){
    logoPos = logoImgs[randOrd];
    usedOrd.push(randOrd);
    logoImg.src = `./images/${logoPos}.jpeg`;
    logoImg.classList.add("normalImgSize");

}

function check(){
    let userGuess = document.getElementById(`userGuess`).value;
    if(userGuess.toLowerCase() === logoPos.toLowerCase()){
        answer.textContent = "CORRECT!";
        answer.classList.remove('wrongAnswer');
        answer.classList.remove('answerClass');
        answer.classList.add('correctAnswer');
    }
    else{
        answer.textContent = "WRONG!";
        answer.classList.remove('correctAnswer');
        answer.classList.remove('answerClass');
        answer.classList.add('wrongAnswer');
    }
}

function next(){
    answer.textContent = "";
    generateRand();
    showLogo();
    userGuess.value="";
}

function imgSize(){
    logoImg.classList.contains("normalImgSize") ? logoImg.classList.toggle("bigImgSize") : logoImg.classList.toggle("normalImgSize");
}

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        check();
    }
});

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.key === "ArrowRight"){
        next();
    }
});
