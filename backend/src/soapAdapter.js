class SoapAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchSoaps(){
        //debugger
        fetch('http://localhost:3000/soaps')
        .then(resp => resp.json())
        .then(soaps => { 
            soaps.forEach((soap) => { 
                let newSOAP = new Soap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
                console.log('soap')

                newSOAP.renderSoap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
            }) 
        })   
    }
    // need to create a display method for the soaps to be displayed
    createFromForm = (e) => {
       // debugger
        e.preventDefault()
            const baseOption = document.getElementById('baseOption').value //strong params
            const essential = document.getElementById('essential').value //strong params
            const fragrance = document.getElementById('fragrance').value //strong params
            const exfoliant = document.getElementById('exfoliant').value //strong params
            const butter = document.getElementById('butter').value //strong params
            const colorant = document.getElementById('colorant').value //strong params
            const soapName = document.getElementById('soap-name').value //strong params
               
            let newSoapObj = { 
                baseOption: baseOption,
                essential: essential,
                fragrance: fragrance,
                exfoliant: exfoliant,
                butter: butter,
                colorant: colorant,
                soapName: soapName
            }
            let configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newSoapObj),
            }

        fetch('http://localhost:3000/soaps', configObj)
        .then(resp => resp.json())
        .then(soap => { soap.renderSoap()
            })
        }
    }
    // params.require(:soap).permit(:title, :content)
    // if (editing) {
    //   Soap.updateSoap();
    // } else {
    //  
        
        
        
        
        
        

        
               
               
               
               
               
               
               
    