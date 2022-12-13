
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6a0cba826mshbb2ed3fd7a3b37cp1dc64ajsnf1e121c1d87f',
		'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
	}
};

const component = document.getElementById('components');

component.addEventListener('click', (e) => {
    const event = e.target.parentElement.id;
    console.log('clicked: ', event);
    fetch(`https://computer-components-api.p.rapidapi.com/${event}?limit=5&offset=0`, options)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const components = document.querySelector('.components');
        components.innerHTML = event;

        // rate limit for free subscription is 5 requests/minute
        // for loop to create list of choices of components
        for (let i = 0; i < 5; i++) {
            let componentImg = data[i].img;
            let componentName = data[i].title;
            let componentPrice = data[i].price;
            let componentLink = data[i].link;

            if (componentPrice === 0) {
                componentPrice = 'Sold Out'
            }
            // create html elements to populate data
            const list = document.getElementById(i);
            const newImg = document.createElement('img');
            const newA = document.createElement('a');
            const newP = document.createElement('p');
            const newP2 = document.createElement('p');

            newImg.src = componentImg;
            newImg.classList.add('picture');
            newA.href = componentLink;
            newP.innerHTML = componentName;
            newP2.innerHTML = 'Price: ' + componentPrice;

            newA.append(newP2);
            list.append(newImg, newP, newA);
            
            console.log(componentImg, ' : ', componentName, ' : ', componentPrice, ' : ', componentLink);
        }
        
        // create new li in selected parts section where id = computer component
        const selection = document.getElementById('selected-list');
        const newLi = document.createElement('li');
        newLi.setAttribute('class', event)
        selection.append(newLi);

        // populate li in selected parts section
        const list = document.querySelector('.list-choice');
        list.addEventListener('click', (e) => {
            const event = e.target.parentElement;
            console.log(event)
            const partName = document.querySelector('.components');
            let pcPart = partName.innerHTML;
            const selectLi = document.querySelector('.' + pcPart);
            console.log(selectLi)

            const img = event.childNodes[0].src;
            const name = event.childNodes[1].innerHTML;
            const link = event.childNodes[2].href;
            const price = event.childNodes[2].children[0].innerHTML;
            console.log(img)
            console.log(name)
            console.log(link)
            console.log(price)
            const pTag = document.createElement('p');
            const pTag2 = document.createElement('p');
            const pTag3 = document.createElement('p');
            pTag3.setAttribute('class','name')
            const pTag4 = document.createElement('p');
            const pTag5 = document.createElement('p');

            pTag.innerHTML = pcPart;
            pTag2.innerHTML = img;
            pTag3.innerHTML = name;
            pTag4.innerHTML = link;
            pTag5.innerHTML = price;
            selectLi.append(pTag, pTag2, pTag3, pTag4, pTag5)
            removeChoices();
        });


    })
    .catch(err => console.error(err));
});


function removeChoices() {
    const component = document.querySelector('.components');
    component.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const list = document.getElementById(i);
        // console.log(list.firstChild)
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
}


//MonitorGET


// async function getMonitor(){
//     try{
//         const response= await fetch('http://localhost:3001/api/monitor',{
//             method:'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//               }
//         })

//         if(response.ok){
//             console.log(response);
//         }
//     }
// }

// const monitorBtn= document.querySelector('#monitor');

// monitorBtn.addEventListener('click',getMonitor);



// post req
async function saveConfig(event){
    event.preventDefault();
    try{
        const postProcessor= document.querySelector(".name");
        // const postRam= document.querySelector("");
        // const postStorage= document.querySelector("");
        // const postMotherboard= document.querySelector("");
        // const postKeyboard= document.querySelector("");
        // const postGpu= document.querySelector("");
        // const postCases= document.querySelector("");
        // const postCaseFan= document.querySelector("");
        // const postCpu= document.querySelector("");
        // const postMonitor= document.querySelector("");

        const response= await fetch('http://localhost:3001/api/saveconfig',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok){
            document.location.replace('/myaccount')
        }else{
            alert(response.statusText);
        }
    }catch(err){
        console.log(err);
    }

}

const saveConfigBtn= document.getElementById("save-config-btn");

saveConfigBtn.addEventListener('click', saveConfig);

window.onload= async()=>{
    try{
        const response=  await fetch('http://localhost:3001/api/saveconfig',{
            method:'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);
    }catch(err){
        console.log(err)
    }
}