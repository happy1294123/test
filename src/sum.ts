// 第一題
export function sum(num: number) {
  let temp = 2
  let result = 1
  let operation = '+'
  while (temp <= num) {
    if (operation === '+') {
      result += temp
      operation = '-'
    } else if (operation === '-') {
      result -= temp
      operation = '+'
    }
    temp++
  }

  return result
}
