<template>
    <div class="collection-box">
        <ul class="new-home">
            <li class="clearfix">
                <div class="img fl"></div>
                <div class="name fr">
                <h2 class="clearfix">
                    <span class="fl">求购松江老城2居室</span>
                    <em class="fr">2018-06-18 20：00</em>
                </h2>
                <div class="area clearfix">
                    <p class="fl">
                        <img src="@/assets/images/Dw-home.png" >
                        <span>4室2厅 . 低层 . 南北向 .  145㎡</span>
                    </p>
                    <h3 class="fr"><em>58</em>万/套起</h3>
                </div>
                <div class="address clearfix">
                    <p class="fl">
                        <img src="@/assets/images/Dw-addreimg.png" >
                        <span>东湖高新区梧桐湖酒店</span>
                    </p>
                    <h3 class="fr">
                        <img src="@/assets/images/Dw-telphone.png" alt="">
                        <span>400-0000-000转123</span>
                    </h3>
                </div>
                <div class="op clearfix">
                    <p class="fl"><span>在售</span><span>南北朝向</span><span>湖景地产</span></p>
                    <span class="fr"></span>
                </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="img fl"></div>
                <div class="name fr">
                <h2 class="clearfix">
                    <span class="fl">求购松江老城2居室</span>
                    <em class="fr">2018-06-18 20：00</em>
                </h2>
                <div class="area clearfix">
                    <p class="fl">
                        <img src="@/assets/images/Dw-home.png" >
                        <span>4室2厅 . 低层 . 南北向 .  145㎡</span>
                    </p>
                    <h3 class="fr"><em>58</em>万/套起</h3>
                </div>
                <div class="address clearfix">
                    <p class="fl">
                        <img src="@/assets/images/Dw-addreimg.png" >
                        <span>东湖高新区梧桐湖酒店</span>
                    </p>
                    <h3 class="fr">
                        <img src="@/assets/images/Dw-telphone.png" alt="">
                        <span>400-0000-000转123</span>
                    </h3>
                </div>
                <div class="op clearfix">
                    <p class="fl"><span>在售</span><span>南北朝向</span><span>湖景地产</span></p>
                    <span class="fr"></span>
                </div>
                </div>
            </li>
        </ul>
        <div class="page">
            <div class="box">
                <span>&lt;&nbsp;&nbsp;&nbsp;&nbsp;上一页</span>
                <em class="now">1</em>
                <em>2</em>
                <em>3</em>
                <em>4</em>
                <span>下一页&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"collectNewhouse",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.collection-box .new-home > li {
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
}
.collection-box .new-home > li .img {
    width: 200px;
    height: 150px;
    background-color: #e93e0c;
}
.collection-box .new-home > li .name {
    width: 760px;
}
.collection-box .new-home > li .name > h2 span {
    font-size: 16px;
    line-height: 36px;
    color: #333333;
    font-weight: bold;
}
.collection-box .new-home > li .name > h2 em {
    font-size: 14px;
    line-height: 36px;
    color: #999999;
}
.collection-box .new-home > li .name .area p {
    font-size: 14px;
    line-height: 36px;
    color: #999999;
}
.collection-box .new-home > li .name .area p img{
    vertical-align: middle;
    margin-right: 5px;
}
.collection-box .new-home > li .name .area h3 {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.collection-box .new-home > li .name .area h3 em {
    font-size: 22px;
    line-height: 36px;
    font-weight: bold;
    color: #e93e0c;
    margin-right: 5px;
}
.collection-box .new-home > li .name .address p {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.collection-box .new-home > li .name .address p img{
    vertical-align: middle;
    margin-right: 5px;
}
.collection-box .new-home > li .name .address h3 {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.collection-box .new-home > li .name .address h3 img{
    vertical-align: middle;
    margin-right: 10px;
}
.collection-box .new-home > li .name .op {
    margin-top: 5px;
}
.collection-box .new-home > li .name .op p span {
    font-size: 14px;
    line-height: 36px;
    color: #e89880;
    background-color: #efe8e7;
    display: inline-block;
    padding: 0 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.collection-box .new-home > li .name .op p span:nth-child(2) {
    color: #dbcea4;
    background-color: #f5f2e9;
}
.collection-box .new-home > li .name .op p span:nth-child(3) {
    color: #a9bede;
    background-color: #eef2f8;
}
</style>
