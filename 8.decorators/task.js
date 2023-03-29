//Задача № 1
import md5 from 'js-md5';

function cachingDecoratorNew(func) {
let cache = [];
return function wrapper (...args) {
const hash = String(md5(args));
let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
        console.log("Из кэша: " + `{objectInCache.value}`);
        return objectInCache.value;
    }

    const result = func(...args);
    cache.push({hash, value: result});
    if (cache.length > 5) {
    cache.shift();
    }
    console.log(`Вычисляем: ${result}`);
    return result;
  }
}
  
let add2 = (a, b) => a + b;
let multiply3 = (a, b, c) => a * b * c;
let upgAdd2;
let upgMultiply3;

upgAdd2 = cachingDecoratorNew(add2);
upgMultiply3 = cachingDecoratorNew(multiply3);

upgAdd2(1,2)
upgAdd2(1,2)
upgAdd2(1,2)


//Задача № 2
function debounceDecoratorNew(func, delay) {
let timeOut = null;
let count = 0;
let allCount = 0;

function wrapper (...args) {
  allCount++;
  if (!timeOut) {
      count++;
  func.apply(this, args);

  
} else{
  clearTimeout(timeOut);
}

timeOut = setTimeout(() => {
  timeOut = null;
}, delay)
}

wrapper.count = function() {
  return count;
}

wrapper.allCount = function() {
  return allCount;
}
return wrapper;
}

