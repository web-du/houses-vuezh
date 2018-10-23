<template>
    <div id="knowledge-details">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <!--广告-->
        <knowledge-active></knowledge-active>
        <div class="b-box clearfix">
            <div class="straight_matter fl">
                <!--知识详情-->
                <knowledge-cont></knowledge-cont>
            </div>
            <div class="lovely fr">
                <!-- 猜你喜欢 -->
                <likely></likely>
                <!-- 热门知识 -->
                <hot-Knowledge></hot-Knowledge>
                 <!-- 热门问答 -->
                <hot-questions></hot-questions>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import crumbsSearch from "@/components/main/crumbsSearch";
import knowledgeActive from "@/components/home/encyclopedias/knowledgeActive";
import knowledgeCont from "@/components/home/encyclopedias/knowledgeCont";
import likely from "@/components/main/likely";
import hotKnowledge from "@/components/main/hotKnowledge";
import hotQuestions from "@/components/main/hotQuestions";
export default {
    components: {
        crumbsSearch,
        knowledgeCont,
        knowledgeActive,
        likely,
        hotKnowledge,
        hotQuestions
    },
    data() {
        return {
            curCond: [],
            housesList: []
        };
    },
    methods: {
        //接收子组件传递的筛选条件
        receiveScreenCond(val) {
            console.log("接收自组件传递值");
            this.curCond = val;
            this.getHousesList()
        },
        getHousesList() {
            axios
                .post("", {})
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    //异常捕获
                });
        }
    },
    mounted() {
        this.getHousesList();
        // var then = this;

        // //获取新开楼盘列表
        // function getNewHousesList() {
        //     return axios.post("/api/Houselist/getNewHouseList");
        // }

        // //并发调用
        // axios.all([getNewHousesList()]).then(
        //     axios.spread(function(housesList) {
        //         console.log("楼盘");
        //         console.log(housesList);
        //         if (housesList.status == "200") {
        //             then.housesList = housesList.data.data;
        //         }
        //     })
        // );
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
