
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
    
}
 module.exports = mymethods