<template>
    <div id="intellectual">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <div class="knowledge-page clearfix">
            <div class="nav fl">
                <nav-top></nav-top>
                <!-- <nav-details></nav-details> -->
            </div>
            <div class="list fr">
                <knowledge-list></knowledge-list>
            </div>
            <div class="advertisement">
                <ul>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/advertisement-img.jpg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import crumbsSearch from "@/components/main/crumbsSearch";
import navTop from "@/components/home/encyclopedias/navTop";
// import navDetails from "@/components/home/encyclopedias/navDetails";
import knowledgeList from "@/components/home/encyclopedias/knowledgeList";
import screen from "@/components/main/screen";
import bottomAd from "@/components/main/bottomAd";
export default {
    components: {
        crumbsSearch,
        navTop,
        // navDetails,
        knowledgeList,
        screen,
        bottomAd
    }
};
</script>
<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
.knowledge-page {
  padding-top: 30px;
  width: 1200px;
  margin: 0 auto;
}
.knowledge-page .nav {
  width: 313px;
}
.knowledge-page .list {
  width: 850px;
}
</style>

