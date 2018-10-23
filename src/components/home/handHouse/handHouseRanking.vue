<template>
    <div class="rank-page">
        <div class="banner">
            <img src="@/assets/images/Dw-img22.png">
        </div>
        <div class="nav">
            <ul class="clearfix">
                <li><a href="#">新房排行榜</a></li>
                <li><a href="#" class="now">二手房排行榜</a></li>
            </ul>
        </div>
        <div class="big-box">
            <div class="hot-search">
                <div class="title">
                    <div class="name" :style="note">
                        <h2>二手房热搜榜</h2>
                        <p>二手房每天搜索量排行</p>
                    </div>
                </div>
                <div class="details">
                    <div class="box" v-for="(item,index) in gethotsearch" :key = "index" >
                        <router-link :to="{path:'/handHouse/estateDetails',query:{id:item.id}}">
                            <a class="img" href="">
                                <img :src="item.house_thumb">
                                <i :style="[ index < 3 ? Rinking[index].rink : Rinking[3].rink ]">{{ index+1 }}</i>
                            </a>
                            <div class="name">
                                <a href="" class="titles">{{item.house_title}}</a>
                                <div class="clearfix">
                                    <span class="fl">热度：</span>
                                    <p class="slide fl">
                                        <img src="@/assets/images/Dw-jinbian.png" class="fl" :width="item.hot_degree">
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <span class="tosee"><router-link to="/handHouse/handHouseHot">查看更多</router-link></span>
                </div>
            </div>
            <div class="rise-price">
                <div class="rise-details">
                    <div class="title">
                        <div class="name" :style="note">
                            <h2>二手房涨价榜</h2>
                            <p>价格涨跌一看便知（环比上月）</p>
                        </div>
                    </div>
                    <div class="details">
                        <div class="box" v-for="(item,index) in getPriceUpList" :key="index">
                            <router-link :to="{path:'/handHouse/estateDetails',query:{id:item.house_id}}">
                                <a class="img" href="">
                                    <img :src="item.house_thumb">
                                    <i :style="[ index < 3 ? Rinking[index].rink : Rinking[3].rink ]">{{ index+1 }}</i>
                                </a>
                                <div class="name">
                                    <a href="" class="titles">{{item.house_title}}</a>
                                    <p class="clearfix">
                                        <span class="fl">环比上月：</span>
                                        <img src="@/assets/images/Dw-up.png" class="fl">
                                        <em class="fl">{{item.rate | Removepercent }}</em>%
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <span class="tosee"><router-link to="/handHouse/handHouseRise">查看更多</router-link></span>
            </div>
            <div class="reduce-price">
                <div class="title">
                    <div class="name" :style="note">
                        <h2>二手房降价榜</h2>
                        <p>价格涨跌一看便知（环比上月）</p>
                    </div>
                </div>
                <div class="details clearfix">
                    <div class="box" v-for="(item,index) in getPriceDownList" :key="index">
                        <router-link :to="{path:'/handHouse/estateDetails',query:{id:item.house_id}}">
                            <a class="img" href="">
                                <img :src="item.house_thumb">
                                <i :style="[ index < 3 ? Rinking[index].rink : Rinking[3].rink ]">{{ index+1 }}</i>
                            </a>
                            <div class="name">
                                <a href="" class="titles">{{item.house_title}}</a>
                                <p class="clearfix">
                                    <span class="fl">环比上月：</span>
                                    <img src="@/assets/images/Dw-down.png" class="fl">
                                    <em class="fl">{{item.rate | Removepercent}}</em>%
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
                <span class="tosee"><router-link to="/handHouse/handHouseReduce">查看更多</router-link></span>
            </div>
        </div>
        <div class="advertisement">
          <ul>
              <li>
                  <a href="#">
                      <img src="@/assets/images/advertisement-img.jpg">
                  </a>
              </li>
          </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"handHouseRanking",
        data () {
            return {
                aboutMsg: '二手房排行榜',
                note:{
                    backgroundImage: "url("+require("@/assets/images/Dw-img23.png")+")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                },
                Rinking:[
                    {
                        rink:{
                            backgroundImage: "url("+require("@/assets/images/Dw-bnum1.png")+")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                    }},
                    {   rink:{
                        backgroundImage: "url("+require("@/assets/images/Dw-bnum2.png")+")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }},
                    {    rink:{
                            backgroundImage: "url("+require("@/assets/images/Dw-bnum3.png")+")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                    }},
                    {    rink:{
                            backgroundImage: "url("+require("@/assets/images/Dw-bnumother.png")+")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                    }},
                ],
                gethotsearch:[],
                getPriceUpList:[],
                getPriceDownList:[],
            }
        },
        filters:{
            //去掉返回数据带的%号
            Removepercent:function(val){
                const value = val.split("%");
                return value[0]
            }
        },
        created(){
            //获取热搜榜前三的数据
           this.axios.post(process.env.API_HOST+'secondhouse/Index/gethotsearch').then((res) => {
                //console.log(res.data.data)
                if(res.data.data.data.length < 3){
                    this.gethotsearch = res.data.data.data;
                }else{
                    this.gethotsearch = res.data.data.data.slice(0,3);
                }
                //console.log(this.gethotsearch)
            }).catch((err) => {
                console.log(err);
            })


            //获取涨价榜前七的数据
           this.axios.post(process.env.API_HOST+'secondhouse/Index/getPriceUpList').then((res) => {
                //console.log(res.data.data)
                if(res.data.data.data.length < 7){
                    this.getPriceUpList = res.data.data.data;
                }else{
                    this.getPriceUpList = res.data.data.data.slice(0,7);
                }
                //console.log(this.getPriceUpList)
            }).catch((err) => {
                console.log(err);
            })


            //获取降价榜前四的数据
           this.axios.post(process.env.API_HOST+'secondhouse/Index/getPriceDownList').then((res) => {
                //console.log(res.data.data)
                if(res.data.data.data.length < 4){
                    this.getPriceDownList = res.data.data.data;
                }else{
                    this.getPriceDownList = res.data.data.data.slice(0,4);
                }
                //console.log(this.getPriceDownList)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
.rank-page .big-box .hot-search .details .box .name .slide{
    background-color: #ddd;
    margin-top:8px;
    width: 80%;
}
.rank-page .big-box .hot-search .details .box .name .slide img{
    height: 5px;
}
.rank-page .banner img {
    display: block;
    width: 100%;
    height: auto;
}
.rank-page .nav {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
}
.rank-page .nav ul li {
    float: left;
    width: 50%;
}
.rank-page .nav ul li a {
    display: block;
    width: 100%;
    height: 85px;
    line-height: 85px;
    text-align: center;
    font-size: 34px;
    color: #666666;
    background-color: #f1f1f1;
}
.rank-page .nav ul li a.now {
    background-color: #e93e0c;
    color: #fff;
}
.rank-page .big-box {
    margin-top: 70px;
    padding-bottom: 50px;
}
.rank-page .big-box .hot-search {
    width: 1200px;
    margin: 0 auto;
}
.rank-page .big-box .title {
    text-align: center;
}
.rank-page .big-box .title .name {
    display: inline-block;
    padding: 10px 75px;
}
.rank-page .big-box .title .name h2 {
    font-size: 34px;
    line-height: 36px;
    font-weight: bold;
    color: #fff;
    text-align: center;
}
.rank-page .big-box .title .name p {
    font-size: 14px;
    line-height: 36px;
    color: #fff;
}
.rank-page .big-box .hot-search .details {
    position: relative;
    height: 550px;
    margin-top: 50px;
}
.rank-page .big-box .hot-search .details .box:nth-child(1) {
    position: absolute;
    width: 460px;
    left: 50%;
    margin-left: -230px;
    top: 0;
}
.rank-page .big-box .hot-search .details .box:nth-child(1) .img {
    position: relative;
    overflow: hidden;
    display: block;
    width: 460px;
    height: 360px;
}
.rank-page .big-box .hot-search .details .box .img img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}
.rank-page .big-box .hot-search .details .box .img i {
    position: absolute;
    width: 51px;
    height: 56px;
    left: 0;
    top: 0;
    z-index: 3;
    line-height: 48px;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
}
.rank-page .big-box .hot-search .details .box .name .titles {
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
    color: #333333;
    display: block;
}
.rank-page .big-box .hot-search .details .box .name p span {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.rank-page .big-box .hot-search .details .box:nth-child(2) {
    position: absolute;
    width: 350px;
    left: 0;
    top: 100px;
}
.rank-page .big-box .hot-search .details .box:nth-child(2) .img {
    position: relative;
}
.rank-page .big-box .hot-search .details .box:nth-child(2) .img img {
    display: block;
    width: 350px;
    height: 260px;
}
.rank-page .big-box .hot-search .details .box:nth-child(3) {
    position: absolute;
    width: 350px;
    right: 0;
    top: 100px;
}
.rank-page .big-box .hot-search .details .box:nth-child(3) .img {
    position: relative;
}
.rank-page .big-box .hot-search .details .box:nth-child(3) .img img {
    display: block;
    width: 350px;
    height: 260px;
}
.rank-page .big-box .hot-search .details .tosee {
    position: absolute;
    left: 50%;
    margin-left: -112px;
    bottom: 50px;
    width: 224px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
.rank-page .big-box .rise-price {
    width: 100%;
    height: 1060px;
    background-color: #f1f1f1;
    position: relative;
}
.rank-page .big-box .rise-price .rise-details {
    padding-top: 70px;
    width: 1200px;
    margin: 0 auto;
}
.rank-page .big-box .title {
    text-align: center;
}
.rank-page .big-box .rise-price .rise-details .details {
    position: relative;
    height: 700px;
    margin-top: 50px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(1) {
    position: absolute;
    width: 460px;
    left: 50%;
    margin-left: -230px;
    top: 0;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(1) .img {
    position: relative;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(1) .img img {
    display: block;
    width: 460px;
    height: 360px;
}
.rank-page .big-box .rise-price .rise-details .box .img i {
    position: absolute;
    width: 51px;
    height: 56px;
    left: 0;
    top: 0;
    z-index: 3;
    line-height: 48px;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
}
.rank-page .big-box .rise-price .rise-details .box .name .titles {
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
    color: #333333;
    display: block;
}
.rank-page .big-box .rise-price .rise-details .box .name p {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.rank-page .big-box .rise-price .rise-details .box .name p span {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.rank-page .big-box .rise-price .rise-details .box .name p img {
    width: 10px;
    height: 12px;
    margin-top: 6px;
}
.rank-page .big-box .rise-price .rise-details .box .name p em {
    color: #e93e0c;
    margin: 0 5px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(2) {
    position: absolute;
    width: 350px;
    left: 0;
    top: 100px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(2) .img {
    position: relative;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(2) .img img {
    display: block;
    width: 350px;
    height: 260px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(3) {
    position: absolute;
    width: 350px;
    right: 0;
    top: 100px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(3) .img {
    position: relative;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(3) .img img {
    display: block;
    width: 350px;
    height: 260px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(n+4) {
    position: absolute;
    width: 285px;
    left: 0;
    top: 435px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(n+4) .img {
    position: relative;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(n+4) .img img {
    display: block;
    width: 285px;
    height: 215px;
}
.rank-page .big-box .reduce-price {
    width: 1200px;
    margin: 0 auto;
    padding-top: 70px;
}
.rank-page .big-box .reduce-price .details {
    margin-top: 50px;
}
.rank-page .big-box .reduce-price .details .box {
    float: left;
    width: 285px;
    margin-right: 20px;
}
.rank-page .big-box .reduce-price .details .box:nth-child(4n+4) {
    margin-right: 0;
}
.rank-page .big-box .reduce-price .details .box .img {
    position: relative;
    overflow: hidden;
    display: block;
    width: 285px;
    height: 215px;
}
.rank-page .big-box .reduce-price .details .box .img img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}
.rank-page .big-box .reduce-price .details .box .img i {
    position: absolute;
    width: 51px;
    height: 56px;
    left: 0;
    top: 0;
    z-index: 3;
    line-height: 48px;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
}
.rank-page .big-box .reduce-price .details .name .titles {
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
    color: #333333;
    display: block;
}
.rank-page .big-box .reduce-price .details .name p {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.rank-page .big-box .reduce-price .details .name p span {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.rank-page .big-box .reduce-price .details .name p img {
    width: 10px;
    height: 12px;
    margin-top: 6px;
}
.rank-page .big-box .reduce-price .details .name p em {
    color: #66b128;
    margin: 0 5px;
}
.rank-page .advertisement {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
}
.advertisement ul li:last-child {
    margin-bottom: 0;
}

.advertisement ul li {
    margin-bottom: 5px;
}
.advertisement ul li a img {
    display: block;
    width: 100%;
    height: 60px;
}
.rank-page .big-box .rise-price .rise-details .details .box .img:hover img {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    z-index: 1;
}
.rank-page .big-box .rise-price .rise-details .details .box .img {
    position: relative;
    overflow: hidden;
    display: block;
}
.rank-page .big-box .hot-search .details .box .img {
    position: relative;
    overflow: hidden;
    display: block;
}
.rank-page .big-box .hot-search .details .box .img:hover img {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    z-index: 1;
}
.rank-page .big-box .hot-search .details .tosee a:hover {
    opacity: .8;
}
.rank-page .big-box .hot-search .details .tosee a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(5) {
    left: 305px;
    top: 435px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(6) {
    left: 610px;
    top: 435px;
}
.rank-page .big-box .rise-price .rise-details .details .box:nth-child(7) {
    left: 915px;
    top: 435px;
}
.rank-page .big-box .rise-price .tosee {
    position: absolute;
    left: 50%;
    margin-left: -112px;
    bottom: 50px;
    width: 224px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
.rank-page .big-box .rise-price .tosee a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}
.rank-page .big-box .reduce-price .tosee {
    display: block;
    width: 224px;
    height: 40px;
    line-height: 40px;
    margin: 50px auto 0;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
.rank-page .big-box .reduce-price .tosee a:hover {
    opacity: .8;
}
.rank-page .big-box .reduce-price .tosee a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}
.rank-page .big-box .reduce-price .details .box .img:hover img {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    z-index: 1;
}
</style>
