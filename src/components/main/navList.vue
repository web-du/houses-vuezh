<template>
    <div id="navList">
        <ul class="nav">
            <li>
                <a href="index.html">首页</a>
            </li>
            <li v-for="(nav, index) in navlist" :key="index" :class="{actives: currentIndex == index && index != 4 && index != 7}" @mouseover="childNavShow(index)" @mouseout="childNavHide(index)">
                <router-link :to="{ path: '/' + nav.link }">{{ nav.node }}</router-link>
                <div class="nav_child" v-show="currentIndex == index" v-if="index != 4 && index != 7">
                    <ul>
                        <li v-for="(child, childIndex) in nav.childNode" :key="childIndex">
                            <router-link :to="{ path: '/' + child.link }" :class="{btn: child.type}">{{ child.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div class="menu">
            <router-link to="/login" v-show="!isLogin">登录</router-link>
            <router-link to="/personal/personalCenter" v-show="isLogin">{{userInfor.mobile}}</router-link>
            <router-link to="/register" v-show="!isLogin" >注册</router-link>
            <a @click.prevent="logout()" href="" v-show="isLogin">退出</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "navList",
    data() {
        return {
            currentIndex: -1,
            navlist: [
                {
                    node: "新房",
                    link: 'newHouses',
                    childNode: [
                        {
                            name: "特价房",
                            link: "newHouse/special"
                        },
                        {
                            name: "本月开盘",
                            link: "newHouse/curMonthHouses"
                        },
                        {
                            name: "房乐士直销",
                            link: "newHouse/directSale"
                        },
                        {
                            name: "本月交房",
                            link: "newHouse/curMonthHouse"
                        },
                        {
                            name: "楼盘新动态",
                            link: "newHouse/housesNewTrends"
                        },
                        {
                            name: "热门楼盘",
                            link: "newHouse/hotHouses"
                        },
                        {
                            name: "打折楼盘",
                            link: "newHouse/discountHouses"
                        },
                        {
                            name: "楼盘导购",
                            link: "newHouse/housesGuide"
                        },
                        {
                            name: "购房知识",
                            link: "newHouse/purchaseKnowledge"
                        },
                        {
                            name: "学区房",
                            link: "newHouse/schoolDistrictHouse"
                        },
                        {
                            name: "新房排行榜",
                            link: "newHouse/newHouseRankingList"
                        },
                        {
                            name: "看房团",
                            link: "newHouse/condoTour"
                        },
                        {
                            name: "帮你找房",
                            type: "btn",
                            link: "newHouse/helpYouFindHouse"
                        }
                    ]
                },
                {
                    node: "二手房",
                    link: 'handHouse/onSaleHouse',
                    childNode: [
                        {
                            name: "在售房源",
                            link: "handHouse/onSaleHouse"
                        },
                        {
                            name: "优选房源",
                            link: "handHouse/preference"
                        },
                        {
                            name: "找小区",
                            link: "handHouse/findVillage"
                        },
                        {
                            name: "找学校",
                            link: "handHouse/findSchool"
                        },
                        {
                            name: "找经济人",
                            link: "handHouse/findAgent"
                        },
                        {
                            name: "找别墅",
                            link: "handHouse/findVilla"
                        },
                        {
                            name: "查成交",
                            link: "handHouse/CheckAdeal"
                        },
                        {
                            name: "二手房排行榜",
                            link: "handHouse/handHouseRanking"
                        },
                        {
                            name: "购房知识",
                            link: "handHouse/PurchaseKnowledge"
                        },
                        {
                            name: "我要卖房",
                            type: "btn",
                            link: "handHouse/SellingHouse"
                        }
                    ]
                },
               {
                    node: "商业",
                    link: 'shops/shopRental',
                    childNode: [
                        {
                            name: "商铺出租",
                            link: "shops/shopRental"
                        },
                        {
                            name: "商铺出售",
                            link: "shops/shopSale"
                        },
                        {
                            name: "商铺新盘",
                            link: "shops/newShops"
                        },
                        // {
                        //     name: "我要卖铺",
                        //     type: "btn",
                        //     link: "shops/sellShops"
                        // }
                        {
                            name: "写字楼出租",
                            link: "shops/office"
                        },
                         {
                            name: "写字楼出售",
                            link: "shops/officereg"
                        }
                    ]
                },
                {
                    node: "租房",
                    link: 'renting/rentingSource',
                    childNode: [
                        {
                            name: "在租房源",
                            link: "renting/rentingSource"
                        },
                        {
                            name: "品牌公寓",
                            link: "renting/brandApartment"
                        },
                        {
                            name: "个人房源",
                            link: "renting/personalSource"
                        },
                        {
                            name: "整租房源",
                            link: "renting/fullRent"
                        },
                        {
                            name: "合租房源",
                            link: "renting/jointRent"
                        },
                        {
                            name: "别墅房源",
                            link: "renting/villasSource"
                        },
                        {
                            name: "租房知识",
                            link: "renting/rentingKnowledge"
                        },
                        {
                            name: "求租",
                            link: "renting/renting"
                        },
                        {
                            name: "免费发布出租",
                            type: "btn",
                            link: "renting/freeRental"
                        }
                    ]
                },
                {
                    node: "查房价",
                    link: 'checkHousePrices/checkHousePrices',
                    childNode: []
                },
                {
                    node: "房产资讯",
                    link: "houseInfo/newsFlash",
                    childNode: [
                        {
                            name: "房产快讯",
                            link: "houseInfo/flash"
                        },
                        {
                            name: "热点专题",
                            link: "/houseInfo/hotTopic"
                        },
                        {
                            name: "市场",
                            link: "houseInfo/market"
                        },
                        {
                            name: "政策",
                            link: "houseInfo/policy"
                        }
                    ]
                },
                {
                    node: "房产百科",
                    link: "encyclopedias/propertyKnowledge",
                    childNode: [
                        {
                            name: "房产知识",
                            link: "encyclopedias/propertyKnowledge"
                        }
                    ]
                },
                {
                    node: "房产问答",
                    link: "interlocution/interlocution",
                    childNode: []
                },
                {
                    node: "更多",
                    link: "more/vrPanoramicView",
                    childNode: [
                        {
                            name: "VR全景看房",
                            link: "more/vrPanoramicView"
                        }
                    ]
                }
            ]
        };
    },
    computed:{
        //判断是否登陆
        isLogin(){
            if(this.$store.getters.isLogin){
                return true;
            }else{
                return false;
            }
        },
        //获取登陆的用户信息
        userInfor(){
            if(this.$store.getters.userInfor){
                return this.$store.getters.userInfor;
            }
        }
    },
    methods: {
        childNavShow(index) {
            this.currentIndex = index;
        },
        childNavHide(e) {
            this.currentIndex = -1;
        },
        //退出登陆
        logout(){
            //删除ls
            localStorage.removeItem("userInfor");
            

            this.$store.dispatch('setIsLogin',false);
            this.$store.dispatch('setUserInfor',{});

            //跳转至登陆页面
            this.$router.push('/login');
        }
    }
};
</script>
<style scoped>
#navList {
    display: flex;
    justify-content: space-between;
    width: 900px;
}

#navList .nav {
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#navList .nav > li {
    position: relative;
    padding: 10px 15px;
}

#navList .nav > li.actives {
    background: #fff;
}

#navList .nav > li.actives > a {
    color: #e93e0c;
}

#navList .nav > li .nav_child {
    position: absolute;
    top: 36px;
    left: 0;
    padding: 10px 15px;
    z-index: 111;
    background: #fff;
}

#navList .nav > li .nav_child ul {
    display: flex;
    flex-direction: column;
}

#navList .nav > li .nav_child ul li a {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    color: #666666;
    display: block;
}

#navList .nav > li .nav_child ul li a:hover {
    color: #e93e0c;
}

#navList .nav > li .nav_child ul li a.btn {
    background: #e93e0c;
    color: #fff;
    text-align: center;
    border-radius: 5px;
}

#navList a {
    font-size: 16px;
    color: #fff;
    cursor: pointer;
}

#navList .nav > li > a:hover {
    color: #e93e0c;
}

#navList .nav > li.active > a {
    color: #e93e0c;
}

#navList .nav_child button {
    width: 90px;
    height: 30px;
    background: #e93e0c;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    border: 0;
}

#navList .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#navList .menu a {
    font-size: 14px;
    color: #fff;
    margin-right:10px;
}
#navList .menu a:last-child{
    margin-right: 0;
}
#navList .menu a:hover {
    color: #e93e0c;
}
</style>
