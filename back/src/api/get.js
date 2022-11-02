
const db = require('../db/connect');


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

const getMovie = async (req, res) => {
    const { title } = req.body;
    const doc = new JSDOM(website);
    const list_table = doc.window.document.querySelector('.lister-list');
    const list = JSON.parse(list_table.getAttribute('titleColumn'));
    const top250 = list.map(x => [x.title]);
    console.log(top250)
}

module.exports = { userById, getUsers, userExists, getMovie, searchMovie, getStatus, getFriends, getMovieForList };