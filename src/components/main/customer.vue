<template>

    <div id="customer" @mouseover="infoShow" @mouseout="infoHide">
        <img src="@/assets/images/Dw-right-other.png" class="head_portrait" />
        <span class="state online"></span>
        <transition name="fade">
            <div class="info" v-show="infoState">
                <div class="title">
                    <img src="@/assets/images/cebianpic7.png" />
                    <span>咨询顾问</span>
                </div>
                <div class="phone">
                    <span>联系电话：</span>
                    <span>400-0075-0000</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "customer",
    data() {
        return {
            infoState: false
        };
    },
    methods: {
        infoShow() {
            console.log(111);
            this.infoState = true;
        },
        infoHide() {
            console.log(222);
            this.infoState = false;
        }
    }
};
</script>

<style scoped>
#customer {
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed #cccccc;
}

.customer_img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.state {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    position: absolute;
    top: 17px;
    right: 16px;
}

.online {
    background: #38a204;
}

.off_line {
    background: #cccccc;
}

.info {
    position: absolute;
    top: 0;
    right: 90px;
    width: 190px;
    height: 130px;
    padding-top: 20px;
    overflow: hidden;
    background: #fff;
}

.info .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e93e0c;
    height: 35px;
    width: 100%;
}

.info .title img {
    height: 18px;
    width: 22px;
    margin-right: 10px;
}

.info .title span {
    font-size: 16px;
    color: #fff;
}

.info .phone {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}

.info .phone span {
    text-align: center;
}

.info .phone span:nth-child(1) {
    font-size: 16px;
    color: #666;
    font-weight: bold;

    margin: 20px 0;
}

.info .phone span:nth-child(2) {
    font-size: 20px;
    color: #e93e0c;
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
