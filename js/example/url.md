## URL 方法
### `insertUrl` 根据对象中的参数匹配插入到url中
```javascript
utilscore.insertUrl('http://www.baidu.com?:name',{name:'ceshi'}) 
// => http://www.baidu.com?ceshi
```

### `URLSearchParams` url 序列化和反序列化
```javascript
//1、传入url字符串
const url = `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=parseQueryString&rsv_pq=8c7a6d0000146171&rsv_t=43d6RzTiyjUjUKtQtqfR3XL25JepKFwJYvvSpsj%2BJ7aFqxdBLDungY%2Bfx%2BE&rqlang=cn&rsv_enter=1&rsv_n=2&rsv_sug3=1`
utilscore.URLSearchParams(url) 
// => 
// {
//     "ie":"utf-8",
//     "f":"8",
//     "rsv_bp":"1",
//     "rsv_idx":"1",
//     "tn":"baidu",
//     "wd":"parseQueryString",
//     "rsv_pq":"8c7a6d0000146171",
//     "rsv_t":"43d6RzTiyjUjUKtQtqfR3XL25JepKFwJYvvSpsj +J7aFqxdBLDungY+fx+E",
//     "rqlang":"cn",
//     "rsv_enter":"1",
//     "rsv_n":"2",
//     "rsv_sug3":"1"
// }


//2、传入对象

utilscore.URLSearchParams({
    name:'cgx',
    test:'ceshi'
})
// => "name=cgx&test=ceshi"
```

### `Url` 返回网址的相关信息，模拟了 浏览器的 new URL(urlString) 部分功能
```javascript
const url = 'https://localhost:3000/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#zh/en/%E7%AB%AF%E5%8F%A3';
utilscore.Url(url)
// => 
// {
//     hash: "#zh/en/%E7%AB%AF%E5%8F%A3",
//     host: "localhost:3000",
//     hostname: "localhost",
//     href: "https://localhost:3000/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#zh/en/%E7%AB%AF%E5%8F%A3",
//     origin: "https://localhost:3000",
//     pathname: "/translate",
//     port: "3000",
//     protocol: "https:",
//     search: "?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh"
// }
```