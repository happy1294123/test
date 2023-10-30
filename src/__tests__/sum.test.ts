// 第一題測試
import { sum } from '../sum';
test('input 6, output 5', () => {
  const actual = sum(6)
  expect(actual).toBe(5)
})

test('input 10, output 7', () => {
  const actual = sum(10)
  expect(actual).toBe(7)
})

test('input 11, output -4', () => {
  const actual = sum(11)
  expect(actual).toBe(-4)
})

test('input 20, output 12', () => {
  const actual = sum(20)
  expect(actual).toBe(12)
})



