<template>
  <div id="portal">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
    <sidebar></sidebar>
  </div>
</template>

<script>

import pageHeader from '@/components/main/header'
import pageFooter from '@/components/main/footer'
import sidebar from '@/components/main/sidebar'
export default {
  name: 'portal',
  components: {
    pageHeader,
    pageFooter,
    sidebar
  },
  data(){
        return{
        }
    },
    methods:{
    },
    created(){
        if(localStorage.userInfor){
            this.$store.dispatch('setIsLogin',true);
            this.$store.dispatch('setUserInfor',JSON.parse(localStorage.userInfor));
        }
    }
}
</script>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color:#e93e0c !important;
}
.el-pager li{
  padding: 0 20px !important;
}
/* 星星间距 */
.el-rate__icon{
  margin-right: 3px !important;
  color: #e93e0c !important;
}
</style>

