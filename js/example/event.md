## EventEmitter 发布订阅
```javascript
let event = new utilscore.EventEmitter()

function eventFn(arg1,arg2){
    console.log('arg is',arg1,arg2)
}

//为指定事件注册一个监听器
event.on('click',eventFn)

event.on('click1',eventFn)
event.on('click2',eventFn)
event.on('click3',eventFn)
event.on('click4',eventFn)

// 为指定事件注册一个单次监听器
event.once('onceClick',(arg1,arg2) => {
    console.count('onceClick 次数')
})

// 触发指定事件的监听器
event.emit('click','参数1','参数2') 
event.emit('onceClick','onceClick参数1','onceClick参数2') 
event.emit('onceClick','onceClick参数3','onceClick参数4') 

// 移除指定事件的某个监听器
event.off('click',eventFn)

//移除指定事件的所有监听器
event.allOff('click3')

// 移除所有事件的所有监听器
event.allOff()

event.emit('click','参数1','参数2') 

// => arg is 参数1 参数2
// => onceClick 次数: 1
```