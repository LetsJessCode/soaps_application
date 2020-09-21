class Soap {
    static all = [];

    constructor(essential, fragrance, title, exfoliant, colorant, butter, base_id ){
            this.essential = essential;
            this.fragrance = fragrance;
            this.title = title;
            this.exfoliant = exfoliant;
            this.colorant = colorant;
            this.butter = butter;
            this.base_id = base_id;
        }

     renderSoap = () => {
         //debugger 
        const div = document.createElement('div')
        const h5 = document.createElement('h5')
        const ul = document.createElement('ul')
          h5.innerText = this.title;
          ul.innerText = `
           Butter: ${this.butter}
           Essentials: ${this.essential}
           Fragrance: ${this.fragrance}
           Exfoliant: ${this.exfoliant}
           Color: ${this.colorant}
           Base : ${this.base_id}
           `
          //  <button class="edit_soap" data-id=${this.id}>Edit Soap</button> 
          //  <button class="delete_soap" data-id=${this.id}>Delete Soap</button>   
          div.appendChild(h5)
          div.appendChild(ul);

          document.getElementById('soap-list').appendChild(div);
        // document.getElementById('edit_soap').addEventListener('click', editSoap)
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