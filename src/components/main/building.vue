<template>
    <div id="building">
        <div class="houses_img">
            <img :src="global.imgurl +houses.house_thumb" />
            <span class="label">直销</span>
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
        </div>
        <div class="houses_info">
            <div class="houses_detail">
                <ul class="lfet_content">
                    <li class="header_title">
                        <span class="houses_name">{{houses.house_title}}</span>
                        <span class="score">{{houses.house_score}}分（{{houses.comment_num}}条评论）</span>
                        <img src="@/assets/images/dzlp6.png" v-show="houses.is_hot == 1" width="100%" class="hotHouses" />
                    </li>
                    <li class="house_type">
                        <img src="@/assets/images/dzlp8.png" width="100%" />
                        <span><span v-for="(t, index) in houses.house_type.split(',')" :key="index">{{t}}居</span> . {{houses.building_area}}</span>
                    </li>
                    <li class="houses_address">
                        <img src="@/assets/images/addr.png" width="100%" />
                        <span>{{houses.house_address}}</span>
                    </li>
                    <li class="houses_active">
                        <ul>
                            <li>
                                <img src="@/assets/images/dzlp11.png" width="100%" />
                                <span>VIP客户招募中</span>
                            </li>
                            <li>
                                <img src="@/assets/images/dzlp12.png" width="100%" />
                                <span>07月21日看房</span>
                            </li>
                        </ul>
                    </li>
                    <li class="houses_label">
                        <ul>
                            <li v-for="(tag, index) in houses.taglist" :key="index" :class="'state_'+index">{{tag.tags_name}}</li>
                        </ul>
                    </li>
                </ul>
                <div class="right_content">
                    <p class="houses_price"><span>{{houses.house_price}}</span> 元/㎡</p>
                    <div class="houses_phone">
                        <img src="@/assets/images/dzlp10.png" width="100%" />400-0000-000 转 123
                    </div>
                    <div class="menu">
                        <div class="share">
                            <img src="@/assets/images/dzlp13.png" width="100%" />
                            <span>分享</span>
                        </div>
                        <div class="collect">
                            <img src="@/assets/images/dzlp14.png" width="100%" />
                            <span>收藏</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="houses_dynamic">
                <a>[动态] 东湖高新区梧桐湖酒店 拷贝 2</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "building",
    props: ["houses"],
    mounted() {
        console.log('building')
        console.log(this.houses)
    },
};
</script>

<style scoped>
#building {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.houses {
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
}

.houses_detail {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px dashed #f2f2f2;
}

.houses_img {
    overflow: hidden;
    position: relative;
    width: 240px;
    height: 180px;
}

.houses_img img {
    width: 240px;
    height: 180px;
}

.houses_img .label {
    width: 50px;
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 14px;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    background: #e93e0c;
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
    height: 20px;
    margin-right: 10px;
}

.houses_img .houses_img_info li span {
    color: #fff;
    font-size: 14px;
}

.houses_info {
    width: 590px;
    display: block;
}

.lfet_content > li {
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #666666;
}

.header_title .houses_name {
    font-size: 16px;
    margin-right: 10px;
}

.header_title .score {
    color: #666666;
}

.house_type img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
}

.houses_address img {
    width: 10px;
    height: 16px;
    margin-right: 10px;
}

.houses_active ul {
    display: flex;
}

.houses_active ul li {
    margin-right: 20px;
    display: flex;
}

.houses_active ul li img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.houses_label ul {
    display: flex;
}

.houses_label ul li {
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 10px;
}

.houses_label ul li.state_0 {
    color: #e89880;
    background: #efe8e7;
}

.houses_label ul li.state_1 {
    color: #169bd5;
    background: #e8f8ff;
}

.houses_label ul li.state_2 {
    color: #dbcea4;
    background: #f5f2e9;
}

.houses_label ul li.state_3 {
    color: #a9bede;
    background: #eef2f8;
}

.right_content {
    display: flex;
    flex-direction: column;
}

.houses_price {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.houses_price span {
    font-size: 18px;
    color: #e93e0c;
    font-weight: bold;
    margin-right: 5px;
}

.houses_phone {
    display: flex;
    margin-top: 15px;
}

.houses_phone img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.houses_dynamic {
    margin-top: 20px;
}

.menu {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
}

.menu > div {
    display: flex;
    align-items: center;
}

.menu img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

.hotHouses {
    width: 18px;
    height: 18px;
}
</style>

