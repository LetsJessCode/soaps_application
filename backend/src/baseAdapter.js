class BaseAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000"
    }

    fetchBases(){
        //debugger
        fetch(this.baseUrl + '/bases')
        .then(resp => resp.json())
        .then(bases => {
            bases.forEach((base) => {
                let newBASE = new Base(base.id, base.name, base.description, base.soaps)
                
                newBASE.renderBase(base.id, base.name, base.description, base.soaps)
            })
        })
    }
}