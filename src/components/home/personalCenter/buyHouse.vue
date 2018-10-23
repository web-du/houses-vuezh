<template>
    <div class="box">
        <div class="tabbar">
            <ul class="clearfix">
                <li :class="{now : currentIndex == index}" v-for="(item,index) in navList" :key="index" @click="Switch(index)">{{item.name}}</li>
            </ul>
        </div>
        <ul>
              <li>
                <div class="I-want clearfix">
                  <span class="fl">我要出租</span>
                  <p class="fl">您可以点击右侧帮你找房提交意向房源表单，我们会为您留意!</p>
                </div>
                <div class="identity clearfix">
                  <div class="img fl clearfix">
                    <img src="@/assets/images/Dw-identity.png" class="fl">
                    <div class="font fl">
                      <h2>身份认证</h2>
                      <p>简单几步填写身份信息，安全可靠，实时通过</p>
                    </div>
                  </div>
                  <div class="fr">
                    <span>去认证</span>
                  </div>
                </div>
                <div class="infor">
                  <h2>住宅信息</h2>
                  <ul>
                      <li class="clearfix" v-for="(item,index) in Buyinfor" :key = "index">
                        <span class="address fl">{{item.title}}</span>
                        <span class="time fl">{{item.date}}</span>
                        <span class="name fl">{{item.area}}</span>
                        <span class="size fl">{{item.huxing}}</span>
                        <span class="acreage fl">{{item.map}}</span>
                        <span class="rent fl">{{item.price}}</span>
                        <span class="op fr">
                          <span>修改</span>
                          <span>删除</span>
                        </span>
                      </li>
                  </ul>
                  <p v-show="have" class="tishi">{{notice}}</p>
                </div>
              </li>
          </ul>
    </div>
</template>

<script>
    export default{
        name:"buyHouse",
        data(){
            return{
                Buyinfor:[],
                currentIndex:0,
                //当返回的信息为空时，给出友善的提示
                notice:'',
                have:false,
                navList:[
                    {name:"买住宅"},
                    {name:"买别墅"},
                    {name:"买写字楼"},
                    {name:"买商铺"},
                ],
            }
        },
        methods:{
            Switch(index){
                this.currentIndex = index;
                this.axios.get(process.env.API_HOST+'commonality/personal/buyhouse',{params:{type:index}}).then((response) => {
                    //console.log(response.data)
                    if(response.data.data){
                        this.Buyinfor = response.data.data;
                        this.have = false;
                    }else{
                        this.Buyinfor = "";
                        this.notice = response.data.msg;
                        this.have = true;
                    }
                    //console.log(this.Buyinfor)
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        created(){
            this.axios.get(process.env.API_HOST+'commonality/personal/buyhouse',{params:{type:0}}).then((response) => {
                //console.log(response.data.data)
                if(response.data.data){
                    this.Buyinfor = response.data.data;
                }else{
                    this.notice = response.data.msg;
                    this.have = true;
                }
                //console.log(this.Buyinfor)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    .tishi{
        font-size:18px;
        color: #666666;
        text-align: center;
        line-height: 35px;
    }
    .box .tabbar {
        border-bottom: 1px solid #f2f2f2;
    }
    .box .tabbar ul li {
        float: left;
        font-size: 14px;
        line-height: 50px;
        height: 50px;
        text-align: center;
        color: #333333;
        position: relative;
        cursor: pointer;
        padding: 0 15px;
    }
    .box .tabbar ul li.now {
        color: #e93e0c;
        border-bottom: 1px solid #e93e0c;
    }
    .box .tabbar ul li.now::after {
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-bottom: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        left: 50%;
        margin-left: -2px;
        bottom: 0;
    }
    .box > ul > li .I-want {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .box > ul > li .I-want span {
        width: 146px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #e93e0c;
        font-size: 16px;
        color: #fff;
        line-height: 36px;
        cursor: pointer;
        margin-right: 20px;
    }
    .box > ul > li .I-want p {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
    }
    .box > ul > li .identity .img img {
        width: 52px;
        height: 44px;
        margin-right: 20px;
    }
    .box > ul > li .identity .img .font h2 {
        font-size: 16px;
        line-height: 24px;
        color: #333333;
    }
    .box > ul > li .identity .img .font p {
        font-size: 14px;
        line-height: 24px;
        color: #666666;
    }
    .box > ul > li .identity > div > span {
        display: block;
        width: 95px;
        height: 40px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #e93e0c;
        font-size: 14px;
        line-height: 36px;
        color: #e93e0c;
        cursor: pointer;
    }
    .box > ul > li .infor {
        margin-top: 35px;
    }
    .box > ul > li .infor > h2 {
        height: 33px;
        line-height: 33px;
        background-color: #f2f2f2;
        font-size: 14px;
        color: #333333;
        padding-left: 20px;
    }
    .box > ul > li .infor > ul > li {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f2f2f2;
        font-size: 14px;
        color: #333333;
    }
    .box > ul > li .infor > ul > li .address {
        width: 360px;
        text-align: center;
        overflow: hidden;
    }
    .box > ul > li .infor > ul > li .size,.box > ul > li .infor > ul > li .acreage,.box > ul > li .infor > ul > li .time {
        width: 120px;
        text-align: center;
    }
    .box > ul > li .infor > ul > li .name {
        width: 70px;
        text-align: center;
    }
    .box > ul > li .infor > ul > li .name {
        width: 70px;
        text-align: center;
    }
    .box > ul > li .infor > ul > li .op span {
        position: relative;
        padding-right: 10px;
        margin-right: 10px;
    }
    .box > ul > li .infor > ul > li .op span::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 14px;
        background-color: #333333;
        right: 0;
        top: 3px;
    }
    .box > ul > li .infor > ul > li .op span:last-child {
        padding-right: 0;
        margin-right: 0;
    }
    .box > ul > li .infor > ul > li .op span:last-child::after{
        display: none;
    }
</style>

