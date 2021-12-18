const ongs = require('../json/ong.json');

module.exports = {
    async show(req, res) {
        res.json(ongs);
    }
}