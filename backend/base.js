class Base {
    static all = [] // persistent thru the class similar to a class method.
     constructor(id, name, description) {
         this.id = id;
         this.name = name;
         this.description = description;
         this.renderBase()
     }
     
    //  delete bases
         deleteBase(){
             console.log("You Clicked Delete Base!")
            }

    //  show all bases on page
            renderBase = () => {
                const baseList = () => document.getElementById('base-list')
                const basesDiv = document.getElementById('view-soap')
                const baseCard = document.createElement('div')
                basesDiv.appendChild(baseCard)
                baseCard.classList.add('base-card')
                baseCard.id = this.id
                baseCard.innerHTML += 
                `<h3>Base Name: ${this.name}</h3>
                <p>All About The Base: ${this.description}</p>
                <ul id="the-soaps-${this.id}">
                </ul>
                <button class="create_soap" data-id=${this.id}>Create Soap?!</button>
                <button class="view_soaps" data-id=${this.id}>View Soap List</button>
                <hr>
                `
            }  
        
    // link to a show page and show code
            
    } 

 


