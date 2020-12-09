export function queryParams(name: string) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search
    .replace('/', '')
    .substr(1)
    .match(reg)
  let context = ''
  if (r !== null) context = r[2]
  return decodeURIComponent(context)
};