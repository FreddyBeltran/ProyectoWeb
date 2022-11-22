
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
    const doc = new JSDOM(website);
    const list_table = doc.window.document.querySelector('.lister-list');
    const list = JSON.parse(list_table.getAttribute('titleColumn'));
    const top250 = list.map(x => [x.title]);
    console.log(top250)
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
            listNames.push(list.nombre)
        }
        return res.status(200).json(listNames);
    }
    return res.status(400);
}

const getList = async (req, res) => {
    const { username, password, name } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
        for(list of lists){
            if(list.nombre === name){
                return res.status(200).json(list);
            }
        }
        return res.status(404);
    }
    return res.status(400);
}

module.exports = { userById, getUserByUsername, getUsers, usernameExists, getMovie, getList, getLists }; //, searchMovie, getStatus, getMovieForList