
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

const login = async (req, res) => {
    const { username, password } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password != password){
        return res.status(400);
    } 
    return res.status(200).send("Logged in.");
}

const changePassword = async (req, res) => {
    const { username, oldPassword, newPassword } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password != oldPassword){
        return res.status(400);
    } 
    let userUpdated = await db.query('INSERT INTO users SET ?', 
        { 
            username: user.username, 
            password: newPassword,
            firstnames: user.firstnames,
            lastnames: user.lastnames,
            email: user.email,
            updated_at: "2022-01-01 00:00:00"
        });
    if(userUpdated) {
        return res.status(200).send("Succesful.");
    } 
}

const changeUser = async (req, res) => {
    const { username, newUsername, pswd } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password != pswd){
        return res.status(400);
    } else {
        let [newUser] = await db.query('SELECT * FROM users WHERE username = ?', newUsername);
        if(newUser){
            return res.status(400);
        }
        let user = await db.query('INSERT INTO users SET ?', 
        { 
            username: newUsername, 
            password: pswd,
            firstnames: user.firstnames,
            lastnames: user.lastnames,
            email: user.email,
            updated_at: "2022-01-01 00:00:00"
        });
        if(user) {
            return res.status(200).send("Succesful.");
        } 
    }
}

const addFriend = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    
    
}

const deleteFriend = async (req, res) => {
    const { username } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    
}

module.exports = { register, login, changeUser, changePassword, 
    addFriend, deleteFriend } // , addRating, changeRating, addComment, changeComment, addMovie, deleteMovie, createList, deleteList, setStatus, changeTitle, changeDescription 