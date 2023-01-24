

## object 对象方法

### `deepClone` 深度克隆

```javascript
const obj = {
    a: "111",
    o: {
        b: "222",
        c: {
            d: "333",
            f: function() {
                console.log("ffff");
            }
        }
    }
};

var _obj = utilscore.deepClone(obj)
```

### `orderBy` 返回按属性(props)和顺序(orders)排序的对象数组。 

```javascript
const users = [{
        name: 'aaa',
        age: 48
    },
    {
        name: 'awegawe',
        age: 36
    },
    {
        name: 'aweaw',
        age: 40
    }
];

utilscore.orderBy(users, ['age'], ['asc'])

// => [{"name":"awegawe","age":36},{"name":"aweaw","age":40},{"name":"aaa","age":48}]
```

### `findPathByLeafId` 根据 key 递归查找链带关系

```javascript
const arr = [{
    name: 'awefawef',
    id: 111,
    children: [{
        name: '2222222aaa',
        id: 222,
        children: [{
            name: 'cccccaaa',
            id: 333,
        }]
    }]
}]
utilscore.findPathByLeafId('id', 333, arr)
// => [{"id":111,"value":"awefawef"},{"id":222,"value":"2222222aaa"}]
```

### `merge` 对象合并

```javascript
const a = {
    a: 11,
    o: {
        b: 22
    }
}
const b = {
    c: 33,
    o: {
        d: 44
    }
}

utilscore.merge(a,b)    // => {"a":11,"o":{"b":22,"d":44},"c":33}
```

### `selector` 从对象中检索出给定选择器指定的一组属性
```javascript
const obj = {
    a: "111",
    o: {
        b: "222",
        c: {
			arr:['aaaa','bbbbb','ccccc',['dddd',['eeee']]],
            d: "333",
            f: function() {
                console.log("ffff");
            }
        }
    }
};
utilscore.selector(obj,'o.c.arr[3][1]')     // => "eeee"
utilscore.selector(obj,'o.c.d')             // => "333"
```


