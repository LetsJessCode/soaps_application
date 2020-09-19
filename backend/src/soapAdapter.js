class BaseAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchSoaps(){
        //debugger
        fetch(baseUrl + '/soaps')
        .then(resp => resp.json())
        .then(soaps => {
            soaps.forEach(soap => { 
                let newSoap = new Soap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
                
                newSoap.renderSoap(soap.essential, soap.fragrance, soap.title, soap.exfoliant, soap.colorant, soap.butter, soap.base_id)
            }) 
        }   
    )}
}    

    
    