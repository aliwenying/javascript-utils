//目前es10 的 matchAll 缺点是：1、要将迭代器转换为数组。2、需要设置/g
String.prototype.match_all = function (reg) {
	var arr = []
	var str = this;
	var s = '';
	while ((s = reg.exec(str)) != null) {
		arr.push(s[1])
	}
	return arr
}

// 低于chrome74版本的需要兼容
Object.prototype.fromEntries = function (arr) {
	var o = {}
	for (let k of arr) {
		o[k[0]] = k[1]
	}
	return o
}

// 兼容性还可以
Object.prototype.entries = function (obj) {
	return Object.keys(obj).reduce((acc, target) => [...acc, [target, obj[target]]], [])
}


