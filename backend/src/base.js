class Base {
    static all = [] // persistent thru the class similar to a class method.
     constructor(id, name, description) {
         this.id = id;
         this.name = name;
         this.description = description;
     }
     
    //  delete bases
         deleteBase(){
             console.log("You Clicked Delete Base!")
            }

    //  show all bases on page
            renderBase = () => {
                //debugger
                const baseList = () => document.getElementById('base-list')
                const basesDiv = document.getElementById('view-base')
                const baseCard = document.createElement('div')
                basesDiv.appendChild(baseCard)
                // baseCard.classList.add('base-card')
                baseCard.id = this.id
                baseCard.innerHTML += 
                `<div id=${this.id}>
                    <h5>Base Name: ${this.name}</h5>
                    <div id="soap-form-${this.id}"></div>
                    <h5> All About The Base: </h5><p> ${this.description}</p>
                    <ul id="the-soaps-${this.id}">
                    </ul>
                    <button id='newSoap${this.id}' data-id=${this.id}>Create Soap!</button>
                    <button id='viewSoap${this.id}' data-id=${this.id}>View Soap List</button>
                    <hr>
                </div>
                `
                document.getElementById(`newSoap${this.id}`).addEventListener('click', this.createSoapForm)
                document.getElementById(`viewSoap${this.id}`).addEventListener('click', getSoaps)
            }  

    // link to a show page and show code
     createSoapForm = (e) => {
       
        const soapDiv = document.getElementById(`soap-form-${e.target.dataset.id}`)
        let soapForm = `
        <form>
             <label for="bases"> Base:</label>
             <select name="bases" id="baseId">
                 <option value=" "> </option>
                 <option value="13">Goats Milk</option>
                 <option value="14">Buttermilk</option>
                 <option value="15">Oatmeal</option>
                 <option value="16">Hemp</option>
                 <option value="17">Olive Oil</option>
                 <option value="18">Shea Butter</option></select><br>
 
             <label for="essential">Essential Oil:</label>
             <select name="essential" id="essential">
                <option value="GBABY">Goats Milk</option>
             </select><br>
 
             <label for="fragrance">Fragrance Oil:</label>
             <select name="essential" id="fragrance"></select><br>
 
             <label for="exfoliant">Exfoliant:</label>
             <select name="exfoliant" id="exfoliant"></select><br>
 
             <label for="butter">Butters:</label>
             <select name="butter" id="butter"></select> <br>
 
             <label for="colorant">Color:</label>
             <select name="colorant" id="colorant"></select> <br>
             
             <label for="title">Name Your Soap Creation:</label>
             <input type="text">
             <button id='add-soap'>New Soap </button>
     </form>` 
     soapDiv.innerHTML = soapForm  
     baseSelector = document.getElementById("baseId")
     baseSelector.selectedIndex  = e.target.dataset.id
     }      
    } 

 


