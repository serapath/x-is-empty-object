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
a list of other `x-is-...` modules can be found at
* [x-is](https://www.npmjs.com/package/x-is)
