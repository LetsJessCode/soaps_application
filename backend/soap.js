

class Soap {
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
    }

    renderSoap = () => {
        const viewSoaps = () => document.getElementById('soap-list')
        const soapsDiv = () => document.getElementById(`the-soaps-${base.id}`)
        const soapCard = document.createElement('div')
        soapsDiv.appendChild('soapCard')
        soapCard.id = this.id
        soapCard.innerHTML +=
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
    