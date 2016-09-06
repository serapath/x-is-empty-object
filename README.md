# x-is-empty-object
x is either `{}` or `new Object()`

# usage
`npm install x-is-empty-object`

```js
  var xEmptyObject = require('x-is-empty-object')

  xEmptyObject({}) // => true
  xEmptyObject(new Object) // => true
  xEmptyObject(new Object()) // => true

  xEmptyObject([]) // => false
  xEmptyObject('') // => false
  xEmptyObject(new Date) // => false
  xEmptyObject(null) // => false
  xEmptyObject() // => false
  xEmptyObject(function(){}) // => false
  xEmptyObject(new RegExp) // => false
```

# related
* [x-is](https://www.npmjs.com/package/x-is)
* [x-is-array](https://www.npmjs.com/package/x-is-array)
* [x-is-object](https://www.npmjs.com/package/x-is-object)
* [x-is-string](https://www.npmjs.com/package/x-is-string)
* [x-is-function](https://www.npmjs.com/package/x-is-function)
* [x-is-ducktype-array](https://www.npmjs.com/package/x-is-ducktype-array)
