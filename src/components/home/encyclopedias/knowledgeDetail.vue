<template>
    <div id="knowledge-details">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <!--广告-->
        <knowledge-active></knowledge-active>
        <div class="b-box clearfix">
            <div class="straight_matter fl">
                <!--知识详情-->
                <!-- <knowledge-cont></knowledge-cont> -->
                <div class="straight_matter" id="straight_matter" >
                    <div class="title">
                        <h2>{{details.title}}</h2>
                        <div class="to clearfix">
                            <div class="time fl">
                                <span>{{details.create_time}}</span>
                                <span>来源：房乐士</span>
                            </div>
                            <div class="op fr">
                                <span class="zan">
                                    <img src="@/assets/images/Dw-zan.png" >
                                    <em>点赞</em>
                                </span>
                                <span class="xin">
                                    <img src="@/assets/images/Dw-xin.png" >
                                    <em>收藏</em>
                                </span>
                                <span class="feng">
                                    <img src="@/assets/images/Dw-feng.png" >
                                    <em>分享</em>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="con">
                        <p>{{details.content}}</p>
                        <img :src="details.image" >
                        <p>一、按套内建筑面积或者建筑面积计价的房屋交易</p>
                        <p>通常来说，商品房的计价方法有两种，其中一种即是按套内建筑面积或者建筑面积计价的房屋交易。这种情况下，当事人应当在合同中约定实测面积与登记面积发生误差的处理方式。合同中有约定的，出现问题时按合同处理，合同未作约定的，又分两种情况处理：</p>
                        <p>1、面积误差绝对值在3％以内（含3％）的</p>
                        <p>出现面积误差这种情况，通常会请求专业人士现场测绘，公布结果。如果面积误差绝对值在3％以内，则要根据实际面积重新结算房款，多余的房款要退还给购房者。此时，如果购房者请求解除合同的，法律上是不予支持，同样，开发商拒绝退还多余房款，也是不合理的。</p>
                        <p>2、面积误差绝对值超出3％</p>
                    </div>
                    <div class="label">
                        <span>在售</span>
                        <span>普通住宅</span>
                        <span>湖景地产</span>
                    </div>
                    <div class="Tonext clearfix">
                        <span class="fl" @click="toPrev()">上一篇，<em>{{nextTitle.prev}}</em></span>
                        <span class="fr" @click="toNext()">下一篇，<em>{{nextTitle.next}}</em></span>
                    </div>
                    <div class="advertisement">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="@/assets/images/advertisement-img.jpg" >
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/images/advertisement-img.jpg" >
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/images/advertisement-img.jpg" >
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="comment">
                        <div class="friend clearfix">
                            <span class="title fl">网友点评</span>
                            <span class="to fr"><a href="#">我要点评</a></span>
                        </div>
                        <ul>
                            <li class="clearfix">
                                <div class="img fl">
                                    <img src="@/assets/images/Dw-img12.png" >
                                </div>
                                <div class="text fr">
                                <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡18</p>
                                    <div class="time clearfix">
                                        <span class="fl">艾迪森 2018-06-18 发布</span>
                                        <div class="reply fr">
                                            <span class="use">有用(<em>0</em>)</span>
                                            <span class="toreply"><a href="#">回复(<em>0</em>)</a></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img fl">
                                    <img src="@/assets/images/Dw-img12.png" >
                                </div>
                                <div class="text fr">
                                    <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡18你档口认识几个那块巨石v而是哭给你看较为看见你开始分割开来更让耳热看见你</p>
                                    <div class="photo">
                                        <img src="@/assets/images/Dw-img13.jpg">
                                    </div>
                                    <div class="time clearfix">
                                        <span class="fl">艾迪森 2018-06-18 发布</span>
                                        <div class="reply fr">
                                            <span class="use">有用(<em>0</em>)</span>
                                            <span class="toreply"><a href="#">回复(<em>0</em>)</a></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="publish">
                        <h2>发表评论</h2>
                        <table>
                            <tr>
                                <td>评论</td>
                                <td>
                                    <textarea name="name" placeholder="说说你的满意之处和不满之处，楼盘配套如何？交通如何？以及绿化环境等等…"></textarea>
                                    <em>0/30</em>
                                </td>
                            </tr>
                            <tr>
                                <td>上传照片</td>
                                <td>
                                    <input type="file" name="" value="">
                                    <img src="@/assets/images/Dw-img14.jpg" >
                                </td>
                            </tr>
                            <tr>
                                <td>验证码</td>
                                <td class="clearfix">
                                    <input type="button" id="code" @click="createCode"  class="verification1 fl" v-model="checkCode"/>
                                    <input type="text" id="Txtidcode" class="txtVerification fl" placeholder="输入验证码"/>
                                </td>
                            </tr>
                        </table>
                        <p><input type="checkbox"><span>已阅读《楼盘点评内容管理规范》</span></p>
                        <div class="sub">
                            <span>提交评论</span><input type="checkbox"><span>匿名点评</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lovely fr">
                <!-- 猜你喜欢 -->
                <likely></likely>
                <!-- 热门知识 -->
                <hot-Knowledge></hot-Knowledge>
                 <!-- 热门问答 -->
                <hot-questions></hot-questions>
            </div>
        </div>
    </div>
</template>
<script>
import crumbsSearch from "@/components/main/crumbsSearch";
import knowledgeActive from "@/components/home/encyclopedias/knowledgeActive";
import likely from "@/components/main/likely";
import hotKnowledge from "@/components/main/hotKnowledge";
import hotQuestions from "@/components/main/hotQuestions";
var code ;
export default {
    components: {
        crumbsSearch,
        knowledgeActive,
        likely,
        hotKnowledge,
        hotQuestions
    },
    data() {
        return {
            curCond: [],
            housesList: [],
            details:{},
            checkCode:'',
            //上一篇，下一篇的标题
            nextTitle:{prev:'',next:''},
            //获取id
            thisId:this.$route.query.id,
        };
    },
    methods: {
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
                this.checkCode = code;//把code值赋给验证码;   
        },
        toPrev(){
            this.$router.push({path:'/encyclopedias/knowledgeDetail',query:{id:this.details.front.id}});
            this.$router.go(0);
        },
        toNext(){
            this.$router.push({path:'/encyclopedias/knowledgeDetail',query:{id:this.details.after.id}});
            this.$router.go(0);
        }
    },
    watch:{
        thisId:function(val,oldval){
            console.log(val)
            this.axios.post(process.env.API_HOST+'commonality/knowledge/knowledge_details',{id:val}).then((response) => {
                //console.log(response.data.data)
                this.details = response.data.data[0];
                this.nextTitle.prev = response.data.data[0].front.title;
                this.nextTitle.next = response.data.data[0].after.title;
                console.log(this.details)
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    created() {
        console.log(this.$route.query.id)
        this.createCode();
        this.axios.post(process.env.API_HOST+'commonality/knowledge/knowledge_details',{id:this.$route.query.id}).then((response) => {
           //console.log(response.data.data)
           this.details = response.data.data[0];
           this.nextTitle.prev = response.data.data[0].front.title;
           this.nextTitle.next = response.data.data[0].after.title;
           console.log(this.details)
        }).catch((err) => {
          console.log(err);
        })
    }
};
</script>
<style scoped>
.b-box {
  width: 1200px;
  margin: 0 auto 30px;
}
#ehong-code-tip-ck{
  display: none;
}
.ehong-idcode-val{
  width: 126px;
  height: 45px;
  display: inline-block;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
}
#btns{
  display: none;
}
#code{
    font-size: 18px;
    letter-spacing: 3px;
    color: #053d84;
    background: #f2f2f5;
    border: 1px solid #e6e6e6;
    height: 45px;
    vertical-align: middle;
    width: 112px;
    margin-right: 20px;
}
/**广告位**/
.advertisement {
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
}
.advertisement ul li {
  margin-bottom: 5px;
}
.advertisement ul li:last-child {
  margin-bottom: 0;
}
.advertisement ul li a img {
  display: block;
  width: 100%;
  height: 60px;
}
#ehong-code-tip-ck{
  display: none;
}
.ehong-idcode-val{
  width: 126px;
  height: 45px;
  display: inline-block;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
}
#btns{
  display: none;
}
.b-box .straight_matter {
  width: 850px;
}
.b-box .straight_matter > .title {
  border-bottom: 1px solid #f2f2f2;
}
.b-box .straight_matter > .title h2 {
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  font-weight: bold;
}
.b-box .straight_matter > .title .to .time {
  font-size: 14px;
  color: #999999;
  line-height: 29px;
}
.b-box .straight_matter > .title .to .time span {
  margin-right: 16px;
}
.b-box .straight_matter > .title .to .time span:last-child {
  margin-right: 0;
}
.b-box .straight_matter > .title .to .op span {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
.b-box .straight_matter > .title .to .op span em {
  font-size: 14px;
  color: #666666;
  line-height: 36px;
  display: inline-block;
}
.b-box .straight_matter > .title .to .op span img {
  vertical-align: text-bottom;
}
.b-box .straight_matter > .title .to .op span.now em {
  color: #e93e0c;
}
.b-box .straight_matter > .con p {
  font-size: 14px;
  color: #666666;
  line-height: 29px;
  margin: 40px 0;
}
.b-box .straight_matter > .con img {
  display: block;
  width: 600px;
  height: 450px;
  margin: 0 auto;
}
.b-box .straight_matter .label span {
  display: inline-block;
  font-size: 14px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 5px;
  margin-right: 6px;
}
.b-box .straight_matter .label span:first-child {
  background-color: #efe8e7;
  color: #e89880;
}
.b-box .straight_matter .label span:nth-child(2) {
  background-color: #f5f2e9;
  color: #dbcea4;
}
.b-box .straight_matter .label span:nth-child(3) {
  background-color: #eef2f8;
  color: #a9bede;
}
.b-box .straight_matter .Tonext {
  margin-top: 50px;
}
.b-box .straight_matter .Tonext span {
  font-size: 14px;
  color: #666666;
  line-height: 29px;
  cursor: pointer;
}
.b-box .straight_matter .Tonext span:hover{
	color:#e93e0c;
}
.b-box .straight_matter .comment .friend {
  margin-bottom: 50px;
}
.b-box .straight_matter .comment .friend .title {
  font-size: 20px;
  color: #333333;
  line-height: 36px;
  font-weight: bold;
  position: relative;
  padding-left: 13px;
}
.b-box .straight_matter .comment .friend .title:before {
  position: absolute;
  content: '';
  width: 3px;
  height: 18px;
  background-color: #e93e0c;
  left: 0;
  top: 50%;
  margin-top: -9px;
}
.b-box .straight_matter .comment .friend .to {
  width: 97px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #e93e0c;
}
.b-box .straight_matter .comment .friend .to a {
  color: #e93e0c;
  font-size: 14px;
  display: block;
}
.b-box .straight_matter .comment ul li {
  margin-bottom: 20px;
}
.b-box .straight_matter .comment ul li .img img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.b-box .straight_matter .comment ul li .text {
  width: 770px;
  border-bottom: 1px solid #f5f5f5;
}
.b-box .straight_matter .comment ul li .text p {
  font-size: 14px;
  color: #666666;
  line-height: 24px;
}
.b-box .straight_matter .comment ul li .text .photo img {
  display: inline-block;
  width: 90px;
  height: 90px;
}
.b-box .straight_matter .comment ul li .text .photo {
  margin: 20px 0;
}
.b-box .straight_matter .comment ul li .text .time > span {
  font-size: 14px;
  line-height: 36px;
  color: #999999;
}
.b-box .straight_matter .comment ul li .text .time .reply span {
  font-size: 14px;
  line-height: 36px;
  color: #999999;
  margin-right: 16px;
  cursor: pointer;
}
.b-box .straight_matter .comment ul li .text .time .reply span:last-child {
  margin-right: 0;
}
.b-box .straight_matter .comment ul li .text .time .reply span a {
  color: #999999;
}
.b-box .straight_matter .comment ul li .text .time .reply span.now {
  color: #e93e0c;
}
.b-box .straight_matter .publish > h2 {
  font-size: 18px;
  color: #333333;
  margin-bottom: 20px;
}
.b-box .straight_matter .publish table tr {
  margin-bottom: 20px;
  display: block;
}
.b-box .straight_matter .publish table tr td {
  font-size: 14px;
  color: #666666;
  line-height: 32px;
  vertical-align: top;
  position: relative;
  text-align: right;
  width: 90px;
}
.b-box .straight_matter .publish table tr td:nth-child(2) {
  text-align: left;
  padding-left: 20px;
  width: 735px;
}
.b-box .straight_matter .publish table tr td textarea {
  width: 730px;
  height: 150px;
  outline: none;
  border: 1px solid #efefef;
  padding: 22px;
  font-size: 16px;
  color: #333333;
  resize: none;
}
.b-box .straight_matter .publish table tr td textarea::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish table tr td textarea:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish table tr td textarea:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish table tr td em {
  position: absolute;
  font-size: 16px;
  color: #999999;
  right: 20px;
  bottom: 20px;
}
.b-box .straight_matter .publish table tr td input[type="file"] {
  position: absolute;
  width: 180px;
  height: 125px;
  z-index: 2;
  opacity: 0;
}
.b-box .straight_matter .publish table tr td > img {
  display: block;
  width: 180px;
  height: 125px;
}
.b-box .straight_matter .publish table tr td input[Type="text"] {
  width: 194px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #cccccc;
  font-size: 16px;
  color: #333333;
  padding-left: 10px;
}
.b-box .straight_matter .publish table tr td input[Type="text"]::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish table tr td input[Type="text"]:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish table tr td input[Type="text"]:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.b-box .straight_matter .publish > p {
  font-size: 14px;
  line-height: 36px;
  color: #999999;
  padding-left: 115px;
}
.b-box .straight_matter .publish > p input {
  margin-right: 10px;
  vertical-align: middle;
}
.b-box .straight_matter .publish .sub {
  padding-left: 115px;
  margin-top: 20px;
}
.b-box .straight_matter .publish .sub span:first-child {
  display: inline-block;
  width: 188px;
  height: 36px;
  line-height: 36px;
  background-color: #e93e0c;
  font-size: 16px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.b-box .straight_matter .publish .sub input {
  margin-left: 16px;
  margin-right: 6px;
}
.b-box .straight_matter .publish .sub span:nth-child(3) {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.comment_list{padding-top: 20px;}
.comment_list .comm{width: 100%;height: auto;}
.comment_list .comm .comment_top {width: 100%;height: auto;padding: 0 0 20px;}
.comment_list .comm .comment_top .img_logo{width: 60px;height: 60px;overflow: hidden;}
.comment_list .comm .comment_top .img_logo img{width: 100%;height: 100%;vertical-align: middle;}
.comment_list .comm .comment_top .conts{width: 765px;height: auto;border-bottom: 1px solid #f5f5f5;padding-bottom: 20px;}
.comment_list .comm .comment_top .conts .rate_star{margin-bottom: 0;}
.comment_list .comm .comment_top .conts .text{font-size: 14px;color: #666;line-height: 23px;padding:12px 0 16px;}
.comment_list .comm .comment_top .conts .date{line-height: 16px;}
.comment_list .comm .comment_top .conts .date .fl{font-size: 14px;color: #999;}
.comment_list .comm .comment_top .conts .date .fr{font-size: 14px;color: #999;}
.comment_list .comm .comment_top .conts .date .fr span.reply{cursor: pointer;}
.comment_list .comm .comment_top .conts .date .fr span.reply:hover{color: #e93e0c;}
.comment_list .comm .comment_top .conts .img_bot .imgs{margin-right: 10px;cursor: pointer;margin-bottom: 15px;}
.comment_list .comm .comment_top .conts .imgs img{display: block;width: 90px;height: 90px;}
.comment_list .comm .comment_top .conts .imgs.active{border:8px solid #f4f6f9;}
.comment_list .comm .comment_top .conts .imgs .title{height: 0;background: #f4f6f9;display: none;}
.comment_list .comm .comment_top .conts .imgs .title img{vertical-align: middle;margin-right: 5px;width: 0px;height: 0px;display: inline}
</style>
