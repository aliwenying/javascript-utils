## Function 函数方法

## `debounceStart` 函数防抖 (立即执行版)
```javascript
window.onscroll = utilscore.debounceStart(function(){
    console.count('debounceStart 次数') 
},1000)
```


## `debounceEnd`  函数防抖 (非立即执行版)
```javascript
window.onscroll = utilscore.debounceEnd(function(){
    console.count('debounceEnd 次数') 
},1000)
```


## `debounce` 函数防抖 (完全版)
```javascript
// immediate 为 true 等同于 debounceStart
window.onscroll = utilscore.debounce(function(){
    console.count('debounce = false 次数') 
},1000,false)

// immediate 为 false 等同于 debounceEnd
// window.onscroll = utilscore.debounce(function(){
//     console.count('debounce = true 次数') 
// },1000,true)
```

## `throttle` 函数节流
```javascript
window.onscroll = utilscore.throttle(function(){
    console.count('throttle 次数') 
},1000)
```