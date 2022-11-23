
const db = require('../db/connect');


const userById = async (req, res) => {
    const { id } = req.body;
    let [user] = await db.query( `SELECT * FROM users WHERE id_user = ?`, id );
    if(user){
        return res.status(200).json(user);
    } 
    return res.status(404);
}

const getUserByUsername = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query( `SELECT * FROM users WHERE username = ?`, username );
    if(user){
        return res.status(200).json(user);
    } 
    return res.status(404);
}

const getUsers = async (req, res) => {
    let [users] = await db.query( `SELECT * FROM users` );
    if(users){
        return res.status(200).json(users);
    } 
    return res.status(400);
}

const usernameExists = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query( `SELECT * FROM users WHERE username = ?`, username );
    if(user){
        return res.status(200).json(user);
    }
    return res.status(400);
}

const getMovie = async (req, res) => {
    const { title } = req.body;
    
}

const getLists = async (req, res) => {
    const { username, password } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
        let listNames = [];
        for(list of lists){
            listNames.push(list.movielistid, list.nombre);
        }
        return res.status(200).json(listNames);
    }
    return res.status(400);
}

const getList = async (req, res) => {
    const { username, password, movielistid } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        let [list] = await db.query('SELECT * FROM usermovielist WHERE iduser = ', user.id_user, ' AND movielistid = ?', movielistid);
        return res.status(200).json(list);
    }
    return res.status(400);
}

module.exports = { userById, getUserByUsername, getUsers, usernameExists, getMovie, getList, getLists }; //, searchMovie, getStatus, getMovieForList