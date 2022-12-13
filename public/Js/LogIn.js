async function logIn(event){
    event.preventDefault()
    try{
        const emailLogIn = document.querySelector("#loginEmail").value;
        // const passwordLogIn = document.querySelector("#loginPassword").value;
        // console.log(email)
        const response= await fetch('http://localhost:3001/api/user',{
            method:'GET',
            body: JSON.stringify({email:emailLogIn}),


            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);
        if(response.ok){
            document.location.replace('/');
        }else{
            alert(response.statusText);
        }
    }catch(err){
        console.log(err);
    }
}

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("submit", logIn);