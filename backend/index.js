let baseUrl = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', getBases())

function getSoaps(){
    debugger
    const id = event.target
    fetch(baseUrl + '/soaps')
    .then(resp => resp.json())
    .then(soaps => {
            soaps.forEach(soap => {
           const soapList = document.getElementById('soap-list')
           soapList.innerHTML += `
           <li>
                <a href="#" data_id= "${soap.id}">${soap.title}</a>
           </li>`
        }) 
    })
}

function getBases(){
    fetch(baseUrl + '/bases')
    .then(resp => resp.json())
    .then(bases => {
            bases.forEach(base => {
           const baseList = document.getElementById('base-list')
           baseList.innerHTML += `
           <li>
                <a href="#" data_id="${base.id}">${base.name}</a>
           </li>`
           document.querySelectorAll("li a").forEach(base => base.addEventListener("click", getSoaps))
        }) 
    })
}
