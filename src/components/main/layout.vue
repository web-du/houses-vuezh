<template>
    <div id="layout">
        <!--筛选条件-->
        <slot name="screenCond"></slot>
        <!--楼盘活动-->
        <slot name="housesActive"></slot>
        <!--主要内容-->
        <div class="content">
            <div class="cont_left">
                <slot name="contleft"></slot>
            </div>
            <div class="cont_right">
                <slot name="contright"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "layout"
};
</script>

<style scoped>
#layout {
    width: 1200px;
    margin: 30px auto;
    overflow: hidden;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.cont_left {
    width: 850px;
}

.cont_right {
    width: 310px;
}
</style>

