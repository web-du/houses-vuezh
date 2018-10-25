<template>
    <div id="hotHouse">
        <crumbs-search></crumbs-search>
        <layout>
            <template slot="contleft">
                <div class="header">
                    <div class="house_type">
                        <ul>
                            <li>孝感热门楼盘 周TOP100</li>
                        </ul>
                    </div>
                    <div class="house_srot">
                        <ul>
                            <li>
                                <a>默认</a>
                            </li>
                            <li>
                                <a>价格</a>
                                <img src="@/assets/images/icon_up_active.png" width="100%" />
                                <!-- <img src="@/assets/images/icon_down_active.png" width="100%"  /> -->
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="house_list">
                    <div class="house" v-for="(item, index) in 12" :key="index">
                        <div class="houseImg">
                            <img src="@/assets/images/special_house.jpg" width="100%" />
                            <div class="mask">
                                <span>华鸿.公园天下</span>
                                <span>中心城区</span>
                            </div>
                        </div>
                        <div class="house_info">
                            <ul>
                                <li>均价 <span>9091</span> 万元/套㎡</li>
                                <li>4分（141条评论）</li>
                                <li>5居以上 . 238㎡</li>
                                <li>体育西路特8号</li>
                            </ul>
                        </div>
                        <div class="house_label">
                            <ul>
                                <li>在售</li>
                                <li>普通住宅</li>
                                <li>湖景地产</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <paging :page-num="3" :cur-page="1"></paging>
            </template>
            <template slot="contright">
                <!--帮你找房-->
                <help-find-house></help-find-house>
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
import helpFindHouse from "@/components/main/helpFindHouse";
import joinVip from "@/components/main/joinVip";
import interlocution from "@/components/main/interlocution";
import hotHouses from "@/components/main/hotHouses";
import hotReview from "@/components/main/hotReview";
export default {
    components: {
        crumbsSearch,
        layout,
        paging,
        helpFindHouse,
        joinVip,
        interlocution,
        hotHouses,
        hotReview
    },
    data() {
        return {
            aboutMsg: "热门楼盘"
        };
    }
};
</script>
<style scoped>
.cont_left .header {
    border-bottom: 2px solid #e93e0c;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}

.house_type ul li {
    padding: 0 20px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    font-size: 14px;
    background: #e93e0c;
}

.house_srot ul {
    display: flex;
}

.house_srot ul li {
    padding: 0 10px;
    height: 45px;
    line-height: 45px;
    display: flex;
    align-items: center;
}

.house_srot ul li a {
    color: #999;
}

.house_srot ul li a:hover {
    color: #e93e0c;
}

.house_srot ul li img {
    height: 12px;
    width: 10px;
    margin-left: 5px;
}

.house_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.house {
    width: 270px;
    height: 340px;
    border: 1px solid #f5f5f5;
    padding: 15px;
    overflow: hidden;
    margin-top: 20px;
}

.houseImg {
    position: relative;
    overflow: hidden;
}

.houseImg img {
    width: 240px;
    height: 180px;
    display: block;
}

.houseImg .mask {
    padding: 0 10px;
    height: 30px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.houseImg .mask span {
    color: #fff;
}

.house_info {
    margin-top: 5px;
}

.house_info ul li {
    color: #666;
}

.house_info ul li span {
    color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
}

.house_label ul {
    display: flex;
    margin-top: 5px;
}

.house_label ul li {
    padding:  0 10px;
    height: 30px;
    line-height: 30px;
    display: block;
    overflow: hidden;
    border-radius: 3px;
    margin-right: 10px;
}

.house_label ul li:nth-child(1) {
    color: #e89880;
    background: #efe8e7;
}

.house_label ul li:nth-child(2) {
    color: #dbcea4;
    background: #f5f2e9;
}

.house_label ul li:nth-child(3) {
    color: #a9bede;
    background: #eff2f7;
}

</style>
