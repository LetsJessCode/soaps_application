const bases = new BaseAdapter
const soaps = new SoapAdapter 
const soapForm =  document.getElementById('soap-form')
//const getElementById()

window.addEventListener('load', (init))
function init(){
    bases.fetchBases()
    soaps.fetchSoaps()
}

function displaySoap(){ //working!
    //   document.getElementById('soapIndex').addEventListener('click', soaps.fetchSoaps)
      let baseDiv = document.getElementById('view-base')
      let soapDiv = document.getElementById('soap-list')
      baseDiv.style.display = "none"
      soapDiv.style.display = "block"
  }

  function displayBase(){ //working!
        let baseDiv = document.getElementById('view-base')
        let soapDiv = document.getElementById('soap-list')
        baseDiv.style.display = "block"
        soapDiv.style.display = "none"
    }
const soapName = () => document.querySelector('input#soap-title')

function clearViews() {
    document.getElementById('soap-form').value = "";
}

// clearSoapForm(){
//   soap
// }






    

    
    
