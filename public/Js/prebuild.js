
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
  
  const modalClose = document.querySelector('.modal-close')
  const modalBG = document.getElementById('modal');

function clearModal() {
  const h3El = document.querySelector('h3')
  h3El.remove();

  const modalDiv = document.getElementById('modalDiv');
  modalDiv.remove();
};

// closes modal when clicked on exit button 
// closes modal when clicked on exit button 
modalClose.addEventListener('click', function(){
  modalBG.classList.add('hidden');
  clearModal();
})

// closes modal when clicked outside modal window
window.addEventListener('click', clickOutside)

function clickOutside(e) {
  if (e.target === modal){
      modalBG.classList.add('hidden')
      clearModal()
}};


// BUDGET PC FETCH
const budgetPC = document.getElementById('budget');
console.log(budgetPC);
budgetPC.addEventListener('click', (e) => {
  const event = e.target.parentElement.id;
  console.log('buttonclicked: ', event);

  fetch('http://localhost:3001/api/prebuild/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      modalBG.classList.remove('hidden');
      const modal = document.querySelector('#modal-content');

      // populate variables with data values
      let buildType = data[0].build_type;
      let tower = data[0].case;
      let chipset = data[0].chipset;
      let cpu = data[0].cpu;
      let gpu = data[0].gpu;
      let motherboard = data[0].motherboard;
      let os = data[0].os;
      let psu = data[0].psu;
      let ram = data[0].ram;
      let storage = data[0].storage;
      console.log(buildType, tower, chipset, cpu, gpu, motherboard, os, psu, ram, storage);
      
      const img = document.getElementById('budgetPc').src;
      console.log(img)
      
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newH3 = document.createElement('h3');
      const newUl = document.createElement('ul');
      const newLi = document.createElement('li');
      const newLi2 = document.createElement('li');
      const newLi3 = document.createElement('li');
      const newLi4 = document.createElement('li');
      const newLi5 = document.createElement('li');
      const newLi6 = document.createElement('li');
      const newLi7 = document.createElement('li');
      const newLi8 = document.createElement('li');
      const newLi9 = document.createElement('li');

      newDiv.setAttribute('id', 'modalDiv');
      newH3.innerHTML = buildType;
      newImg.src = img;
      newImg.classList.add('towerImg');
      newUl.classList.add('pcInfo');
      newLi.innerHTML = 'Case: '+ tower;
      newLi2.innerHTML = 'Chipset: '+ chipset;
      newLi3.innerHTML = 'CPU: '+ cpu;
      newLi4.innerHTML = 'GPU: '+ gpu;
      newLi5.innerHTML = 'Motherboard: '+ motherboard;
      newLi6.innerHTML = 'Operating System: '+ os;
      newLi7.innerHTML = 'Power Supply Unit: '+ psu;
      newLi8.innerHTML = 'RAM: '+ ram;
      newLi9.innerHTML = 'Storage: '+ storage;

      newUl.append(newLi, newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9);
      newDiv.append(newH3, newImg, newUl);
      modal.append(newDiv);
    })
    .catch(err => {
      console.log(err);
    })
});

// MID PC FETCH
const midPC = document.getElementById('mid');
console.log(midPC)
midPC.addEventListener('click', (e) => {
  const event = e.target.parentElement.id;
  console.log('buttonclicked: ', event);

  fetch('http://localhost:3001/api/prebuild/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      modalBG.classList.remove('hidden');
      const modal = document.querySelector('#modal-content');

      // populate variables with data values
      let buildType = data[1].build_type;
      let tower = data[1].case;
      let chipset = data[1].chipset;
      let cpu = data[1].cpu;
      let gpu = data[1].gpu;
      let motherboard = data[1].motherboard;
      let os = data[1].os;
      let psu = data[1].psu;
      let ram = data[1].ram;
      let storage = data[1].storage;
      console.log(buildType, tower, chipset, cpu, gpu, motherboard, os, psu, ram, storage);
      
      const img = document.getElementById('midPc').src;
      
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newH3 = document.createElement('h3');
      const newUl = document.createElement('ul');
      const newLi = document.createElement('li');
      const newLi2 = document.createElement('li');
      const newLi3 = document.createElement('li');
      const newLi4 = document.createElement('li');
      const newLi5 = document.createElement('li');
      const newLi6 = document.createElement('li');
      const newLi7 = document.createElement('li');
      const newLi8 = document.createElement('li');
      const newLi9 = document.createElement('li');

      newDiv.setAttribute('id', 'modalDiv');
      newH3.innerHTML = buildType;
      newImg.src = img;
      newImg.classList.add('towerImg');
      newUl.classList.add('pcInfo');
      newLi.innerHTML = 'Case: '+ tower;
      newLi2.innerHTML = 'Chipset: '+ chipset;
      newLi3.innerHTML = 'CPU: '+ cpu;
      newLi4.innerHTML = 'GPU: '+ gpu;
      newLi5.innerHTML = 'Motherboard: '+ motherboard;
      newLi6.innerHTML = 'Operating System: '+ os;
      newLi7.innerHTML = 'Power Supply Unit: '+ psu;
      newLi8.innerHTML = 'RAM: '+ ram;
      newLi9.innerHTML = 'Storage: '+ storage;

      newUl.append(newLi, newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9);
      newDiv.append(newH3, newImg, newUl);
      modal.append(newDiv);
    })
    .catch(err => {
      console.log(err);
    })
});

// HIGH END PC FETCH
const highPC = document.getElementById('high-end');
highPC.addEventListener('click', (e) => {
  const event = e.target.parentElement.id;
  console.log('buttonclicked: ', event);

  fetch('http://localhost:3001/api/prebuild/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      modalBG.classList.remove('hidden');
      const modal = document.querySelector('#modal-content');

      // populate variables with data values
      let buildType = data[2].build_type;
      let tower = data[2].case;
      let chipset = data[2].chipset;
      let cpu = data[2].cpu;
      let gpu = data[2].gpu;
      let motherboard = data[2].motherboard;
      let os = data[2].os;
      let psu = data[2].psu;
      let ram = data[2].ram;
      let storage = data[2].storage;
      console.log(buildType, tower, chipset, cpu, gpu, motherboard, os, psu, ram, storage);
      
      const img = document.getElementById('highPc').src;
      
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newH3 = document.createElement('h3');
      const newUl = document.createElement('ul');
      const newLi = document.createElement('li');
      const newLi2 = document.createElement('li');
      const newLi3 = document.createElement('li');
      const newLi4 = document.createElement('li');
      const newLi5 = document.createElement('li');
      const newLi6 = document.createElement('li');
      const newLi7 = document.createElement('li');
      const newLi8 = document.createElement('li');
      const newLi9 = document.createElement('li');

      newDiv.setAttribute('id', 'modalDiv');
      newH3.innerHTML = buildType;
      newImg.src = img;
      newImg.classList.add('towerImg');
      newUl.classList.add('pcInfo');
      newLi.innerHTML = 'Case: '+ tower;
      newLi2.innerHTML = 'Chipset: '+ chipset;
      newLi3.innerHTML = 'CPU: '+ cpu;
      newLi4.innerHTML = 'GPU: '+ gpu;
      newLi5.innerHTML = 'Motherboard: '+ motherboard;
      newLi6.innerHTML = 'Operating System: '+ os;
      newLi7.innerHTML = 'Power Supply Unit: '+ psu;
      newLi8.innerHTML = 'RAM: '+ ram;
      newLi9.innerHTML = 'Storage: '+ storage;

      newUl.append(newLi, newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9);
      newDiv.append(newH3, newImg, newUl);
      modal.append(newDiv);
    })
    .catch(err => {
      console.log(err);
    })
});

// PROFESSIONAL EDIT PC FETCH
const proEditPC = document.getElementById('pro-edit-pc');
proEditPC.addEventListener('click', (e) => {
  const event = e.target.parentElement.id;
  console.log('buttonclicked: ', event);

  fetch('http://localhost:3001/api/prebuild/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      modalBG.classList.remove('hidden');
      const modal = document.querySelector('#modal-content');

      // populate variables with data values
      let buildType = data[3].build_type;
      let tower = data[3].case;
      let chipset = data[3].chipset;
      let cpu = data[3].cpu;
      let gpu = data[3].gpu;
      let motherboard = data[3].motherboard;
      let os = data[3].os;
      let psu = data[3].psu;
      let ram = data[3].ram;
      let storage = data[3].storage;
      console.log(buildType, tower, chipset, cpu, gpu, motherboard, os, psu, ram, storage);
      
      const img = document.getElementById('pro-edit').src;
      
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newH3 = document.createElement('h3');
      const newUl = document.createElement('ul');
      const newLi = document.createElement('li');
      const newLi2 = document.createElement('li');
      const newLi3 = document.createElement('li');
      const newLi4 = document.createElement('li');
      const newLi5 = document.createElement('li');
      const newLi6 = document.createElement('li');
      const newLi7 = document.createElement('li');
      const newLi8 = document.createElement('li');
      const newLi9 = document.createElement('li');

      newDiv.setAttribute('id', 'modalDiv');
      newH3.innerHTML = buildType;
      newImg.src = img;
      newImg.classList.add('towerImg');
      newUl.classList.add('pcInfo');
      newLi.innerHTML = 'Case: '+ tower;
      newLi2.innerHTML = 'Chipset: '+ chipset;
      newLi3.innerHTML = 'CPU: '+ cpu;
      newLi4.innerHTML = 'GPU: '+ gpu;
      newLi5.innerHTML = 'Motherboard: '+ motherboard;
      newLi6.innerHTML = 'Operating System: '+ os;
      newLi7.innerHTML = 'Power Supply Unit: '+ psu;
      newLi8.innerHTML = 'RAM: '+ ram;
      newLi9.innerHTML = 'Storage: '+ storage;

      newUl.append(newLi, newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9);
      newDiv.append(newH3, newImg, newUl);
      modal.append(newDiv);
    })
    .catch(err => {
      console.log(err);
    })
});

// PROFESSIONAL EDIT PC FETCH
const superEditPC = document.getElementById('super-edit-pc');
superEditPC.addEventListener('click', (e) => {
  const event = e.target.parentElement.id;
  console.log('buttonclicked: ', event);

  fetch('http://localhost:3001/api/prebuild/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      modalBG.classList.remove('hidden');
      const modal = document.querySelector('#modal-content');

      // populate variables with data values
      let buildType = data[4].build_type;
      let tower = data[4].case;
      let chipset = data[4].chipset;
      let cpu = data[4].cpu;
      let gpu = data[4].gpu;
      let motherboard = data[4].motherboard;
      let os = data[4].os;
      let psu = data[4].psu;
      let ram = data[4].ram;
      let storage = data[4].storage;
      console.log(buildType, tower, chipset, cpu, gpu, motherboard, os, psu, ram, storage);
      
      const img = document.getElementById('super-edit').src;
      
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newH3 = document.createElement('h3');
      const newUl = document.createElement('ul');
      const newLi = document.createElement('li');
      const newLi2 = document.createElement('li');
      const newLi3 = document.createElement('li');
      const newLi4 = document.createElement('li');
      const newLi5 = document.createElement('li');
      const newLi6 = document.createElement('li');
      const newLi7 = document.createElement('li');
      const newLi8 = document.createElement('li');
      const newLi9 = document.createElement('li');

      newDiv.setAttribute('id', 'modalDiv');
      newH3.innerHTML = buildType;
      newImg.src = img;
      newImg.classList.add('towerImg');
      newUl.classList.add('pcInfo');
      newLi.innerHTML = 'Case: '+ tower;
      newLi2.innerHTML = 'Chipset: '+ chipset;
      newLi3.innerHTML = 'CPU: '+ cpu;
      newLi4.innerHTML = 'GPU: '+ gpu;
      newLi5.innerHTML = 'Motherboard: '+ motherboard;
      newLi6.innerHTML = 'Operating System: '+ os;
      newLi7.innerHTML = 'Power Supply Unit: '+ psu;
      newLi8.innerHTML = 'RAM: '+ ram;
      newLi9.innerHTML = 'Storage: '+ storage;

      newUl.append(newLi, newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9);
      newDiv.append(newH3, newImg, newUl);
      modal.append(newDiv);
    })
    .catch(err => {
      console.log(err);
    })
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