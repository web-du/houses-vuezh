<template>
    <div id="groupPurchase">
        <div class="house_header">
            <div class="house_list">
                <house :housesettap="housecolumn.settap" :housetype="housecolumn.type"></house>
            </div>
            <div class="information">
                <join-vip></join-vip>
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
import joinVip from "@/components/main/joinVip";
export default {
    name: "groupPurchase",
    components: {
        house,
        information,
        activeAdvert,
        joinVip
    },
    data() {
        return {
            housecolumn: {
                settap: ["团购", "特价"],
                type: [
                    "新盘入市",
                    "热盘精选",
                    "06月16日看房报名",
                    "有房在售",
                    "楼盘动态",
                    "查房价知行情"
                ]
            }
        };
    }
};
</script>

<style scoped>
#groupPurchase .house_header {
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

</style>

