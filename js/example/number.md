## Number 数字方法

### `randomNum` 返回指定范围内的随机整数
```javascript
utilscore.randomNum(5,10) // => 5 || 6 || 7 || 8 || 9 || 10 
```

### `round` 将数字四舍五入到指定的小数位数
```javascript
utilscore.round(12.555,2) // => 12.56
```

### `sum` 返回两个或两个以上数字/数字数组中元素之和
```javascript
utilscore.sum([1,2,3,4,5]) // => 15
```

### `sumBy` 根据函数映射每个元素，然后返回数组的和
```javascript
const arr = [{num:1},{num:2},{num:3},{num:4},{num:5}];
utilscore.sumBy(arr,(row)=>row.num) // => 15

utilscore.sumBy([1,2,3,4,5],row=>row) // => 15
```

### `toDecimalMark` 将数字转化为千分位格式,可以在数字前面加上符号
```javascript
utilscore.toDecimalMark(12345674654.123,'￥') // => "￥12,345,674,654.123"
```

### `addNum` 加法运算
```javascript
// console.log(0.3+0.6)     // => 0.8999999999999999
utilscore.addNum(0.3 , 0.6) // => 0.9
```

### `subNum` 减法运算
```javascript
// console.log(0.3 - 0.2)   // => 0.09999999999999998
utilscore.subNum(0.3 , 0.2) // => 0.1 
```

### `mulNum` 乘法运算
```javascript
// console.log(0.3 * 1.5)   // => 0.44999999999999996
utilscore.mulNum(0.3 , 1.5) // => 0.45
```

### `divNum` 除法运算
```javascript
// console.log(0.3 / 0.1)   // => 2.9999999999999996
utilscore.divNum(0.3 , 0.1) // => 3
```

### `getrandom` 实现产生n个随机数，并且随机数之和是固定值
```javascript
utilscore.getrandom(200,10) 
// => [44, 27, 17, 11, 13, 20, 13, 9, 28, 18]
```

