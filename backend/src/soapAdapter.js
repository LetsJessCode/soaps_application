class SoapAdapter{

    fetchSoaps(){   // working
        //debugger
        fetch('http://localhost:3000/soaps')
        .then(resp => {
            if (resp.status !==200){
                throw new Error(resp.statusText);
            }
            return resp.json()
        })
        .catch(errors => console.log(errors))
        .then(soaps => { 
            soaps.forEach((soap) => { 
                let newSOAP = new Soap(soap.id, soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id, soap.base)

                newSOAP.renderSoap(soap.id, soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
            }) 
        })   
    }
    createFromForm = (e) => {   //working!
       // debugger
        e.preventDefault()
            const baseOption = document.getElementById('baseOption').value //strong params
            const essential = document.getElementById('essential').value //strong params
            const fragrance = document.getElementById('fragrance').value //strong params
            const exfoliant = document.getElementById('exfoliant').value //strong params
            const butter = document.getElementById('butter').value //strong params
            const colorant = document.getElementById('colorant').value //strong params
            const soapName = document.getElementById('soap-name').value //strong params
            let strongParams = { 
                soap: {
                    essential: essential,
                    fragrance: fragrance,
                    exfoliant: exfoliant,
                    colorant: colorant,
                    butter: butter,
                    title: soapName,
                    base_id: baseOption
                }
            }

            let configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(strongParams),
            }

        fetch('http://localhost:3000/soaps', configObj)
        .then(resp => resp.json())
        .then(soap => {
            //debugger
            let newSOAP = new Soap(soap.id, soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id, soap.base)
                newSOAP.renderSoap(soap)
            })
            clearViews()
            
        }
  
    removeSoap(){
        //debugger
        this.id
        this.parentNode

        fetch(`http://localhost:3000/soaps/${this.id}`, {
            method: "delete",
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        })
        .then( 
            document.getElementById(`soap-${this.id}`).remove()  
        )  
      }
    }
    
        
        
        
        

        
               
               
               
               
               
               
               
    