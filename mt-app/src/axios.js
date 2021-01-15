import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com'
axios.interceptors.request.use((config) => {
  //  console.log(config);
  config.params = {
    ...config.params,
    appkey: 'heyu_1596803789997'
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axios
