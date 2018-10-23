<template>
    <div class="login" :style="note">
        <div class="find-password-box">
            <h2 class="clearfix"><span class="fl">密码找回</span></h2>
            <div class="tologin">
            
            <input type="text" placeholder="手机号" v-model="userInfor.userPhone">
            <p class="ts clearfix"><i class="fl" v-show="userInfor.telNotice">x</i><span class="fl" v-show="userInfor.telNotice">{{userInfor.telNotice}}</span></p>
            <div class="yzm clearfix">
                <input type="button" id="code" @click="createCode"  class="verification1 fl" v-model="userInfor.checkCode"/>
                <input type="text" placeholder="输入验证码" class="fr" v-model="userInfor.picLyanzhengma">
            </div>
            <p class="ts clearfix"><i class="fl" v-show="userInfor.YZM">x</i><span class="fl" v-show="userInfor.YZM">{{userInfor.YZM}}</span></p>
            </div>
            <button @click="tofind()">立即找回</button>
        </div>
    </div>
</template>

<script>
var code ;
export default {
    name:'findPassword',
    data(){
        return{
            note:{
                backgroundImage:"url("+require('@/assets/images/login-bg.jpg')+")",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
            },
            userInfor:{
                userPhone:'',
                checkCode:'',
                picLyanzhengma:'',
                //验证码格式
                YZM:'',
                //手机格式
                telNotice:'',
            }
            
        }
    },
    methods:{
        tofind(){
            if(this.userInfor.userPhone == ''){
                this.userInfor.telNotice = "请输入手机号";
                return false;
            }else{
                this.userInfor.telNotice = "";
                if(this.userInfor.picLyanzhengma == '' || this.userInfor.picLyanzhengma.toUpperCase() != this.userInfor.checkCode){
                    this.userInfor.YZM = "请输入正确的验证码";
                    this.userInfor.picLyanzhengma = '';
                    
                }else{
                    this.userInfor.YZM = '';
                    this.userInfor.picLyanzhengma = this.userInfor.checkCode;
                   this.axios.post(process.env.API_HOST+'user/Login/checkAccount',{username:this.userInfor.userPhone,type:'find',captcha:this.userInfor.picLyanzhengma}).then((res) => {
                        console.log(res);

                        if(res.data.code == 0 && res.data.error_type == 1){
                            this.userInfor.telNotice = res.data.msg;
                        }
                        if(res.data.code == 1 ){
                            console.log(this.userInfor.userPhone)
                            this.$router.push({path:'/setpassword',query:{username:this.userInfor.userPhone}});
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }
        },
        // 图片验证码
        createCode(){
            code = "";    
            var codeLength = 4;//验证码的长度   
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
            'S','T','U','V','W','X','Y','Z');//随机数   
            for(var i = 0; i < codeLength; i++) {//循环操作   
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
                code += random[index];//根据索引取得随机数加到code上   
            }   
                this.userInfor.checkCode = code;//把code值赋给验证码;   
        },
    },
    created(){
        this.createCode();
    }
}


</script>

<style scoped>
.login{
    min-height: 850px;
    padding-top: 145px;
}
.find-password-box {
    width: 400px;
    position: relative;
    background-color: #fff;
    padding: 50px 30px 40px;
    margin: 0 auto;
}
.find-password-box h2 {
    font-size: 24px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
    margin-bottom: 10px;
}
.find-password-box .tologin p {
    font-size: 14px;
    line-height:28px;
    height: 28px;
    color: #ff0000;
}
.find-password-box .tologin p i {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    background-color: #ff0000;
    text-align: center;
    line-height: 12px;
    margin-top: 7px;
    margin-right: 5px;
}
.find-password-box .tologin input {
    display: block;
    width: 100%;
    height: 38px;
    line-height: 38px;
    border: 1px solid #ccc;
    padding-left: 10px;
}
.find-password-box .yzm #code{
    font-size: 18px;
    letter-spacing: 3px;
    color: #053d84;
    background: #f2f2f5;
    border: 1px solid #e6e6e6;
    height: 38px;
    vertical-align: middle;
    width: 112px;
}
.find-password-box .yzm input {
    width: 192px;
    height: 38px;
    border: 1px solid #ccc;
}
.find-password-box button {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #e93e0c;
    outline: none;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
}
</style>
