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
        bases.forEach(base => {
            let newBase = new Base(base.id, base.name, base.description)
        })
    }
