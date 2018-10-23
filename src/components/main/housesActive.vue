<template>
    <div id="houseActive">
        <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;"/>
        <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
    </div>
</template>

<script>
export default {};
</script>
<style scoped>
#houseActive {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    max-width: 1200px;
}

#houseActive .bot {
    width: 1176px;
    height: 30px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 12px;
}

#houseActive .bot i {
    font-size: 16px;
    color: #e93e0c;
    padding: 0 6px;
}

#houseActive .bot .date {
    margin-left: 33px;
}
</style>
