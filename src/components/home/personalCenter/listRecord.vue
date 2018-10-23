<template>
    <ul class="list">
        <li>
            <div class="jilu">
            <img src="@/assets/images/Dw-yuyue.png">
            <span class="first">在线预约房源或楼盘</span>
            <span class="sec">与看房顾问确定看房时间</span>
            <span class="three">实地看房</span>
            <p>暂时没有看过房子</p>
            <button>去预约</button>
            </div>
        </li>
    </ul>
</template>

<script>
    export default{
        name:"listRecord",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.list > li .jilu {
    position: relative;
    padding-top: 80px;
}
.list > li .jilu img {
    display: block;
    width: 510px;
    height: 10px;
    margin: 0 auto;
}
.list > li .jilu span {
    font-size: 14px;
    line-height: 24px;
    color: #999999;
    position: absolute;
}
.list > li .jilu span.first {
    left: 175px;
    top: 110px;
}
.list > li .jilu span.sec {
    left: 420px;
    top: 110px;
}
.list > li .jilu span.three {
    left: 712px;
    top: 110px;
}
.list > li .jilu p {
    margin-top: 130px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
}
.list > li .jilu button {
    display: block;
    width: 225px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #fff;
    background-color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
    margin: 15px auto 0;
    border: none;
    cursor: pointer;
}
</style>
