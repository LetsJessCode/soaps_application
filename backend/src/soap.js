class Soap {
    static all = [];

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

          h4.innerText = `Soap Name: ${this.title}`;
          p.innerText = `
           Base: ${this.base.name}
           Butter: ${this.butter}
           Essentials: ${this.essential}
           Fragrance: ${this.fragrance}
           Exfoliant: ${this.exfoliant}
           Color: ${this.colorant}`
           
          div.appendChild(h4)
          div.appendChild(p);
          div.appendChild(deleteButton);
          document.getElementById('soap-list').appendChild(div);
          div.appendChild(hr)
        }  

        removeSoap(){
          debugger
          this.id
          this.parentNode

          fetch(`http://localhost:3000/soaps/${this.id}`, {
            method: "delete",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
          })
          .then(resp => {
            return resp.json();
          })
          .then(soap => {
            this.parentNode.remove();
          })
        }
       
    }