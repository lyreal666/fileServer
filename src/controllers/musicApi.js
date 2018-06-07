const musicAPI = require('music-api');


let getMusic = async (ctx, next) => {
    console.debug(ctx.request.url);
    ctx.response.type = 'application/json';
    const searchStr = ctx.params.musicName;
    let result = {};
    try {
        result = await musicAPI.searchSong('netease', {
            key: `${searchStr}`,
            limit: 10,
            page: 1,
        })
    } catch (e) {
        console.error(e)
    }
    ctx.response.body = result;
    await next();
};

module.exports = {
    'GET /api/music/:musicName': getMusic
};
