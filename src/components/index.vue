<template>
  <div id='app' class='container'>
    <div class="container-main flex">
      <div class="left-menu flex">
        <div class="left-menu-main">
          <jpc-menu
            :menu-list="liList"
            :user-data="userData"
            :menu-change="menuChange"
            :current="currentAuthIndex"
          >
          </jpc-menu>
        </div>
        <!-- <div class="left-menu__sub"
          v-for="(item,index) in liList"
          :style="index===currentAuthIndex?'display:block':'display:none'"
          :key="index">
          <h5>{{liList[currentAuthIndex] && liList[currentAuthIndex]['authDesc']}}</h5>
          <el-menu
            router
            :default-active="editableTabsValue"
            :collapse="isCollapse"
            background-color="#f4fcf8"
            active-text-color="#46A976"
            text-color="#606266">
            <div
              v-for="(authItem,index) in item.authList"
              :index="authItem.authName"
              :key="authItem.authId">
              <div slot="title" class="left-menu__sub__title" v-show="index != 0">
              </div>
              <el-menu-item-group>
                <el-menu-item
                  v-for="item in authItem.childrenAuthList"
                  :key="item.authName"
                  :index="item.authName"
                  @click="routerClick(item.authDesc,item.authName)"
                  class="ell"
                  :style="item.authName==='SelfInquiryList'?'font-weight:bold;font-size:15px;':''">
                  <span>{{item.authDesc}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </div>
          </el-menu>
        </div> -->
      </div>
    </div>
    <button class="logout" @click='logout'>退出</button>
    <div class="flex-1 router-container">
      <keep-alive :include="routerCacheArr">
        <router-view :router-back="routerBack" :router-click="routerClick"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import {showDeleteConfirm, showInfoMessage} from '../api/api'
  import JpcMenu from "./common/jpcMenu"

  export default {
    name:'',
    data() {
      return {
        /*需要缓存数据的页面*/
        routerCacheArr: [],
        routerChangeArr: [{
          label: '总览',
          name: 'Pandect'
        }],
        currentAuthIndex:null,
        liList:[{
          authName:'productCenter',
          authDesc:'商品'
        }],
        userData:[]
      }
    },
    components:{JpcMenu},
    methods:{
      logout: function () {
        showDeleteConfirm(() => {
          sessionStorage.removeItem("userData")
          this.$router.push("/login")
        }, '确定要执行退出操作吗, 是否继续?')
      },
      init() {
        let userDataJson = sessionStorage.getItem("userData")
        if (!userDataJson) {
          showInfoMessage('您还未进行登陆，请先登陆！')
          this.$router.push({'name': 'loginPage'})
          return
        }
        let userData = JSON.parse(userDataJson)
        // this.initLeftMenu(userData)
        // this.initUserDisplayKeys(userData)
        /* this.$nextTick(_ => {
          this.routerClick('总览', 'Pandect')
        }) */
      },
      menuChange: function (index) {
        this.currentAuthIndex = index - 1
      },
    },
    created() {
      // this.routerClick('总览', 'Pandect')
      this.$nextTick(_ => {
        this.init()
      })
    }
  }
</script>

<style scoped>
.container-main{
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right:0;
}
.flex{
  display:flex;
}
.left-menu{
  position: relative;
  height:100%;
  transition: all .3s;
  box-shadow: 0 0 12px 0 rgba(0,0,0,.03)
}
.left-menu .left-menu-main{
  position: relative;
  background: #42a06e;
  height: 100%;
  width: 6.42857rem;
}
</style>
