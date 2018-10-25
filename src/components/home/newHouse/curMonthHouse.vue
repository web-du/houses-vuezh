<template>
    <div id="curMonthHouses">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <layout>
            <template slot="contleft">
                <div class="picScroll-left swithDate">
                    <div class="bd">
                        <ul class="bd_ul date">
                            <li :class="{active: index == curMonthIndex}" v-for="(item, index) in month" :key="index" @click="choiceMonth(index, item.s_time)">
                                <a href="javascript:void(0)">{{item.value}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="hd">
                        <a class="next" src="javascript:void(0)"><img src="@/assets/images/xflp1.png" /></a>
                        <a class="prev" src="javascript:void(0)"><img src="@/assets/images/xflp2.png" /></a>
                    </div>
                </div>
                <p class="search_result">
                    8月，孝感预计共 10 个楼盘交房，项目主要以住宅,别墅,商铺为主。其中 孝南 3 个。
                </p>
                <cur-houses-list :houses-list="curMonthHousesList"></cur-houses-list>
                <paging :page-num="Math.ceil(curMonthHousesList.total_num/5)" :cur-page="curPage" @sendPage="receivePage"></paging>
            </template>
            <template slot="contright">
                <!--立即报名-->
                <join-vip></join-vip>
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
import crumbsSearch from "@/components/main/crumbsSearch";
import layout from "@/components/main/layout";
import paging from "@/components/main/paging";
import curHousesList from "@/components/main/curHousesList";
import joinVip from "@/components/main/joinVip";
import interlocution from "@/components/main/interlocution";
import hotHouses from "@/components/main/hotHouses";
import hotReview from "@/components/main/hotReview";
export default {
    name: "curMonthHouses",
    components: {
        crumbsSearch,
        layout,
        paging,
        curHousesList,
        joinVip,
        interlocution,
        hotHouses,
        hotReview
    },
    data() {
        return {
            curMonthHousesList: [],
            curPage: 1,
            month: [
                {
                    value: "2018年08月",
                    s_time: "2018-8"
                },
                {
                    value: "2018年09月",
                    s_time: "2018-9"
                },
                {
                    value: "2018年10月",
                    s_time: "2018-10"
                },
                {
                    value: "2018年11月",
                    s_time: "2018-11"
                },
                {
                    value: "2018年12月",
                    s_time: "2018-12"
                },
                {
                    value: "2019年1月",
                    s_time: "2019-01"
                },
                {
                    value: "2019年2月",
                    s_time: "2019-02"
                },
                {
                    value: "2019年3月",
                    s_time: "2019-03"
                },
                {
                    value: "2022年4月",
                    s_time: "2022-04"
                }
            ],
            curMonthIndex: 0,
            curMonth: ''
        };
    },
    methods: {
        //本月开盘
        getCurMonthHouses(page, month) {
            console.log(page, month)
            this.axios
                .post(process.env.API_HOST + "house/Houselist/getThisMonthHouse", {
                    type: 2,
                    page: page,
                    pagesize: 5,
                    s_time: month
                })
                .then(res => {
                    console.log("本月开盘");
                    if (res.status == 200) {
                        console.log(res);
                        this.curMonthHousesList = res.data.data;
                    }
                });
        },

        //页码
        receivePage(val) {
            this.curPage = val;
            this.getCurMonthHouses(this.curPage, this.curMonth);
        },

        //选择月份
        choiceMonth(index, time) {
            this.curMonthIndex = index
            this.curMonth = time
            this.getCurMonthHouses(1, this.curMonth)
        }
    },
    mounted() {
        jQuery(".picScroll-left").slide({
            titCell: ".hd ul",
            mainCell: ".bd ul",
            autoPage: true,
            effect: "left",
            vis: 6
        });
        

        //获取当前月份
        var date = new Date()
        var month = this.month
        for (var i = 0; i < month.length; i++) {
           if (month[i].s_time.split('-')[0] == date.getFullYear() && month[i].s_time.split('-')[1] == date.getMonth() + 1) {
               this.curMonthIndex = i
               this.curMonth = this.month[this.curMonthIndex].s_time
           } 
        }
        this.getCurMonthHouses(1, this.curMonth);
    }
};
</script>
<style scoped>
.swithDate {
    width: 850px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 37px;
    z-index: 0;
}

.swithDate .bd {
    width: 758px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 48px;
    z-index: 2;
}

.swithDate .bd ul li {
    float: left;
    position: relative;
    width: 125px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #d3d3d3;
}

.swithDate .bd ul li a {
    width: auto;
    height: 35px;
    margin: 0 auto;
    display: block;
    z-index: 99;
    text-align: center;
    font-size: 14px;
}

.swithDate .hd {
    overflow: hidden;
    height: 37px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    z-index: 1;
}

.swithDate .next,
.swithDate .prev {
    background: #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swithDate .next {
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 37px;
}

.swithDate .prev {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 37px;
}

.swithDate a:hover, .swithDate .bd ul li.active a {
    color: #fff;
    background: #e93e0c;
}

.search_result {
    width: 100%;
    font-size: 14px;
    color: #999999;
    margin-top: 20px;
}
</style>
