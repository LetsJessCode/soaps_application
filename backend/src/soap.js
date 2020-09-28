class Soap {
    // static all = [];

    constructor(id, essential, fragrance, title, exfoliant, colorant, butter, base_id, base ){
            this.id = id;
            this.essential = essential;
            this.fragrance = fragrance;
            this.title = title;
            this.exfoliant = exfoliant;
            this.colorant = colorant;
            this.butter = butter;
            this.base_id = base_id;
            this.base = base;
            this.soapAdapter = new SoapAdapter
        }

     renderSoap = () => {
         //debugger 
        const soapDiv = document.getElementById('soap-list')
        const div = document.createElement('div')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const deleteButton = document.createElement('button')
        const hr = document.createElement('hr')
        
        soapDiv.style.display = "block"
        
        div.setAttribute('id', `soap-${this.id}`)

        deleteButton.innerText = 'Delete'
        deleteButton.id = this.id;
        deleteButton.addEventListener('click', this.soapAdapter.removeSoap)
          h5.innerText = `Soap Name: ${this.title}`;
          p.innerText = `
           Base: ${this.base.name}
           Butter: ${this.butter}
           Essentials: ${this.essential}
           Fragrance: ${this.fragrance}
           Exfoliant: ${this.exfoliant}
           Color: ${this.colorant}`

           
          div.appendChild(h5)
          div.appendChild(p);
          div.appendChild(deleteButton);
          document.getElementById('soap-list').appendChild(div);
          div.appendChild(hr)
        }  
    }