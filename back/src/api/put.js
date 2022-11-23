
const db = require('../db/connect')

const changeUser = async (req, res) => {
    const { username, newUsername } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(user.length == 0) {
        return res.status(400).send('User not found.');
    }
    let [newUser] = await db.query('SELECT * FROM users WHERE username = ?', newUsername);
    if(newUser.length > 0){
        console.log(newUser)
        return res.status(400).send('Username already exists.');
    }
    await db.query(`UPDATE users SET username = '${newUsername}' WHERE username = '${username}'`);
    return res.status(200).send("Succesful.");
}

const changePassword = async (req, res) => {
    const { username, newPassword } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(user.length == 0) {
        return res.status(400).send('User not found.');
    }
    await db.query(`UPDATE users SET password = '${newPassword}' WHERE username = '${username}'`);
    return res.status(200).send("Succesful.");
}


module.exports = { changeUser, changePassword };