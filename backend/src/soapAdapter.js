class SoapAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchSoaps(){
        //debugger
        fetch(this.baseUrl + '/soaps')
        .then(resp => resp.json())
        .then(soaps => {
            soaps.forEach(soap => { 
                let newSoap = new Soap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
            }) 
        })   
    }
// need to create a display method for the soaps to be displayed
    submitSoaps = (e) => {
        debugger
        e.preventDefault()
            const baseOption = document.getElementById('baseOption')
            const essential = document.getElementById('essential')
            const fragrance = document.getElementById('fragrance')
            const exfoliant = document.getElementById('exfoliant')
            const butter = document.getElementById('butter')
            const colorant = document.getElementById('colorant')
            const soapName = document.getElementById('soap-name')
               
            let newSoapObj = { 
                baseOption: baseOption.value,
                essential: essential.value,
                fragrance: fragrance.value,
                exfoliant: exfoliant.value,
                butter: butter.value,
                colorant: colorant.value,
                soapName: soapName.value
            }

        fetch(baseUrl + '/soaps',  {
            method: "POST",
            body: JSON.stringify(newSoapObj),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(soap => { let soapobj = new Soap(json.data)
            soap.addSoapToDom(json.data)
        })
    }
}
    
        
        
        
        
        
        
        
        

        
               
               
               
               
               
               
               
    