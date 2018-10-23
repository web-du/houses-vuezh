<template>
    <div id="shops">
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
                <div class="searchHousePrice">
                    <div>
                        <input placeholder="请输入区域、商圈、小..." />
                        <img src="@/assets/images/search2.png" width="100%" />
                    </div>
                    <p>201665人正在使用查房价</p>
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
    name: "shops",
    components: {
        house,
        information,
        activeAdvert
    },
    data() {
        return {
            businessState: true,
            housecolumn: {
                settap: ["商铺"],
                type: [
                    "优选房源",
                    "个人房源",
                    "地图找铺",
                    "视频看房",
                    "个人房源",
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
#shops .house_header {
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

.information .searchHousePrice {
    padding: 10px;
    background: #f1f1f1;
    margin-bottom: 30px;
}

.searchHousePrice div {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.searchHousePrice div input {
    width: 100%;
    height: 45px;
    font-size: 14px;
    color: #999;
    padding-left: 10px;
    outline: none;
    border-radius: 5px;
}

.searchHousePrice div img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 13px;
    right: 20px;
}

.searchHousePrice p {
    font-size: 14px;
    color: #999;
    padding: 10px;
}
</style>

