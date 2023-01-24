## validator 表单验证

```javascript
const rule = [{
        name: "nickname",
        checkType: "string",
        checkRule: "1,3",
        errorMsg: "姓名应为1-3个字符"
    },
    {
        name: "gender",
        checkType: "in",
        checkRule: ['男', '女'],
        errorMsg: "请选择性别"
    },
    {
        name: "loves",
        checkType: "notnull",
        checkRule: "",
        errorMsg: "请选择爱好"
    }
];
const checkRes = utilscore.graceChecker.check({
    nickname: '斯蒂芬',
    gender: '男',
    loves: '打代码'
}, rule);

const checkRes2 = utilscore.graceChecker.check({
    nickname: '斯蒂芬',
    gender: '',
    loves: '打代码'
}, rule);

if (checkRes) {
    console.log('checkRes：验证通过')
}
if(checkRes2){
    console.log('checkRes2：验证通过')
}else{
    console.log('checkRes2：',utilscore.graceChecker.error)
}
```

