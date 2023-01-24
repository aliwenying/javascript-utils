## Data 

### `formatTime` 格式化时间

```javascript

let date = '2019/09/09 09:19:29'

utilscore.formatTime(date,'YYYY-MM-DD hh:mm:ss 星期W  季度Q') // => "2019-09-09 09:19:29 星期一  季度3"

```

### `formatHMS` 根据时间戳（秒）返回 HMS 格式

```javascript

utilscore.formatHMS(123)    // -> "2m3s"

utilscore.formatHMS(1234)   // -> "20m34s"

utilscore.formatHMS(123456) // -> "1d10h17m36s"

```

### `unix` 获取时间戳 (秒)

```javascript

utilscore.unix()                        // => 1560394935

utilscore.unix('2019/09/09 09:19:29')   // => 1567991969

```

### `countDown` 倒计时

```javascript

utilscore.countDown() // => error 缺少参数

utilscore.countDown('2019/09/09 09:19:29') // => "87d22h15m52s"

```

