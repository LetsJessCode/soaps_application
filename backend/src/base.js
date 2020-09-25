class Base {
    static all = [] // persistent thru the class similar to a class method.
     constructor(id, name, description) {
         this.id = id;
         this.name = name;
         this.description = description;
         this.baseAdapter = new BaseAdapter;
         this.soaps = new SoapAdapter;
             }

    //  show all bases on page
            renderBase = () => {
                //debugger
                const basesDiv = document.getElementById('view-base')
                const baseCard = document.createElement('div')
                basesDiv.appendChild(baseCard)
                baseCard.classList.add('base-card')
                baseCard.id = this.id
                baseCard.innerHTML += 
               `<div class="bCard" id=${this.id}>
                    <div class="meta">
                        <h5>Soap Base: ${this.name}</h5>      
                        <div class="description-${this.id}">
                            <h5> All About The Base: </h5><p> ${this.description}</p>
                            
                            <button id='newSoap${this.id}' data-id=${this.id}>Create Soap!</button>

                            <div id="soap-form-${this.id}"></div>
                            <hr>
                        </div>
                    </div>
                </div>
                `
                document.getElementById(`newSoap${this.id}`).addEventListener('click', this.baseAdapter.fetchIndivBase)
            }  

     

     createSoapForm = (e) => {
      // debugger
        const soapDiv = document.getElementById(`soap-form-${e.id}`)
        // debugger
        let soapForm = `
        <form id="soap-form">
            <div class="base_category">
                <div class="select">
                    <select name="baseOption" id="baseOption" form="soap-form">
                        <label for=""> Base: </label> 
                        <option value="${e.id}"> ${e.name} </option>    
                    </select>
                </div>
            </div>
            <div class="input-field col s12">
             <label for="essential">Essential Oil:</label>
             <select name="essential" id="essential">
                <option value=" ">Essential Oils </option>
                <option value="Lavender">Lavender Oil</option>
                <option value="Peppermint">Peppermint Oil</option> 
                <option value="Lemongrass">Lemongrass Oil</option> 
                <option value="Rosemary">Rosemary Oil</option>
                <option value="Eucalyptus">Eucalyptus Oil</option> 
                <option value="Tea Tree">Tea Tree Oil </option>
                <option value="Cedarwood">Cedarwood Oil</option>
                <option value="Cinnamon">Cinnamon Oil </option>
                <option value="Patchouli">Patchouli Oil</option>
                <option value="Bergamot">Bergamot Oil</option>
                <option value="Ginger">Ginger Oil</option>
                <option value="Grapefruit">Grapefruit Oil</option> 
                <option value="Ylang-ylang">Ylang Ylang Oil</option>
                <option value="Chamomile">Chamomile Oil</option>
                <option value="Sandalwood">Sandalwood Oil</option> 
                <option value="Frankincense">Frankincense Oil </option>
             </select><br>
            </div>
            <div class="input-field col s12">
             <label for="fragrance">Fragrance Oil:</label>
             <select name="fragrance" id="fragrance">
                    <option value=" "> Fragrance Oils </option>
                    <option id="oatmeal_honey"> Oatmeal & Honey Oil </option>
                    <option id="Pumpkin Spice"> Pumpkin Spice Oil</option>
                    <option id="Cashmere"> Cashmere Oil </option>
                    <option id="Rose"> Rose Oil</option>
                    <option id="Christmas Spice"> Christmas Spice Oil</option>
                    <option id="Vanilla Apple"> Vanilla Apple Oil</option>
                    <option id="Cinnamon Cocoa"> Cinnamon Cocoa Oil</option>
                    <option id="Brown Sugar"> Brown Sugar Oil</option>
                    <option id="Maple Pecan"> Maple Pecan Oil</option>
                    <option id="Pineapple Papaya"> Pineapple Papaya Oil</option>
                    <option id="Rustic Woods"> Rustic Woods Oil</option>
                    <option id="Pina Colada"> Pina Colada Oil</option>
                    <option id="Cashmere Oil"> Cashmere Oil</option>
                    <option id="Black Raspberry"> Black Raspberry Oil</option>
                    <option id="Strawberry"> Strawberry Oil</option>
                    <option id="Cotton Candy"> Cotton Candy Oil</option>
                    <option id="Jasmine Oil"> Jasmine Oil</option>
                    <option id="Fresh Snow"> Fresh Snow Oil</option>
                    <option id="Green Tea & Cucumber "> Green Tea & Cucumber </option> 
                    <option id="Cinnamon Sugar Oil"> Cinnamon Sugar Oil</option>
                    <option id="Evergreen Forest Oil"> Evergreen Forest Oil</option>
                    <option id="Bahama Breeze Oil"> Bahama Breeze Oil</option>
                    <option id=" Mango Oil"> Mango Oil</option>
                    <option id=" Chocolate Ganache Oil"> Chocolate Ganache Oil</option> 
                    <option id=" Peach Oil"> Peach Oil</option>
                    <option id="Blueberry Oil"> Blueberry Oil</option>
                    <option id="Cherry Almond Oil"> Cherry Almond Oil</option>
                    <option id="Coffee Oil"> Coffee Oil </option>
                    <option id="Amber Oil"> Amber Oil</option>
                    <option id="Cotton Oil"> Cotton Oil </option>
                    <option id=" Vanilla Bean Oil "> Vanilla Bean Oil </option>
                    <option id="Fresh Rain Oil"> Fresh Rain Oil</option>
                    <option id="Passionfruit Oil"> Passionfruit Oil </option>
                    <option id="Baby Powder Oil"> Baby Powder Oil </option>
                    <option id="Cinnamon Swirl Oil"> Cinnamon Swirl Oil</option>
                    <option id="Champagne Oil"> Champagne Oil </option>
                    <option id=" Moonlight Oil"> Moonlight Oil</option>
                    <option id="Sea Moss Oil"> Sea Moss Oil </option>
                    <option id="Hazelnut Toffee Oil"> Hazelnut Toffee Oil</option>
             </select><br>
            </div>
            <div class="input-field col s12">
             <label for="exfoliant">Exfoliant:</label>
                <select name="exfoliant" id="exfoliant">
                    <option value=" "> Exfoliants </option>
                    <option id="Himalayan Salt">Himalayan Salt</option> 
                    <option id="Dried Lavender">Dried Lavender</option> 
                    <option id="Cranberry Seeds">Cranberry Seeds</option>
                    <option id="Poppy Seeds">Poppy Seeds</option>
                    <option id="Coffee Ground">Coffee Ground</option>
                    <option id="Rosemary">Rosemary </option>
                    <option id="Oatmeal">Oatmeal</option>
                </select><br>
             </div>
             <div class="input-field col s12">
             <label for="butter">Butters:</label>
             <select name="butter" id="butter">
                <option value=" "> Butters </option>
                <option value="Shea Butter">Shea Butter</option> 
                <option value="Aloe Butter">Aloe Butter</option> 
                <option value="Mango Butter  ">Mango Butter </option> 
                <option value="Cocoa Butter">Cocoa Butter</option> 
                <option value="Avocado Butter">Avocado Butter</option> 
                <option value="Coffee Butter">Coffee Butter</option> 
             </select> <br>
            </div>
            <div class="input-field col s12">
             <label for="colorant">Color:</label>
            <select name="colorant" id="colorant">
                <option value=" "> Colors </option>
                <option value="Red">Red</option> 
                <option value="Hot Pink ">Hot Pink</option> 
                <option value="Rose Gold  ">Rose Gold </option> 
                <option value="Orange ">Orange</option> 
                <option value="Cappuccino Brown">Cappuccino Brown</option> 
                <option value="Kelly Green ">Kelly Green</option> 
                <option value="Blue"> Blue</option> 
                <option value="Violet ">Violet</option> 
                <option value="Pewter Silver ">Pewter Silver</option> 
                <option value="Charcoal Black ">Charcoal Black</option> 
                <option value="Copper ">Copper</option> 
                <option value="Gold ">Gold</option> 
                <option value="Peach">Peach</option> 
                <option value="Lavender ">Lavender</option> 
                <option value="Yellow ">Yellow</option> 
                <option value="Caribbean Blue ">Caribbean Blue</option> 
                <option value="Emerald Green ">Emerald Green</option>              
            </select> <br>
             </div>
             <label for="title">Name Your Soap Creation:</label>
             <input id="soap-name" type="text">
             <button id='add-soap'>New Soap </button>
     </form>` 
     //debugger
     soapDiv.innerHTML = soapForm  
              document.getElementById('add-soap').addEventListener('click', this.soaps.createFromForm)
              
     }      // possible refactor may need to change the base dropdown to just name
            // may render form options dynamically   
    } 


 


