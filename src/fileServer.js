const Koa2 = require("koa");
const koaStatic = require("koa-static");
const path = require("path");
const templating = require("./middlewares/templating");
const bodyParser = require("koa-bodyparser");
const controler = require("./middlewares/controler");

let fileServer = new Koa2();

filePath = path.resolve("../static");
fileServer.use(koaStatic(filePath));
fileServer.use(bodyParser());
fileServer.use(controler());

const isProduction = process.env.NODE_ENV === 'production';
fileServer.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

const port = 8848;
fileServer.listen(port);
console.log(`server is runningat http://localhost:${port}/`);
// wget http://10.128.199.173:8848/audio/大千世界-许嵩.mp3
// mplayer 大千世界-许嵩.mp3