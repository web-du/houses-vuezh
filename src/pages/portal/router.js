import Vue from "vue";
import VueRouter from "vue-router";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/newHouses",
        meta: {
            title: '新房'
        },
        component: (resolve) => require(['@/components/home/newHouse/newHousesList.vue'], resolve)
    },
    {
        path: "/newHouse/special",
        meta: {
            title: '特价房'
        },
        component: (resolve) => require(['@/components/home/newHouse/specialHouse.vue'], resolve)
    },
    {
        path: "/newHouse/curMonthHouses",
        meta: {
            title: '本月开盘'
        },
        component: (resolve) => require(['@/components/home/newHouse/curMonthHouses.vue'], resolve)
    },
    {
        path: "/newHouse/directSale",
        meta: {
            title: '房乐士直销'
        },
        component: (resolve) => require(['@/components/home/newHouse/directSale.vue'], resolve)
    },
    {
        path: "/newHouse/curMonthHouse",
        meta: {
            title: '本月交房'
        },
        component: (resolve) => require(['@/components/home/newHouse/curMonthHouse.vue'], resolve)
    },
    {
        path: "/newHouse/housesNewTrends",
        meta: {
            title: '楼盘新动态'
        },
        component: (resolve) => require(['@/components/home/newHouse/housesNewTrends.vue'], resolve)
    },
    {
        path: "/newHouse/hotHouses",
        meta: {
            title: '热门楼盘'
        },
        component: (resolve) => require(['@/components/home/newHouse/hotHouses.vue'], resolve)
    },
    {
        path: "/newHouse/discountHouses",
        meta: {
            title: '打折楼盘'
        },
        component: (resolve) => require(['@/components/home/newHouse/discountHouses.vue'], resolve)
    },
    {
        path: "/newHouse/housesGuide",
        meta: {
            title: '楼盘导购'
        },
        component: (resolve) => require(['@/components/home/newHouse/housesGuide.vue'], resolve)
    },
    {
        path: "/newHouse/purchaseKnowledge",
        meta: {
            title: '购房知识'
        },
        component: (resolve) => require(['@/components/home/newHouse/purchaseKnowledge.vue'], resolve)
    },
    {
        path: "/newHouse/schoolDistrictHouse",
        meta: {
            title: '学区房'
        },
        component: (resolve) => require(['@/components/home/newHouse/newHousesList.vue'], resolve)
    },
    {
        path: "/newHouse/newHouseRankingList",
        meta: {
            title: '新房排行榜'
        },
        component: (resolve) => require(['@/components/home/newHouse/newHouseRankingList.vue'], resolve)
    },
    {
        path: "/newHouse/condoTour",
        meta: {
            title: '看房团'
        },
        component: (resolve) => require(['@/components/home/newHouse/condoTour.vue'], resolve)
    },
    {
        path: "/newHouse/helpYouFindHouse",
        meta: {
            title: '帮你找房'
        },
        component: (resolve) => require(['@/components/home/newHouse/helpYouFindHouse.vue'], resolve)
    },
    {
        path: "/handHouse/onSaleHouse",
        meta: {
            title: '在售房源'
        },
        component: (resolve) => require(['@/components/home/handHouse/onSaleHouse.vue'], resolve)
    },
    {
        path: "/handHouse/preference",
        meta: {
            title: '优选房源'
        },
        component: (resolve) => require(['@/components/home/handHouse/preference.vue'], resolve)
    },
    {
        path: "/handHouse/findVillage",
        meta: {
            title: '找小区'
        },
        component: (resolve) => require(['@/components/home/handHouse/findVillage.vue'], resolve)
    },
    {
        path: "/handHouse/findSchool",
        meta: {
            title: '找学校'
        },
        component: (resolve) => require(['@/components/home/handHouse/findSchool.vue'], resolve)
    },
    {
        path: "/handHouse/findSchoolDetails",
        meta: {
            title: '学校搜索详情'
        },
        component: (resolve) => require(['@/components/home/handHouse/findSchoolDetails.vue'], resolve)
    },
    {
        path: "/handHouse/findAgent",
        meta: {
            title: '找经纪人'
        },
        component: (resolve) => require(['@/components/home/handHouse/findAgent.vue'], resolve)
    },
    {
        path: "/handHouse/findVilla",
        meta: {
            title: '找别墅'
        },
        component: (resolve) => require(['@/components/home/handHouse/findVilla.vue'], resolve)
    },
    {
        path: "/handHouse/CheckAdeal",
        meta: {
            title: '查成交'
        },
        component: (resolve) => require(['@/components/home/handHouse/CheckAdeal.vue'], resolve)
    },
    {
        path: "/handHouse/handHouseRanking",
        meta: {
            title: '二手房排行榜'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHouseRanking.vue'], resolve)
    },
    {
        path: "/handHouse/PurchaseKnowledge",
        meta: {
            title: '购房知识'
        },
        component: (resolve) => require(['@/components/home/handHouse/PurchaseKnowledge.vue'], resolve)
    },
    {
        path: "/handHouse/SellingHouse",
        meta: {
            title: '我要卖房'
        },
        component: (resolve) => require(['@/components/home/handHouse/SellingHouse.vue'], resolve)
    },
    {
        path: "/shops/shopRental",
        meta: {
            title: '商铺出租'
        },
        component: (resolve) => require(['@/components/home/shops/shopRental.vue'], resolve)
    },
    {
        path: "/shops/shopSale",
        meta: {
            title: '商铺出售'
        },
        component: (resolve) => require(['@/components/home/shops/shopSale.vue'], resolve)
    },
    {
        path: "/shops/office",
        meta: {
            title: '写字楼出租'
        },
        component: (resolve) => require(['@/components/home/shops/office.vue'], resolve)
    },
    {
        path: "/shops/officereg",
        meta: {
            title: '写字楼出售'
        },
        component: (resolve) => require(['@/components/home/shops/officereg.vue'], resolve)
    },
    {
        path: "/shops/officedetails",
        meta: {
            title: '写字楼详情'
        },
        component: (resolve) => require(['@/components/home/shops/officedetails.vue'], resolve)
    },
    {
        path: "/shops/newShops",
        meta: {
            title: '商铺新盘'
        },
        component: (resolve) => require(['@/components/home/shops/newShops.vue'], resolve)
    },
    {
        path: "/shops/shopdetails",
        meta: {
            title: '商铺详情'
        },
        component: (resolve) => require(['@/components/home/shops/shopdetails.vue'], resolve)
    },
    {
        path: "/shops/sellShops",
        meta: {
            title: '我要卖铺'
        },
        component: (resolve) => require(['@/components/home/shops/sellShops.vue'], resolve)
    },
    {
        path: "/renting/rentingSource",
        meta: {
            title: '在租房源'
        },
        component: (resolve) => require(['@/components/home/renting/rentingSource.vue'], resolve)
    },
    {
        path: "/renting/brandApartment",
        meta: {
            title: '品牌公寓'
        },
        component: (resolve) => require(['@/components/home/renting/brandApartment.vue'], resolve)
    },
    {
        path: "/renting/personalSource",
        meta: {
            title: '个人房源'
        },
        component: (resolve) => require(['@/components/home/renting/personalSource.vue'], resolve)
    },
    {
        path: "/renting/fullRent",
        meta: {
            title: '整租房源'
        },
        component: (resolve) => require(['@/components/home/renting/fullRent.vue'], resolve)
    },
    {
        path: "/renting/jointRent",
        meta: {
            title: '合租房源'
        },
        component: (resolve) => require(['@/components/home/renting/jointRent.vue'], resolve)
    },
    {
        path: "/renting/villasSource",
        meta: {
            title: '别墅房源'
        },
        component: (resolve) => require(['@/components/home/renting/villasSource.vue'], resolve)
    },
    {
        path: "/renting/rentingKnowledge",
        meta: {
            title: '租房知识'
        },
        component: (resolve) => require(['@/components/home/renting/rentingKnowledge.vue'], resolve)
    },
    {
        path: "/renting/renting",
        meta: {
            title: '求租'
        },
        component: (resolve) => require(['@/components/home/renting/renting.vue'], resolve)
    },
    {
        path: "/renting/person",
        meta: {
            title: '求租人信息'
        },
        component: (resolve) => require(['@/components/home/renting/person.vue'], resolve)
    },
    {
        path: "/renting/freeRental",
        meta: {
            title: '免费发布出租'
        },
        component: (resolve) => require(['@/components/home/renting/freeRental.vue'], resolve)
    },
    {
        path: "/renting/rentdetails",
        meta: {
            title: '租房详情'
        },
        component: (resolve) => require(['@/components/home/renting/rentdetails.vue'], resolve)
    },
    {
        path: "/checkHousePrices/checkHousePrices",
        meta: {
            title: '查房价'
        },
        component: (resolve) => require(['@/components/home/checkHousePrices/checkHousePrices.vue'], resolve)
    },
    {
        path: "/houseInfo/newsFlash",
        meta: {
            title: '房产资讯'
        },
        component: (resolve) => require(['@/components/home/houseInfo/newsFlash.vue'], resolve)
    },
    {
        path: "/houseInfo/flash",
        meta: {
            title: '房产快讯'
        },
        component: (resolve) => require(['@/components/home/houseInfo/flash.vue'], resolve)
    },
    {
        path: "/houseInfo/hotTopic1",
        meta: {
            title: '热点专题'
        },
        component: (resolve) => require(['@/components/home/houseInfo/hotTopic1.vue'], resolve)
    },
    {
        path: "/houseInfo/market",
        meta: {
            title: '市场'
        },
        component: (resolve) => require(['@/components/home/houseInfo/market.vue'], resolve)
    },
    {
        path: "/houseInfo/policy",
        meta: {
            title: '政策'
        },
        component: (resolve) => require(['@/components/home/houseInfo/policy.vue'], resolve)
    },
    {
        path: "/houseInfo/infoDetail",
        meta: {
            title: '资讯详情'
        },
        component: (resolve) => require(['@/components/home/houseInfo/infoDetail.vue'], resolve)
    },
    {
        path: "/encyclopedias/propertyKnowledge",
        meta: {
            title: '房产知识'
        },
        component: (resolve) => require(['@/components/home/encyclopedias/propertyKnowledge.vue'], resolve)
    },
    {
        path: "/encyclopedias/knowledgeDetail",
        meta: {
            title: '房产知识详情'
        },
        component: (resolve) => require(['@/components/home/encyclopedias/knowledgeDetail.vue'], resolve)
    },
    {
        path: "/interlocution/interlocution",
        meta: {
            title: '房产问答'
        },
        component: (resolve) => require(['@/components/home/interlocution/interlocution.vue'], resolve)
    },
    {
        path: "/interlocution/interlocutiondetails",
        meta: {
            title: '房产问答详情'
        },
        component: (resolve) => require(['@/components/home/interlocution/interlocutiondetails.vue'], resolve)
    },
    {
        path: "/interlocution/interlocutionlist",
        meta: {
            title: '房产问答列表'
        },
        component: (resolve) => require(['@/components/home/interlocution/interlocutionlist.vue'], resolve)
    },
    {
        path: "/interlocution/interlocutionPut",
        meta: {
            title: '我要提问'
        },
        component: (resolve) => require(['@/components/home/interlocution/interlocutionPut.vue'], resolve)
    },
    {
        path: "/more/vrPanoramicView",
        meta: {
            title: 'VR全景看房'
        },
        component: (resolve) => require(['@/components/home/more/vrPanoramicView.vue'], resolve)
    },
    {
        path: "/aboutUs/aboutUs",
        meta: {
            title: '关于我们'
        },
        component: (resolve) => require(['@/components/home/aboutUs/aboutUs.vue'], resolve)
    }, ,
    {
        path: "/personal/personalCenter",
        meta: {
            title: "个人中心"
        },
        component: (resolve) => require(['@/components/home/personalCenter/personalCenter.vue'], resolve)
    },
    {
        path: "/login",
        meta: {
            title: "登录"
        },
        component: (resolve) => require(['@/components/main/Login.vue'], resolve)
    },
    {
        path: "/register",
        meta: {
            title: "注册"
        },
        component: (resolve) => require(['@/components/main/Register.vue'], resolve)
    },
    {
        path: "/findpassword",
        meta: {
            title: "找回密码"
        },
        component: (resolve) => require(['@/components/main/findPassword.vue'], resolve)
    },
    {
        path: "/setpassword",
        meta: {
            title: "设置密码"
        },
        component: (resolve) => require(['@/components/main/setPassword.vue'], resolve)
    },
    {
        path: "*",
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['@/components/home/index.vue'], resolve)
    },
    {
        path: "/handHouse/handHousedetail",
        meta: {
            title: '二手房详情'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHousedetail.vue'], resolve)
    },
    {
        path: "/handHouse/estateDetails",
        meta: {
            title: '小区详情'
        },
        component: (resolve) => require(['@/components/home/handHouse/estateDetails.vue'], resolve)
    },
    {
        path: "/handHouse/handHouseRanking",
        meta: {
            title: '二手房排行榜'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHouseRanking.vue'], resolve)
    },
    {
        path: "/handHouse/handHouseHot",
        meta: {
            title: '二手房热搜榜'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHouseHot.vue'], resolve)
    },
    {
        path: "/handHouse/handHouseRise",
        meta: {
            title: '二手房涨价榜'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHouseRise.vue'], resolve)
    },
    {
        path: "/handHouse/handHouseReduce",
        meta: {
            title: '二手房降价榜'
        },
        component: (resolve) => require(['@/components/home/handHouse/handHouseReduce.vue'], resolve)
    },
]

var router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

export default router;