
const post = require('./post');
const get = require('./get');

module.exports = (app) => {
    app.use('/post', post),
    app.use('/get', get)
}