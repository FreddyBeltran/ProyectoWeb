
const post = require('./post');
const get = require('./get');
const del = require('./delete');
const put = require('./put');

module.exports = (app) => {
    app.use('/post', post),
    app.use('/get', get),
    app.use('/delete', del),
    app.use('/put', put)
}