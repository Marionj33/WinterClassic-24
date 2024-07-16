// let word = "cast"
// console.log(word);


// // console.log(word.split("").reverse().join(""));

// let newWord = "";


// for(let i = word.length - 1; i >=0; i--){
//     newWord += word[i];
//     console.log(newWord);
// }



const btnHome = document.querySelector(".btn-homepage");




btnHome.addEventListener("click", redirect3);

function redirect3() {
    window.location.href="/homepageIndex.html";
}