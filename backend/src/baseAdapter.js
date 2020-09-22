class BaseAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchBases(){
        //debugger
        fetch('http://localhost:3000/bases')
        .then(resp => resp.json())
        .then(bases => {
            bases.forEach((base) => {
                let newBASE = new Base(base.id, base.name, base.description, base.soaps)
                newBASE.renderBase(base.id, base.name, base.description, base.soaps)
            })
        })
    }
    fetchIndivBase = (e) => {
        //debugger
        fetch(this.baseUrl + `/bases/${e.target.dataset.id}`)
        .then(resp => resp.json())
        .then(base => {
              let newBASE = new Base(base)
               newBASE.createSoapForm(base)

        })
    }
}
   