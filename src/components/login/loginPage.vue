<template>
  <div class='container'>
    <div class="main background-img">
      <div class="content">
        <div class="login-container">
          <div class="head">管理系统</div>
          <div class="username">
            <el-input 
              placeholder="请输入用户名"
              v-model.trim='username'
              clearable
              @keyup.enter.native='handlerLogin'
            ></el-input>
          </div>
          <div class="userpassword">
            <el-input 
              placeholder="请输入用户名"
              v-model='password'
              type='password'
              clearable
              @keyup.enter.native='handlerLogin'
            ></el-input>
          </div>
          <div class="yzm">
            <div class="verifyText">
              <el-input
                placeholder=""
                v-model="verifyText"
                style="width: 100px;"
                maxlength="4"
                clearable
                @keyup.enter.native="handlerLogin"
              ></el-input>
            </div>
            <div class="verfifycode" @click='refreshVerifyCode'>
              <span>{{verifyCode}}</span>
            </div>
          </div>
          <div class="remember">
            <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
          </div>
          <div class="loginbtn">
            <input type="submit" value="登录" @click="handlerLogin" @keyup.enter="handlerLogin" class="submit-button">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../../api/login'
  export default {
    name:'loginPage',
    data() {
      return {
        username: '',
        password: '',
        verifyText: '',
        verifyCode: '',
        inputData: [],
        errorMsg: [
          '请输入账号',
          '请输入密码',
          '请输入验证码'
        ],
        rememberPassword: false
      }
    },
    methods: {
      /*生成随机验证码*/
      refreshVerifyCode() {
        var code = '';
        //验证码长度
        var verifyCodeLength = 4;
        var random = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'); //随机数
        for (let i = 0; i < verifyCodeLength; i++) {
          var charIndex = Math.floor(Math.random() * random.length); //取得随机数的索引
          code += random[charIndex]; //根据索引取得随机数加到code上
        }
        this.verifyCode = code;
        if (this.rememberPassword) {
          this.rememberPassword = true;
          this.verifyText = code;
        } else {
          this.verifyText = null;
          this.rememberPassword = false;
        }
      },
      /*登录*/
      handlerLogin() {
        this.inputData = new Array();
        this.inputData.push(this.username);
        this.inputData.push(this.password);
        this.inputData.push(this.verifyText);
        for (let i = 0; i < this.inputData.length; i++) {
          var value = this.inputData[i];
          if (!value) {
            this.$message.warning(this.errorMsg[i]);
            this.refreshVerifyCode();
            return;
          }
        }
        //判断验证码是否等于jxzj的情况是提供给喻斌写自动化测试使用
        if (this.verifyText != 'jxzj') {
          if (this.verifyText.toUpperCase() != this.verifyCode.toUpperCase()) {
            this.$message.warning('验证码错误');
            this.verifyText = null;
            this.refreshVerifyCode();
            return;
          }
        }
        login('../../../static/login.json').then(res => {
          console.log(res)
          if(res.status == 200){
            //将用户名存入缓存
            sessionStorage.setItem("userData", JSON.stringify(res.data));
            this.$message({
              type: "success",
              message: res.data.message,
              duration: 1000
            });
            this.$router.push("/index/Pandect");
            //  设置cookie 11.13欧阳
            const self = this;
            if (self.rememberPassword == true) {
              //账号名，密码，和保存天数3个参数
              self.setCookie(self.username, self.password, self.rememberPassword, 9999);
            } else {
              self.clearCookie();
            }
          }else{
            this.refreshVerifyCode();
            this.password = null;
            this.verifyText = null;
            alert('登录失败！')
          }
         
        })
        /* login((data, fail) => {
          if (!fail) {
            //将用户名存入缓存
            sessionStorage.setItem("userData", JSON.stringify(data.rspData));
            // that.$message.success();
            this.$message({
              type: "success",
              message: data.rspMsg,
              duration: 1000
            });
            //跳转至首页
            this.$router.push("/index/Pandect");

            //  设置cookie 11.13欧阳
            const self = this;
            if (self.rememberPassword == true) {
              //账号名，密码，和保存天数3个参数
              self.setCookie(self.username, self.password, self.rememberPassword, 9999);
            } else {
              self.clearCookie();
            }
          } else {
            this.$message.error(data.rspMsg);
            this.refreshVerifyCode();
            this.password = null;
            this.verifyText = null;
          }
        }, {
          username: this.username,
          password: this.password
        }); */
      },
      //cookie
      //设置cookie
      setCookie(c_name, c_pwd, rememberPassword, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "rememberPassword" + "=" + rememberPassword + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function () {
        if (document.cookie.length > 0) {
          var arr = document.cookie.split('; ');
          console.log(arr)
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == 'userName') {
              this.username = arr2[1];
            } else if (arr2[0] == 'userPwd') {
              this.password = arr2[1];
            } else if (arr2[0] == 'rememberPassword') {
              this.rememberPassword = arr2[1];
            }
          }
          console.log(this.username)
          console.log(this.password)
          console.log(this.rememberPassword)
        }
      },
      //清除cookie
      clearCookie: function () {
        this.setCookie("", "", false, -1); //修改2值都为空，天数为负1天就好了
      }
    },
    created: function () {
      //生成验证码
      this.getCookie();
      this.refreshVerifyCode();
    }
  }
</script>

<style scoped>
div.container{
  width:300px;
  margin:0 auto;
}
div.yzm > div{
  display:inline-block;
  width:100px;
  margin:0 10px;
  height:32px;
  line-height:32px;
}
div.verfifycode{
  background:#333;
  color:#fff;
}
</style>
