import { unique } from './array'
import { isArray, isString } from './types' 

/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} _mask 
 * @example utilscore.mask('12398765432',3,7) // => "123****5432"
 */ 
export const mask = (cc, num1 = 0, num2 = 0, _mask = '*') => {
  let reg = new RegExp(`\^\(\.\{${num1}\}\)\(\.\{${num2 - num1}\}\)\(\.${num2>=cc.length?'\?':'\+'}\)\$`);
  return cc.replace(reg,($0,$1,$2,$3)=> $1+$2.replace(/./g,_mask)+$3) 
}

/**
 * 从位置左边开始，使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num 
 * @param {string} _mask 
 * @example 用法跟 mask 类似
 */
export const maskLeft = (cc, num = 0, _mask = '*') => mask(cc,0,num,_mask)
  
/**
 * 从位置右边开始，使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num 
 * @param {string} _mask 
 * @example 用法跟 mask 类似
 */
export const maskRight = (cc, num = 0, _mask = '*') => {
  let strL = cc.length
  return mask(cc,num>strL?0:strL-num,strL,_mask)
}


/**
 * 生成一个随机的十六进制颜色代码
 * @example utilscore.randomHexColorCode() // => "#c4aabc"
 */
export const randomHexColorCode = () => {
    let n = ((Math.random() * 0xfffff) | 0).toString(16);
    return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
  }


/**
 * 返回元素出现的次数
 * @param {string} str 
 * @param {null|string,array} keys 
 * @example 1.不传参,获取全部
              utilscore.getCounts('asawdawf') // => {a: 3, s: 1, w: 2, d: 1, f: 1}
            2.传字符串  
              utilscore.getCounts('asasfdfasdasf','asf') // => {asf: 2}
            3.传数组
              utilscore.getCounts('asdfjl;qwoetuqwe*(^&&()_)*_23480*yoij)(ojilA4WE4',['we*(^&&()_)*','asdfjl','_23480','qw'])
              // => {we*(^&&()_)*: 1, asdfjl: 1, _23480: 1, qw: 2}
 */
export const getCounts = (str,keys=null) => {
  let arr = {}
  let keyMap = []
  let arrStr = str.split('')
  
  if(isArray(keys)) keyMap = unique(keys);
  else if(isString(keys)) keyMap = keys.split(' ')
  else keyMap = unique(arrStr)

  keyMap.map(key=>{
    
    //处理包含特殊字符
    var reg = new RegExp("\([`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]\)",'g')
    let _key = key.replace(reg,'\\$1')

    let res = str.match(new RegExp(_key,'g'))
    
    arr[key] = res?(arr[key] = res.length):0
  })


	return arr
} 

/**
 * 全局唯一标识符 UUID
 * @param {number} len 长度
 * @param {number} radix 基数 62
 * @example utilscore.uuid(10,62) // => "e424F79HP8"
 */
export const uuid = (len, radix) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

/**
 * GUID:128位的数字标识符
 * @example utilscore.guid() // => "537a3b5a-5c1b-433d-9814-532efdda6b10"
 */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}