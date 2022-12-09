async function logIn(event){
    event.preventDefault()
    try{
        const emailLogIn = document.querySelector("#loginEmail").value;
        const passwordLogIn = document.querySelector("#loginPassword").value;
        const response= await fetch('/user',{
            method:'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
    }catch(err){
        console.log(err);
    }
}

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("submit", logIn);