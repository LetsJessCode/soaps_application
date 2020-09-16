const baseUrl = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', getBases())

const soapList = () => document.getElementById('soap-list')
const soapForm = () => document.getElementById('soap-form')
const soapName = () => document.querySelector('input#soap-title')


    function getBases(){
        fetch(baseUrl + '/bases')
        .then(resp => resp.json())
        .then(bases => {
            createBases(bases)
         })
    } 

    createBases = (bases) => {
        //debugger
        bases.forEach(base => {
            let newBase = new Base(base.id, base.name, base.description)
        })
    }


    function getSoaps(){ event, id
     const id = event.target.dataset
    fetch(baseUrl + `/bases/${id}`)
    .then(resp => resp.json())
    .then(soaps => {
        viewSoaps(soap)    
      })
    }

    viewSoaps = (soaps) => {
        soaps.forEach(soap => { 
            let newSoap = new Soap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id )     
            
        }) 
    }   
    