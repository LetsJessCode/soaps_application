class Soap {
    static all = [];

    constructor(essential, fragrance, title, exfoliant, colorant, butter, base_id, base ){
            this.essential = essential;
            this.fragrance = fragrance;
            this.title = title;
            this.exfoliant = exfoliant;
            this.colorant = colorant;
            this.butter = butter;
            this.base_id = base_id;
            this.base = base;
        }


     renderSoap = () => {
         //debugger 
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const deleteButton = document.createElement('button')
        const hr = document.createElement('hr')

        deleteButton.innerText = 'Delete'
        deleteButton.id = this.id;
        deleteButton.addEventListener('click', this.removeSoap)

          h4.innerText = this.title;
          p.innerText = `
           Butter: ${this.butter}
           Essentials: ${this.essential}
           Fragrance: ${this.fragrance}
           Exfoliant: ${this.exfoliant}
           Color: ${this.colorant}
           Base : ${this.base.name}
           `
          div.appendChild(h4)
          div.appendChild(p);
          div.appendChild(deleteButton);
          document.getElementById('soap-list').appendChild(div);
          div.appendChild(hr)
        }  

        removeSoap(){
          //debugger
          this.id
          this.parentNode

          fetch('http://localhost:3000/soaps' + this.id, {
            method: "delete"
          })
          .then(resp => {
            return resp.json();
          })
          .then(soap => {
            this.parentNode.remove();
          })
        }

        static editSoap(e) {
            editing = true;
        
            // populate form inputs
            soapTitle().value = this.parentNode.querySelector('h4').innerText
            soapEssential().value = this.parentNode.querySelector('p').innerText;
            soapFragrance().value = this.parentNode.querySelector('p').innerText;
            soapExfoliant().value = this.parentNode.querySelector('p').innerText;
            soapColorant().value = this.parentNode.querySelector('p').innerText;
            soapButter().value = this.parentNode.querySelector('p').innerText;
            submitButton().value = "Edit Soap"
            Soap.updatedSoapId = this.id;
            // debugger;
          }   
        // static updateSoap(e) {
            // let title = document.querySelector('').value;
            // let content = soapContent().value;
            // let essential = soapEssential().value;
            // let fragrance = soapFragrance().value;
            // let exfoliant = soapExfoliant().value;
            // let colorant = soapColorant().value;
            // let butter = soapButter().value;
        // 
            // const strongParams = {
              // soap: {
                // title: title,
                // essential: essential,
                // fragrance: fragrance,
                // exfoliant: exfoliant,
                // colorant: colorant, 
                // butter: butter
              // }
            // }
        // }
       
    }