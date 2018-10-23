<template>
    <div class="sec-house-page clearfix">
        <div class="item-box fl">
            <ul class="clearfix">
                <li v-for="(item,index) in getPriceUpList" :key = "index">
                    <router-link :to="{path:'/handHouse/estateDetails',query:{id:item.house_id}}">
                        <a class="img" href="">
                            <img :src="item.house_thumb">
                            <p class="clearfix">
                                <span class="fl">{{item.house_title}}</span>
                                <span class="fr">中心城区</span>
                            </p>
                            <i :style="[ index < 3 ? Rinking[index].rink : Rinking[3].rink ]">{{ index+1 }}</i>
                        </a>
                        <div class="price">
                            <p><em>{{item.house_price}}</em>元/m2</p>
                            <p class="rise">环比上月：<img src="@/assets/images/Dw-up.png" ><span>{{ item.rate | Removepercent}}</span>%</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="more_box">
                <div class="more_ssp">
                    <a href="">&lt; 上一页</a>
                    <span class="cpb current">1</span>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                    <a href="">6</a>
                    <a href="">下一页 &gt;</a>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="help fr">
            <div class="find-house">
                <h2>帮你找房</h2>
                <table>
                <tbody><tr class="region">
                    <td>意向区域：</td>
                    <td>
                    <input type="text" placeholder="不限" readonly="readonly">
                    <img src="@/assets/images/Dw-select.png">
                    </td>
                </tr>
                <tr class="building">
                    <td>意向楼盘：</td>
                    <td>
                    <input type="text" placeholder="请选择您的意向楼盘">
                    </td>
                </tr>
                <tr class="total">
                    <td>预算总价：</td>
                    <td>
                    <input type="text" placeholder="不限" readonly="readonly">
                    <img src="@/assets/images/Dw-select.png">
                    </td>
                </tr>
                <tr class="tel">
                    <td>手机号码：</td>
                    <td>
                    <input type="text" placeholder="">
                    </td>
                </tr>
                <tr class="yzm">
                    <td>验证码：</td>
                    <td>
                    <input type="text">
                    <span class="send-yzm">发送验证码</span>
                    </td>
                </tr>
                </tbody></table>
                <button>提交</button>
            </div>
            <div class="tovip">
                <h2>已享受房乐士直通车VIP服务</h2>
                <p><em>702,301</em>人次</p>
                <button>立即报名</button>
            </div>
            <div class="skill">
                <div class="nav clearfix">
                <span class="now">买房技巧</span>
                <span>楼盘问答</span>
                </div>
                <ul>
                    <li>
                    <a href="#">央行划出五项重点工作 降准是标配恐还有大招</a>
                    </li>
                    <li>
                    <a href="#">张宏伟：降准也不乐观！房企资金面不会因为</a>
                    </li>
                    <li>
                    <a href="#">16城月底上报供地多元化方案 政府不再唯一</a>
                    </li>
                    <li>
                    <a href="#">2018禧瑞系全球品牌发布盛典圆满落幕</a>
                    </li>
                    <li>
                    <a href="#">【楼宇周刊】利好!房贷利息抵个税,工资还能纳斯达克你放假开发时间</a>
                    </li>
                    <li>
                    <a href="#">释放7000亿元 中国新一轮定向降准有何不同?</a>
                    </li>
                    <li>
                    <a href="#">【特价房北京】海淀小三居!满五唯一!近地铁!</a>
                    </li>
                    <li>
                    <a href="#">【楼市奇说】没买房的恭喜了！楼市传来一个</a>
                    </li>
                </ul>
            </div>
            <div class="hot">
                <div class="nav clearfix">
                <span class="now">热门楼盘</span>
                <span>本月开盘</span>
                <p class="fl clearfix">
                    <span class="fl">楼盘名称</span>
                    <span class="fr">价格</span>
                </p>
                </div>
                <ul>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="clearfix">
                        <span class="fl">常青花园恒大御景</span>
                        <span class="fl">15800/m2</span>
                    </a>
                    </li>
                </ul>
            </div>
            <div class="hot-review">
                <h2 class="clearfix"><span class="fl">楼盘热评榜</span><span class="fr"><a href="#">更多</a></span></h2>
                <ul>
                    <li class="clearfix first">
                    <a href="#" class="clearfix">
                        <span class="fl">1</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix sec">
                    <a href="#" class="clearfix">
                        <span class="fl">2</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix three">
                    <a href="#" class="clearfix">
                        <span class="fl">3</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix">
                    <a href="#" class="clearfix">
                        <span class="fl">4</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix">
                    <a href="#" class="clearfix">
                        <span class="fl">5</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix">
                    <a href="#" class="clearfix">
                        <span class="fl">6</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix">
                    <a href="#" class="clearfix">
                        <span class="fl">7</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                    <li class="clearfix">
                    <a href="#" class="clearfix">
                        <span class="fl">8</span>
                        <p class="fl">常青花园恒大御景</p>
                        <div class="star clearfix fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staron.png" class="fl">
                        <img src="@/assets/images/Dw-right-staroff.png" class="fl">
                        </div>
                        <em class="fl">9155条点评</em>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="advertisement fl">
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
    name:"handHouseRise",
    data(){
        return{
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
            getPriceUpList:[],
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
        //获取全部的涨价榜数据
       this.axios.post(process.env.API_HOST+'secondhouse/Index/getPriceUpList').then((res) => {
            //console.log(res)
            this.getPriceUpList = res.data.data.data;
            console.log(this.getPriceUpList);
        }).catch((err) => {
            console.log(err);
        })
    }
}
$(function(){
  /*获取验证码倒计时*/
    var countdown = 60;
    var flag = true;
    function settime(obj) {
        if (countdown == 0) {
            $(obj).removeAttr("disabled");
            $(obj).text("获取验证码");
            countdown = 60;
            flag = true;
            return;
        } else {
            flag = false;
            $(obj).attr("disabled", true);
            $(obj).text(countdown +'s'+'后重发');
            countdown--;
        }
        setTimeout(function () {
            settime(obj)
        }, 1000)
    }
    $(".send-yzm").click(function(){
      if(flag){
        settime(".send-yzm");
      }else{
        //Todo
      }
    })
 })
</script>

<style>
.sec-house-page {
    width: 1200px;
    margin: 0 auto;
}
.sec-house-page .item-box {
    width: 850px;
}
.sec-house-page .item-box > ul > li {
    float: left;
    width: 270px;
    border: 1px solid #f5f5f5;
    padding: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.sec-house-page .item-box > ul > li .img {
    position: relative;
    display: block;
    width: 240px;
    height: 180px;
    overflow: hidden;
}
.sec-house-page .item-box > ul > li .img img {
    width: 240px;
    height: 180px;
    vertical-align: middle;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}
.sec-house-page .item-box > ul > li .img:hover img {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    z-index: 1;
}
.sec-house-page .item-box > ul > li .img p {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 32px;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    bottom: 0;
    z-index: 2;
    padding: 0 10px;
}
.sec-house-page .item-box > ul > li .img p span {
    color: #fff;
    font-size: 14px;
}
.sec-house-page .item-box > ul > li .img i {
    position: absolute;
    width: 30px;
    height: 33px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    left: 0;
    top: 0;
}
.sec-house-page .item-box > ul > li .price {
    margin-top: 5px;
}
.sec-house-page .item-box > ul > li .price > p {
    font-size: 14px;
    color: #333333;
    line-height: 24px;
}
.sec-house-page .item-box > ul > li .price > p em {
    color: #e93e0c;
    font-weight: bold;
    margin-right: 5px;
}
.sec-house-page .item-box > ul > li .price .level span {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
.sec-house-page .item-box > ul > li .price .level h2 {
    line-height: 24px;
    width: 195px;
}
.sec-house-page .item-box > ul > li .price .level h2 i {
    display: inline-block;
    width: 100%;
    height: 8px;
    background-color: #f2f2f2;
    position: relative;
}
.sec-house-page .item-box > ul > li .price .level h2 i img {
    position: absolute;
    left: 0;
    top: 0;
    height: 8px;
}
.sec-house-page .help {
    width: 310px;
    margin-top: 15px;
}
.sec-house-page .help .find-house {
    background-color: #f1f1f1;
    padding: 0 15px 30px;
}
.sec-house-page .help .find-house > h2 {
    font-size: 18px;
    line-height: 36px;
    color: #333333;
}
.sec-house-page .help .find-house table tr {
    height: 50px;
}
.sec-house-page .help .find-house table tr td:first-child {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.sec-house-page .help .find-house table .region td, .sec-house-page .help .find-house table .total td {
    position: relative;
}
.sec-house-page .help .find-house table .region td input, .sec-house-page .help .find-house table .total td input {
    width: 200px;
    line-height: 35px;
    height: 35px;
    font-size: 14px;
    color: #666666;
    padding-left: 10px;
    cursor: pointer;
}
.sec-house-page .help .find-house table .region td img, .sec-house-page .help .find-house table .total td img {
    position: absolute;
    width: 10px;
    height: 5px;
    right: 10px;
    top: 21px;
}
.sec-house-page .help .find-house table tr {
    height: 50px;
}
.sec-house-page .help .find-house table .building td input, .sec-house-page .help .find-house table .tel td input {
    width: 200px;
    line-height: 35px;
    height: 35px;
    font-size: 14px;
    color: #666666;
    padding-left: 10px;
}
.sec-house-page .help .find-house table .region td input, .sec-house-page .help .find-house table .total td input {
    width: 200px;
    line-height: 35px;
    height: 35px;
    font-size: 14px;
    color: #666666;
    padding-left: 10px;
    cursor: pointer;
}
.sec-house-page .help .find-house table .yzm td input {
    width: 200px;
    line-height: 35px;
    height: 35px;
    font-size: 14px;
    color: #666666;
    padding-left: 10px;
}
.sec-house-page .help .find-house table .yzm td span {
    position: absolute;
    right: 0;
    top: 7px;
    text-align: center;
    background-color: #fff;
    z-index: 3;
    width: 50%;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    border-left: 1px solid #ebebeb;
}
.sec-house-page .help .find-house > button {
    display: block;
    width: 280px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #e93e0c;
    border: none;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 15px auto 0;
}
.sec-house-page .help .tovip {
    width: 100%;
    margin-top: 30px;
    border-top: 2px solid #e93e0c;
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
}
.sec-house-page .help .tovip > h2 {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #f5f5f5;
    font-size: 16px;
    color: #e93e0c;
}
.sec-house-page .help .tovip > p {
    font-size: 14px;
    line-height: 36px;
    color: #666666;
    text-align: center;
    margin: 15px 0;
}
.sec-house-page .help .tovip > p em {
    font-size: 26px;
    line-height: 36px;
    color: #e93e0c;
    font-weight: bold;
    margin-right: 5px;
}
.sec-house-page .help .tovip > button {
    display: block;
    width: 270px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #e93e0c;
    margin: 0 auto;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
.sec-house-page .help .skill {
    margin-top: 20px;
}
.sec-house-page .help .skill .nav {
    height: 50px;
}
.sec-house-page .help .skill .nav span {
    float: left;
    width: 50%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #333333;
    border-bottom: 2px solid #f5f5f5;
    cursor: pointer;
    text-align: center;
}
.sec-house-page .help .skill .nav span.now {
    border-bottom: 2px solid #e93e0c;
    color: #e93e0c;
}
.sec-house-page .help .skill ul {
    margin-top: 5px;
}
.sec-house-page .help .skill ul li {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #333333;
    line-height: 36px;
}
.sec-house-page .help .skill ul li a {
    color: #333333;
}
.sec-house-page .help .skill ul li a:hover {
    color: #e93e0c;
}
.sec-house-page .help .hot {
    margin-top: 20px;
}
.sec-house-page .help .hot .nav {
    height: 50px;
}
.sec-house-page .help .hot .nav > span {
    float: left;
    width: 50%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #333333;
    border-bottom: 2px solid #f5f5f5;
    cursor: pointer;
    text-align: center;
}
.sec-house-page .help .hot .nav > span.now {
    border-bottom: 2px solid #e93e0c;
    color: #e93e0c;
}
.sec-house-page .help .hot .nav > p {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #f5f5f5;
    margin: 10px 0;
}
.sec-house-page .help .hot .nav > p span {
    width: 50%;
    color: #666666;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
}
.sec-house-page .help .hot ul li {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #333333;
    line-height: 36px;
}
.sec-house-page .help .hot ul li a {
    color: #333333;
    display: block;
    width: 100%;
}
.sec-house-page .help .hot-review > h2 {
    font-size: 18px;
    line-height: 36px;
    color: #333333;
}
.sec-house-page .help .hot-review > h2 a {
    color: #999999;
    font-size: 14px;
}
.sec-house-page .help .hot-review > ul > li {
    height: 36px;
    line-height: 36px;
    margin-bottom: 10px;
}
.sec-house-page .help .hot-review > ul > li a {
    display: block;
    width: 100%;
}
.sec-house-page .help .hot-review > ul > li span {
    width: 27px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #999999;
    margin-top: 4.5px;
    margin-right: 10px;
}
.sec-house-page .help .hot-review > ul > li.first span {
    background-color: #e93e0c;
}
.sec-house-page .help .hot-review > ul > li p {
    font-size: 14px;
    color: #333333;
    width: 112px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 5px;
}
.sec-house-page .help .hot-review > ul > li .star {
    margin-top: 12px;
    margin-right: 5px;
}
.sec-house-page .help .hot-review > ul > li .star img {
    width: 12px;
    height: 12px;
    margin-right: 2px;
}
.sec-house-page .help .hot-review > ul > li em {
    font-size: 14px;
    color: #999999;
}
.sec-house-page .help .hot-review > ul > li.sec span {
    background-color: #f5d812;
}
.sec-house-page .help .hot-review > ul > li.three span {
    background-color: #f3a81b;
}
.advertisement {
    width: 1200px;
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
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
.sec-house-page .item-box > ul > li:nth-child(3n+3) {
    margin-right: 0;
}
.sec-house-page .help .find-house table .yzm td {
    position: relative;
}
.sec-house-page .item-box > ul > li .price p.rise span {
    color: #e93e0c;
    margin-right: 5px;
}
.sec-house-page .item-box > ul > li .price p.rise img{
    margin-right: 5px;
    vertical-align:baseline;
}
</style>
