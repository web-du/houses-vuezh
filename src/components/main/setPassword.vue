<template>
    <div class="login" :style="note">
        <div class="new-password-box">
            <h2 class="clearfix"><span class="fl">设置新密码</span></h2>
            <h4>短信验证已发，如未收到，请<em>点击重新获取。</em></h4>
            <div class="tologin">
            
            <input type="password" placeholder="你的新密码(请输入6-20位数字和字母组合)" v-model="newInfor.password">
            <p class="ts clearfix"><i class="fl" v-show="psdNotice">x</i><span class="fl" v-show="psdNotice">{{psdNotice}}</span></p>
            <input type="password" placeholder="确认密码" v-model="newInfor.repassword">
            <p class="ts clearfix"><i class="fl" v-show="repsdnotice">x</i><span class="fl" v-show="repsdnotice">{{repsdnotice}}</span></p>
            <input type="text" placeholder="短信验证" v-model="newInfor.code">
            <p class="ts clearfix"><i class="fl" v-show="codeNotice">x</i><span class="fl" v-show="codeNotice">{{codeNotice}}</span></p>
            </div>
            <button @click="toSet()">提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"setPassword",
    data(){
        return{
            note:{
                backgroundImage:"url("+require('@/assets/images/login-bg.jpg')+")",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
            },
            newInfor:{
                username:'',
                code:'',
                repassword:'',
                password:'',
            },
            //密码格式提示
            psdNotice:'',
            //重复密码提示
            repsdnotice:'',
            //短信验证码提示
            codeNotice:'',
        }
    },
    methods:{
        toSet(){
           this.axios.post(process.env.API_HOST + '/api/user/login/passwordReset',{username:this.newInfor.username,code:this.newInfor.code,repassword:this.newInfor.repassword,password:this.newInfor.password}).then((res) => {
                console.log(res);
                if(res.data.code == 0 && res.data.error_type == 1){
                    this.psdNotice = res.data.msg;
                }else{
                    this.psdNotice = '';
                }
                if(res.data.code == 0 && res.data.error_type == 2){
                    this.repsdnotice = res.data.msg;
                }else{
                    this.repsdnotice = '';
                }
                if(res.data.code == 0 && res.data.error_type == 3){
                    this.codeNotice = res.data.msg;
                }else{
                    this.codeNotice = '';
                }
                if(res.data.code == 1){
                    this.$router.push('/login');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    created(){
        this.newInfor.username = this.$route.query.username;
        console.log(this.$route.query.username)
    }
}
</script>

<style scoped>
.login{
    min-height: 850px;
    padding-top: 145px;
}
.new-password-box {
    width: 400px;
    position: relative;
    background-color: #fff;
    padding: 65px 30px 40px;
    margin: 0 auto;
}
.new-password-box h2 {
    font-size: 24px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
}
.new-password-box h4 {
    font-size: 16px;
    line-height: 36px;
    color: #1b1a16;
    font-weight: normal;
}
.new-password-box h4 em {
    color: #e93e0c;
    cursor: pointer;
}
.new-password-box .tologin p {
    font-size: 14px;
    line-height: 28px;
    color: #ff0000;
    height: 28px;
}
.new-password-box .tologin p i {
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
.new-password-box .tologin input {
    display: block;
    width: 328px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #ccc;
    padding-left: 10px;
}
.new-password-box button {
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
