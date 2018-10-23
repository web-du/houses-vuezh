<template>
    <div id="house">
        <div class="header">
            <div class="strong">
                <a href="javascript:void(0)" v-for="(item, index) in housesettap" :key="index">{{ item }}</a>
            </div>
            <div class="house_type">
                <ul>
                    <li v-for="(item, index) in housetype" :class="{active: currentType == index}" @mouseover="switchType(index)" :key="index">
                        <a href="javascript:void(0)">
                            <span>{{item}}</span>
                            <div class="border" v-show="currentType == index">
                                <span class="jiao"></span>
                                <span class="chang"></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingAdvert">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="news">
                            <p>全国将统一决小产权房等问题权房</p>
                            <p>全国将统一决小产权房等问题权房</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="housingNews">
                        <div class="img">
                            <img src="@/assets/images/ad5.jpg" width="100%" />
                            <div class="title">
                                <span>华鸿.公园天下</span>
                                <span>972/m&sup2;</span>
                            </div>
                        </div>
                        <div class="home">
                            <div class="price">
                                <span class="cr">价格待定</span>
                                <span>
                                    <span class="cr">101</span>&nbsp;人报名</span>
                            </div>
                            <a href="javascript:void(0)" class="bg_green">知名物业</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "house",
    props: ["housesettap", "housetype"],
    data() {
        return {
            currentType: 0
        }
    },
    methods: {
        switchType(index) {
            this.currentType = index
        }
    }
};
</script>
<style scoped>
#house .header {
    overflow: hidden;
    display: flex;
    flex-direction: row;
}

#house .strong {
    margin-right: 15px;
    height: 26px;
    line-height: 26px;
}

#house .strong a {
    font-size: 26px;
    font-weight: bold;
    margin-right: 5px;
}

#house .strong a:nth-last-child(1) {
    margin-right: 0;
}

#house .strong a:hover {
    color: #e93e0c;
}

.house_type {
    flex: 1;
    border-bottom: 1px solid #f1f1f1;
}

.house_type ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.house_type ul li {
    flex-grow: 0;
}

.house_type ul li.active a {
    color: #e93e0c;
}

.house_type ul li a {
    display: block;
    height: 26px;
    position: relative;
    padding: 0 15px;
}

.house_type ul li a span {
    font-size: 14px;
}

.house_type ul li a .border {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
}

.house_type ul li .border .jiao {
    display: block;
    width: 0;
    border-color: #e93e0c transparent;
    border-width: 0 6px 6px 6px;
    border-style: solid;
    margin: 0 auto;
}

.house_type ul li .border .chang {
    display: block;
    border-bottom: 1px solid #e93e0c;
}

#house .bottom ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

#house .bottom ul li {
    width: 215px;
    overflow: hidden;
    margin-top: 20px;
}

.housingNews,
.housingAdvert {
    width: 100%;
    height: auto;
}

.housingNews .img,
.housingAdvert .img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.housingNews .img .title,
.housingAdvert .img .title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.3);
}

.housingNews .img .title span,
.housingAdvert .img .title span {
    font-size: 14px;
    color: #fff;
}

#house .bottom ul li .home .price {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#house .bottom ul li .home a.bg_green {
    color: #8cb8a2;
    background: rgba(0, 255, 127, 0.08);
    display: block;
    width: 75px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
}

#house .bottom ul li .news p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 14px;
    margin-top: 10px;
}

#house .bottom ul li .news p:nth-child(2) {
    color: #666;
}
</style>
