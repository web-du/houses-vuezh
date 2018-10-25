<template>
  <div id="app">
    <header-advert></header-advert>
    <page-header></page-header>
    <page-content></page-content>
    <page-footer></page-footer>
    <bottom-advert></bottom-advert>
    <sidebar></sidebar>
  </div>
</template>

<script>
import headerAdvert from '@/components/index/advert/headerAdvert'
import pageHeader from '@/components/index/pageHeader/pageHeader'
import pageContent from '@/components/index/pageContent/pageContent'
import bottomAdvert from '@/components/index/advert/bottomAdvert'
import pageFooter from '@/components/index/footer'
import sidebar from '@/components/main/sidebar'
export default {
  name: 'App',
  components: {
    headerAdvert,
    pageHeader,
    pageContent,
    pageFooter,
    bottomAdvert,
    sidebar
  },
  data(){
    return{

    }
  },
  created(){
      if(localStorage.userInfor){
        //console.log(1);
        this.$store.dispatch('setIsLogin',true);
        this.$store.dispatch('setUserInfor',JSON.parse(localStorage.userInfor));
      }
  }
}
</script>

<style>

</style>
