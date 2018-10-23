<template>
    <div id="bottomAdvert">
        <img src="@/assets/images/bottom_adv.jpg" width="100%" />
        <div class="content">
            <span class="title">广告</span>
            <img class="close" src="@/assets/images/icon_close.png" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#bottomAdvert {
    position: relative;
}

#bottomAdvert .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -600px;
    width: 1200px;
}

#bottomAdvert .content .title {
    position: absolute;
    width: 38px;
    height: 22px;
    line-height: 22px;
    background: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    color: #fff;
    text-align: center;
    left: 0;
    bottom: 10px;
}

#bottomAdvert .content .close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 0;
}
</style>

