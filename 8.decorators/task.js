//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];
	function wrapper(...args) {
		const hash = md5(args);
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log(`"Из кэша: " ${objectInCache.value}`);
			return objectInCache.value;
		}

		let result = func(...args);
		cache.push({
			hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log(`Вычисляем: ${result}`);
		return result;
	}
	return  wrapper;
}
  
//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId;
	let count = 0;
	let allCount = 0;

	function wrapper(...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			const result = func.apply(this, args);
			wrapper.count = count++;
			wrapper.allCount = allCount++;
			return result;
		}, delay);
	}

	wrapper.count = count;
	wrapper.allCount = allCount;

	return wrapper;
}