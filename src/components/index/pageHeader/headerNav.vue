<template>
    <div id="headNav">
        <div class="navBox">
            <div class="tabbar">
                <img src="@/assets/images/logo_w.png" width="100%" class="logo" />
                <choice-city></choice-city>
                <nav-list></nav-list>
            </div>
        </div>
    </div>
</template>
<script>
import choiceCity from "@/components/main/choiceCity"
import navList from "@/components/index/navList"
export default {
    name: "headerNav",
    components: {
        choiceCity,
        navList
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {

    }
};
</script>
<style scoped>
#headNav {
    width: 100%;
    background: -webkit-linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 111;
    position: absolute;
    top: 0;
    left: 0;
}

#headNav .navBox {
    height: 40px;
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
}

#headNav .navBox .tabbar {
    display: flex;
    height: 40px;
    display: flex;
    align-items: center;
}

#headNav .tabbar .logo {
    width: 200px;
    height: 30px;
    margin-right: 15px;
}
</style>
