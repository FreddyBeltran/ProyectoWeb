
const db = require('../db/connect');

const getUsers = async (req, res) => {
    let [users] = await db.query( `SELECT * FROM users` );
    if(users){
        return res.status(200).json(users);
    }
    return res.status(400);
}

module.exports = { getUsers };