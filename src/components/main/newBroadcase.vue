<template>
    <div id="newBroadcast">
        <!--轮播图片-->
        <ul class="bd">
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src="@/assets/images/banner1.jpg" width="100%" />
                    <div class="mask">
                        特价好房且看下半场 721看房团
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src="@/assets/images/banner1.jpg" width="100%" />
                    <div class="mask">
                        特价好房且看下半场 721看房团
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src="@/assets/images/banner1.jpg" width="100%" />
                    <div class="mask">
                        特价好房且看下半场 721看房团
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src="@/assets/images/banner1.jpg" width="100%" />
                    <div class="mask">
                        特价好房且看下半场 721看房团
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src="@/assets/images/banner1.jpg" width="100%" />
                    <div class="mask">
                        特价好房且看下半场 721看房团
                    </div>
                </a>
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
    </div>
</template>

<script>
export default {
    name: "newBroadcast",
    mounted() {
        //banner轮播
        jQuery("#newBroadcast").slide({
            mainCell: ".bd ",
            effect: "leftLoop",
            autoPlay: false
        });
    }
};
</script>

<style scoped>
#newBroadcast {
    position: relative;
}
#newBroadcast .bd {
    width: 100%;
    height: 350px;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
}

#newBroadcast .bd li {
    height: 100%;
}

#newBroadcast .bd img {
    width: 100%;
    height: 100%;
    text-align: center;
}

#newBroadcast .hd {
    z-index: 0;
    width: 145px;
    height: 10px;
    position: absolute;
    right: 20px;
    bottom: 20px;
}

#newBroadcast .hd li {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 5px;
    margin-right: 20px;
    float: left;
}

#newBroadcast .hd li:nth-last-child(1) {
    margin-right: 0;
}

#newBroadcast .hd .on {
    width: 20px;
    background: #e93e0c;
}

#newBroadcast .bd li a {
    position: relative;
    display: block;
    height: 350px;
}

#newBroadcast .bd li a .mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    font-size: 16px;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
}
</style>

