// let word = "cast"
// console.log(word);


// // console.log(word.split("").reverse().join(""));

// let newWord = "";


// for(let i = word.length - 1; i >=0; i--){
//     newWord += word[i];
//     console.log(newWord);
// }


const btnRegister = document.querySelector(".btn-register");
const btnRoster = document.querySelector(".btn-roster");

btnRegister.addEventListener("click", redirect);

function redirect() {
    window.location.href = "register.html";
}


btnRoster.addEventListener("click", redirect1);

function redirect1() {
    window.location.href = "roster.html";
}