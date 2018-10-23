<template>
    <div id="housesList">
        <h2 v-if="!housesList.list" class="noResult">暂无房源</h2>
        <div class="houses" v-for="(house, index) in housesList.list" :key="index">
            <a class="houses_img" href="">
                <img src="@/assets/images/houses.jpg" width="100%">
                <div class="houses_img_info">
                    <ul>
                        <li>
                            <img src="@/assets/images/img.png" width="100%">
                            <span>23</span>
                        </li>
                        <li>
                            <img src="@/assets/images/3d.png" width="100%">
                            <span>1</span>
                        </li>
                    </ul>
                </div>
                <span class="houses_type">特价</span>
            </a>
            <div class="houses_describe">
                <div class="header">
                    <a class="title" href="">香港碧桂园.桃园</a>
                    <div class="price"><span>9000</span>&nbsp;<span>元/㎡</span></div>
                    <div class="clear"></div>
                </div>
                <div class="addr">
                    <img src="@/assets/images/addr.png" width="100%">
                    <span>寰川路与硚孝大道的交汇处南行800米</span>
                </div>
                <div class="houses_label">
                    <ul>
                        <li>待售</li>
                        <li>普通住宅</li>
                        <li>湖景地产</li>
                        <div class="clear"></div>
                    </ul>
                </div>
                <div class="date">
                    <ul>
                        <li><span>交房时间：</span>2018年8月4日至2018年8月6日进行集中选房</li>
                        <li><span>交房楼栋：</span>2018年8月4日至2018年8月6日进行集中选房</li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template> 

<script>
export default {
    name: "curHouses",
    props: ["housesList"],
};
</script>

<style scoped>
.noResult {
    padding: 20px;
    text-align: center;
    font-size: 30px;
}
.houses {
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
}
.houses_img {
    position: relative;
    height: 180px;
    display: block;
    width: 240px;
    float: left;
    overflow: hidden;
}
.houses_img > img {
    width: 240px;
    height: 180px;
    vertical-align: middle;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}
.houses_img:hover > img {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    z-index: 1;
}
.houses_img .houses_img_info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    padding-left: 10px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
}
.houses_img .houses_img_info ul {
    display: flex;
}
.houses_img .houses_img_info li {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.houses_img .houses_img_info li img {
    width: 20px;
    margin-right: 10px;
}
.houses_img .houses_img_info li span {
    color: #fff;
    font-size: 14px;
}
.houses_img .houses_type {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #e93e0c;
    font-size: 14px;
    color: #fff;
}
.houses_describe {
    width: 590px;
    float: right;
}
.houses_describe .header {
    height: 24px;
    width: 100%;
}
.houses_describe .header .title {
    font-size: 16px;
    font-weight: bold;
    float: left;
    display: block;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16px;
    margin-top: 6px;
}
.houses_describe .header .title:hover {
    color: #e93e0c;
}
.houses_describe .header .price {
    font-size: 14px;
    color: #666666;
    float: right;
}
.houses_describe .header .price span {
    font-size: 20px;
    font-weight: bold;
    color: #e93e0c;
    line-height: 20px;
}
.houses_describe .header .undetermined {
    font-size: 22px;
    color: #e93e0c;
    font-weight: bold;
}
.houses_describe .addr {
    height: 15px;
    margin-top: 15px;
    width: 100%;
    display: flex;
}
.houses_describe .addr img {
    width: 13px;
    margin-right: 10px;
    margin-top: -2px;
    vertical-align: middle;
}
.houses_describe .addr span {
    font-size: 14px;
    color: #666;
}
.houses_describe .addr .tel {
    font-size: 14px;
    color: #666;
    font-weight: bold;
}
.houses_describe .addr .tel img {
    width: 22px;
    vertical-align: middle;
    margin: -5px 13px 0 0;
}
.houses_describe .addr span em {
    color: #e93e0c;
    margin-right: 34px;
}
.houses_label {
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #f2f2f2;
    overflow: hidden;
}
.houses_label ul li {
    padding: 8px 10px;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 14px;
    float: left;
}
.houses_label ul li:nth-child(1) {
    background: rgba(22, 155, 213, 0.3);
    color: #169bd5;
}
.houses_label ul li:nth-child(2) {
    background: rgba(219, 206, 164, 0.3);
    color: #dbcea4;
}
.houses_label ul li:nth-child(3) {
    background: rgba(169, 190, 222, 0.3);
    color: #a9bede;
}
.houses_label ul li.li1 {
    background: rgba(22, 155, 213, 0.3);
    color: #169bd5;
}
.houses_label ul li.li2 {
    background: rgba(219, 206, 164, 0.3);
    color: #dbcea4;
}
.houses_label ul li.li3 {
    background: rgba(169, 190, 222, 0.3);
    color: #a9bede;
}
.houses_label ul li.li4 {
    background: #efe8e7;
    color: #e89880;
}
.houses_describe .date {
    font-size: 12px;
    margin-top: 10px;
}
.houses_describe .date ul li {
    margin-top: 10px;
    color: #7a7a7a;
}
.houses_list .houses_describe .houses_i {
    font-size: 14px;
    color: #666;
    line-height: 14px;
    margin-top: 40px;
}
.houses_list .houses_describe .houses_i span {
    color: #e93e0c;
}
.houses_list .houses_describe .houses_i span:nth-child(2),
.houses_list .houses_describe .houses_i em {
    margin-left: 20px;
}
.houses_describe .date ul li span {
    color: #999;
}
.list_ad {
    width: 100%;
    margin: 20px 0;
    position: relative;
}
.list_ad img {
    vertical-align: middle;
}
.list_ad a {
    display: block;
}
.list_ad span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.3);
}
</style>

