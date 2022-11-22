
const db = require('../db/connect')

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
    if(user) {
        return res.status(200).send("Succesful.");
    } 
    return res.status(400);
}

const list = async (req, res) => {
    const { username, password, listname, desc } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(user) {
        if(user.password === password){
            let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
            for(list of lists){
                if(list.nombre === listname){
                    return res.status(400).send("list already exists.");
                }
            }
            let [list] = await db.query('INSERT INTO usermovielist SET ?', {
                iduser: user.id_user,
                nombre: listname,
                descripcion: desc
            });
            if(list){
                return res.status(200).send("list created.");
            }
            return res.status(400).send("list not created.");
        } 
    }
    return res.status(400);
}

const movie = async (req, res) => {
    const { username, password, listname, desc } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(user) {
        if(user.password === password){
            let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
            for(list of lists){
                if(list.nombre === listname){
                    return res.status(400).send("list already exists.");
                }
            }
            let [list] = await db.query('INSERT INTO usermovielist SET ?', {
                iduser: user.id_user,
                nombre: listname,
                descripcion: desc
            });
            if(list){
                return res.status(200).send("list created.");
            }
            return res.status(400).send("list not created.");
        } 
    }
    return res.status(400);
}



module.exports = { register, list, movie };