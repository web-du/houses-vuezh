<template>
    <div id="essential-Infor">
        <div class="infor">
            <table>
                <tr>
                    <td>用户名：</td>
                    <td>
                        <input type="text" class="yourname" v-model="yourInfor.user_login">
                        <p class="shuoming">2-10个字符，支持中文、英文、数字下划线和减号</p>
                    </td>
                </tr>
                <tr>
                    <td>当前头像：</td>
                    <td>
                        <ul class="clearfix">
                            <li class="fl">
                                <input type="file" class="your-select">
                                <img src="@/assets/images/Dw-center03.png" >
                            </li>
                            <li class="fl">
                                <img src="@/assets/images/Dw-center04.png" >
                                <p>删除</p>
                            </li>
                            <li class="fl">
                                <img src="@/assets/images/Dw-center04.png" >
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>性别：</td>
                    <td>
                        <input type="radio" name="male" value="0" class="male" v-model="yourInfor.sex"><span>男</span>
                        <input type="radio" name="male" value="1" class="male" v-model="yourInfor.sex"><span>女</span>
                    </td>
                </tr>
                <tr class="address">
                    <td>所在地区：</td>
                    <td>
                        <select name="user.province" id="province"></select>
                        <select name="user.city" id="city"></select>
                        <select name="user.area" id="area"></select>
                    </td>
                </tr>
                <tr>
                    <td><span>*</span>手机号码：</td>
                    <td>
                        <input type="text" name="" class="tel">
                    </td>
                </tr>
            </table>
            <span class="sure">确定</span>
        </div>
    </div>
</template>

<script>
    import PCAS from '@/assets/js/pcasunzip.js'
    export default{
        name:"essentialInfor",
        props:{
            yourInfor:{
                type:Object,
            }
        },
        data(){
            return{
                name:""
            }
        },
        mounted(){
            new PCAS("user.province","user.city","user.area","","","")
        },
        created(){
            this.name = this.yourInfor.user_login;
            console.log(this.yourInfor)
        }
    }
</script>

<style scoped>
table {
    margin-top: 25px;
}
tr td:first-child {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
    vertical-align: top;
    text-align: right;
}
td .yourname {
    width: 360px;
    height: 44px;
    line-height: 44px;
    border: 1px solid #ccc;
    padding-left: 20px;
}
td .shuoming {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
td ul li {
    position: relative;
    margin-right: 20px;
}
td ul li .your-select {
    position: absolute;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
}
td ul li:first-child img {
    display: block;
    width: 105px;
    height: 105px;
    border-radius: 50%;
}
td ul li img {
    display: block;
    width: 105px;
    height: 105px;
    cursor: pointer;
}
td ul li p {
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    color: #e93e0c;
    cursor: pointer;
}
td .male {
    margin-right: 10px;
    vertical-align: sub;
}
td span {
    margin-right: 16px;
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
table .address {
    height: 100px;
}
table .address td {
    vertical-align: middle !important;
}
td select {
    width: 160px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333333;
    border:1px solid #ddd;
}
tr td:first-child span {
    color: #e93e0c;
    margin-right: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 0;
    vertical-align: sub;
    margin-right: 5px;
}
td .tel {
    width: 360px;
    height: 44px;
    line-height: 44px;
    border: 1px solid #ccc;
    padding-left: 20px;
}
span.sure {
    display: block;
    width: 220px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-left: 90px;
    margin-top: 50px;
    margin-bottom: 50px;
    cursor: pointer;
}
</style>
