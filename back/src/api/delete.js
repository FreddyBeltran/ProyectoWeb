
const db = require('../db/connect')

const deleteUser = async (req, res) => {
    const { username, password } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        user.is_deleted = 1;
        let deleteduser = await db.query('INSERT INTO users SET ?', user);
        return res.status(200);
    }
    return res.status(400);
}

const deleteList = async (req, res) => {
    const { username, password, name } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
        for(list of lists){
            if(list.nombre === name){
                //delete
                return res.status(200);
            }
        }
        return res.status(404);
    }
    return res.status(400);
}

const deleteMovie = async (req, res) => {
    const { username, password, moviename, listname } = req.body;
    let [user] = await db.query('SELECT * FROM users WHERE username = ?', username);
    if(!user) {
        return res.status(400);
    }
    if(user.password === password){
        let [lists] = await db.query('SELECT * FROM usermovielist WHERE iduser = ?', user.id_user);
        for(list of lists){
            if(list.nombre === listname){
                let [movies] = await db.query('SELECT * FROM movies WHERE iduser = ?', user.id_user);
                for(movie of movies){
                    if(movie.name === moviename){
                        movie.is_deleted = 1;
                        let deletedMovie = await db.query('INSERT INTO movies SET ?', movie);
                        return res.status(200);
                    }
                }
                return res.status(404);
            }
        }
        return res.status(404);
    }
    return res.status(400);
}

module.exports = { deleteUser, deleteList, deleteMovie } 