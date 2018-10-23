<template>
    <div class="box">
        <div class="tabbar">
            <ul class="clearfix">
                <li :class="{now : currentIndex == index}" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
            </ul>
        </div>
        <component :is="componentId"></component>
    </div>
</template>


<script>
import collectNewhouse from "@/components/home/personalCenter/collectNewhouse"
import collectSechouse from "@/components/home/personalCenter/collectSechouse"
import collectRenthouse from "@/components/home/personalCenter/collectRenthouse"
import collectShops from "@/components/home/personalCenter/collectShops"
import collectAdviser from "@/components/home/personalCenter/collectAdviser"
import collectKnowledge from "@/components/home/personalCenter/collectKnowledge"


export default {
    name:"myCollection",
    components:{
        collectNewhouse,
        collectSechouse,
        collectRenthouse,
        collectShops,
        collectAdviser,
        collectKnowledge,
    },
    data(){
        return{
            componentId:"collectNewhouse",
            currentIndex:0,
            navList:[
                {name:"新房",link:"collectNewhouse"},
                {name:"二手房",link:"collectSechouse"},
                {name:"租房",link:"collectRenthouse"},
                {name:"商铺",link:"collectShops"},
                {name:"置业顾问",link:"collectAdviser"},
                {name:"购房知识",link:"collectKnowledge"},
            ],
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
.box .tabbar {
    border-bottom: 1px solid #f2f2f2;
}
.box .tabbar ul li {
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
.box .tabbar ul li.now {
    color: #e93e0c;
    border-bottom: 1px solid #e93e0c;
}
.box .tabbar ul li.now::after {
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
.box .tabbar ul li.now::after {
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
</style>
