let pictures = document.querySelectorAll('.image');
let display = document.getElementById('animationZone');
var img_1 = document.getElementById("img1");
var img_2 = document.getElementById("img2");
let userChoice;
let userScore = document.getElementById('score2');
let computerScore = document.getElementById('score1');
let massage_1 = document.getElementById('drw');
let massage_2 = document.getElementById('you');
let imageContainer = document.getElementById('pic-container');
let compCheck;
let store;
let check;
const textElements = document.querySelectorAll('.text');
let currentTextIndex = 0;




function displayAnimation() {
   setTimeout(()=>{
    checkWhoIsWin(userChoice);
   },3700)

}





pictures.forEach(picture => picture.addEventListener('click', () => {
    imageContainer.style.display = 'none';
    userChoice = picture.getAttribute("id");
    currentTextIndex = 0; 
    showText();
    function showText(){
    if (currentTextIndex >= textElements.length) return; // Exit if all texts are shown
    textElements[currentTextIndex].classList.remove('hidden');
    textElements[currentTextIndex].classList.add('show');
    currentTextIndex++;
    setTimeout(() => {
      textElements[currentTextIndex - 1].classList.remove('show');
      textElements[currentTextIndex - 1].classList.add('hidden');
      if (currentTextIndex < textElements.length) {
       showText();
      }
    }, 950)
    }
    displayAnimation();
   
}));



function checkWhoIsWin(userChoice) {
    let str = userChoice;
    let arr = ["rock", "paper", "scissor"];
    compCheck = arr[Math.floor(Math.random() * 3)];
    store = compCheck;
    if (compCheck === str) {
        massage_2.style.display = 'none';
        massage_1.style.display = 'block';
    }
    else if (compCheck === "rock" && (str === "paper" || str === "scissor")) {
        if (compCheck === "rock" && str === "paper") {
            let value_1 = parseInt(userScore.innerText);
            value_1++;
            userScore.innerHTML = value_1;
            massage_1.style.display = 'none';
            massage_2.style.display = 'none';
        }
        else {
            let value_2 = parseInt(computerScore.innerText);
            value_2++;
            computerScore.innerHTML = value_2;
            massage_2.style.display = 'block';
            massage_1.style.display = 'none';

        }
    }
    else if (compCheck === "paper" && (str === "rock" || str === "scissor")) {
        if (compCheck === "paper" && str === "rock") {
            let value_2 = parseInt(computerScore.innerText);
            value_2++;
            computerScore.innerHTML = value_2;
            massage_2.style.display = 'block';
            massage_1.style.display = 'none';

        }
        else {
            let value_1 = parseInt(userScore.innerText);
            value_1++;
            userScore.innerHTML = value_1;
            massage_1.style.display = 'none';
            massage_2.style.display = 'none';
        }
    }
    else {
        if (compCheck === "scissor" && str === "rock") {
            let value_1 = parseInt(userScore.innerText);
            value_1++;
            userScore.innerHTML = value_1;
            massage_1.style.display = 'none';
            massage_2.style.display = 'none';

        }
        else {
            let value_2 = parseInt(computerScore.innerText);
            value_2++;
            computerScore.innerHTML = value_2;
            massage_2.style.display = 'block';
            massage_1.style.display = 'none';

        }
    }
    imageContainer.style.display ='block';
    if(compCheck==="rock" ||compCheck==="paper" || compCheck==="scissor"){
        if(compCheck==="rock"){
            img_1.src = "/image/rock.png";
        }
      else if(compCheck==="paper"){
            img_1.src = "/image/paper.png";
        }
      else{
            img_1.src = "/image/scissors.png";
        }
    }
    if(userChoice==="rock" ||userChoice==="paper" || userChoice==="scissor"){
        if(userChoice==="rock"){
            img_2.src = "/image/rock_flip.png";
        }
      else if(userChoice==="paper"){
            img_2.src = "/image/paper_flip.png";
        }
      else{
            img_2.src = "/image/scissors_flip.png";
        }
    }

}


