// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// async function signUp(event){
//     event.preventDefault()
//     try{
//         const emailSignUp = document.querySelector("#signup-email").value;
//         const passwordSignUp = document.querySelector("#psw1").value;
// // debugger
// //         const auth = getAuth();
// // createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
// //   .then((userCredential) => {
// //     // Signed in 
// //     debugger
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });
//         const response= await fetch('',{
//             method:'POST',
//             body: JSON.stringify({email:emailSignUp, password:passwordSignUp}),


//             headers: { 'Content-Type': 'application/json' }
//         });

//         if(response.ok){
//             document.location.replace('/');
//         }else{
//             alert(response.statusText);
//         }
        
//     }catch(err){
//         console.log(err);
//     }
// }

// const signUpButton = document.querySelector("#signup-button");
// signUpButton.addEventListener("click",signUp);

