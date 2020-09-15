const HOST = window.location.host;

const isDev = /devcf.shandiantech.com/.test(HOST)
const isTest = /qacf.shandiantech.com/.test(HOST)
const isPre = /precf.shandiantech.com/.test(HOST)
const isProd = /cf.shandiantech.com/.test(HOST)

const API_HOST_MAP = {
  dev: 'https://devmars-boss.shandiantech.com',
  test: 'https://qamars-boss.shandiantech.com',
  pre: 'https://premars-boss.shandiantech.com',
  prod: 'https://mars-boss.shandiantech.com'
}

export default function() {
  if (isPre) {
    return API_HOST_MAP.pre
  } else if (isTest) {
    return API_HOST_MAP.test
  } else if (isDev) {
    return API_HOST_MAP.dev
  } else if(isProd){
    return API_HOST_MAP.prod
  } else {
    return API_HOST_MAP.dev
  }
}
