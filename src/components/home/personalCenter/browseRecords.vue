<template>
    <div class="tabbar">
        <ul class="clearfix">
            <li :class="{now : currentIndex == index}" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
        </ul>
        <component :is="componentId"></component>
    </div>
</template>

<script>
import recordNewhouse from "@/components/home/personalCenter/recordNewhouse"
import recordSechouse from "@/components/home/personalCenter/recordSechouse"
import recordRenthouse from "@/components/home/personalCenter/recordRenthouse"
import recordShops from "@/components/home/personalCenter/recordShops"

    export default{
        name:"browseRecords",
        components:{
            recordNewhouse,
            recordSechouse,
            recordRenthouse,
            recordShops,
        },
        data(){
            return{
                navList:[
                    {name:"新房",link:"recordNewhouse"},
                    {name:"二手房",link:"recordSechouse"},
                    {name:"租房",link:"recordRenthouse"},
                    {name:"商铺",link:"recordShops"},
                ],
                currentIndex:0,
                componentId:"recordNewhouse",
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
.tabbar ul li.now {
    color: #e93e0c;
    border-bottom: 1px solid #e93e0c;
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
</style>
