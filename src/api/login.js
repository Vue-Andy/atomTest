import axios from 'axios'
export const login = function (method) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: method,
      dataType: "json",
      crossDomain: true,
      cache: false
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}