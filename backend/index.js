const bases = new BaseAdapter
const soaps = new SoapAdapter 
const soapForm =  document.getElementById('soap-form')


window.addEventListener('load', (loadPage))
function loadPage(){
    bases.fetchBases()
    soaps.fetchSoaps()
    soaps.sortSoaps
}

function displaySoap(){ //working!
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
    document.getElementById('essential').value = " ";
    document.getElementById('fragrance').value = " ";
    document.getElementById('exfoliant').value = " ";
    document.getElementById('butter').value = " ";
    document.getElementById('colorant').value = " ";
    document.getElementById('soap-name').value = "";
}
 






    

    
    
