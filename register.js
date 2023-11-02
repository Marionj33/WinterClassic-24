const form = document.querySelector("form");
const userName = document.querySelector("#register-name");
const userPhone = document.querySelector("#register-number");
const userEmail = document.querySelector("#register-email");
const userShirt = document.querySelector("#register-shirt");
const bitch = document.querySelector(".bitch");
const formLength = form.length;
 


// userName.addEventListener("keydown",captureKey);

// bitch.innerHTML = localStorage.getItem('name');

// function captureKey(e) {
//     localStorage.setItem('name',userName.value);
//     bitch.innerHTML = localStorage.getItem('name');
// };
console.log(form.elements[0]);
console.log(form.length);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("formFill"))
    }).then(
        response => response.json()
    ) .then((html) => {
        form.reset();
        window.location.href="roster.html"
    })
});
    

const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", (e) => homeBtn.classList.remove("html"));

    


    
    
    
    
    
    
    
    
//     const fd = new FormData(form);
//     console.log(fd);

//     const obj = Object.fromEntries(fd);
//     console.log(obj);


//     for (item of fd) {
//         console.log(item);
//     }
// });

