function getSoaps(event, id){
    debugger
//const id = event.target.dataset
fetch(baseUrl + `/bases/${id}`)
.then(resp => resp.json())
.then(soaps => {
        soaps.forEach(soap => {      
    const soapList = document.getElementById('soap-list')
    soapList.innerHTML += `
    <li>
            <a href="#" data_id= "${this.id}">${this.title}</a>
    </li>`
    }) 
})
}

class Soap {
    constructor(essential, fragrance, title, exfoliant, colorant, butter, base_id ){
            this.essential = essential;
            this.fragrance = fragrance;
            this.title = title;
            this.exfoliant = exfoliant;
            this.colorant = colorant;
            this.butter = butter;
            this.base_id = base_id;
        }

    }