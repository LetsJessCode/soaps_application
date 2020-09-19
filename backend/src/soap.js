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
            this.renderSoap()
        }

    renderSoap = () => {
      //debugger
        const viewSoaps = () => document.getElementById('soap-list')
        const soapsDiv = () => document.getElementById(`the-soaps-${this.id}`)
        const soapInfo = document.createElement('li')
        // soapsDiv.appendChild(soapInfo)
        soapInfo.id = `{base.id}`
        //soapCard.display = none
        soapInfo.innerHTML +=
            `   <li> Title: ${this.title}</li>
                <li> Butter: ${this.butter}</li>
                <li> Essentials: ${this.essential}</li>
                <li> Fragrance: ${this.fragrance}</li>
                <li> Exfoliant: ${this.exfoliant}</li>
                <li> Color: ${this.colorant}</li>
            <button class="edit_soap" data-id=${this.id}>Edit Soap</button> 
            <button class="delete_soap" data-id=${this.id}>Delete Soap</button>   
            <hr>
            `
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

          static createFromForm(e) {
            e.preventDefault();
        
            // params.require(:soap).permit(:title, :content)
            if (editing) {
              Soap.updateSoap();
            } else {
              const strongParams = {
                soap: {
                  title: soapTitle().value,
                  essential: soapEssential().value,
                  fragrance: soapFragrance().value,
                  exfoliant: soapExfoliant().value,
                  colorant: soapColorant().value,
                  butter: soapButter().value
                }
              }
           }
        }
        static updateSoap(e) {
            let title = document.querySelector('').value;
            let content = soapContent().value;
            let essential = soapEssential().value;
            let fragrance = soapFragrance().value;
            let exfoliant = soapExfoliant().value;
            let colorant = soapColorant().value;
            let butter = soapButter().value;
        
            const strongParams = {
              soap: {
                title: title,
                essential: essential,
                fragrance: fragrance,
                exfoliant: exfoliant,
                colorant: colorant, 
                butter: butter
              }
            }
        }
       
    }