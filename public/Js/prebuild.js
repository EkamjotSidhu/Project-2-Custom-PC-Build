
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


const response = fetch('http://localhost:3001/api/prebuild/',{
                method:"GET",
                headers: { 'Content-Type': 'application/json' }
            })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(err=>{
    console.log(err)
  })


const budgetPc= document.querySelector("#budget-pc");

budgetPc.addEventListener('click', preBuild);