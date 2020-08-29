const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig');
const returnMessage = require('./common/returnMessage')

router.prefix('/users')

//获取所有用户(GET请求)
router.get('/', async (ctx, next) => {
//   console.log(ctx)
let data= {}
  let array = await userService.findUserData();
  data={
      ...array[0]
  }
  data.oldTime = new Date(array[0].data).valueOf()
  data.nowTime = new Date().valueOf()
  let format = 'json'
  returnMessage(ctx,data)
})

router.get('/sercet', async (ctx, next) => {
    //   console.log(ctx)
    let name = ctx.request.query.name
    let data= {}
    let array = await userService.findUserData();
    data={
        ...array[0]
    }
    let password =  data.password
    if(name.indexOf(password)!==-1){
        returnMessage(ctx,{
            name: name.split(password)[0]
        },false)
    }
    else{
        returnMessage(ctx,{
            name: name.split(password)[0]
        },true)
    }
})
// 增加用户(POST请求)
router.post('/add', async (ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body['name']);
  arr.push(ctx.request.body['pass']);
  arr.push(ctx.request.body['auth']);

  await userService.addUserData(arr)
      .then((data) => {
          let r = '';
          if (data.affectedRows != 0) {
              r = 'ok';
          }
          ctx.body = {
              data: r
          }
      }).catch(() => {
          ctx.body = {
              data: 'err'
          }
      })
})

module.exports = router