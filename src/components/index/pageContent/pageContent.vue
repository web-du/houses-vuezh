<template>
    <div id="pageContent">
        <div id="container">
            <sub-nav></sub-nav>
            <activity></activity>
            <new-house></new-house>
            <group-purchase></group-purchase>
            <renting></renting>
            <shops></shops>
            <rankings></rankings>
            <friendship-link></friendship-link>
        </div>
    </div>
</template>
<script>
import subNav from "@/components/index/pageContent/subNav"  
import activity from "@/components/index/pageContent/activity"
import newHouse from "@/components/index/pageContent/newHouse"
import groupPurchase from "@/components/index/pageContent/groupPurchase"
import renting from "@/components/index/pageContent/renting"
import shops from "@/components/index/pageContent/shops"
import rankings from "@/components/index/pageContent/rankings"
import friendshipLink from "@/components/index/pageContent/friendshipLink"
export default {
    name: "pageContent",
    components: {
        subNav,
        activity,
        newHouse,
        groupPurchase,
        renting,
        shops,
        rankings,
        friendshipLink
    }
};
</script>
<style scoped>
    #container {
        width: 1200px;
        margin: 0 auto;
    }
</style>
