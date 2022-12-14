
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a6a0cba826mshbb2ed3fd7a3b37cp1dc64ajsnf1e121c1d87f',
        'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
    },
};

const components = document.getElementById('components');
const pcPart = document.querySelector('.pcPart');

// GET REQ FROM RAPID API 
components.addEventListener('click', (e) => {
    const event = e.target.parentElement.id;
    console.log('clicked: ', event);
    fetch(`https://computer-components-api.p.rapidapi.com/${event}?limit=5&offset=0`, options)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            pcPart.innerHTML = event;

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

                // populate dataa
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

            // populate li in selected parts section when user picks component
            const list = document.getElementById('choices');
            list.addEventListener('click', (e) => {
                const event = e.target.parentElement;
                console.log(event)
                const partName = document.querySelector('.pcPart');
                let item = partName.textContent;
                const selectLi = document.querySelector(`.${item}`);
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
                // pTag.setAttribute('class', item);
                const pTag2 = document.createElement('p');
                const pTag3 = document.createElement('p');
                pTag3.setAttribute('class', item + 'Name');
                const pTag4 = document.createElement('p');
                const pTag5 = document.createElement('p');

                pTag.innerHTML = item;
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
    pcPart.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const list = document.getElementById(i);
        // console.log(list.firstChild)
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
}


//Monitor GET REQ FROM DATABASE
const monitorBtn = document.querySelector('.monitor-card');

monitorBtn.addEventListener('click', (e) => {
    const event = e.target.parentElement.id;
    console.log(components)
    pcPart.innerHTML = event;
    console.log('clicked: ', event)

    fetch('http://localhost:3001/api/monitor', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // rate limit for free subscription is 5 requests/minute
            // for loop to create list of choices of components
            for (let i = 0; i < 5; i++) {
                let componentSize = data[i].size;
                let componentName = data[i].brand_name;
                let componentPrice = data[i].price;
                let componentLink = data[i].Amazon_link;

                if (componentPrice === 0) {
                    componentPrice = 'Sold Out'
                }
                // create html elements to populate data
                const list = document.getElementById(i);
                const newA = document.createElement('a');
                const newP = document.createElement('p');
                const newP2 = document.createElement('p');
                const newP3 = document.createElement('p');

                newA.href = componentLink;
                newP.innerHTML = componentName;
                newP2.innerHTML = componentSize;
                newP3.innerHTML = 'Price: ' + componentPrice;

                newA.append(newP3);
                list.append(newP, newP2, newA);
            }

            // create new li in selected parts section where id = computer component
            const selection = document.getElementById('selected-list');
            const newLi = document.createElement('li');
            newLi.setAttribute('class', event)
            selection.append(newLi);

            // populate li in selected parts section when user picks component
            const list = document.querySelector('.choice');
            list.addEventListener('click', (e) => {
                const event = e.target.parentElement;
                console.log(event)
                const partName = document.querySelector('.pcPart');
                let item = partName.textContent;
                const selectLi = document.querySelector(`.${item}`);
                console.log(selectLi)
                
                // GET INFORMATION OF PC PART FROM selected parts section
                // const img = event.childNodes[0].src;
                const name = event.childNodes[0].innerHTML;
                const link = event.childNodes[2].href;
                const price = event.childNodes[2].children[0].innerHTML;

                if (link == null) {
                    link = 'N/A';
                }
                
                console.log(name)
                console.log(link)
                console.log(price)
                const pTag = document.createElement('p');
                pTag.setAttribute('class', item);
                const pTag2 = document.createElement('p');
                const pTag3 = document.createElement('p');
                pTag3.setAttribute('class', item + 'Name');
                const pTag4 = document.createElement('p');

                pTag.innerHTML = item;
                pTag2.innerHTML = name;
                pTag3.innerHTML = link;
                pTag4.innerHTML = price;
                selectLi.append(pTag, pTag2, pTag3, pTag4)
                removeChoices();
    
            })
        })
            .catch(err => console.log(err))

})


// monitorBtn.addEventListener('click', monitorData);

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
//     } catch (err) {
//         console.log(err);
//     }
// }





// post req
async function saveConfig(event) {
    event.preventDefault();
    try {
        const postProcessor = document.querySelector(".processorName").innerHTML;
        console.log(postProcessor);
        const postRam = document.querySelector(".ramName").innerHTML;
        const postStorage = document.querySelector(".storageName").innerHTML;
        const postMotherboard = document.querySelector(".motherboardName").innerHTML;
        const postKeyboard = document.querySelector(".keyboardName").innerHTML;
        const postGpu = document.querySelector(".gpuName").innerHTML;
        const postCases = document.querySelector(".casesName").innerHTML;
        const postCaseFan = document.querySelector(".casefanName").innerHTML;
        const postCpu = document.querySelector(".cpuName").innerHTML;
        const postMonitor = document.querySelector(".monitorName").innerHTML;

        const response = await fetch('http://localhost:3001/api/saveconfig', {
            method: 'POST',
            body: JSON.stringify({
                processor: postProcessor,
                ram: postRam,
                storage: postStorage,
                motherboard: postMotherboard,
                keyboard: postKeyboard,
                gpu: postGpu,
                cases: postCases,
                casefan: postCaseFan,
                cpu: postCpu,
                monitor: postMonitor
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.log(err);
    }

}

const saveConfigBtn = document.getElementById("save-config-btn");

saveConfigBtn.addEventListener('click', saveConfig);
