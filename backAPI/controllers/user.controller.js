const db = require('../db')

class UserController {

    async createUser(req,res) {

        let {login, password, role} = req.body

        let newPerson;

        switch (role) {
            case undefined:
                role = "user"
                newPerson = await db.query(`INSERT INTO users (login,password,role) values ($1,$2,$3) RETURNING *`, [login, password, role])
                res.json(newPerson)
                break;

            case "admin":
                newPerson = await db.query(`INSERT INTO users (login,password,role) values ($1,$2,$3) RETURNING *`, [login, password, role])
                res.json(newPerson)
                break;

            default:
                res.send("Undifined role")
            
        }
        

    }

    async getUsers(req,res) {

        const allUsers = await db.query(`SELECT * FROM users`)
        res.json(allUsers.rows)
    }

    async getOneUser(req,res) {

        const id = req.params.id
        const user = await db.query(`SELECT * FROM users WHERE user_id=$1`, [id])
    
        
        if (user.rows == ""){
            res.send('User undifined')
        }
        else{
            res.json(user.rows[0])
        }


    }

    async updateUser(req,res) {
        
        let {login,password,role,user_id} = req.body

        if (role == undefined){
            role = "user"
        }
        if (user_id == undefined){
            res.send("Undefined user_id")
            return;
        }

        const user = await db.query(`UPDATE users set login=$1, password=$2, role=$3 WHERE user_id=$4 RETURNING *`, [login, password, role, user_id])

        res.json(user.rows[0])
        
    }

    async deleteUser(req,res) {
        const id = req.params.id

        const user = await db.query(`DELETE FROM users WHERE user_id=$1 RETURNING *`, [id])
        res.json(user)
    }

    async userAddToHoll(req, res) {
        const {hole_name, user_id} = req.body

        const user = await db.query(`UPDATE users set hole_name=$1 WHERE user_id=$2 RETURNING *`, [hole_name, user_id])

        res.json(user)

    }

}

module.exports = new UserController()