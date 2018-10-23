<template>
    <!--广告-->
    <div id="ad">
        <img src="@/assets/images/ad1_big.jpg" v-show="advert_show" width="100%" class="big_img" />
        <img src="@/assets/images/ad1_small.jpg" v-show="!advert_show" width="100%" class="small_img" />
        <img src="@/assets/images/icon_close.png" v-show="close_btn" v-on:click="narrowAdvert" class="close" width="100%" />
        <div>
            <span>广告</span>
        </div>
    </div>
</template>
<script>

export default {
    name: "top_advert",
    data() {
        return {
            advert_show: true,
            close_btn: true
        }
    },
    methods: {
        //顶部图片缩放
        narrowAdvert() {
            this.advert_show = false
            this.close_btn = false
            $("#ad").stop(true,true).slideDown(3000);
        }
    },
    mounted() {
        //展开顶部广告
        // setTimeout(function() {
        //     $("#ad").slideDown(3000);
        // },20);
    }
};
</script>
<style scoped>
/*头部广告*/
#ad {
    display: none;
    height: auto;
    overflow: hidden;
}

#ad img {
    display: block;
}

#ad .close {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 18px;
    height: 18px;
}

#ad div {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}

#ad div span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 38px;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
}
</style>
