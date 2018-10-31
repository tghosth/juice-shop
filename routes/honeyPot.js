const insecurity = require('../lib/insecurity')
const appsensornodejs = require('../../appsensor-nodejs');

module.exports = function honeyPotCalled () {
    return (req, res, next) => {
        const user = insecurity.authenticatedUsers.from(req);
        var email = user && user.email ? user.email : "";
        appsensornodejs.SendEvent(appsensornodejs.DetectionPoints.HT2, {username: email, SourceIP: req.socket.remoteAddress})
        res.status(404).send("Nooope....");
    }
}
