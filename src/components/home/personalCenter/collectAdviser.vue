<template>
    <div class="collection-box">
        <ul class="consult">
            <li class="clearfix">
                <div class="img fl">
                <img src="@/assets/images/Dw-img12.png">
                </div>
                <div class="tel fl">
                <h2>李鹏程</h2>
                <p>
                    <img src="@/assets/images/Dw-telphone.png" alt="">
                    <span>400-0000-000 转 123</span>
                </p>
                </div>
                <div class="op fr clearfix">
                <span class="fl to" :style="note">咨询顾问</span>
                <span class="fr del">删除</span>
                </div>
            </li>
            <li class="clearfix">
                <div class="img fl">
                <img src="@/assets/images/Dw-img12.png">
                </div>
                <div class="tel fl">
                <h2>李鹏程</h2>
                <p>
                    <img src="@/assets/images/Dw-telphone.png" alt="">
                    <span>400-0000-000 转 123</span>
                </p>
                </div>
                <div class="op fr clearfix">
                <span class="fl to" :style="note">咨询顾问</span>
                <span class="fr del">删除</span>
                </div>
            </li>
            <li class="clearfix">
                <div class="img fl">
                <img src="@/assets/images/Dw-img12.png">
                </div>
                <div class="tel fl">
                <h2>李鹏程</h2>
                <p>
                    <img src="@/assets/images/Dw-telphone.png" alt="">
                    <span>400-0000-000 转 123</span>
                </p>
                </div>
                <div class="op fr clearfix">
                <span class="fl to" :style="note">咨询顾问</span>
                <span class="fr del">删除</span>
                </div>
            </li>
            <li class="clearfix">
                <div class="img fl">
                <img src="@/assets/images/Dw-img12.png">
                </div>
                <div class="tel fl">
                <h2>李鹏程</h2>
                <p>
                    <img src="@/assets/images/Dw-telphone.png" alt="">
                    <span>400-0000-000 转 123</span>
                </p>
                </div>
                <div class="op fr clearfix">
                <span class="fl to" :style="note">咨询顾问</span>
                <span class="fr del">删除</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"collectAdviser",
        data(){
            return{
                note:{
                        backgroundImage: "url("+ require("@/assets/images/Dw-consult.png")+")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "30px center",
                        backgroundSize: "22px 22px",
                    }
                }
            }
        }
</script>

<style scoped>
.collection-box .consult > li {
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
}
.collection-box .consult > li .img {
    width: 60px;
    margin-right: 23px;
}
.collection-box .consult > li .img img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.collection-box .consult > li .tel h2 {
    font-size: 14px;
    line-height: 36px;
    color: #333333;
}
.collection-box .consult > li .tel p {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.collection-box .consult > li .tel p img{
    vertical-align: middle;
    margin-right: 10px;
}
.collection-box .consult > li .op {
    margin-top: 17px;
}
.collection-box .consult > li .op .to {
    width: 190px;
    line-height: 36px;
    height: 36px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-right: 75px;
    background-color: #e93e0c;
    cursor: pointer;
}
.collection-box .consult > li .op .del {
    font-size: 14px;
    line-height: 36px;
    color: #999999;
    cursor: pointer;
}
</style>
