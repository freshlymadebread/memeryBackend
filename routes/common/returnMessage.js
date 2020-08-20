// 只接受ctx时，默认返回json，成功
let returnMessage = function(ctx, data, error, format){
    let info = {}
    if(data){
       info.data = data 
    }
    if(!format) format = 'json'
    if(format === 'json')
        ctx.body = {
            errcode: error ? 1 : 0,
            msg : error? 'error' :'success',
            ...info,
        }
        
}
module.exports = returnMessage;
