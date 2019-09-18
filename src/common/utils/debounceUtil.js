export default {
  debounce: function (func, delay) {
    let timer

    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  },
  isIos: function () {
    // android终端
    return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  isAndroid: function () {
    // android终端
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
  }
}
