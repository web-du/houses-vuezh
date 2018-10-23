<template>
    <div id="newHouses">
        <layout>
            <template slot="screenCond">
                <screen @sendScreenCond="receiveScreenCond"></screen>
            </template>
            <template slot="housesActive">
                <!--广告-->
                <houses-active></houses-active>
            </template>
            <template slot="contleft">
                <!--楼盘类型和排序-->
                <div class="header">
                    <housesType :housetype="newHousesList.tags" @sendHousesModel="receiveHousesModel"></housesType>
                    <houses-sort @sendOrderby="receiveOrderBy"></houses-sort>
                </div>
                <!--楼盘列表-->
                <div class="houseList">
                    <h2 v-if="newHousesList.list == 0" class="noResult">暂无房源</h2>
                    <div v-for="(houses, index) in newHousesList.list" :key="index" v-if="newHousesList.list != 0">
                        <building :houses="houses"></building>
                    </div>
                </div>
                <!--分页-->
                <paging :page-num="Math.ceil(newHousesList.tags[screenCond.house_model].num/5)" :cur-page="screenCond.page" v-if="newHousesList.list" @sendPage="receivePage"></paging>
                <!--猜你喜欢-->
                <recommend></recommend>
            </template>
            <template slot="contright">
                <!--立即报名-->
                <join-vip></join-vip>
                <!--楼盘导购-->
                <shopping-guide></shopping-guide>
                <!--帮你找房-->
                <help-find-house></help-find-house>
                <!--特价房-->
                <special-house></special-house>
                <!--买房技巧/楼盘问答-->
                <interlocution></interlocution>
                <!--热门楼盘/本月开盘-->
                <hot-houses></hot-houses>
                <!--楼盘热评榜-->
                <hot-review></hot-review>
            </template>
        </layout>
    </div>
</template>
<script>
// import axios from "axios";
import layout from "@/components/main/layout";
import joinVip from "@/components/main/joinVip";
import shoppingGuide from "@/components/main/shoppingGuide";
import helpFindHouse from "@/components/main/helpFindHouse";
import specialHouse from "@/components/main/specialHouse";
import interlocution from "@/components/main/interlocution";
import hotHouses from "@/components/main/hotHouses";
import hotReview from "@/components/main/hotReview";
import housesActive from "@/components/main/housesActive";
import building from "@/components/main/building";
import screen from "@/components/main/screen";
import housesType from "@/components/main/housesType";
import housesSort from "@/components/main/housesSort";
import paging from "@/components/main/paging";
import recommend from "@/components/main/recommend";
export default {
    components: {
        layout,
        housesActive,
        joinVip,
        shoppingGuide,
        helpFindHouse,
        specialHouse,
        interlocution,
        hotHouses,
        hotReview,
        screen,
        housesType,
        housesSort,
        building,
        paging,
        recommend
    },
    data() {
        return {
            newHousesList: [],
            recHouseList: [],
            screenCond: {
                page: 1,
                house_model: 0
            }
        };
    },
    methods: {
        //楼盘搜索列表
        getHousesList(data) {
            console.log(data);
            this.axios
                .post(process.env.API_HOST + "Houselist/getBuilding", data)
                .then(res => {
                    console.log("楼盘搜索列表");
                    if (res.status == 200) {
                        console.log(res);
                        this.newHousesList = res.data.data;
                    }
                });
        },

        //接收筛选条件
        receiveScreenCond(obj) {
            console.log(obj);
            var screenCond = this.screenCond;
            console.log(screenCond);
            var cond = {};
            var newCond = {};
            obj.forEach((item, index) => {
                cond = Object.assign(screenCond, item.list);
            });
            for (var prop in cond) {
                if (cond[prop] !== "") {
                    newCond[prop] = cond[prop];
                }
            }
            this.screenCond = newCond;
            this.screenCond.page = 1;
            this.getHousesList(this.screenCond);
        },

        //接收子组件楼盘类型
        receiveHousesModel(val) {
            this.screenCond.page = 1;
            if (this.screenCond.house_model != val) {
                this.screenCond.house_model = val;
                this.getHousesList(this.screenCond);
            }
        },

        //接收子组件楼盘排序
        receiveOrderBy(val) {
            this.screenCond.orderby = val;
            this.getHousesList(this.screenCond);
        },

        //接收页码
        receivePage(val) {
            this.screenCond.page = val;
            this.getHousesList(this.screenCond);
        }
    },
    mounted() {
        this.getHousesList(this.screenCond);
        // var then = this;
        // //获取新开楼盘列表
        // function getNewHousesList() {
        //     return axios.post("/api/Houselist/getNewHouseList");
        // }
        // //并发调用
        // axios.all([getNewHousesList()]).then(
        //     axios.spread(function(housesList) {
        //         console.log("楼盘");
        //         console.log(housesList);
        //         if (housesList.status == "200") {
        //             then.housesList = housesList.data.data;
        //         }
        //     })
        // );
    }
};
</script>
<style scoped>
.house_list {
    margin-top: 30px;
}

.cont_left .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e93e0c;
}

.noResult {
    padding: 20px;
    text-align: center;
    font-size: 30px;
}
</style>
