<template>
    <div id="navList">
        <ul class="nav">
            <li>
                <a href="index.html">首页</a>
            </li>
            <li v-for="(nav, index) in navlist" :key="index" :class="{actives: currentIndex == index && index != 4 && index != 7}" @mouseover="childNavShow(index)" @mouseout="childNavHide(index)">
                <a :href="nav.link">{{ nav.node }}</a>
                <div class="nav_child" v-show="currentIndex == index" v-if="index != 4 && index != 7">
                    <ul>
                        <li v-for="(child, childIndex) in nav.childNode" :key="childIndex">
                            <template v-if="child.type">
                                <button>{{ child.name }}</button>
                            </template>
                            <template v-else>
                                <a v-bind:href="child.link">{{ child.name }}</a>
                            </template>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div class="menu">
            <a href="portal.html#/login" v-show="!isLogin">登录</a>
            <a href="portal.html#/personal/personalCenter" v-show="isLogin">{{userInfor.mobile}}</a>
            <a href="portal.html#/register" v-show="!isLogin" >注册</a>
            <a @click="logout()" href="" v-show="isLogin">退出</a>
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
                    link: 'portal.html#/newHouses',
                    childNode: [
                        {
                            name: "特价房",
                            link: "portal.html#/newHouse/special"
                        },
                        {
                            name: "本月开盘",
                            link: "portal.html#/newHouse/curMonthHouses"
                        },
                        {
                            name: "房乐士直销",
                            link: "portal.html#/newHouse/directSale"
                        },
                        {
                            name: "本月交房",
                            link: "portal.html#/newHouse/curMonthHouse"
                        },
                        {
                            name: "楼盘新动态",
                            link: "portal.html#/newHouse/housesNewTrends"
                        },
                        {
                            name: "热门楼盘",
                            link: "portal.html#/newHouse/hotHouses"
                        },
                        {
                            name: "打折楼盘",
                            link: "portal.html#/newHouse/discountHouses"
                        },
                        {
                            name: "楼盘导购",
                            link: "portal.html#/newHouse/housesGuide"
                        },
                        {
                            name: "购房知识",
                            link: "portal.html#/newHouse/purchaseKnowledge"
                        },
                        {
                            name: "学区房",
                            link: "portal.html#/newHouse/schoolDistrictHouse"
                        },
                        {
                            name: "新房排行榜",
                            link: "portal.html#/newHouse/newHouseRankingList"
                        },
                        {
                            name: "看房团",
                            link: "portal.html#/newHouse/condoTour"
                        },
                        {
                            name: "帮你找房",
                            type: "btn",
                            link: "portal.html#/newHouse/helpYouFindHouse"
                        }
                    ]
                },
                {
                    node: "二手房",
                    link: 'portal.html#/handHouse/onSaleHouse',
                    childNode: [
                        {
                            name: "在售房源",
                            link: "portal.html#/handHouse/onSaleHouse"
                        },
                        {
                            name: "优选房源",
                            link: "portal.html#/handHouse/preference"
                        },
                        {
                            name: "找小区",
                            link: "portal.html#/handHouse/findVillage"
                        },
                        {
                            name: "找学校",
                            link: "portal.html#/handHouse/findSchool"
                        },
                        {
                            name: "找经济人",
                            link: "portal.html#/handHouse/findAgent"
                        },
                        {
                            name: "找别墅",
                            link: "portal.html#/handHouse/findVilla"
                        },
                        {
                            name: "查成交",
                            link: "portal.html#/handHouse/CheckAdeal"
                        },
                        {
                            name: "二手房排行榜",
                            link: "portal.html#/handHouse/handHouseRanking"
                        },
                        {
                            name: "购房知识",
                            link: "portal.html#/encyclopedias/propertyKnowledge"
                        },
                        {
                            name: "我要卖房",
                            type: "btn",
                            link: "portal.html#/handHouse/SellingHouse"
                        }
                    ]
                },
                {
                    node: "商铺",
                    link: 'portal.html#/shops/shopRental',
                    childNode: [
                        {
                            name: "商铺出租",
                            link: "portal.html#/shops/shopRental"
                        },
                        {
                            name: "商铺出售",
                            link: "portal.html#/shops/shopSale"
                        },
                        {
                            name: "商铺新盘",
                            link: "portal.html#/shops/newShops"
                        },
                        {
                            name: "写字楼出租",
                            link: "portal.html#/shops/office"
                         },
                         {
                            name: "写字楼出售",
                            link: "portal.html#shops/officereg"
                         }
                        // {
                        //     name: "我要卖铺",
                        //     type: "btn",
                        //     link: "portal.html#/shops/sellShops   "
                        // }
                    ]
                },
                {
                    node: "租房",
                    link: 'portal.html#/renting/rentingSource',
                    childNode: [
                        {
                            name: "在租房源",
                            link: "portal.html#/renting/rentingSource"
                        },
                        {
                            name: "品牌公寓",
                            link: "portal.html#/renting/brandApartment"
                        },
                        {
                            name: "个人房源",
                            link: "portal.html#/renting/personalSource"
                        },
                        {
                            name: "整租房源",
                            link: "portal.html#/renting/fullRent"
                        },
                        {
                            name: "合租房源",
                            link: "portal.html#/renting/jointRent"
                        },
                        {
                            name: "别墅房源",
                            link: "portal.html#/renting/villasSource"
                        },
                        {
                            name: "租房知识",
                            link: "portal.html#/renting/rentingKnowledge"
                        },
                        {
                            name: "求租",
                            link: "portal.html#/renting/renting"
                        },
                        {
                            name: "免费发布出租",
                            type: "btn",
                            link: "portal.html#/renting/freeRental"
                        }
                    ]
                },
                {
                    node: "查房价",
                    link: "portal.html#/checkHousePrices/checkHousePrices",
                    childNode: []
                },
                {
                    node: "房产资讯",
                    link: "portal.html#/houseInfo/newsFlash",
                    childNode: [
                        {
                            name: "房产快讯",
                            link: "portal.html#/houseInfo/flash"
                        },
                        {
                            name: "热点专题",
                            link: "portal.html#/houseInfo/hotTopic"
                        },
                        {
                            name: "市场",
                            link: "portal.html#/houseInfo/market"
                        },
                        {
                            name: "政策",
                            link: "portal.html#/houseInfo/policy"
                        }
                    ]
                },
                {
                    node: "房产百科",
                    link: "portal.html#/encyclopedias/propertyKnowledge",
                    childNode: [
                        {
                            name: "房产知识",
                            link: "encyclopedias/propertyKnowledge"
                        }
                    ]
                },
                {
                    node: "房产问答",
                    link: "portal.html#/interlocution/interlocution",
                    childNode: []
                },
                {
                    node: "更多",
                    link: "portal.html#/more/vrPanoramicView",
                    childNode: [
                        {
                            name: "VR全景看房",
                            link: "portal.html#/more/vrPanoramicView"
                        }
                    ]
                }
            ],
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
        userInfor(){
            return this.$store.getters.userInfor;
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
            window.location.href="portal.html#/login";
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

#navList .nav_child ul li.btn a {
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
    margin: 0 10px;
}
#navList .menu a{
    margin-right: 0;
}
#navList .menu a:hover {
    color: #e93e0c;
}
</style>
