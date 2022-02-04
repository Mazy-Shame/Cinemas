const db = require('../db')

class CinemasController {

    async addCinema(req,res){

        const {cinema_name} = req.body
        let cinema = await db.query(`INSERT INTO cinemas (cinema_name) VALUES ($1) RETURNING *`, [cinema_name])
        res.json(cinema)
    }

    async updateCinemaName(req,res){

        const {cinema_nameOld, cinema_nameNew} = req.body
        
        let cinema = await db.query(`UPDATE cinemas set cinema_name=$1 WHERE cinema_name=$2 RETURNING *`,[cinema_nameNew, cinema_nameOld])
        res.json(cinema)

    }

    async deleteCinema(req,res){

        const {cinema_name} = req.body

        let cinema = await db.query(`DELETE FROM cinemas WHERE cinema_name=$1 RETURNING *`, [cinema_name])
        res.json(cinema)
    }

    async getCinemas(req,res){ 
        let cinemas = await db.query(`SELECT * FROM cinemas`)
        res.json(cinemas.rows)
    }


}

module.exports = new CinemasController()