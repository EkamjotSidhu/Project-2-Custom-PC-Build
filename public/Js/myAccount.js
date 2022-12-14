
const response = fetch('http://localhost:3001/api/saveconfig', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
})
    .then((response) => response.json())
    .then((data) => {
        var nmbr = 1
        console.log(data)
        for (var results of data) {
            var modalButton = document.createElement('button')
            modalButton.setAttribute('class', 'mybtn')
            modalButton.setAttribute('id', `${nmbr}`)
            modalButton.textContent = `Configuration ${nmbr}`
            var modalDiv = document.createElement('div')
            modalDiv.setAttribute('id', `myModal${nmbr}`)
            modalDiv.setAttribute('class', 'modal')
            var modalContent = document.createElement('div')
            modalContent.setAttribute('class', 'modal-content')
            var span = document.createElement('span')
            span.setAttribute('class', 'close')
            span.textContent = 'x'
            var modalPara = document.createElement('p')
            modalPara.textContent = `Processor: ${results.processor}
             Ram: ${results.ram}
             Storage: ${results.storage} 
             Motherboard: ${results.motherboard}
             keyboard: ${results.keyboard} 
             GPU: ${results.gpu}
             Cases: ${results.cases}
             Casefan: ${results.casefan}
              `
            modalContent.appendChild(span)
            modalContent.appendChild(modalPara)
            modalDiv.appendChild(modalContent)
            document.getElementById('savedConfigurations').appendChild(modalButton)
            document.getElementById('savedConfigurations').appendChild(modalDiv)
            var delBtn = document.createElement('button')
            delBtn.setAttribute('id', `delbtn${nmbr} `)
            delBtn.setAttribute('value', `${results.id} `)
            delBtn.textContent = 'Delete'
            modalContent.appendChild(delBtn)
            nmbr += 1
        }

        // Get the button that opens the modal
        var modalBtns = document.querySelectorAll('.mybtn')

        for (var btn of modalBtns) {
            btn.onclick = function () {
                var modal = document.getElementById(`myModal${this.id}`);
                modal.style.display = "block";

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                document.getElementById(`delbtn${this.id} `).onclick = async function () {
                    await fetch(`http://localhost:3001/api/saveconfig/${this.value}`, {
                        method: "DELETE",
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then((response) => response.json())
                        .then((response) => console.log(response))
                        .then(() => location.reload())
                }



                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }


        }
    })
    .catch(err => {
        console.log(err);
    })

