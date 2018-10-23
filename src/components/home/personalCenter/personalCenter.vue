<template>
    <div class="per-center">
        <div class="crumbs clearfix">
            <span class="fl"><a href="#">个人中心</a></span>
            <span class="fl"><a href="#" class="now">首页</a></span>
        </div>
        <div class="info" v-bind:style="infor">
            <div class="details clearfix">
                <div class="img fl clearfix">
                    <div class="your-img fl">
                        <img src="@/assets/images/Dw-img12.png">
                    </div>
                    <div class="your-name fl">
                        <h2>{{user_infor.user_login}}</h2>
                        <p>
                        <a href="#" class="clearfix">
                            <img src="@/assets/images/Dw-center01.png" class="fl">
                            <span class="fl">修改</span>
                        </a>
                        </p>
                    </div>
                </div>
                <div class="op fr clearfix">
                    <div class="box fl">
                        <a href="#">
                            <h2>我的评论</h2>
                            <p>65</p>
                        </a>
                    </div>
                    <div class="box fl">
                        <a href="#">
                            <h2>我的收藏</h2>
                            <p>120</p>
                        </a>
                    </div>
                    <div class="box fl">
                        <a href="#">
                            <h2>看房清单</h2>
                            <p>31</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="con clearfix">
            <div class="nav fl">
                <ul>
                    <li :class="{now : currentIndex == index}" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="text fr">
                <keep-alive>
                    <component :is="currentTabComponent" :userInfor = "user_infor"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import accountSetting from "@/components/home/personalCenter/accountSetting"
    import securitySetting from "@/components/home/personalCenter/securitySetting"
    import buyHouse from "@/components/home/personalCenter/buyHouse"
    import sellHouse from "@/components/home/personalCenter/sellHouse"
    import rentHouse from "@/components/home/personalCenter/rentHouse"
    import myRating from "@/components/home/personalCenter/myRating"
    import myCollection from "@/components/home/personalCenter/myCollection"
    import reservationList from "@/components/home/personalCenter/reservationList"
    import browseRecords from "@/components/home/personalCenter/browseRecords"
    import propertyConsultant from "@/components/home/personalCenter/propertyConsultant"
    import Mail from "@/components/home/personalCenter/Mail"

    export default{
        name:"personalCenter",
        components:{
            accountSetting,
            securitySetting,
            buyHouse,
            sellHouse,
            rentHouse,
            myRating,
            myCollection,
            reservationList,
            browseRecords,
            propertyConsultant,
            Mail,
        },
        data(){
            return{
                currentTabComponent:"accountSetting",
                currentIndex:0,
                navList:[
                    {name:"账户设置",link:"accountSetting"},
                    {name:"安全设置",link:"securitySetting"},
                    {name:"我要买房",link:"buyHouse"},
                    {name:"我要卖房",link:"sellHouse"},
                    {name:"我要出租",link:"rentHouse"},
                    {name:"我的评价",link:"myRating"},
                    {name:"我的收藏",link:"myCollection"},
                    {name:"预约清单",link:"reservationList"},
                    {name:"浏览记录",link:"browseRecords"},
                    {name:"置业顾问",link:"propertyConsultant"},
                    {name:"站内信",link:"Mail"},
                ],
                infor:{
                    backgroundImage: "url(" + require("@/assets/images/Dw-center.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 120px",                 
                },
                user_infor:{},
            }
        },
        methods:{
            Switch(index){
                this.currentIndex = index;
                this.currentTabComponent = this.navList[index].link;
            }
        },
        created() {
            this.axios.get(process.env.API_HOST+'user/profile/userInfo').then((response) => {
                //console.log(response.data.data);
                this.user_infor = response.data.data;
                console.log(this.user_infor);
            }).catch((err) => {
                console.log(err);
            })

        
  
        },
    }
</script>

<style scoped>
.crumbs {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
}
.crumbs span {
    font-size: 14px;
    color: #999999;
    line-height: 50px;
    margin-right: 5px;
}
.crumbs span::before {
    content: '>';
    display: inline-block;
    margin-right: 5px;
}
.crumbs span:first-child::before {
    content: '';
    display: inline-block;
}
.crumbs span a{
    font-size: 14px;
    color: #999999;
    line-height: 50px;
}
.crumbs span a.now {
    color: #e93e0c;
}
.details {
    width: 1200px;
    margin: 0 auto;
}
.details .img {
    margin-top: 15px;
    height: 90px;
}
.details .your-img {
    margin-right: 20px;
}
.details .your-img img {
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 50%;
}
.details .your-name h2 {
    font-size: 16px;
    line-height: 36px;
    font-weight: bold;
    color: #fff;
}
.details .your-name p a {
    font-size: 14px;
    color: #fff;
    height: 36px;
    display: table-cell;
    vertical-align: middle;
}
.details .your-name p a img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 10px;
}
.details .op {
    height: 120px;
    display: table-cell;
    vertical-align: middle;
}
.details .op .box {
    height: 52px;
    width: 90px;
    margin-top: 34px;
    margin-right: 30px;
}
.details .op .box h2 {
    font-size: 14px;
    color: #fff;
    line-height: 26px;
    position: relative;
}
.details .op .box h2::before {
    position: absolute;
    content: '';
    width: 2px;
    height: 20px;
    background-color: #d0d0d0;
    right: 0;
    top: 3px;
}
.details .op .box p {
    font-size: 14px;
    color: #fff;
    padding-left: 20px;
    line-height: 26px;
}
.con {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
}
.con .nav {
    width: 160px;
    padding-right: 80px;
    height: 610px;
    border-right: 1px solid #f2f2f2;
}
.con .nav ul li {
    font-size: 14px;
    line-height: 36px;
    color: #333333;
    padding-left: 20px;
    position: relative;
    cursor: pointer;
}
.con .nav ul li.now {
    color: #e93e0c;
}
.con .nav ul li.now::before {
    position: absolute;
    content: '';
    width: 3px;
    height: 14px;
    background-color: #e93e0c;
    left: 0;
    top: 11px;
}
.con .text {
    width: 980px;
}
</style>
