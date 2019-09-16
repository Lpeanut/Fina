import axios from 'axios'
import jsCookie from 'js-cookie'

const instance = axios.create()
const { CancelToken } = axios

class FinaAxios {
  constructor () {
    this.interceptors(instance) // 绑定拦截器
    this.request = this.request.bind(this)
    this.sourceToken = {}
  }
  // 请求的默认配置
  getConfig () {
    return {
      headers: {
        token: jsCookie.get('token')
      }
    }
  }
  // cancelToken
  cancel (url) {
    Boolean(this.sourceToken[url]) && this.sourceToken[url]()
  }
  // 拦截器
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      // todo
      // store.reqCount ++
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 拦截相应
    instance.interceptors.response.use(res => {
      const { data, status, config: { url } } = res
      delete this.sourceToken[url]
      return { data, status }
    }, error => {
      // 吞掉错误
      if (!error || !error.request) {
        console.log('error', error)
        return
      }
      const { request: { statusText, status }, config } = error
      const errorInfo = {
        statusText,
        status,
        request: { responseUrl: config.url }
      }
      delete this.sourceToken[config.url]
      console.log(errorInfo)
    })
  }
  // 发送请求
  request (options) {
    this.cancel(options.url)
    const source = CancelToken.source()
    const assignOpts = { ...this.getConfig(), ...options, cancelToken: source.token }
    this.sourceToken[options.url] = source.cancel
    return instance(assignOpts)
  }
}

const finaAxiosInstance = new FinaAxios()

export default finaAxiosInstance.request
