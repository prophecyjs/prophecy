const Prophecy = require('../../build/prophecy.js')

describe('Storage - LocalStorage', function () {
  it('get should return null on non existing item', () => {
    let storage = new Prophecy.Storage.LocalStorage()
    let expected = null
    let result = storage.get('xxx_90329')
    expect(result).toEqual(expected)
  })

  it('After setting a value by using set the get function should be able to fetch the value.', () => {
    let storage = new Prophecy.Storage.LocalStorage()
    let value = 'My random string'
    let expected = value
    let key = 'string_key'

    storage.set(key, value)

    let result = storage.get(key)

    expect(result).toEqual(expected)
  })

  it('unset should unset a given value', () => {
    let storage = new Prophecy.Storage.LocalStorage()
    let value = 'My random string that i will be unsetting'
    let key = 'value_key'

    storage.set(key, value)

    let result = storage.get(key)
    let expected = value

    expect(result).toEqual(expected)

    // Now we delete the value using the same key

    storage.unset(key)

    result = storage.get(key)
    expected = null

    expect(result).toEqual(expected)
  })
})
