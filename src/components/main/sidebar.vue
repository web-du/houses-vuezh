<template>
    <div id="sidebar">
        <customer></customer>
        <customer></customer>
        <customer></customer>
        <customer></customer>
        <div class="downloadApp" @mouseover="appShow" @mouseout="appHide">
            <img src="@/assets/images/Dw-right-tel.png" />
            <transition name="fade">
                <div class="app" v-show="app">
                    <img src="@/assets/images/cebianpic8.jpg" />
                    <p>扫码关注房乐士微信</p>
                </div>
            </transition>
        </div>
        <div class="followWeiXin" @mouseover="weixinShow" @mouseout="weixinHide">
            <img src="@/assets/images/Dw-right-ewm.png" />
            <transition name="fade">
                <div class="weixin" v-show="weixin">
                    <img src="@/assets/images/cebianpic8.jpg" />
                    <p>扫码关注房乐士微信</p>
                </div>
            </transition>
        </div>
        <div class="returnTop" @click="returnTop">
            <img src="@/assets/images/Dw-right-top.png" />
        </div>
    </div>
</template>

<script>
import customer from "@/components/main/customer";
export default {
    name: "sidebar",
    components: {
        customer
    },
    data() {
        return {
            app: false,
            weixin: false
        };
    },
    methods: {
        appShow() {
            this.app = true;
        },
        appHide() {
            this.app = false;
        },
        weixinShow() {
            this.weixin = true;
        },
        weixinHide() {
            this.weixin = false;
        },
        returnTop() {
            $("html,body").animate({ scrollTop: 0 }, 500);
        }
    }
};
</script>

<style scoped>
/* 侧边栏 */
#sidebar {
    position: fixed;
    right: 0;
    bottom: 5%;
    border: 1px solid #e5e5e5;
    background: #fff;
    z-index: 999;
    display: flex;
    flex-direction: column;
}

#sidebar > div {
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed #cccccc;
}

.app,
.weixin {
    position: absolute;
    top: 0;
    right: 90px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: #fff;
}

.app img,
.weixin img {
    width: 135px;
    height: 135px;
}

.app p,
.weixin p {
    font-size: 14px;
    margin-top: 10px;
}

.fade-enter-active {
    transition: all 0.3s ease;
}
.fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>

