<template>
    <div id="activity">
        <ul class="active_title">
            <li v-for="(item, index) in actives" @mouseover="switchActive(index)" :key="index" :class="{active: activeIndex == index}">
                <a class="shape">
                    <span class="left_triangle" v-show="index != 0"></span>
                    <span class="rectangle">{{ item.name }}</span>
                    <span class="right_triangle" v-show="index != 2"></span>
                </a>
            </li>
        </ul>
        <ul class="active_bottom newHousesList">
            <!-- <li>
                <div class="housingInfo">
                    <div class="img">
                        <img src="@/assets/images/ad2.jpg" width="100%" />
                        <span class="ident">广告</span>
                        <div class="enrolment">
                            <span>最新楼评</span>
                            <span>
                                <span class="cr">101</span>&nbsp;人报名</span>
                        </div>
                    </div>
                    <p class="title"> 【规划篇】笋岗变身“大工地”近期将迎百万</p>
                    <p class="content">悦都会约85-108㎡住宅产品在售东关了尚林</p>
                </div>
            </li> -->
            <li v-for="(item, index) in housesList.new_xinpan_list" :key="index">
                <div class="housingInfo">
                    <div class="img">
                        <img :src="global.imgurl + item.house_thumb" width="100%" />
                        <!-- <span class="ad">广告</span> -->
                        <div class="enrolment">
                            <span>最新楼评</span>
                            <span>
                                <span class="cr">102</span>&nbsp;人报名</span>
                        </div>
                    </div>
                    <div class="price">
                        <span>价格待定</span>
                        <span>灵雾景区旁，轻奢度假公寓</span>
                    </div>
                    <ul class="laber">
                        <li class="bg_green">
                            <a href="javascript:void(0)">知名物业</a>
                        </li>
                        <li class="bg_yellow">
                            <a href="javascript:void(0)">地标建筑</a>
                        </li>
                        <li class="bg_blue">
                            <a href="javascript:void(0)">核心商圈</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <active-advert :advert="advert"></active-advert>
    </div>
</template>
<script>
import activeAdvert from "@/components/index/pageContent/activeAdvert"  
import global from "@/components/main/global"

export default {
    name: "activity",
    components: {
        activeAdvert
    },
    data() {
        return {
            activeIndex: 0,
            actives: [
                {
                    name: "最新楼盘",
                    list: []
                },
                {
                    name: "新盘入市",
                    list: []
                },
                {
                    name: "近期活动",
                    list: []
                }
            ],
            advert: ['@/assets/images/ad3.jpg', '@/assets/images/ad3.jpg', '@/assets/images/ad3.jpg'],
            housesList: []
        };  
    },
    methods: {
        switchActive(index) {
            this.activeIndex = index;
        },

        //tabbar
        getHomeTablist() {
            this.axios
                .post(process.env.API_HOST + "home/index/getHomeTablist", {})
                .then(res => {
                    console.log("tabbar");
                    if (res.status == 200) {
                        console.log(res)
                        this.housesList = res.data.data
                    }
                });
        },
    },
    mounted() {
        this.getHomeTablist()
    },
};
</script>
<style scoped>
#activity {
    overflow: hidden;
    margin-top: 10px;
}

#activity .active_title {
    position: relative;
    width: 100%;
    height: 50px;
    display: block;
    border-bottom: 3px solid #e93e0c;
}

.active_title li {
    overflow: hidden;
    z-index: 1;
}

.active_title li:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
}

.active_title li:nth-child(2) {
    position: absolute;
    top: 0;
    left: 406px;
}

.active_title li:nth-child(3) {
    position: absolute;
    top: 0;
    left: 824px;
}

.active_title li a {
    display: flex;
    flex-direction: row;
}

.active_title li .rectangle {
    display: block;
    width: 400px;
    height: 50px;
    border-radius: 3px 3px 0 0;
    background: #ffdcd1;
    font-size: 20px;
    color: #e93e0c;
    text-align: center;
    line-height: 50px;
}

.active_title li .left_triangle {
    width: 0;
    height: 0;
    border-color: #ffdcd1 transparent;
    border-width: 0 0px 48px 12px;
    border-style: solid;
    margin-top: 2px;
    display: block;
}

.active_title li .right_triangle {
    display: block;
    width: 0;
    height: 0;
    border-color: #ffdcd1 transparent;
    border-width: 0 12px 48px 0;
    border-style: solid;
    margin-top: 2px;
}

.active_title li.active {
    z-index: 2;
}

.active_title li.active .rectangle {
    background: #e93e0c;
    color: #fff;
}

.active_title li.active .left_triangle,
.active_title li.active .right_triangle {
    border-color: #e93e0c transparent;
}

.active_bottom {
    margin-top: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.active_bottom>li {
    width: 285px;
}

.housingInfo .img {
    width: 280px;
    height: 210px;
    border: 1px solid #cccccc;
    position: relative;
}

.housingInfo .img img {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: -111;
    width: 270px;
    height: 200px;
}

.housingInfo .img .ident {
    width: 38px;
    height: 22px;
    line-height: 22px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 14px;
    color: #fff;
    text-align: center;
}

.housingInfo .img .enrolment {
    padding: 10px 15px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.housingInfo .img .enrolment span {
    color: #fff;
    font-size: 14px;
}

.cr {
    color: #e93e0c !important;
}

.active_bottom .title {
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
}

.active_bottom .content {
    font-size: 14px;
    color: #666666;
}

.active_bottom .title,
.active_bottom .content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.housingInfo .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
}

.housingInfo .price span {
    font-size: 14px;
}

.housingInfo .price span:nth-child(1) {
    color: #e93e0c;
}

.housingInfo .price span:nth-child(2) {
    color: #666666;
}

.housingInfo .laber {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.housingInfo .laber li {
    overflow: hidden;
    border-radius: 5px;
    margin-right: 10px;
}

.housingInfo .laber li:nth-last-child(1) {
    margin-right: 0;
}

.housingInfo .laber li a {
    display: block;
    width: 75px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
}

.housingInfo .laber li.bg_green {
    background: rgba(0, 255, 127, 0.08);
}

.housingInfo .laber li.bg_green a {
    color: #8cb8a2;
}

.housingInfo .laber li.bg_yellow {
    background: rgba(255, 191, 0, 0.08);
}

.housingInfo .laber li.bg_yellow a {
    color: #dbcea4;
}

.housingInfo .laber li.bg_blue {
    background: rgba(0, 101, 255, 0.08);
}

.housingInfo .laber li.bg_blue a {
    color: #a9bede;
}
</style>
