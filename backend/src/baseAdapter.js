class BaseAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchBases(){
        //debugger
        fetch(this.baseUrl + '/bases')
        .then(resp => resp.json())
        .then(bases => {
            bases.forEach((base) => {
                let newBASE = new Base(base.id, base.name, base.description, base.soaps)
                newBASE.renderBase(base.id, base.name, base.description, base.soaps)
            })
        })
    }
    fetchIndivBase = (e) => {
        //debugger
        fetch(this.baseUrl + `/bases/${e.target.dataset.id}`)
        .then(resp => resp.json())
        .then(base => {
              let newBASE = new Base(base)
               newBASE.createSoapForm(base)

        })
    }
}
    // displaySoaps = (e) => {
        // debugger
        // let id = e.target.dataset.id
        // let baseDiv = document.getElementById('base-list')
        // let showSoapList = document.getElementById('soap-list')
        // const soapInfo = document.createElement('li')
            // fetch(this.baseUrl + `/bases/${e.target.dataset.id}`)
            // .then(resp => resp.json())
            // .then(base => { 
                // `
            // <h5>Base Name: ${this.name}</h5>
                // `
            // let ul = document.getElementById(`the-soaps-${base.id} #soaps`)
                    //  base.soaps.forEach(soap => {
                // ul.innerHTML += `
                // <li>
                    // Title: ${soap.title}<br>
                    // Butter: ${soap.butter}<br>
                    // Essentials: ${soap.essential}<br>
                    // Fragrance: ${soap.fragrance}<br>
                    // Exfoliant: ${soap.exfoliant}<br>
                    // Color: ${soap.colorant}<br>
                    // <button class="edit_soap" data-id=${soap.id}>Edit Soap</button> 
                    // // <button class="delete_soap" data-id=${soap.id}>Delete Soap</button>   
                    // <hr>
                // </li>`   
            // })
        // })


