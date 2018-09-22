const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi();

//Methods
function getStats(username, platform){
    R6.stats(username, platform).then(response => {
        return res.status(200).send(response);
    }).catch(error => {
        return res.send(error);
    })
};

//Export the methods
module.exports = {
    getStats
}