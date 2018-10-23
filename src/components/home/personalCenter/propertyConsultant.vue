<template>
    <div class="box purchase">
        <ul class="consult">
            <li class="clearfix" v-for="(item,index) in medium_list" :key="index">
                <div class="img fl">
                <img :src="item.avatar">
                </div>
                <div class="tel fl">
                <h2>{{item.user_realname}}</h2>
                <p>{{item.mobile}}</p>
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
    export default {
        name:"propertyConsultant",
        data(){
            return{
                note:{
                        backgroundImage: "url("+require("@/assets/images/Dw-consult.png")+")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "30px center",
                        backgroundSize: "22px 22px",
                },
                medium_list:[],
            }
        },
        created(){
            this.axios.get(process.env.API_HOST+'commonality/personal/medium_list').then((response) => {
                //console.log(response);
                this.medium_list = response.data.data;
                console.log(this.medium_list)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
.purchase .consult > li {
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
}
.purchase .consult > li .img {
    width: 60px;
    margin-right: 23px;
}
.purchase .consult > li .img img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.purchase .consult > li .tel h2 {
    font-size: 14px;
    line-height: 36px;
    color: #333333;
}
.purchase .consult > li .tel p {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.purchase .consult > li .tel p img{
    vertical-align: middle;
    margin-right: 10px;
}
.purchase .consult > li .op {
    margin-top: 17px;
}
.purchase .consult > li .op .to {
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
.purchase .consult > li .op .del {
    font-size: 14px;
    line-height: 36px;
    color: #999999;
    cursor: pointer;
}
</style>
