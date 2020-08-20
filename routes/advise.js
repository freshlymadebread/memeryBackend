const router = require('koa-router')()
const doService = require('../controllers/mysqlConfig');
const returnMessage = require('./common/returnMessage')

const mymethods = require('../public/javascripts/metheds.js')
console.log(mymethods)
router.prefix('/advise')
//获取所有用户(GET请求)
router.get('/', async (ctx, next) => {
    console.log(ctx)
    ctx.body = {
        data: 'arr'
    }
})
//获取所有用户(GET请求)
router.post('/', async (ctx, next) => {
})

// 增加用户(POST请求)
router.post('/add', async (ctx, next) => {
    console.log(mymethods)
    console.log(ctx.request.body.name)
    let data = ctx.request.body
    data.origin = ctx.request.ip
    data.date=  mymethods.changeTime(new Date()) 
    console.log(data)
  await doService.addAdvise(data)
      .then((data) => {
        returnMessage(ctx)
      }).catch(() => {
        returnMessage(ctx,{
        },true)
      })
})

module.exports = router