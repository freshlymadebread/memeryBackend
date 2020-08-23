const router = require('koa-router')()
const doService = require('../controllers/mysqlConfig');
const returnMessage = require('./common/returnMessage')
router.prefix('/poetry')
var config = require('../defaultConfig');

router.post('/getAll', async (ctx, next) => {
  let name =  ctx.request.body.name
  let data= {}
  let array = await doService.getAllPoetry(config.rootConf.some(item => item ===name));
  data={
      poetryList:array
  }
  returnMessage(ctx,data)
})

// 增加用户(POST请求)
router.post('/add', async (ctx, next) => {
})

module.exports = router