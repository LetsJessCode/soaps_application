const bases = new BaseAdapter
const soaps = new SoapAdapter 


window.addEventListener('load', (init))
function init(){
    bases.fetchBases()
    
}
function displaySoap(){
  console.log('am i being called here?')
    document.getElementById('soapIndex').addEventListener('click', soaps.fetchSoaps)
  }


const soapForm = () => document.getElementById('soap-form')
const soapName = () => document.querySelector('input#soap-title')








    

    
    
