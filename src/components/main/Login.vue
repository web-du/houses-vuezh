<template>
    <div class="Login" :style="note">
        <div class="login-box">
            <h2 class="clearfix"><span class="fl">会员登录</span><i class="fr">还没有账号 <em><router-link to="/register">立即注册</router-link></em></i></h2>
            <div class="tologin">
            <input type="text" placeholder="手机号/账号" v-model="loginInfor.username">
            <p class="ts clearfix"><i class="fl" v-show="telNotice">x</i><span class="fl" v-show="telNotice">{{telNotice}}</span></p>
            <input type="password" placeholder="密码" v-model="loginInfor.password">
            <p class="ts clearfix"><i class="fl" v-show="psdNotice">x</i><span class="fl" v-show="psdNotice">请输入正确的密码</span></p>
            </div>
            <button @click="doLogin()">登录</button>
            <p class="clearfix tonext">
            <span>
                <input type="checkbox" id="feature8" v-model="checked">
                <label for="feature8"></label> 保持登录
                <img src="@/assets/images/Dw-checkbox.png" v-show="checked">
            </span>
            <router-link to="/findpassword" class="fr">忘记密码?</router-link>
            </p>
            <p class="ksdl">快速登录</p>
            <div class="dl">
            <a href="#">
                <img src="@/assets/images/Dw-qq.png">
            </a>
            <a href="#">
                <img src="@/assets/images/Dw-wx.png">
            </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            note:{
                backgroundImage:"url("+require('@/assets/images/login-bg.jpg')+")",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
            },
            checked:false,
            //获取登录信息
            loginInfor:{
                username:'',
                password:'',
            },
            //账号格式提示
            telNotice:"",
            //密码格式提示
            psdNotice:'',
        }
    },
    methods:{
        doLogin(){
           this.axios.post(process.env.API_HOST+'user/Login/doLogin',{username:this.loginInfor.username,password:this.loginInfor.password}).then((res) => {
                console.log(res);
                if(res.data.code == 0 && res.data.error_type == 1){
                    this.telNotice = res.data.msg;
                }else{
                    this.telNotice = '';
                }
                if(res.data.code == 0 && res.data.error_type == 2){
                    this.psdNotice = res.data.msg;
                }else{
                    this.psdNotice = '';
                }

                //登录成功后
                if(res.data.code == 1){
                    this.$store.dispatch('setIsLogin',true);
                    this.$store.dispatch('setUserInfor',res.data.data.userinfo);
                    const { userinfo } = res.data.data;
                    //console.log(userinfo);
                    //把信息存储在localStorage中
                    localStorage.setItem("userInfor", JSON.stringify(userinfo));

                    this.$router.push('/personal/personalCenter')
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>
.Login{
    min-height: 850px;
    padding-top: 145px;
}
.login-box {
    width:400px;
    background-color: #fff;
    padding: 65px 30px 40px;
    margin:0 auto;
    position: relative;
}
.login-box h2 {
    font-size: 24px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
    margin-bottom: 10px;
}
.login-box h2 i {
    font-size: 16px;
    line-height: 36px;
    color: #1b1a16;
}
.login-box h2 em {
    color: #e93e0c;
    margin-left: 5px;
    cursor: pointer;
}
.login-box h2 em a{
    color: #e93e0c;
}
.login-box .tologin p {
    font-size: 14px;
    line-height: 28px;
    color: #ff0000;
    height: 28px;
}
.login-box .tologin p i {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    background-color: #ff0000;
    text-align: center;
    line-height: 11px;
    margin-top: 7px;
    margin-right: 5px;
}
.login-box p span {
    float: left;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #666;
}
.login-box .tologin input {
    display: block;
    width: 328px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #ccc;
    padding-left: 10px;
}
.login-box button {
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
.login-box p {
    line-height: 45px;
}
.login-box p span {
    float: left;
    height:28px;
    line-height:28px;
    font-size: 14px;
    color: #666;
    position: relative;
}
.login-box p span img{
    position: absolute;
    left:0px;
    top:14px;
    z-index: 3;
}
.login-box p span input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
}
.login-box p span label {
    background-color: white;
    border: 2px solid #ccc;
    width: 15px;
    height: 15px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 15px;
    position: relative;
}
.login-box p>a {
    font-size: 14px;
    color: #999;
}
.login-box .ksdl {
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    color: #666;
}
.login-box .dl {
    margin-top: 20px;
    text-align: center;
}
.login-box .dl a {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 25px;
}
.login-box .dl a img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.login-box p.tonext span{
    height: 45px;
    line-height: 45px;
}
</style>
