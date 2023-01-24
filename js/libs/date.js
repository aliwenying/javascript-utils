/**
 * 必填
 * @param {String} key 
 */
export const requered = (key='') => {
  console.error(`缺少参数${key}`)
}
/**
 * 格式化时间
 * @param {any} value 
 * @param {String} format 
 * @example utilscore.formatTime('2019/06/04 12:45:32','YYYY~MM~DD hh~mm~ss 星期W  季度Q') // => "2019~06~04 12~45~32 星期二  季度2"
 */
export const formatTime = (value, format) => {
  let nowDate = new Date(value)
  let weeks = ['日', '一', '二', '三', '四', '五', '六']
  let time = (new Date(+nowDate + 8 * 3600 * 1000)).toISOString().substr(0, 19).replace(/[a-z]/i, ' ');
  let [_, YYYY, MM, DD, hh, mm, ss] = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g.exec(time)
  var filterTime = (type, _) => type.slice(0, _.length)
  return format.replace(/(Y{1,4})/g, ($1) => filterTime(YYYY, $1))
    .replace(/(M{1,2})/g, ($1) => filterTime(MM, $1))
    .replace(/(D{1,2})/g, ($1) => filterTime(DD, $1))
    .replace(/(h{1,2})/g, ($1) => filterTime(hh, $1))
    .replace(/(m{1,2})/g, ($1) => filterTime(mm, $1))
    .replace(/(s{1,2})/g, ($1) => filterTime(ss, $1))
    .replace(/(W{1})/g, ($1) => weeks[nowDate.getDay()])
    .replace(/(Q{1})/g, ($1) => Math.floor((nowDate.getMonth() + 3) / 3))
  }


  /**
   * @param  {s} 秒数
   * @return {String} 字符串
   * @example utilscore.formatHMS(3610) // -> 1h0m10s
   */
  export const formatHMS = (s) => {
    var str = ''
    if(s > 3600 * 24) {
      str = Math.floor(s / 3600 / 24) + 'd' + Math.floor(s / 3600 % 24) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
    }
    else if (s > 3600) {
      str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
    } else if (s > 60) {
      str = Math.floor(s / 60) + 'm' + s % 60 + 's'
    } else {
      str = s % 60 + 's'
    }
    return str
  }

  /**
   * 获取时间戳 (秒)
   * @param {any} value 
   */
  export const unix = (value) => {
    if(value===void 0) return unix(Date.now())
    return Math.floor(new Date(value).getTime() / 1000);
  }

  /**
   * 倒计时
   * @param {any} target 
   */
  export const countDown = (target=requered()) => {
    let time = unix(target) - unix()
    return formatHMS(time)
  } 