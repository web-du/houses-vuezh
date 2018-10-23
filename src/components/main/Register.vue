<template>
    <div class="login" :style="note">
        <div class="register-box">
            <h2 class="clearfix"><span class="fl">会员注册</span><i class="fr">已有账号 <em><router-link to="/login">立即登录</router-link></em></i></h2>
            <div class="tologin">
            
            <input type="text" placeholder="手机号" v-model="registerInfor.username">
            <p class="ts clearfix"><i class="fl" v-show="telNotice">x</i><span class="fl" v-show="telNotice">{{telNotice}}</span></p>
            <input type="password" placeholder="密码(请输入6-20位数字和字母组合)" v-model="registerInfor.password">
            <p class="ts clearfix"><i class="fl" v-show="passNotice">x</i><span class="fl" v-show="passNotice">{{passNotice}}</span></p>
            <input type="password" placeholder="请再次输入密码" v-model="registerInfor.repassword">
            <p class="ts clearfix"><i class="fl" v-show="rePassNotice">x</i><span class="fl" v-show="rePassNotice">{{rePassNotice}}</span></p>
            <div class="yzm clearfix">
                <input type="text" placeholder="输入6位手机动态码" class="fl" v-model="registerInfor.code">
                <input class="fr" @click="sendMsg()" id="dxbtn" type="button" value="动态码发送">
            </div>
            <p class="ts clearfix"><i class="fl" v-show="yzmNotice">x</i><span class="fl" v-show="yzmNotice">{{yzmNotice}}</span></p>
            </div>
            <button @click="doRes()">注册</button>
            <p class="ksdl">快速登录</p>
            <div class="dl">
            <a href="#">
                <img src="@/assets/images/Dw-qq.png">
            </a>
            <a href="#">
                <img src="@/assets/images/Dw-wx.png">
            </a>
            </div>
            <p class="clearfix">
            <span>
                <input type="checkbox" id="feature1" v-model="checked">
                <label for="feature1"></label> 我已阅读并接受 <em @click="serverShow()">房乐士服务协议条款</em>
                <img src="@/assets/images/Dw-checkbox.png" v-show="checked">
            </span>
            </p>
        </div>

        <div class="service-box" v-show="isShow">
            <h1>房乐士服务协议条款</h1>
            <p>欢迎您加入”房乐士 ”。为了向您提供更快更好的服务，请仔细阅读下列条款： </p>
            <ul class="list">
            <li>
                <h5>一、 服务条款的接受</h5>
                <p>本服务条款所称的用户是指完全同意所有条款并完成注册程序而使用”仓宝在线”提供的服务（以下简称“本服务”）的用户。 </p>
            </li>
            <li>
                <h5>二、服务条款的变更和修改</h5>
                <p>“房乐士”有权随时对服务条款进行修改，并且一旦发生服务条款的变动，”仓宝在线”将在页面上提示修改的内容；用户如果不同意服务条款的修改，可以主动取消已经获得的网络服务；如果用户继续享用网络服务，则视为用户已经接受服务条款的修改。</p>
            </li>
            <li>
                <h5>三、 用户应遵守以下法律及法规：</h5>
                <p>（1）用户同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国计算机信息系统安全保护条例》、</p>
                <p>“房乐士”有权随时对服务条款进行修改，并且一旦发生服务条款的变动，”仓宝在线”将在页面上提示修改的内容；用户如果不同意服务条款的修改，可以主动取消已经获得的网络服务；如果用户继续享用网络服务，则视为用户已经接受服务条款的修改。</p>
            </li>
            </ul>
            <h3 class="clearfix">
            <p class="fl">您是否同意该服务协议条款？</p>
            <span class="fr" @click="Agress()">同意</span>
            </h3>
            <i class="cancle">
            <img src="@/assets/images/icon_close.png">
            </i>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register",
    data(){
        return{
            note:{
                backgroundImage:"url("+require('@/assets/images/login-bg.jpg')+")",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
            },
            checked:false,
            isShow:false,
            registerInfor:{
                username:"",
                password:"",
                repassword:"",
                code:"",
            },
            //手机格式提示
            telNotice:'',
            //密码格式提示
            passNotice:'',
            //两次密码格式提示
            rePassNotice:'',
            //验证码格式提示
            yzmNotice:'',
            //倒计时
            count:'',
        }
    },
    methods:{
        serverShow(){
            this.isShow = true;
        },
        Agress(){
            this.isShow = false;
        },
        //发送注册信息
        doRes(){
           this.axios.post(process.env.API_HOST+'user/register/doRegister',{username:this.registerInfor.username,password:this.registerInfor.password,repassword:this.registerInfor.repassword,code:this.registerInfor.code}).then((res) => {
                console.log(res.data);

                if(res.data.code == 0 && res.data.error_type == 1){
                    this.telNotice = res.data.msg;
                }else{
                    this.telNotice = "";
                }
                if(res.data.code == 0 && res.data.error_type == 2){
                    this.passNotice = res.data.msg;
                }else{
                    this.passNotice = "";
                }
                if(res.data.code == 0 && res.data.error_type == 3){
                    this.rePassNotice = res.data.msg;
                }else{
                    this.rePassNotice = "";
                }
                if(res.data.code == 0 && res.data.error_type == 4){
                    this.yzmNotice = res.data.msg;
                }else{
                    this.yzmNotice = "";
                }
                //如果注册成功跳转至登录页面
                if(res.data.code == 1){
                    this.$router.push('/login');
                    //清除定时器
                    clearInterval(timer);
                    timer = null;
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        //获取验证码
        sendMsg(){
           this.axios.post(process.env.API_HOST+'user/register/sendMsg',{username:this.registerInfor.username,type:'register'}).then((res) => {
                console.log(res.data);
                if(res.data.code == 0){
                    this.telNotice = res.data.msg;
                }else{
                    this.telNotice ="";
                    this.countDown();
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        //倒计时
        countDown(){
            this.count = 60;
            var timer = setInterval(() => {
                this.count --;
                $("#dxbtn").attr('disabled','true').val("请等待 " + this.count + " s");
                //console.log(this.count)
                if(this.count <= 0){
                    clearInterval(timer);
                    timer = null;
                    $("#dxbtn").removeAttr('disabled').val("重新获取");
                }
            },1000)
            
	    }
    }
}
</script>

<style scoped>
.login{
    min-height: 850px;
    padding-top: 145px;
}
.register-box {
    width: 400px;
    position: relative;
    background-color: #fff;
    padding: 50px 30px 40px;
    margin: 0 auto;
}
.register-box>h2{
    font-size: 24px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
    margin-bottom: 10px;
}
.register-box h2 i {
    font-size: 16px;
    line-height: 36px;
    color: #1b1a16;
}
.register-box h2 em {
    color: #e93e0c;
    margin-left: 5px;
    cursor: pointer;
}
.register-box h2 em a{
    color: #e93e0c;
}
.register-box .tologin p {
    font-size: 14px;
    line-height: 28px;
    color: #ff0000;
    height: 28px;
}
.register-box .tologin p i {
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
.register-box .tologin input {
    display: block;
    width: 328px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #ccc;
    padding-left: 10px;
}
.register-box .yzm input[type="text"] {
    width: 192px;
    height: 38px;
    border: 1px solid #ccc;
}
.register-box .yzm input[type="button"] {
    width: 125px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    background-color: #e93e0c;
    border:none;
    outline:none;
}
.register-box .yzm input[disabled]{
    background-color: #ccc;
}
.register-box button {
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
.register-box .ksdl {
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    color: #666;
    margin-top:15px;
}
.register-box .dl {
    margin-top:10px;
    text-align: center;
}
.register-box .dl a {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 25px;
}
.register-box .dl a:last-child{
    margin-right: 0;
}
.register-box .dl a img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.register-box p {
    line-height: 45px;
    text-align: center;
}
.register-box>p>span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #666;
    position: relative;
}
.register-box p span img{
    position: absolute;
    left:0px;
    top:0px;
    z-index: 3;
}
.register-box p span input {
    position: absolute;
    width: 48%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    left:0;
    top:0;
}
.register-box p span label {
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
.register-box>p>span em {
    color: #e93e0c;
    cursor: pointer;
}
.service-box {
    width: 400px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    background-color: #fff;
    padding: 65px 30px 40px;
    top: 200px;
}
.service-box h1 {
    font-size: 24px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
    text-align: center;
}
.service-box>p {
    font-size: 14px;
    line-height: 22px;
    color: #666;
    margin: 15px 0;
}
.service-box .list {
    max-height: 350px;
    overflow-y: auto;
}
.service-box .list li {
    font-size: 14px;
    color: #666;
    line-height: 22px;
}
.service-box .list h5 {
    margin: 15px 0;
}
.service-box .list p {
    text-indent: 2em;
}
.service-box h3 {
    font-weight: normal;
    font-size: 14px;
    color: #666;
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
}
.service-box h3 span {
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
.service-box i.cancle {
    position: absolute;
    width: 18px;
    height: 18px;
    z-index: 3;
    top: 20px;
    right: 20px;
}
.service-box i.cancle img {
    display: block;
    width: 18px;
    height: 18px;
    cursor: pointer;
}   
</style>
