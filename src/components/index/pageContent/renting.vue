<template>
    <div id="renting">
        <div class="house_header">
            <div class="house_list">
                <house :housesettap="housecolumn.settap" :housetype="housecolumn.type"></house>
            </div>
            <div class="information">
                <div class="business">
                    <div class="btn">
                        <a :class="{active: businessState == true}" @mouseover="switchTabbar(true)">我要买房</a>
                        <a :class="{active: businessState == false}" @mouseover="switchTabbar(false)">我要卖房</a>
                    </div>
                    <div class="buy_hose" v-show="businessState">
                        <p class="title">已有
                            <span>70</span> 万业主选择房乐士
                        </p>
                        <a href="javascript:void(0)" class="businessBtn">我要买房</a>
                    </div>
                    <div class="sell_hose" v-show="!businessState">
                        <p class="title">已有
                            <span>70</span> 万业主选择房乐士
                        </p>
                        <a href="javascript:void(0)" class="businessBtn">我要卖房</a>
                    </div>
                </div>
                <div class="hotSearch">
                    <p class="title">热门搜索</p>
                    <ul>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                        <li>
                            <a>知名物业</a>
                        </li>
                    </ul>
                </div>
                <information></information>
            </div>
        </div>
        <active-advert></active-advert>
    </div>
</template>

<script>
import house from "@/components/index/pageContent/house";
import information from "@/components/index/pageContent/information";
import activeAdvert from "@/components/index/pageContent/activeAdvert";
export default {
    name: "renting",
    components: {
        house,
        information,
        activeAdvert
    },
    data() {
        return {
            businessState: true,
            housecolumn: {
                settap: ["二手房", "租房"],
                type: [
                    "降价房",
                    "优选房源",
                    "个人房源",
                    "视频看房",
                    "优选房源",
                    "个人房源",
                    "我要出租",
                    "我要租房"
                ]
            }
        };
    },
    methods: {
        switchTabbar(bool) {
            this.businessState = bool;
        }
    }
};
</script>

<style scoped>
#renting .house_header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
}

.house_list {
    width: 900px;
}

.information {
    width: 280px;
}

.information .business {
    overflow: hidden;
    padding-bottom: 20px;
    border: 1px solid #f5f5f5;
    margin-bottom: 30px;
}

.information .business .btn {
    display: flex;
    flex-direction: row;
}

.information .business .btn a {
    flex: 1;
    background: #f5f5f5;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    border: 0;
}

.information .business .btn a.active {
    color: #e93e0c;
    border-top: 2px solid #e93e0c;
    background: #fff;
}

.information .business .title {
    font-size: 16px;
    text-align: center;
    height: 60px;
    line-height: 60px;
}

.information .business .title span {
    font-size: 24px;
    font-weight: bold;
    color: #e93e0c;
}

.information .businessBtn {
    width: 225px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border: 0;
    background: #e93e0c;
    font-size: 16px;
    color: #fff;
    display: block;
    margin: 0 auto;
}

.hotSearch {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.hotSearch .title {
    font-size: 18px;
}

.hotSearch ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}

.hotSearch ul li {
    margin-right: 15px;
}

.hotSearch ul li:nth-child(4n) {
    margin-right: 0;
}

.hotSearch ul li a {
    font-size: 14px;
    color: #999;
}

.hotSearch ul li a:hover {
    color: #e93e0c;
}
</style>

