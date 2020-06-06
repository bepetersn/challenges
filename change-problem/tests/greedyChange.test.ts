
import greedyChange from '../src/greedyChange'
import { getLargestDenomination } from '../src/greedyChange'

describe('getLargestDenomination', () => {

  test('getLargestDenomination with 1', () => {
    expect(
      getLargestDenomination({
        money: 1, denominations: [1, 5, 10]
      })).toBe(1)
  })

  test('getLargestDenomination with 2', () => {
    expect(
      getLargestDenomination({
        money: 2, denominations: [1, 5, 10]
      })).toBe(1)
  })

  test('getLargestDenomination with 5', () => {
    expect(
      getLargestDenomination({
        money: 5, denominations: [1, 5, 10]
      })).toBe(5)
  })

  test('getLargestDenomination with 6', () => {
    expect(
      getLargestDenomination({
        money: 6, denominations: [1, 5, 10]
      })).toBe(5)
  })

  test('getLargestDenomination with 17', () => {
    expect(
      getLargestDenomination({
        money: 17, denominations: [1, 5, 10]
      })).toBe(10)
  })
})

describe('greedyChange', () => {

  test('No money requested', () => {
    expect(
      greedyChange({
        money: 0, denominations: []
      })).toStrictEqual({})
  })

  test('Requesting 1', () => {
    expect(
      greedyChange({ 
        money: 1, denominations: [1, 5, 10] 
      })).toStrictEqual({"1": 1})
  })

  test('Requesting 2', () => {
    expect(
      greedyChange({ 
        money: 2, denominations: [1, 5, 10] 
      })).toStrictEqual({"1": 2})
  })

  test('Requesting 4', () => {
    expect(
      greedyChange({ 
        money: 4, denominations: [1, 5, 10] 
      })).toStrictEqual({"1": 4})
  })

  test('Requesting 8', () => {
    expect(
      greedyChange({ 
        money: 8, denominations: [1, 5, 10] 
      })).toStrictEqual({"5": 1,
                         "1": 3   })
  })

  test('Requesting 18', () => {
    expect(
      greedyChange({ 
        money: 18, denominations: [1, 5, 10] 
      })).toStrictEqual({"10": 1,
                         "5": 1,
                         "1": 3   })
  })

  test('Requesting 93', () => {
    expect(
      greedyChange({ 
        money: 93, denominations: [1, 5, 10, 25] 
      })).toStrictEqual({"25": 3,
                         "10": 1,
                         "5": 1,
                         "1": 3   })
  })

  test('Requesting 40 with Tanzanian denominations is greedy', () => {
    expect(
      greedyChange({ 
        money: 40, denominations: [1, 5, 10, 20, 25] 
      })).toStrictEqual({"25": 1,
                         "10": 1,
                         "5": 1   })
  })

  test('Requesting 9 with denominations of [1, 5, 6]', () => {
    expect(
      greedyChange({ 
        money: 9, denominations: [1, 5, 6] 
      })).toStrictEqual({"1": 3,
                         "6": 1   })
  })

})

