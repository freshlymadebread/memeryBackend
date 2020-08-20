const router = require('koa-router')()
const doService = require('../controllers/mysqlConfig');
const returnMessage = require('./common/returnMessage')
router.prefix('/poetry')

router.post('/getAll', async (ctx, next) => {
  let data= {}
  let array = await doService.getAllPoetry();
  data={
      poetryList:array
  }
  returnMessage(ctx,data)
})

// 增加用户(POST请求)
router.post('/add', async (ctx, next) => {
})

module.exports = router