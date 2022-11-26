
const db = require('../db/connect')

const deleteUser = async (req, res) => {
    const { username, password } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400).send('User does not exist.');
    }
    if(user.password === password){
        await db.query('UPDATE users SET is_deleted = TRUE WHERE username = ?', username);
        return res.status(200).send('Account deleted.');
    }
    return res.status(400).send('Incorrect credentials.');
}

const deleteList = async (req, res) => {
    const { movielistid } = req.body;
    await db.query('DELETE FROM usermovielist WHERE movielistid = ?', movielistid);
    return res.status(200).send('List deleted.');
}

const deleteMovie = async (req, res) => {
    const { movieid, movielistid } = req.body;
    await db.query(`DELETE FROM listandmovies WHERE movieid = ${movieid} AND movielistid = ${movielistid}`);
    return res.status(200).send('Movie deleted.');
}

module.exports = { deleteUser, deleteList, deleteMovie } 