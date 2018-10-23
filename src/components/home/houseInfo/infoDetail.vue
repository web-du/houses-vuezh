<template>
    <div id="knowledge-details">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <!--广告-->
        <knowledge-active></knowledge-active>
        <div class="b-box clearfix">
            <div class="straight_matter fl">
                <!--知识详情-->
                <info-cont></info-cont>
            </div>
            <div class="lovely fr">
                <!-- 猜你喜欢 -->
                <likely></likely>
            </div>
        </div>
    </div>
</template>
<script>
import crumbsSearch from "@/components/main/crumbsSearch";
import knowledgeActive from "@/components/home/encyclopedias/knowledgeActive";
import infoCont from "@/components/home/houseInfo/infoCont";
import likely from "@/components/main/likely";
import hotKnowledge from "@/components/main/hotKnowledge";
import hotQuestions from "@/components/main/hotQuestions";
export default {
    components: {
        crumbsSearch,
        infoCont,
        knowledgeActive,
        likely,
        hotKnowledge,
        hotQuestions
    }
};
</script>
<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
.b-box {
  width: 1200px;
  margin: 0 auto 30px;
}
#ehong-code-tip-ck{
  display: none;
}
.ehong-idcode-val{
  width: 126px;
  height: 45px;
  display: inline-block;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
}
#btns{
  display: none;
}
</style>
