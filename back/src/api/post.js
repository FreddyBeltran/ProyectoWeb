
const db = require('../db/connect')

const register = async (req, res) => {
    const { username, password, firstnames, lastnames, email } = req.body

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
        email: email
    });
    if(newUser) {
        return res.status(200);
    } 
    return res.status(400);
}

const login = async (req, res) => {
    const { info } = req.body;
    
}

module.exports = { register, login }