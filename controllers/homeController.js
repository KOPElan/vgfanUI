const snowf = require('snowframework');

const homeController = {
    indexAction: function (req, res) {
        res.send(snowf.actionResult.view, null);
    },
    loginAction: function(req,res){
        res.send(snowf.actionResult.view);
    }

}

module.exports = homeController;