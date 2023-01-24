/**
 * 函数防抖 (立即执行版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const debounceStart = (fn, delay = 2000) => debounce(fn,delay,true)


/**
 * 函数防抖 (非立即执行版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const debounceEnd = (fn, delay = 2000) => debounce(fn,delay,false)


/**
 * 函数防抖 (完全版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 * @param {boolean} immediate true 表立即执行，false 表非立即执行
 */
export const debounce = (fn, delay, immediate = false) => {
	let timer = null;
	let status = true;
	if (!immediate) return function () {
		let args = arguments;
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => fn.apply(this, args), delay)
	}
	else return function () {
		clearTimeout(timer);
		if (status) {
			status = false;
			fn.call(this, arguments);
		}
		timer = setTimeout(() => status = true, delay);
	}
}


/**
 * 函数节流
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const throttle = (fn, delay) => {
	let timer = null;
	return function () {
		let args = arguments;
		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				fn.apply(this, args)
			}, delay)
		}

	}
}

