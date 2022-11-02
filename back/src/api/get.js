
const db = require('../db/connect')

const userById = async (req, res) => {
    const { id } = req.body;
    let [user] = await db.query( `SELECT * FROM users WHERE id_user = ?`, id );
    if(user){
        return res.status(200).json(user);
    } 
    return res.status(400);
}

const getUsers = async (req, res) => {
    const {  } = req.body;
    let [users] = await db.query( `SELECT * FROM users` );
    if(users){
        return res.status(200).json(users);
    } 
    return res.status(400);
}

const userExists = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query( `SELECT * FROM users WHERE username = ?`, username );
    if(user){
        return res.status(200).json(user);
    } 
    return res.status(400);
}

module.exports = { userById, getUsers, userExists };