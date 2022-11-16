
const db = require('../db/connect')

const deleteUser = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    
}

module.exports = { deleteUser } 