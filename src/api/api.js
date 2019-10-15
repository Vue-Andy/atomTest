import {Message,Notification,MessageBox} from 'element-ui'

export function showSuccessNotify(text) {
  Notification.success(text)
}

export function showInfoNotify(text) {
  Notification.info(text)
}

export function showSuccessMessage(text) {
  Message.success(text)
}

export function showInfoMessage(text) {
  Message.info(text)
}

export function showErrorMessage(text) {
  Message.error(text);
}

export function showDeleteConfirm(confirm, text) {
  if (text == undefined) {
    text = '此操作将删除该数据, 是否继续?'
  }
  MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    confirm()
  }).catch(() => {
  })
}

export function objectIsNull(str) {
  if (str == undefined || str == '' || str == null) {
    return true;
  } else {
    return false;
  }
}

export function postRequest(url, params, callback, errorCallback = error()) {
  // let hostUrl = 'http://atom.jipeicheng.cn/atom/' + url //生产环境地址
  let hostUrl = '/atom/' + url;   //本地测试地址
  axios.post(hostUrl, params)
    .then(response => {
      try {
        let data = response.data
        if (data.rspCode == '0000') {//请求成功
          callback(data)
        } else if (data.rspCode == '0001') {//失败, 提示错误
          Message.error(data.rspMsg)
          console.log('error')
          errorCallback(data)
        } else if (data.rspCode == '0002') {//失败, 不提示错误
          // console.log();
        } else if (data.rspCode == '0003') {
          callback(data)//失败, 继续回调
        } else if (data.rspCode == '1000') {//未认证
          Message.warning("请先登录机配城")
          setTimeout(function () {
            window.location.href = '/atom/#/login'
          }, 300)
          // Vue.$router.push("/login");
        } else if (data.rspCode == '2000') {//用户名密码错误
          callback(data, true)
        } else {
          Message.error(data.rspMsg)
          errorCallback(error)
        }
      } catch (e) {
        console.log(e)
      }
    })
    .catch(error => {
      errorCallback(error)
    })
}
