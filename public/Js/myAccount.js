window.onload= async()=>{
    try{
        const response=  await fetch('http://localhost:3001/api/saveconfig',{
            method:'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        console.log(response);
        //ON WINDOW LOAD GET SAVECONFIG TABLE AND CREATE BUTTONS

    }catch(err){
        console.log(err)
    }
}