## type 类型方法

### `isNull` 判断类型Null
```javascript
utilscore.isNull(null) // => true
```

### `isUndefined` 判断类型Undefined
```javascript
var a;
utilscore.isUndefined(void 0) // => true
utilscore.isUndefined(undefined) // => true
utilscore.isUndefined(a) // => true 
```

### `isBoolean` 判断类型Boolean
```javascript
utilscore.isBoolean(true)   // => true
utilscore.isBoolean(false)  // => true
```

### `isNumber` 判断类型Number
```javascript
utilscore.isNumber(5)   // => true
utilscore.isNumber('5') // => false
```

### `isString` 判断类型String
```javascript
utilscore.isString(5)   // => false
utilscore.isString('5') // => true
```

### `isSymbol` 判断类型Symbol
```javascript
utilscore.isSymbol(Symbol()) // => true
utilscore.isSymbol(Symbol().toString()) // => false
```

### `isObject` 判断类型Object
```javascript
utilscore.isObject({}) // => true
utilscore.isObject([]) // => false
utilscore.isObject(new Date()) // => false
utilscore.isObject(function(){}) // => false
```

### `isRegExp` 判断类型RegExp
```javascript
utilscore.isRegExp(new RegExp(/hollo world/))
```

### `isArray` 判断类型Array
```javascript
const _arr = {
        0:11,
        1:22,
        length:2,
        push:Array.prototype.push
    }

_arr.push(33) // =>  {0:11,1:22,2:33,length:3,push:push()}

utilscore.isArray(_arr) // => false
utilscore.isArray(Array.from(_arr)) // => true
```

### `isFunction` 判断类型Function
```javascript
utilscore.isFunction(function(){}) // => true
```

### `getType` 获取数据类型
```javascript
utilscore.getType(null) // => "null"
utilscore.getType(void 0) // => "undefined"
utilscore.getType(123) // => "number"
utilscore.getType(true) // => "boolean"
utilscore.getType('123') // => "string"
utilscore.getType(10n) // => "bigint"

utilscore.getType({}) // => "object"
utilscore.getType([]) // => "array"
utilscore.getType(function(){}) // => "function"
utilscore.getType(new Date()) // => "date"

....
```

### `isEmpty` 判断元素是否为空
```javascript
utilscore.isEmpty()                 // => true
utilscore.isEmpty({})               // => true
utilscore.isEmpty([])               // => true
utilscore.isEmpty(function(){})     // => false
utilscore.isEmpty('')               // => true
utilscore.isEmpty('123')            // => false
utilscore.isEmpty(false)            // => false
utilscore.isEmpty(true)             // => false
utilscore.isEmpty(void 0)           // => true
utilscore.isEmpty(null)             // => true
```
