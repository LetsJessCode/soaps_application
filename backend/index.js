const bases = new BaseAdapter
const soaps = new SoapAdapter 
//const getElementById()

window.addEventListener('load', (init))
function init(){
    bases.fetchBases
    
}
function displaySoap(){
  console.log('am i being called here?')
    document.getElementById('soapIndex').addEventListener('click', soaps.fetchSoaps)
  }

  function displayBases(){
    document.getElementById('base-load').addEventListener('click', bases.fetchBases )
  }


const soapForm = () => document.getElementById('soap-form')
const soapName = () => document.querySelector('input#soap-title')

// clearSoapForm(){
//   soap
// }






    

    
    
