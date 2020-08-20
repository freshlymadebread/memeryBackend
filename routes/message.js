const router = require('koa-router')()
const doService = require('../controllers/mysqlConfig');
const returnMessage = require('./common/returnMessage')
router.prefix('/message')

router.post('/getAll', async (ctx, next) => {
  console.log('111111111111111')
  let data= {}
  let array = await doService.getAllMessage();
  data={
    messageList:array
  }
  returnMessage(ctx,data)
})

// 增加用户(POST请求)
router.post('/add', async (ctx, next) => {
})

module.exports = router