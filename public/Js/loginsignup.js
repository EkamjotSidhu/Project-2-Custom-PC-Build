import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Set up our register function
function register(event) {
    event.preventDefault();

    // Get all our input fields
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#psw1").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ... user.uid
            // save data into real time database
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password
            })
                .then(() => {
                    // Data saved successfully!
                    alert('user created successfully');

                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });

}


// Set up our login function
function logIn(event) {

    event.preventDefault();
    // Get all our input fields
    const loginEmail = document.querySelector("#loginEmail").value;
    const loginPassword = document.querySelector("#loginPassword").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...

            // save log in details into real time database
            var lgDate = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: lgDate,
            })
                .then(() => {
                    // Data saved successfully!
                    alert('user logged in successfully');

                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    // hit a route in the backend for login in 
    // the back end will return the data to the front end
    

}

const signUpButton = document.querySelector("#signup-button");
signUpButton.addEventListener("click", register);
const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("submit", logIn);