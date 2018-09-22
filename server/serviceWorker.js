const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi();

//Methods and Exporting
module.exports = {
    getStats: (req, res) => {
        //Destruct from body
        let {username, platform} = req.body;
        //Get Stats from API
        R6.stats(username, platform).then(response => {
            console.log(response);
            res.status(200).send(response);
        }).catch(error => {
            console.error(error);
            res.send(error);
        })
    }
}