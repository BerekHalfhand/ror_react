export * from './rows'
export * from './columns'
export * from './filters'

//assigns .id() to each object from mongo, to replace getting id by ._id.$oid
//placed here for convenience of import
export function identify (arr) {
  if (!$.isArray(arr)) return arr
  let res = []
  arr.map((item, i) => {
    item.id = () => {return item._id.$oid}
    res.push(item)
  })
  return res
}
