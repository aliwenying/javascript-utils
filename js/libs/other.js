/**
 * 评分组件
 * @param {Number} rate max 5
 * @example utilscore.getRate(2)   //★★☆☆☆
 */
export const getRate =  (rate) => {
    return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
}