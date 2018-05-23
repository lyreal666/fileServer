const Koa2 = require("koa");
const koaStatic = require("koa-static");
const path = require("path");
const templating = require("./middlewares/templating");

let fileServer = new Koa2();

filePath = path.resolve("../static");
fileServer.use(koaStatic(filePath));

const isProduction = process.env.NODE_ENV === 'production';
fileServer.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
fileServer.use(async (ctx, next) => {
    ctx.render('upload.html', "fileServer")
});

const port = 8848;
fileServer.listen(port);
console.log(`server is runningat http://localhost:${port}/`);
