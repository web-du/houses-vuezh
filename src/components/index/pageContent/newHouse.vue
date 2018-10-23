<template>
    <div id="newHouse">
        <div class="house_header">
            <div class="house_list">
                <house :housesettap="housecolumn.settap" :housetype="housecolumn.type"></house>
            </div>
            <div class="infomation">
                <information></information>
            </div>
        </div>
        <new-houses></new-houses>
        <active-advert></active-advert>
    </div>
</template>

<script>
import axios from "axios";
import house from "@/components/index/pageContent/house";
import information from "@/components/index/pageContent/information";
import newHouses from "@/components/index/pageContent/newHouses";
import activeAdvert from "@/components/index/pageContent/activeAdvert";

export default {
    name: "newHouse",
    components: {
        house,
        information,
        newHouses,
        activeAdvert
    },
    data() {
        return {
            housecolumn: {
                settap: ["新房"],
                type: [
                    "热卖",
                    "品牌地产",
                    "特价房",
                    "成交行情",
                    "房价走势图",
                    "看房团",
                    "本月开盘",
                    "楼盘动态"
                ]
            }
        };
    },
    mounted() {
        //获取新房资讯
        function getCategoryList() {
            return axios.post(
                process.env.API_HOST + "home/index/getCategoryList", {cateid: 1}
            );
        }

        //并发调用
        axios.all([getCategoryList()]).then(
            axios.spread(function(cate) {
                console.log(cate)
            })
        );
    }
};
</script>
<style>
#newHouse .house_header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
}

.house_list {
    width: 900px;
}

.infomation {
    width: 280px;
}
</style>
