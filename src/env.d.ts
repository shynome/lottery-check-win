declare namespace NodeJS {
  interface ProcessEnv {
    CURRENT_PATH: string
    NODE_ENV: 'production'|'production'
    TARO_ENV: 'weapp'|'swan'|'alipay'|'h5'|'rn'|'tt'|'qq'|'quickapp'
    BASE_URL: string
    ROOTPATH: string
  }
}
