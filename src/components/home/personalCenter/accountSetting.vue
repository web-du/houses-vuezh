<template>
    <div id="account-setting">
        <div class="box account-set">
            <p>{{userInfor.user_login}}，我们会妥善保管您的个人信息。真实、完善的个人信息，有助于我们为您提供更加个性化的服务。</p>
            <div class="tabbar">
                <ul class="clearfix">
                    <li v-for="(item,index) in navList" :key="index" :class="{now : currentIndex == index }" @click="Switchview(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="account">
                <component :is="currentTabComponent" :yourInfor = "userInfor"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import essentialInfor from "@/components/home/personalCenter/essentialInfor"
    import bindingSetting from "@/components/home/personalCenter/bindingSetting"


    export default{
        name:"accountSetting",
        props:{
            userInfor:{
                type:Object,
            }
        },
        components:{
            essentialInfor,
            bindingSetting
        },
        data(){
            return{
                currentTabComponent:"essentialInfor",
                currentIndex:0,
                navList:[
                    {name:"基本信息",link:"essentialInfor"},
                    {name:"绑定设置",link:"bindingSetting"}
                ],
            }
        },
        methods:{
            Switchview(index){
                this.currentIndex = index;
                this.currentTabComponent = this.navList[index].link;
            }
        },
    }
</script>

<style scoped>
    .box p {
        font-size: 14px;
        line-height: 36px;
        color: #999999;
    }
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
