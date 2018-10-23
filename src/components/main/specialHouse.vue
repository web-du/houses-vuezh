<template>
    <div id="specialHouse">
        <div class="specialHouse_top">
            <div class="fl guide_top">特价房</div>
            <a href="" class="more fr">更多</a>
        </div>
        <ul class="special_house_list">
            <li>
                <div class="special_house_img">
                    <a href="" class="img"><img src="@/assets/images/special_house.jpg" width="100%"></a>
                        <div class="price_reduction">
                            <ul>
                                <li class="title">
                                    <span>降</span>
                                    <img src="@/assets/images/price_reduction.png" width="100%">
                                                  </li>
                                <li>
                                    <span class="range">13.3万</span>
                                </li>
                            </ul>
                            <span class="triangle"></span>
                        </div>
                </div>
                <div class="special_house_detail">
                    <a href="" class="title">[南昌] 中国铁建青秀城</a>
                    <ul>
                        <li>市场价: 105.76 万元/套</li>
                        <li>活动价:&nbsp;<span>9091</span>&nbsp; 万元/套</li>
                        <li>建面: 93.92 ㎡</li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="special_house_img">
                    <a href="" class="img"><img src="@/assets/images/special_house.jpg" width="100%"></a>
                        <div class="price_reduction">
                            <ul>
                                <li class="title">
                                    <span>降</span>
                                    <img src="@/assets/images/price_reduction.png" width="100%">
                                                  </li>
                                <li>
                                    <span class="range">13.3万</span>
                                </li>
                            </ul>
                            <span class="triangle"></span>
                        </div>
                </div>
                <div class="special_house_detail">
                    <a href="" class="title">[南昌] 中国铁建青秀城</a>
                    <ul>
                        <li>市场价: 105.76 万元/套</li>
                        <li>活动价:&nbsp;<span>9091</span>&nbsp; 万元/套</li>
                        <li>建面: 93.92 ㎡</li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="special_house_img">
                    <a href="" class="img"><img src="@/assets/images/special_house.jpg" width="100%"></a>
                        <div class="price_reduction">
                            <ul>
                                <li class="title">
                                    <span>降</span>
                                    <img src="@/assets/images/price_reduction.png" width="100%">
                                                  </li>
                                <li>
                                    <span class="range">13.3万</span>
                                </li>
                            </ul>
                            <span class="triangle"></span>
                        </div>
                </div>
                <div class="special_house_detail">
                    <a href="" class="title">[南昌] 中国铁建青秀城</a>
                    <ul>
                        <li>市场价: 105.76 万元/套</li>
                        <li>活动价:&nbsp;<span>9091</span>&nbsp; 万元/套</li>
                        <li>建面: 93.92 ㎡</li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="special_house_img">
                    <a href="" class="img"><img src="@/assets/images/special_house.jpg" width="100%"></a>
                        <div class="price_reduction">
                            <ul>
                                <li class="title">
                                    <span>降</span>
                                    <img src="@/assets/images/price_reduction.png" width="100%">
                                                  </li>
                                <li>
                                    <span class="range">13.3万</span>
                                </li>
                            </ul>
                            <span class="triangle"></span>
                        </div>
                </div>
                <div class="special_house_detail">
                    <a href="" class="title">[南昌] 中国铁建青秀城</a>
                    <ul>
                        <li>市场价: 105.76 万元/套</li>
                        <li>活动价:&nbsp;<span>9091</span>&nbsp; 万元/套</li>
                        <li>建面: 93.92 ㎡</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#specialHouse {
    width: 100%;
}

.guide_top {
    font-size: 18px;
    color: #333;
}

#specialHouse .specialHouse_top {
    font-size: 18px;
    color: #333;
    margin: 30px auto 10px;
    display: flex;
    justify-content: space-between;
}

#specialHouse .specialHouse_top .more {
    font-size: 14px;
    color: #999;
}

.special_house_list > li {
    margin-bottom: 15px;
    width: 310px;
    height: 110px;
    display: flex;
    justify-content: space-between;
}

.special_house_img {
    width: 145px;
    position: relative;
    height: 110px;
    float: left;
    overflow: hidden;
}

.special_house_img img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}

.special_house_detail ul li {
    color: #666;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.special_house_detail ul li span {
    color: #e93e0c;
    font-weight: bold;
}

.price_reduction {
    position: absolute;
    top: 0;
    left: 0;
}

.price_reduction ul {
    overflow: hidden;
    background: #e93e0c;
    padding-top: 5px;
}

.price_reduction ul li {
    width: 46px;
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    color: #e9e60c;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.price_reduction .title img {
    width: 10px;
    height: 12px;
}

.special_house_img img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}

.price_reduction .triangle {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #e93e0c transparent;
    border-width: 10px 22.5px 0 22.5px;
}
</style>

