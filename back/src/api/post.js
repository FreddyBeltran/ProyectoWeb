
const db = require('../db/connect');

const register = async (req, res) => {
    const { username, password, firstnames, lastnames, email } = req.body;

    let [email_check] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (email_check.length > 0) {
        return res.status(400).send('Duplicated email.')
    }
    let [username_check] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (username_check.length > 0) {
        return res.status(400).send('Duplicated username.')
    }
    if(password == ""){
        return res.status(400).send('Invalid password.')
    }
    let user = await db.query('INSERT INTO users SET ?', 
    { 
        username: username, 
        password: password,
        firstnames: firstnames,
        lastnames: lastnames,
        email: email,
        updated_at: "2022-01-01 00:00:00"
    });
    if(user.length > 0) {
        return res.status(200).send("Succesful.");
    } 
    return res.status(400).send('Username not created.');
}

const login = async (req, res) => {
    const { username, password } = req.body;
    let [user] = await db.query(`SELECT * FROM users WHERE username = '${username}'`);
    if(user.length == 0) {
        return res.status(400).send('Username not found.');
    }
    if(user[0].password != password){
        return res.status(400).send('Wrong password.');
    } 
    return res.status(200).send('Logged in.');
}

const list = async (req, res) => {
    const { id_user, listname, desc } = req.body;
    let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', id_user);
    for(list of lists){
        if(list.nombre === listname){
            return res.status(400).send("list already exists.");
        }
    }
    let [list] = await db.query('INSERT INTO usermovielist SET ?', {
        iduser: id_user,
        nombre: listname,
        descripcion: desc
    });
    if(list.length > 0){
        return res.status(200).send("list created.");
    }
    return res.status(400).send("list not created.");
}

const addMovie = async (req, res) => {
    const { movielistid, movieid } = req.body;
    let [sql] = await db.query(`INSERT INTO listandmovies (movieid, movielistid) VALUES (${movieid}, ${movielistid})`);
    if(sql.affectedRows === 1){
        return res.status(200).send('Movie added.');
    }
    return res.status(400).send('Error adding movie.');
}

const addRating = async (req, res) => {
    const { id_user, movieid, rating, comment } = req.body;
    let movierating = await db.query('INSERT INTO userratings SET ?', 
    { 
        user: id_user, 
        movie: movieid,
        rating: rating,
        comment: comment,
        created_at: "2022-01-01 00:00:00",
        updated_at: "2022-01-01 00:00:00"
    });
    if(movierating.length > 0) {
        return res.status(200).send("Succesful.");
    } 
    return res.status(400).send('Rating not created.');
}

module.exports = { login, list, addMovie, register, addRating };