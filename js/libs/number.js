import {shuffle} from './array'
/**
 * 返回指定范围内的随机整数。
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @example utilscore.randomNum(5,10) // => 5 || 6 || 7 || 8 || 9 || 10 
 */
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 将数字四舍五入到指定的小数位数。
 * @param {number} n 操作的数字
 * @param {number} decimals 精确到几位小数 
 * @example utilscore.round(12.555,2) // => 12.56
 */
export const round = (n, decimals = 0) => {
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
}


/**
 * 返回两个或两个以上数字/数字数组中元素之和。
 * @param  {Array} arr 操作的数组 
 * @example utilscore.sum([1,2,3,4,5]) // => 15
 */
export const sum = (arr) => sumBy(arr,row=>row)


/**
 * 根据函数映射每个元素，然后返回数组的和
 * @param {Array} arr 
 * @param {Function} fn 
 * @example utilscore.sumBy([{num:1},{num:2},{num:3},{num:4},{num:5}],(row)=>row.num) // => 15
 */
export const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => addNum(acc, val), 0);

/**
 * 将数字转化为千分位格式,可以在数字前面加上符号
 * @param {Number|String} num 
 * @param {String} mark
 * @returns {String}
 * @example utilscore.toDecimalMark(12345674654.123,'￥') // => "￥12,345,674,654.123"
 */
export const toDecimalMark = (num, mark = '') => num.toLocaleString('en-US').replace(/^/, mark);

/**
 * 加法运算
 * @param {Number} a 
 * @param {Number} b 
 * @example utilscore.addNum(0.3 , 0.6) // => 0.9
 */
export const addNum = (a, b) => {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mulNum(a, e) + mulNum(b, e)) / e;
}

/**
 * 减法运算
 * @param {Number} a 
 * @param {Number} b
 * @example utilscore.subNum(0.3 , 0.2) // => 0.1 
 */
export const subNum = (a, b) => {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mulNum(a, e) - mulNum(b, e)) / e;
}

/**
 * 乘法运算
 * @param {Number} a 
 * @param {Number} b 
 * @example utilscore.mulNum(0.3 , 1.5) // => 0.45
 */
export const mulNum = (a, b) => {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

/**
 * 除法运算
 * @param {Number} a 
 * @param {Number} b 
 * @example utilscore.divNum(0.3 , 0.1) // => 3
 */
export const divNum = (a, b) => {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mulNum(c / d, Math.pow(10, f - e));
}

/**
 * 实现产生n个随机数，并且随机数之和是固定值,简单版
 * @param {number} num 随机数之和，固定值 
 * @param {number} len 多少个随机数
 */
export const getrandom = (num, len) => {
  var arr = []
  while (arr.length < len - 1) {
    let Average = Math.ceil(num / (len - arr.length -1))
    let _num = Math.floor(randomNum(Average * 0.2, Average * 0.8))
    arr.push(_num)
    num = num - _num
  }
  arr.push(num)
  return shuffle(arr)
}