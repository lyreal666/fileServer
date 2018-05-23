const router = require("koa-route");
const path = require("path");


const upload = async (ctx, next) => {
    const uploadPath = ctx.params.uploadPath;
    const absUpPath = path.resolve('F:/fileServer/static', "upload")
};
//router.post("/upload/:uploadPath",)