const form = document.querySelector("form");
const userName = document.querySelector("#register-name");
const userPhone = document.querySelector("#register-number");
const userEmail = document.querySelector("#register-email");
const userShirt = document.querySelector("#register-shirt");
const formLength = form.length;
 





//Posts Form data to Google Sheets
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("formFill"))
    })
    
    const data = await res.json();

    form.reset();
    window.location.href="shirt.html";
});

    


    
    
    
    
    
    
