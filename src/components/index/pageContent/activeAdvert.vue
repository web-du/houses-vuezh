<template>
    <div>
        <ul id="activeAdvert">
            <li>
                <a href="">
                    <img src="@/assets/images/ad3.jpg" width="100%" />
                    <span>广告</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="@/assets/images/ad3.jpg" width="100%" />
                    <span>广告</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="@/assets/images/ad3.jpg" width="100%" />
                    <span>广告</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "activeAdvert",
    props: ["advert"]
};
</script>
<style scoped>
#activeAdvert {
    margin-top: 30px;
}

#activeAdvert {
    display: flex;
    flex-direction: column;
    height: 200px;
}

#activeAdvert li {
    position: relative;
    margin-top: 10px;
}

#activeAdvert li:nth-child(1) {
    margin-top: 0;
}

#activeAdvert li span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 38px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
}

#activeAdvert li img {
    display: block;
    height: 100%;
}
</style>
