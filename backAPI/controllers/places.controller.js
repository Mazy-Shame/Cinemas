const db = require('../db')

class PlacesController {
    
    async addPlaces(req,res) {
    
        const {rawx,columny} = req.params


        var places
        var x = []
        var y = []
        var xy = []
        
        for (let i=0; i<=rawx; i++){
            x.push(i)
        }
        
        for (let i=0; i<=columny; i++){
            y.push(i)
        }
        

        function createPlaces(){
            x.forEach( (elx) => {
                y.forEach( (ely) => {
                    xy.push(elx)
                    xy.push(ely)
                        
                    places = db.query(`INSERT INTO places (rowX,columnY) VALUES ($1,$2) RETURNING *`, [elx, ely])
                })
            })
    
            res.json(places)
        }

        await createPlaces()

        

    }
}

module.exports = new PlacesController()