<template>
    <div id="intellectual">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <div class="knowledge-page clearfix">
            <div class="nav fl">
                <div class="top">
                    <ul class="clearfix">
                        <li :class="{now : isclass==index}" v-for="(item,index) in recruit" class="fl" :key="index" @click.prevent="tabfun(index,item)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="details">
                    <div class="box" v-for="(item,index) in recruit" :key="index" v-show="isclass == index">
                        <dl v-for="(title,titleIndex) in item.child" :key="titleIndex">
                            <dt>{{title.name}}</dt>
                            <dd v-for="(lastchild,lastIndex) in title.child" :key="lastIndex" :class="{now : childIndex == lastchild.id}" @click.prevent="switchId(lastchild,lastIndex)">{{lastchild.name}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="list fr">
                <knowledge-list :nowId="thisId"></knowledge-list>
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
import knowledgeList from "@/components/home/encyclopedias/knowledgeList";
import screen from "@/components/main/screen";
import bottomAd from "@/components/main/bottomAd";
export default {
    name: "propertyKnowledge",
    components: {
        crumbsSearch,
        knowledgeList,
        screen,
        bottomAd
    },
    data() {
        return {
            recruit: [],
            //切换tab
            isclass: 0,
            //切换每个下面的点击
            childIndex: 0,
            //获取每个点击时的id
            thisId: 0
        };
    },
    created() {
        this.axios
            .post(process.env.API_HOST + "commonality/knowledge/category_list")
            .then(response => {
                this.recruit = response.data.data;
                //console.log(this.recruit)
                this.thisId = response.data.data[0].child[0].child[0].id;
                this.childIndex = response.data.data[0].child[0].child[0].id;
                //console.log(this.thisId)
            })
            .catch(err => {});
    },
    methods: {
        tabfun: function(index, item) {
            this.isclass = index;
            this.thisId = item.child[0].child[0].id;
            this.childIndex = item.child[0].child[0].id;
        },
        switchId(lastchild, lastIndex) {
            this.thisId = lastchild.id;
            this.childIndex = lastchild.id;
        }
    }
};
</script>
<style scoped>
.hide {
    display: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.clearfix:after {
    content: " ";
    display: block;
    clear: both;
    height: 0;
}
.clearfix {
    zoom: 1;
}
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
.knowledge-page .nav .top ul li {
    width: 77px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 16px;
    color: #333333;
    background-color: #f1f1f1;
    margin-right: 1px;
    cursor: pointer;
    font-weight: bold;
    float: left;
}
.knowledge-page .nav .top ul li:hover {
    color: #fff;
    background-color: #e93e0c;
}
.knowledge-page .nav .top ul li.now {
    background-color: #e93e0c;
    color: #fff;
}
.knowledge-page .nav .details .box {
    padding-left: 10px;
}
.knowledge-page .nav .details .box dl {
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0;
}
.knowledge-page .nav .details .box dt {
    font-size: 16px;
    line-height: 36px;
    color: #333333;
    font-weight: bold;
}
.knowledge-page .nav .details .box dd {
    display: inline-block;
    font-size: 14px;
    line-height: 36px;
    height: 36px;
    color: #333333;
    width: 48%;
}
.knowledge-page .nav .details .box dd a {
    font-size: 14px;
    color: #333333;
}
.knowledge-page .nav .details .box dd a:hover {
    color: #e93e0c;
}
.knowledge-page .nav .details .box {
    padding-left: 10px;
}
.knowledge-page .nav .details .box dl {
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0;
}
.knowledge-page .nav .details .box dt {
    font-size: 16px;
    line-height: 36px;
    color: #333333;
    font-weight: bold;
}
.knowledge-page .nav .details .box dd {
    display: inline-block;
    font-size: 14px;
    line-height: 36px;
    height: 36px;
    color: #333333;
    width: 48%;
    cursor: pointer;
}
.knowledge-page .nav .details .box dd.now {
    color: #e93e0c;
}
.knowledge-page .nav .details .box dd:hover {
    color: #e93e0c;
}
</style>

