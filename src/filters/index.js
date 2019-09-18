// export function toThousandFilter (number) {
//   if (typeof number !== 'number' && typeof number !== 'string') return ''
//   const n = String(number)
//   const p = n.indexOf('.')
//   return n.replace(
//     /\d(?=(?:\d{3})+(?:\.|$))/g,
//     (m, i) => (p < 0 || i < p ? `${m},` : m)
//   )
// }
//
// export function formatMonthDate (timeStamp) {
//   console.log(111)
//   const time = new Date(+timeStamp)
//   let m = time.getMonth() + 1
//   let d = time.getDate()
//   // m = String(m).padEnd(2)
//   // d = String(d).padEnd(2)
//   return `${m}月${d}日`
// }
