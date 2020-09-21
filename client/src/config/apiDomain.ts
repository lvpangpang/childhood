const HOST = window.location.host;

const isDev = /devcf.shandiantech.com/.test(HOST)
const isProd = /cf.shandiantech.com/.test(HOST)

const API_HOST_MAP = {
  dev: 'http://192.168.2.57:3000',
  prod: 'http://116.62.139.102:3000'
}

export default function() {
  if (isDev) {
    return API_HOST_MAP.dev
  } else if(isProd){
    return API_HOST_MAP.prod
  } else {
    return API_HOST_MAP.dev
  }
}
