<template>
    <div class="box">
        <div class="tabbar">
            <ul class="clearfix">
                <li :class="{now : currentIndex == index }" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
            </ul>
        </div>
        <component :is="componentId"></component>
    </div>
</template>

<script>
    import estateEvaluation from "@/components/home/personalCenter/estateEvaluation"
    import agentComment from "@/components/home/personalCenter/agentComment"
    import myReply from "@/components/home/personalCenter/myReply"


    export default{
        name:"myRating",
        components:{
            estateEvaluation,
            agentComment,
            myReply,
        },
        data(){
            return{
                componentId:"estateEvaluation",
                currentIndex:0,
                navList:[
                    {name:"楼盘小区点评",link:"estateEvaluation"},
                    {name:"经纪人点评",link:"agentComment"},
                    {name:"资讯点评",link:"estateEvaluation"},
                    {name:"我的回复",link:"myReply"},
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
</style>
