const router = require('koa-router')()
const doService = require('../controllers/mysqlConfig');
const mymethods = require('../public/javascripts/metheds.js')
const returnMessage = require('./common/returnMessage')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.get('/entry', async (ctx, next) => {
  console.log('entry')
  console.log( ctx.request.query.name )
  let data = ctx.request.query
  data.origin = ctx.request.ip
  data.date=  mymethods.changeTime(new Date()) 
  doService.addEntry(data)
  returnMessage(ctx,{})
})
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
