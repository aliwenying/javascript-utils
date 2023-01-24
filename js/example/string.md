## String

### `mask` 根据位置,使用 * 遮蔽字符串
```javascript
utilscore.mask('12398765432',3,7) // => "123****5432"
```

### `maskLeft` 从位置左边开始，使用 * 遮蔽字符串
```javascript
utilscore.maskLeft('阿斯蒂芬',2) // => "**蒂芬"
```

### `maskRight` 从位置右边开始，使用 * 遮蔽字符串
```javascript
utilscore.maskRight('阿斯蒂芬',2) // => "阿斯**"
```

### `randomHexColorCode` 生成一个随机的十六进制颜色代码
```javascript
utilscore.randomHexColorCode() // => "#28fa14"
```

### `getCounts` 返回元素出现的次数
```javascript
utilscore.getCounts('utilscoreJs 前端业务代码工具库')
// => {"u":1,"t":1,"i":1,"l":1,"s":2,"c":1,"o":1,"r":1,"e":1,"J":1," ":1,"前":1,"端":1,"业":1,"务":1,"代":1,"码":1,"工":1,"具":1,"库":1}

utilscore.getCounts('utilscoreJs 前端业务代码工具库',['前端','工具库','util','utilscore']) 
// => {"前端":1,"工具库":1,"util":1,"utilscore":1}

utilscore.getCounts('utilscoreJs 前端业务代码工具库','utils')
// => {utils: 1}
```

### `uuid` 全局唯一标识符 UUID
```javascript
utilscore.uuid()        // => "AFC36287-3BBC-4427-9D85-AF1F2FB8A9B0"

utilscore.uuid(10,62)   // => "e424F79HP8"

utilscore.uuid(32,62)   // => "hSQbiF5ngC9ypE3WzWYOExSWvLbIriS0"
```

### `guid` GUID:128位的数字标识符
```javascript
utilscore.guid()        // => "b76b5e27-6f29-4bf4-ad64-872195b4a285"
```