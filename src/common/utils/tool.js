
import axios from '@/common/utils/Axios' // 导入网络请求
function add0 (m) { return m < 10 ? '0' + m : m }
export function format (shijianchuo, type) {
// shijianchuo是整数，否则要parseInt转换
  var time = new Date(Number(shijianchuo))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  if (type == 'y-m-d') {
    return y + '-' + add0(m) + '-' + add0(d)
  }
  if (type == '月-日') {
    return m + '月' + d + '日'
  }
  if (type == '年-月') {
    return y + '年' + m + '月'
  }
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
}
export function compareIsSameYearAndMonth (time1, time2) {
  let newTime1 = format(time1, '年-月')
  let newTime2 = format(time2, '年-月')
  if (newTime1 == newTime2) {
    return true
  }
  return false
}
// 导出 函数节流 在指定的时间间隔内只执行一次任务
export function Throttle (fn, delay) {
  let last, timer
  return function () {
    var that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(that, _args)
      }, delay)
    } else {
      last = now
      fn.apply(that, _args)
    }
  }
}

export function debounce(fn,delay){
    var timer = null;
    var delay = delay||200;
    return function(){
        let that = this;
        let _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(that,_args);
        },delay)
    }
}

//函数缓存
export const memoize = (func) => {
    //缓存对象
    //keys是arguments,values aer results
    const cache ={};
    //返回一个新的函数
    return (...args) => {
        // 将参数转换成字符串，以便我们可以存储它
        const argStr = JSON.stringify(args)
        //如果已经存，则打印
        console.log('cache',cache,!!cache[argStr]);
        return cache[argStr];
    }
}

// wrapper  axios.post
export function wrapperPost (uri, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(uri, params, {
      success: ret => resolve(ret),
      error: err => reject(err)
    })
  })
}

// 判断是否是对象
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

//判断数组中是否有相同元素
export const isRepeat = (arr)=>{
    let  hash = {};
    for(let i in arr) {
        if(hash[arr[i]]) {
            return true;
        }
        hash[arr[i]] = true;
    }
    return false;
}

