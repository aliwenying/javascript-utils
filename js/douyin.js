//整理抖音常用的功能

//当前时间格式化 YYYY-MM-DD HH:MM:SS
export const getNowTime=()=>{
  //格式'2023-03-01 18:54:18'
  const time=new Date((new Date().getTime()+ 8*1000*60*60)).toJSON().split('T').join(' ').substr(0,19)
  return time;
}

//转换数字为w  数字超过1万 转换为 1.0w 11000为1.1w
export const formatNumber = (num) => {
  return num >= 1e4 ? (num / 1e4).toFixed(1) + "w" : num
}
//同步抖音的， 刚刚，几分钟钱，几小时前，几天前，日期，年月
export const timeShow=(time)=> {
        // 保留原始的时间
        let result = time;
        
        //把分，时，天，周，半个月，一个月用毫秒表示
        let minute = 1000 * 60; 
        let hour = minute * 60;
        let day = hour * 24;
        let week = day * 7;
        let halfamonth = day * 15;
        let month = day * 30;
                let year=day*365
        
        //获取当前时间毫秒
        let now = new Date().getTime(); 
        
        // 截取转换下
        time = time.substring(0, 18);

        // 转化成毫秒数
        let timestamp = new Date(time).getTime(); 
              
        //时间差
        let diffValue = now - timestamp; 

        // 超过当前时间,直接return
        if (diffValue < 0) {
          return result;
        }
        
        //计算时间差的分，时，天，周，月
               
        let minC = diffValue / minute; 
        let hourC = diffValue / hour;
        let dayC = diffValue / day;
        let weekC = diffValue / week;
        let monthC = diffValue / month;
                let yearC =diffValue / year
        console.log('monthC',monthC)
        console.log('dayC',dayC)
        if(yearC>1){
                   result =time.split(' ')[0]
                }
        else if (dayC>4 && monthC <= 12) {
          result = `${time.split('-')[1]}-${time.split('-')[2]}`.split(' ')[0]
        } else if (dayC >= 1 && dayC <= 4) {
          result = parseInt(dayC) + "天前"
        } else if (hourC >= 1 && hourC <= 23) {
          result = parseInt(hourC) + "小时前"
        } else if (minC >= 1 && minC <= 59) {
          result = parseInt(minC) + "分钟前"
        } else if (diffValue >= 0 && diffValue <= minute) {
          result = "刚刚"
        } else {
          // 时间太久
          result = time;
        }
        
        // 最后return出来
        return result;

      }