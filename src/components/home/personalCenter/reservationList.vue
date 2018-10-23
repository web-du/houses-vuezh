<template>
    <div class="subscribe">
        <div class="tabbar">
            <ul class="clearfix">
                <li :class="{now : currentIndex == index}" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
            </ul>
            <component :is="componentId"></component>
        </div>
    </div>
</template>

<script>
import listSeehouse from "@/components/home/personalCenter/listSeehouse"
import listRecord from "@/components/home/personalCenter/listRecord"
import listInvalid from "@/components/home/personalCenter/listInvalid"
    export default{
        name:"reservationList",
        components:{
            listSeehouse,
            listRecord,
            listInvalid,
        },
        data(){
            return{
                navList:[
                    {name:"看房日程",link:"listSeehouse"},
                    {name:"看房记录",link:"listRecord"},
                    {name:"已失效预约",link:"listInvalid"}
                ],
                currentIndex:0,
                componentId:"listSeehouse"
            }
        },
        methods:{
            Switch(index){
                this.currentIndex = index;
                this.componentId = this.navList[index].link;
            }
        }
    }
</script>

<style scoped>
    .tabbar {
        border-bottom: 1px solid #f2f2f2;
    }
    .tabbar ul li {
        float: left;
        font-size: 14px;
        line-height: 50px;
        height: 50px;
        text-align: center;
        color: #333333;
        position: relative;
        cursor: pointer;
        padding: 0 15px;
    }
    .tabbar ul li.now::after {
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-bottom: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        left: 50%;
        margin-left: -2px;
        bottom: 0;
    }
    .tabbar ul li.now {
        color: #e93e0c;
        border-bottom: 1px solid #e93e0c;
    }
</style>
