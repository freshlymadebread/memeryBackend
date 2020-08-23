var mysql = require('mysql');
//var config = require('./defaultConfig');
// defaultConfig 文件格式如该目录下的defaultConfig，为了我的数据库安全，没有将配置文件上传到网络
var config = require('../defaultConfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let allServices = {
    query: function (sql, values) {
        console.log(sql)
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
   findUserData: function () {
        let _sql = ''
        _sql = `select * from user;`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
         let _sql = "insert into user set name=?,pass=?,avator=?,moment=?;"
         return allServices.query(_sql, obj)
     },
     addAdvise: (obj) => {
        let _sql = `insert into advise set name='${obj.name}',date='${obj.date}',text='${obj.text}',origin='${obj.origin}';`
        return allServices.query(_sql, obj)
    },
    addEntry: (obj) => {
       let _sql = `insert into entry set  name='${obj.name}',date='${obj.date}',origin='${obj.origin}';`
       return allServices.query(_sql, obj)
   },
    getAllPoetry: function (flag) {
        let _sql = ''
        let selectStr = ';'
        if(!flag){
            selectStr = ' where sign = 1'
        }
        _sql = `select * from poetry`+ selectStr
        return allServices.query(_sql)
    },
    getAllMessage(){
        let _sql = ''
        _sql = `select * from advise;`
        return allServices.query(_sql)
    }
}

module.exports = allServices;