var test = require('tape')

var xEmptyObject = require('./')

test('x-is-empty-object', function (t) {
  t.plan(10)

  t.ok(xEmptyObject({}), '({}) => true')
  t.ok(xEmptyObject(new Object), '(new Object) => true')
  t.ok(xEmptyObject(new Object()), '(new Object()) => true')
  console.log('')
  t.notOk(xEmptyObject([]), '([]) => false')
  t.notOk(xEmptyObject(''), '("") => false')
  t.notOk(xEmptyObject(new Date), '(new Date) => false')
  t.notOk(xEmptyObject(null), '(null) => false')
  t.notOk(xEmptyObject(), 'undefined => false')
  t.notOk(xEmptyObject(function(){}), '(function(){}) => false')
  t.notOk(xEmptyObject(new RegExp), '(new RegExp) => false')
})
