<template>
    <div id="broadcast">
        <!--轮播图片-->
        <ul class="bd" :style="{height: bannerHeight + 'px'}">
            <li>
                <a href="javascript:void(0)" target="_blank"><img src="@/assets/images/banner1.jpg" width="100%" /></a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank"><img src="@/assets/images/banner2.jpg" width="100%" /></a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank"><img src="@/assets/images/banner3.jpg" width="100%" /></a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank"><img src="@/assets/images/banner4.jpg" width="100%" /></a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank"><img src="@/assets/images/banner5.jpg" width="100%" /></a>
            </li>
        </ul>
        <!--轮播按钮-->
        <ul class="hd">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <!--上一张和下一张-->
        <a class="prev" href="javascript:void(0)"><img src="@/assets/images/prev.png" width="100%" /></a>
        <a class="next" href="javascript:void(0)"><img src="@/assets/images/next.png" width="100%" /></a>
    </div>
</template>
<script>
export default {
    name: "broadcast",
    props: ['bannerHeight'],
    methods: {},
    mounted() {
        //banner轮播
        jQuery("#broadcast").slide({
            mainCell: ".bd ",
            effect: "leftLoop",
            autoPlay: true
        });
    }
};
</script>
<style scoped>
#broadcast {
    position: relative;
}
#broadcast .bd {
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
}

#broadcast .bd li {
    height: 100%;
}

#broadcast .bd img {
    width: 100%;
    height: 100%;
    text-align: center;
}

#broadcast .hd {
    z-index: 0;
    width: 145px;
    height: 10px;
    position: absolute;
    left: 46%;
    bottom: 20px;
}

#broadcast .hd li {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 5px;
    margin-right: 20px;
    float: left;
}

#broadcast .hd li:nth-last-child(1) {
    margin-right: 0;
}

#broadcast .hd .on {
    width: 20px;
    background: #e93e0c;
}

#broadcast .prev {
    position: absolute;
    left: 0;
    top: 0;
}

#broadcast .next {
    position: absolute;
    right: 0;
    top: 0;
}

#broadcast .prev,
#broadcast .next {
    width: 240px;
    height: 100%;
    z-index: 1;
}

#broadcast .prev img,
#broadcast .next img {
    width: 20px;
    height: 40px;
}

#broadcast .prev img {
    margin-top: 240px;
    margin-left: 200px;
}

#broadcast .next img {
    margin-top: 240px;
    margin-left: 20px;
}
</style>

