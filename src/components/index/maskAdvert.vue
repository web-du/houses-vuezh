<template>
    <div id="maskAdvert" v-show="adShow">
        <div class="advert">
            <img src="@/assets/images/close_Ad.png" @click="closeAd" class="close_ad" />
            <img src="@/assets/images/mask_ad.jpg" class="advert_img" />
        </div>
    </div>
</template>

<script>
export default {
    name: "maskAdvert",
    data() {
        return {
            adShow: false
        }
    },
    methods: {
        //关闭广告
        closeAd() {
            this.adShow = false
        }
    },
    created() {
        this.adShow = true
    },
}
</script>

<style scoped>
    #maskAdvert {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }

    .advert {
        margin: 300px auto;
        width: 750px;
        height: 450px;
        background: #e3ebf6;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
    }

    .close_ad {
        width: 38px;
        height: 38px;
        margin-bottom: 6px;
        margin-right: 20px;
    }
</style>

