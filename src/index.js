import moment from 'moment'

require('zh-cn')

const date = moment().format('MMMM Do YYYY, h:mm:ss a')

console.log(date)