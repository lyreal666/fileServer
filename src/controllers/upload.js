let upload = async (ctx, next) => {
    ctx.render('upload.html', {fileServer:"fileServer"})
};

module.exports = {
    'GET /': upload
};

