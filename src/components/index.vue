<template>
  <div id='app' class='container'>
    <div class="container-main flex">
      <div class="left-menu flex">
        <div class="left-menu-main">
          <jpc-menu :menu-list="liList" :user-data="userData" :menu-change="menuChange" :current="currentAuthIndex"></jpc-menu>
        </div>
        <div class="left-menu__sub" v-for="(item,index) in liList" :style="index===currentAuthIndex?'display:block':'display:none'" :key="index">
          <h5>{{liList[currentAuthIndex] && liList[currentAuthIndex]['authDesc']}}</h5>
          <el-menu router :default-active="editableTabsValue" :collapse="isCollapse" background-color="#f4fcf8" active-text-color="#46A976" text-color="#606266">
            <div v-for="(authItem,index) in item.authList" :index="authItem.authName" :key="authItem.authId">
              <div slot="title" class="left-menu__sub__title" v-show="index != 0"></div>
              <el-menu-item-group>
                <el-menu-item v-for="item in authItem.childrenAuthList" :key="item.authName" :index="item.authName"
                  @click="routerClick(item.authDesc,item.authName)" class="ell" :style="item.authName==='SelfInquiryList'?'font-weight:bold;font-size:15px;':''">
                  <span>{{item.authDesc}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </div>
          </el-menu>
        </div>
      </div>
      <!--窗口-->
      <div class="right-box flex-1 flex-column">
        <div class="right-box__tabs flex">
          <div class="flex-1">
            <el-tabs
              class="crumbs-tabs"
              v-model="editableTabsValue"
              type="card"
              closable
              @tab-remove="removeTab"
              @tab-click="clickTab">
              <el-tab-pane
                v-for="(item,index) in editableTabs"
                :key="item.name"
                :label="item.label"
                :name="item.name"
                :index="index">
                {{item.content}}
              </el-tab-pane>
            </el-tabs>
          </div>
          <div>
            <jpc-setting
              :logout="logout"
              :user-data="userData"
              :inquiry-length="inquiryLength"
            >
            </jpc-setting>
          </div>
        </div>
        <div class="flex-1 router-container">
          <keep-alive :include="routerCacheArr">
            <router-view :router-back="routerBack" :router-click="routerClick"></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {showDeleteConfirm, showInfoMessage} from '../api/api'
  import JpcMenu from "./common/jpcMenu"
  import JpcSetting from "./common/jpcSetting"

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
        editableTabs:[],
        // 存储所有路由名字以及父导航栏的角标用于后面查询使用
        authSignList: [[], []],
        isCollapse: false,
        editableTabsValue: 'Pandect',		//选中值 高亮  选中状态 对应name
        liList:[{
          authName:'productCenter',
          authDesc:'商品',
          authId:2130,
          authList:[
            {
              authName:'productManage',
              authId:'20138',
              authDesc:'商品管理',
              childrenAuthList:[
                {
                  authName:'ProductList',
                  authDesc:'商品列表',
                }, {
                  authName:'EpcProductList',
                  authDesc:'EPC商品列表',
                }, {
                  authName:'EpcSkuProductList',
                  authDesc:'SKU商品列表',
                }, {
                  authName:'TempSku',
                  authDesc:'临时SKU',
                }, {
                  authName:'ProductPrice',
                  authDesc:'商品价格',
                }, {
                  authName:'ProductList_v2',
                  authDesc:'商品库商品',
                }
              ]
            }
          ]
        }],
        userData:{name:'pengzhihua'},
        inquiryLength:1
      }
    },
    components:{JpcMenu,JpcSetting},
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
      routerClick(tabTitle, routerName, params) { 							//跳转子路由 or 定位到当前页面
        let tabItem = {
          label: tabTitle,
          name: routerName,
          params: params
        }
        console.log(tabItem)
        //判断当前标签页是否已经打开
        let tempF = false
        let tempParams = null
        console.log(this.editableTabs)
        for (let i = 0; i < this.editableTabs.length; i++) {
          if (this.editableTabs[i].name == tabItem.name) {
            // this.editableTabs[i].label = tabItem.label   //  为何要这行代码？？？
            //覆盖原有参数
            /* if (params) {
              this.editableTabs[i].params = params
            } */
            //这个tab已经存在了
            tempF = true
            //保存参数
            tempParams = this.editableTabs[i].params
          }
        }
        // 如果被点击的tab之前不存在，则添加
        if (!tempF) {
          this.editableTabs.push(tabItem)
        }

        // 当前选项卡亮
        // let index = this.authSignList[0].indexOf(routerName)
        //  有部分详情页面或者编辑页面，无需切换高亮
       /*  if (index !== -1)
          this.currentAuthIndex = this.authSignList[1][index] */

        // tab标签高亮
        this.editableTabsValue = routerName

        //路由跳转
        let path = {
          name: routerName,
          params: tempParams || params
        }
        this.$router.push(path)
        //添加至缓存
        if (this.routerCacheArr.indexOf(routerName) == -1) {
          this.routerCacheArr.push(routerName)
        }
        /*记录步骤*/
        this.routerChangeArr.push(tabItem)
        console.log(this.routerChangeArr)
      },
      routerBack(tabTitle, routerName, params) {
        // 关闭当前页面
        this.removeTab(this.editableTabsValue)
        // 跳转至目标页面
        if (tabTitle && routerName) {
          this.routerClick(tabTitle, routerName, params)
        }
      },
      removeTab(targetName) {
        if (targetName == "pandect") {			//第一个不允许用户删除
          return
        }
        /*移除标签页*/
        this.editableTabs = this.editableTabs.filter(tab => tab.name !== targetName)
        /*移除步骤记录中的该页面*/
        this.routerChangeArr = this.routerChangeArr.filter(tab => tab.name !== targetName)
        /*移除路由缓存*/
        this.routerCacheArr.splice(this.routerCacheArr.indexOf(targetName), 1)
        /*跳转至用户操作的前一页*/
        let lastRouter = this.routerChangeArr[this.routerChangeArr.length - 1]
        this.routerClick(lastRouter.label, lastRouter.name)
      },
      clickTab(tab) {								//切换路由
        this.routerClick(tab.label, tab.name)
      },
    },
    created() {
      this.routerClick('总览', 'pandect')
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
.flex-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
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
.left-menu .left-menu__sub>h5{
  height: 2.57143rem;
  line-height: 3.57143rem;
  padding: 0 1.07143rem;
  color: #303133;
}
.left-menu .left-menu__sub{
  height: 100%;
  width: 7.85714rem;
  overflow-y: auto;
  background: #f4fcf8;
}
.right-box,.right-box .right-box__tabs{
  -webkit-transition: all .3s;
  transition: all .3s;
}
.right-box .right-box__tabs{
  height: 3.57143rem;
  width: 100%;
  overflow: hidden;
}
.crumbs-tabs .el-tabs__header {
  border: none;
  margin-bottom: 0;
}
.el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}
.el-tabs__nav-scroll {
  overflow: hidden;
}
.crumbs-tabs .el-tabs__header .el-tabs__nav {
  border: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: 1px solid #e4e7ed;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-tabs__nav {
  white-space: nowrap;
  position: relative;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s,-webkit-transform .3s;
  float: left;
  z-index: 2;
}
 .crumbs-tabs .el-tabs__header .el-tabs__item {
  border: none;
  position: relative;
  height: 3.57143rem;
  line-height: 3.57143rem;
}
.el-tabs__item.is-active {
  color: #46a976;
}
.header-nav{
  height: 3.57143rem;
  line-height: 2.57143rem;
  padding-bottom:15px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
</style>
