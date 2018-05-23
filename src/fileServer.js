const Koa2 = require("koa");
const koaStatic = require("koa-static");
const path = require("path");

let fileServer = new Koa2();

filePath = path.resolve("F:/fileServer/static");
fileServer.use(koaStatic(filePath));

const port = 8848;
fileServer.listen(port);
console.log(`server is runningat http://localhost:${port}/`);
