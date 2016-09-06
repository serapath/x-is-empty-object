module.exports = function isEmptyObject (obj) {
  try { return Object.keys(obj).length === 0 && obj.constructor === Object }
  catch (e) { return false }
}
