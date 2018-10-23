<template>
    <!--banner和导航-->
    <div id="pageHeader">
        <!--导航-->
        <header-nav></header-nav>
        <!--轮播图-->
        <broadcast :bannerHeight="520"></broadcast>
        <!--搜索框-->
        <content-search></content-search>
    </div>
</template>
<script>
import headerNav from "@/components/index/pageHeader/headerNav"
import broadcast from "@/components/main/broadcast"
import contentSearch from "@/components/index/pageHeader/contentSearch"
export default {
    name: "pageHeader",
    components: {
        headerNav,
        broadcast,
        contentSearch
    },
    data() {
        return {
            
        }
    }
};
</script>
<style scoped>
#pageHeader {
    width: 100%;
    height: 520px;
    overflow: hidden;
    position: relative;
}
</style>
