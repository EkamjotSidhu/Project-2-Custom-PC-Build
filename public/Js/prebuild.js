
// async function preBuild(){
//     try{
//         const data= await fetch('http://localhost:3001/api/prebuild/',{
//             method:"GET",
//             headers: { 'Content-Type': 'application/json' }
//         });

//         if(data){
//             console.log(data)
//         }
//     }catch(err){
//         console.log(err);
//     }
// }

// 
const btn = document.getElementsByClassName('btn btn-info');
console.log(btn);

Array.from(btn).forEach(element => {
  console.log('works: ', element);

  
});

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  const event = e.target;
  console.log('buttonclicked');

  // fetch('http://localhost:3001/api/prebuild/', {
  //   method: "GET",
  //   headers: { 'Content-Type': 'application/json' }
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);



  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })


});

// const editCards = document.getElementById('edit-cards');

// editCards.addEventListener('click', (e) => {
//   const event = e.target;
//   console.log(event);

//   // fetch('http://localhost:3001/api/prebuild/', {
//   //   method: "GET",
//   //   headers: { 'Content-Type': 'application/json' }
//   // })
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     console.log(data);



//   //   })
//   //   .catch(err => {
//   //     console.log(err);
//   //   })


// });