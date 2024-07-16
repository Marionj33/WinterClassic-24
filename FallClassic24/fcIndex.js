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
const btnShirt = document.querySelector(".btn-shirt");
const btnHome = document.querySelector(".btn-homepage");

btnRegister.addEventListener("click", redirect);

function redirect() {
    window.location.href="register.html";
}


btnRoster.addEventListener("click", redirect1);

function redirect1() {
    window.location.href="roster.html";
}

btnShirt.addEventListener("click", redirect2);

function redirect2() {
    window.location.href="shirt.html";
}



btnHome.addEventListener("click", redirect3);

function redirect3() {
    window.location.href="/homepageIndex.html";
}