class Base {
    static all = [] // persistent thru the class similar to a class method.
     constructor(id, name, description) {
         this.id = id;
         this.name = name;
         this.description = description;
         this.baseAdapter = new BaseAdapter;
         this.soaps = new SoapAdapter;
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
                    <button id='newSoap${this.id}' data-id=${this.id}>Create Soap!</button>
                    <hr>
                </div>
                `
                document.getElementById(`newSoap${this.id}`).addEventListener('click', this.baseAdapter.fetchIndivBase)
            }  
    // link to a show page and show code
     createSoapForm = (e) => {
      // debugger
        const soapDiv = document.getElementById(`soap-form-${e.id}`)
        // debugger
        let soapForm = `
        <form id="soap-form">
            <label for=""> Base: </label>
            <select name="baseOption" id="baseOption" form="soap-form">
                 <option value="${e.id} "> ${e.name} </option>     
            </select><br>
 
             <label for="essential">Essential Oil:</label>
             <select name="essential" id="essential">
                <option value=" ">Essential Oils </option>
                <option value="lavender">Lavender Oil</option>
                <option value="peppermint">Peppermint Oil</option> 
                <option value="lemongrass">Lemongrass Oil</option> 
                <option value="rosemary">Rosemary Oil</option>
                <option value="eucalyptus">Eucalyptus Oil</option> 
                <option value="tea_tree">Tea Tree Oil </option>
                <option value="cedarwood">Cedarwood Oil</option>
                <option value="cinnamon">Cinnamon Oil </option>
                <option value="patchouli">Patchouli Oil</option>
                <option value="bergamot">Bergamot Oil</option>
                <option value="ginger">Ginger Oil</option>
                <option value="grapefruit">Grapefruit Oil</option> 
                <option value="ylang_ylang">Ylang Ylang Oil</option>
                <option value="chamomile">Chamomile Oil</option>
                <option value="sandalwood">Sandalwood Oil</option> 
                <option value="frankincense">Frankincense Oil </option>
             </select><br>
 
             <label for="fragrance">Fragrance Oil:</label>
             <select name="fragrance" id="fragrance">
                    <option value=" "> Fragrance Oils </option>
                    <option id="oatmeal_honey"> Oatmeal & Honey Oil </option>
                    <option id="pumpkin_spice"> Pumpkin Spice Oil</option>
                    <option id="cashmere"> Cashmere Oil </option>
                    <option id="Rose"> Rose Oil</option>
                    <option id="Christmas"> Christmas Spice Oil</option>
                    <option id="vanilla_apple"> Vanilla Apple Oil</option>
                    <option id="cco"> Cinnamon Cocoa Oil</option>
                    <option id="bso"> Brown Sugar Oil</option>
                    <option id="mpo"> Maple Pecan Oil</option>
                    <option id="ppo"> Pineapple Papaya Oil</option>
                    <option id="rwo"> Rustic Woods Oil</option>
                    <option id="pco"> Pina Colada Oil</option>
                    <option id="co"> Cashmere Oil</option>
                    <option id="bro"> Black Raspberry Oil</option>
                    <option id="so"> Strawberry Oil</option>
                    <option id="cotton_candy"> Cotton Candy Oil</option>
                    <option id="jas_oil"> Jasmine Oil</option>
                    <option id="fso"> Fresh Snow Oil</option>
                    <option id="gtac"> Green Tea & Cucumber </option> 
                    <option id="cin_sug_oil"> Cinnamon Sugar Oil</option>
                    <option id="efo"> Evergreen Forest Oil</option>
                    <option id="bbo"> Bahama Breeze Oil</option>
                    <option id="man_oil"> Mango Oil</option>
                    <option id="choco_ganache"> Chocolate Ganache Oil</option> 
                    <option id="peach"> Peach Oil</option>
                    <option id="blue_oil"> Blueberry Oil</option>
                    <option id="cherry_alm"> Cherry Almond Oil</option>
                    <option id="coffee_oil"> Coffee Oil </option>
                    <option id="amber_oil"> Amber Oil</option>
                    <option id="cotton_oil"> Cotton Oil </option>
                    <option id="vani_bean"> Vanilla Bean Oil </option>
                    <option id="fresh_rain"> Fresh Rain Oil</option>
                    <option id="passion_fruit"> Passionfruit Oil </option>
                    <option id="baby_powder"> Baby Powder Oil </option>
                    <option id="cinnamon_swirl"> Cinnamon Swirl Oil</option>
                    <option id="champagne_oil"> Champagne Oil </option>
                    <option id="moonlight_oil"> Moonlight Oil</option>
                    <option id="sea_moss_oil"> Sea Moss Oil </option>
                    <option id="hazel_toffee_oil"> Hazelnut Toffee Oil</option>
             </select><br>
 
             <label for="exfoliant">Exfoliant:</label>
                <select name="exfoliant" id="exfoliant">
                    <option value=" "> Exfoliants </option>
                    <option id="him_salt">Himalayan Salt</option> 
                    <option id="dried_lav">Dried Lavender</option> 
                    <option id="cran_seed">Cranberry Seeds</option>
                    <option id="pop_seed">Poppy Seeds</option>
                    <option id="cof_ground">Coffee Ground</option>
                    <option id="rosemary">Rosemary </option>
                    <option id="oatmeal">Oatmeal</option>
                </select><br>
 
             <label for="butter">Butters:</label>
             <select name="butter" id="butter">
                <option value=" "> Butters </option>
                <option value="shea_butter">Shea Butter</option> 
                <option value="aloe_butter">Aloe Butter</option> 
                <option value="mango_butter ">Mango Butter </option> 
                <option value="cocoa_butter">Cocoa Butter</option> 
                <option value="avocadon_butter">Avocado Butter</option> 
                <option value="coffee_butter">Coffee Butter</option> 
             </select> <br>
 
             <label for="colorant">Color:</label>
            <select name="colorant" id="colorant">
                <option value=" "> Colors </option>
                <option value="red">Red</option> 
                <option value="hot_pink ">Hot Pink</option> 
                <option value="rose_gold  ">Rose Gold </option> 
                <option value="orange ">Orange</option> 
                <option value="cappuccino_brown ">Cappuccino Brown</option> 
                <option value="kelly_green ">Kelly Green</option> 
                <option value=" blue "> Blue</option> 
                <option value="violet ">Violet</option> 
                <option value="pewter_silver ">Pewter Silver</option> 
                <option value="charcoal_black ">Charcoal Black</option> 
                <option value="copper ">Copper</option> 
                <option value="gold ">Gold</option> 
                <option value="peach ">Peach</option> 
                <option value="lavender ">Lavender</option> 
                <option value="yellow ">Yellow</option> 
                <option value="caribbean_blue ">Caribbean Blue</option> 
                <option value="emerald_green ">Emerald Green</option>              
            </select> <br>
             
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

 


