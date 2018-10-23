<template>
    <div class="box">
        <p>luo 艾乐，我们会妥善保管您的个人信息。真实、完善的个人信息，有助于我们为您提供更加个性化的服务。</p>
        <div class="details">
            <div class="list clearfix">
                <img src="@/assets/images/Dw-right.png" class="fl">
                <p class="fl">登录密码：</p>
                <div class="level fl clearfix">
                <span class="fl">安全级别</span>
                <p class="fl" v-bind:style="infor"></p>
                <i class="fl">中</i>
                </div>
                <span class="fr">设置</span>
            </div>
            <div class="list clearfix">
                <img src="@/assets/images/Dw-right.png" class="fl">
                <p class="fl">手机验证：</p>
                <div class="your-tel fl">
                <p>138****2333</p>
                <p>您的手机为安全手机，验证手机后，已验证的手机号可用于登录账号、重置密码等</p>
                </div>
                <div class="op fr">
                <span class="untie">解绑手机</span>
                <span class="tie-up">换绑手机</span>
                </div>
            </div>
            <div class="list clearfix">
                <img src="@/assets/images/Dw-noticetel.png" class="fl">
                <p class="fl">电话营销：</p>
                <p class="fl switch">已开启</p>
                <span class="fr off">关闭</span>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"securitySetting",
        data(){
            return{
                infor:{
                    backgroundImage: "url(" + require("@/assets/images/Dw-jinbian.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 120px",                 
                },
            }
        }
    }
</script>


<style scoped>
    .box p {
        font-size: 14px;
        line-height: 36px;
        color: #999999;
    }
    .details .list {
        padding: 15px 0;
        border-bottom: 1px solid #efefef;
    }
    .details .list img {
        width: 16px;
        height: 16px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .personal-center-page .con .text .security .details .list > p {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
    }
    .details .list .level span {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
    }
    .details .list .level p {
        width: 186px;
        height: 8px;
        background-color: #f2f2f2;
        position: relative;
        margin-top: 15px;
        margin: 15px 20px 0 10px;
    }
    .list .level i {
        font-size: 14px;
        line-height: 36px;
        color: #333333;
    }
    .details .list > span {
        font-size: 14px;
        line-height: 36px;
        color: #e93e0c;
        cursor: pointer;
    }
    .details .list .op span {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
        position: relative;
        padding-right: 15px;
        margin-right: 15px;
        cursor: pointer;
    }
    .details .list .op span.untie::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 15px;
        background-color: #333333;
        right: 0px;
        top: 5px;
    }
    .details .list .op span:last-child {
        padding-right: 0;
        margin-right: 0;
    }
    .details .list .off {
        color: #666666;
    }
</style>
