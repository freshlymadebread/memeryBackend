
const mymethods= {
    changeTime: function(date,format) {
        let year = date.getFullYear()
        let mouth = date.getMonth() +1 
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        return  (format || 'yyyy-mm-dd hh:MM:ss').replace('yyyy',year).replace(/mm/,mouth).replace('dd',day).replace('hh',hours).replace(/MM/,minutes).replace('ss',seconds)
    },
    parseQuery: (url)=> {
        let query = url.split('?')[1]
        var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
        var obj = {};
        while (reg.exec(query)) {
            obj[RegExp.$1] = RegExp.$2;
        }
        return obj;
    }
    
}
 module.exports = mymethods