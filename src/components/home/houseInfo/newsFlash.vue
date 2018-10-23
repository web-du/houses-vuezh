<template>
    <div id="newFlash">
        <broadcast></broadcast>
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <!--导航-->
        <div class="nav" id="nav">
            <ul>
                <li :class="{now : isclass==index}"  v-for="(item,index) in tabList"  :key="index"  @click="tabfun(index)">{{item.title}}</li>
            </ul>
        </div>
        <layout>
            <template slot="contleft">
                <!--资讯列表-->
                <component :is="componentId" :nowId='categoryId'></component>
            </template>
            <template slot="contright">
                <!--右侧广告-->
                <right-active></right-active>
                <!--大家都在看-->
                <rankings></rankings>
                <!--买房技巧/楼盘问答-->
                <interlocution></interlocution>
            </template>
            <!--底部广告-->
            <template slot="bottomAd">
                <bottom-ad></bottom-ad>
            </template>
        </layout>
    </div>
</template>
<script>
import index from "@/components/home/houseInfo/index";
import infoList from "@/components/home/houseInfo/infoList";
import market from "@/components/home/houseInfo/market";
import leader from "@/components/home/houseInfo/leader";
import hotTopic from "@/components/home/houseInfo/hotTopic";
import videos from "@/components/home/houseInfo/videos";
import broadcast from "@/components/main/broadcast";
import crumbsSearch from "@/components/main/crumbsSearch";
import layout from "@/components/main/layout";
import rightActive from "@/components/main/rightActive";
import rankings from "@/components/main/rankings";
import interlocution from "@/components/main/interlocution";
import bottomAd from "@/components/main/bottomAd";
export default {
    data () {
        return {
            recruit:[],
            categoryList:[],
            categoryId:'',
            componentId:"index",
            tabList:[
                {title:"首页"},
                {title:"资讯"},
                {title:"市场"},
                {title:"导购"},
                {title:"专题"},
                {title:"视频"}
            ],
            isclass:0
        }
    },
    components: {
        index,
        infoList,
        market,
        leader,
        hotTopic,
        videos,
        broadcast,
        crumbsSearch,
        layout,
        rightActive,
        rankings,
        interlocution,
        bottomAd
    },
    mounted(){
            this.$http.post('/api/commonality/message/category_list',{page:1,size:6}).then((response) => {          
                 this.categoryList=response.data.data
                 this.categoryId = response.data.data[0].id
                 this.categoryList.forEach((item) => {
                      if(item.children.length>0){
                        this.classify.push(item)
                      }
                 });
    
                console.log(response)
             }).catch((err) => {
              
            })
        },
        methods:{
            tabfun:function(index,item){
                this.isclass=index
                this.categoryId = item.id
               if(index==0){
                    this.componentId="index"
                }else if(index==1){
                    this.componentId="infoList"
                }else if(index==2){
                    this.componentId="market"
                }else if(index==3){
                    this.componentId="leader"
                }else if(index==4){
                    this.componentId="hotTopic"
                }else{
                    this.componentId="videos"
                }
            }
        }

};
</script>

<style scoped>
.nav {
    background: #e93e0c;
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}

.nav ul {
    display: flex;
    flex-direction: row;
}

.nav ul li {
    color: #fff;
    font-size: 16px;
    width: 70px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    cursor: pointer;
}
.nav ul li:hover{text-decoration: underline;}
</style>