const dogs = require('../json/dog.json');

module.exports = {
    async show(req, res) {
        res.json(dogs);
    }
}