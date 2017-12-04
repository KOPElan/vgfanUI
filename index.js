const app = require('snowframework');
const appsetting = require('./appsetting');

app.init(appsetting.snowf);

app.addController('home', require('./controllers/homeController'));

app.start();