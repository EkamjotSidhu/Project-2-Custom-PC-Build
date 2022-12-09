async function signUp(event){
    event.preventDefault()
    try{
        const emailSignUp = document.querySelector("#signup-email").value;
        const passwordSignUp = document.querySelector("#psw1").value;
        const response= await fetch('/user',{
            method:'POST',
            body: JSON.stringify({email:emailSignUp, password:passwordSignUp}),


            headers: { 'Content-Type': 'application/json' }
        });
        
    }catch(err){
        console.log(err);
    }
}

const signUpButton = document.querySelector("#signup-button");
signUpButton.addEventListener("click",signUp);

