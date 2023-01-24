## array 数组方法

### `uniqueBy` 根据属性去重数组

```javascript

const arr = [
    { name: '1111', user: { name: 'aaa' } },
    { name: '1111', user: { name: 'ccc' } },
    { name: '222', user: { name: 'aaa' } },
    { name: '333', user: { name: 'ddd' } }
]

utilscore.uniqueBy(arr,'name')  
// => 
// "[
//   {"name": "1111","user": { "name": "aaa"}},
//   {"name": "222","user": { "name": "aaa"}},
//   {"name": "333","user": {"name": "ddd"}}
// ]"

utilscore.uniqueBy(arr,row=>row.user.name)
// =>
// "[
// 	{"name":"1111","user":{"name":"aaa"}},
// 	{"name":"1111","user":{"name":"ccc"}},
// 	{"name":"333","user":{"name":"ddd"}}
// ]"

```

### `unique` 普通数组去重

```javascript

const arr = [1,2,2,3,4,3,4,7]

utilscore.unique(arr) // => [1, 2, 3, 4, 7]

```

### `maxNumBy` 找出数组中该属性最大值的一列

```javascript

const arr = [{num:55},{num:541},{num:41}];

utilscore.maxNumBy(arr,'num') // => {num: 541}

```

### `minNumBy` 找出数组中该属性最小值的一列

```javascript

const arr = [{num:55},{num:541},{num:41}]

utilscore.minNumBy(arr,'num') // =>  {num: 41}

```

### `maxNum` 数组中的最大值

```javascript

const arr = [12,3,31,5,3];

utilscore.maxNum(arr) // => 31 

```

### `minNum` 数组中的最小值

```javascript

const arr = [12,3,31,5,3]

utilscore.minNum(arr) // => 3 

```

### `shuffle` 将数组打乱
```javascript

const arr = [1,2,3,4,5,6,7,8,9]

utilscore.shuffle(arr) //=> [9, 6, 5, 1, 8, 2, 3, 7, 4]

```

### `convert` 扁平化数组 ==> 树形结构
```javascript
var array = [
    {"value":"zhinan","label":"指南","id":1,"parentId":0},
    {"value":"shejiyuanze","label":"设计原则","id":3,"parentId":1},
    {"id":8,"parentId":3,"value":"yizhi","label":"一致"},
    {"id":9,"parentId":3,"value":"fankui","label":"反馈"},
    {"id":10,"parentId":3,"value":"xiaolv","label":"效率"},
    {"id":11,"parentId":3,"value":"kekong","label":"可控"},
    {"value":"daohang","label":"导航","id":4,"parentId":1},
    {"id":12,"parentId":4,"value":"cexiangdaohang","label":"侧向导航"},
    {"id":13,"parentId":4,"value":"dingbudaohang","label":"顶部导航"},
    {"value":"ziyuan","label":"资源","id":2,"parentId":0},
    {"id":5,"parentId":2,"value":"axure","label":"Axure Components"},
    {"id":6,"parentId":2,"value":"sketch","label":"Sketch Templates"},
    {"id":7,"parentId":2,"value":"jiaohu","label":"组件交互文档"}
]

utilscore.convert(array,{pid:'parentId'}) 
// or utilscore.convert(array,{pid:'parentId',children:'children',id:'id'}) 

// => Unformatted
// [{"value":"zhinan","label":"指南","id":1,"parentId":0,"children":[{"value":"shejiyuanze","label":"设计原则","id":3,"parentId":1,"children":[{"id":8,"parentId":3,"value":"yizhi","label":"一致","children":[]},{"id":9,"parentId":3,"value":"fankui","label":"反馈","children":[]},{"id":10,"parentId":3,"value":"xiaolv","label":"效率","children":[]},{"id":11,"parentId":3,"value":"kekong","label":"可控","children":[]}]},{"value":"daohang","label":"导航","id":4,"parentId":1,"children":[{"id":12,"parentId":4,"value":"cexiangdaohang","label":"侧向导航","children":[]},{"id":13,"parentId":4,"value":"dingbudaohang","label":"顶部导航","children":[]}]}]},{"value":"ziyuan","label":"资源","id":2,"parentId":0,"children":[{"id":5,"parentId":2,"value":"axure","label":"Axure Components","children":[]},{"id":6,"parentId":2,"value":"sketch","label":"Sketch Templates","children":[]},{"id":7,"parentId":2,"value":"jiaohu","label":"组件交互文档","children":[]}]}]
```


### `convertFlat` 树形结构 ==> 扁平化
```javascript
var list = [{
    value: 'zhinan',
    label: '指南',
    id: 1,
    parentId: 0,
    children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        id: 3,
        parentId: 1,
        children: [{
            id: 8,
            parentId: 3,
            value: 'yizhi',
            label: '一致'
        }, {
            id: 9,
            parentId: 3,
            value: 'fankui',
            label: '反馈'
        }, {
            id: 10,
            parentId: 3,
            value: 'xiaolv',
            label: '效率'
        }, {
            id: 11,
            parentId: 3,
            value: 'kekong',
            label: '可控'
        }]
    }, {
        value: 'daohang',
        label: '导航',
        id: 4,
        parentId: 1,
        children: [{
            id: 12,
            parentId: 4,
            value: 'cexiangdaohang',
            label: '侧向导航'
        }, {
            id: 13,
            parentId: 4,
            value: 'dingbudaohang',
            label: '顶部导航'
        }]
    }]
}, {
    value: 'ziyuan',
    label: '资源',
    id: 2,
    parentId: 0,
    children: [{
        id: 5,
        parentId: 2,
        value: 'axure',
        label: 'Axure Components'
    }, {
        id: 6,
        parentId: 2,
        value: 'sketch',
        label: 'Sketch Templates'
    }, {
        id: 7,
        parentId: 2,
        value: 'jiaohu',
        label: '组件交互文档'
    }]
}]

utilscore.convertFlat(list) 
// or utilscore.convertFlat(list,'children')

// => 
// [
//     {"value":"zhinan","label":"指南","id":1,"parentId":0},
//     {"value":"shejiyuanze","label":"设计原则","id":3,"parentId":1},
//     {"id":8,"parentId":3,"value":"yizhi","label":"一致"},
//     {"id":9,"parentId":3,"value":"fankui","label":"反馈"},
//     {"id":10,"parentId":3,"value":"xiaolv","label":"效率"},
//     {"id":11,"parentId":3,"value":"kekong","label":"可控"},
//     {"value":"daohang","label":"导航","id":4,"parentId":1},
//     {"id":12,"parentId":4,"value":"cexiangdaohang","label":"侧向导航"},
//     {"id":13,"parentId":4,"value":"dingbudaohang","label":"顶部导航"},
//     {"value":"ziyuan","label":"资源","id":2,"parentId":0},
//     {"id":5,"parentId":2,"value":"axure","label":"Axure Components"},
//     {"id":6,"parentId":2,"value":"sketch","label":"Sketch Templates"},
//     {"id":7,"parentId":2,"value":"jiaohu","label":"组件交互文档"}
// ]
```


