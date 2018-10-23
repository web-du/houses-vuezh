<template>
    <div class="straight_matter" id="straight_matter" >
        <div class="title">
            <h2>{{title}}</h2>
            <div class="to clearfix">
                <div class="time fl">
                    <span>{{date}}</span>
                    <span>来源：{{source}}</span>
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
            <p>{{text}}</p>
            <img :src="img" >
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
            <a href="#" class="fl">上一篇，置业指南：购房者如何评估自己的购房能力？</a>
            <a href="#" class="fr">下一篇，购房宝典：返乡置业需要注意哪些问题？</a>
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
            <div class="comment_list this">
              <div class="comm">
                  <div class="comment_top">
                      <div class="img_logo fl"><img src="@/assets/images/jjrdp1.png" alt=""></div>
                      <div class="conts fr">
                          <div class="text">新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡</div>
                          <div class="img_bot">
                              <div class="imgs fl"><div class="title"><img src="@/assets/images/lpdp32.jpg"></div><img src="@/assets/images/lpdp32.jpg" alt="" id="beforeTreat11"  v-on:click="changeSize(this.id)"></div>
                              <div class="imgs fl"><div class="title"><img src="@/assets/images/lpdp32.jpg"></div><img src="@/assets/images/lpdp32.jpg" alt="" id="beforeTreat12"  v-on:click="changeSize(this.id)"></div>
                              <div class="imgs fl"><div class="title"><img src="@/assets/images/lpdp32.jpg"></div><img src="@/assets/images/lpdp32.jpg" alt="" id="beforeTreat13"  v-on:click="changeSize(this.id)"></div>
                              <div class="clear"></div>
                          </div>
                          <div class="date">
                              <div class="fl">武汉-网友楼市动态 2018-06-18 发布</div>
                              <div class="fr"><span>有用（0）</span>  <span class="reply">回复（0）</span></div>
                              <div class="clear"></div>
                          </div>
                      </div>
                      <div class="clear"></div>
                  </div>
              </div>
              <div class="comm">
                  <div class="comment_top">
                      <div class="img_logo fl"><img src="@/assets/images/jjrdp1.png" alt=""></div>
                      <div class="conts fr">
                          <div class="text">新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡</div>
                          <div class="date">
                              <div class="fl">武汉-网友楼市动态 2018-06-18 发布</div>
                              <div class="fr"><span>有用（0）</span>  <span class="reply">回复（0）</span></div>
                              <div class="clear"></div>
                          </div>
                      </div>
                      <div class="clear"></div>
                  </div>
              </div>
            </div>
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
                    <td>
                        <span id="idcode"></span>
                        <input type="text" id="Txtidcode" class="txtVerification" placeholder="输入验证码"/>
                        <div>
                            <button type="button" id="btns">验证</button>
                        </div>
                    </td>
                </tr>
            </table>
            <p><input type="checkbox"><span>已阅读《楼盘点评内容管理规范》</span></p>
            <div class="sub">
                <span>提交评论</span><input type="checkbox"><span>匿名点评</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "straightMatter",
    data() {
        return {
            title:'',
            date:'',
            source:'',
            img:'',
            text:'',
            straightMatter: []
        };
    },
    mounted(){
        this.$http.post('/api/commonality/message/message_details',{id:this.$route.query.id}).then((response) => {
            this.title = response.data.data[0][0].post_title
            this.date = response.data.data[0][0].create_time
            this.source = response.data.data[0][0].post_source
            this.img = response.data.data[0][0].thumbnail
            this.text = response.data.data[0][0].post_content[0]
            this.straightMatter=response.data.data
           console.log(response)
        })
    },
    methods: {
       changeSize:function (id) {  
          var img = $("#"+id);  
          var oWidth=img.width(); //取得图片的实际宽度  
          var oHeight=img.height(); //取得图片的实际高度  
          $("#"+id).live("click",function(){  
              $(this).toggle(function(){   
                    img.width(oWidth + 300);  
                    img.height(oHeight + 270/oWidth*oHeight);  
                    $(this).parent().addClass('active');
                    $(this).parent().siblings('.img_bot .imgs').hide(); 
                    $(this).siblings(".img_bot .imgs .title").show();
                }, function(){   
                    img.width(oWidth);  
                    img.height(oHeight);   
                    $(this).parent().removeClass('active');
                    $(this).parent().siblings('.img_bot .imgs').show(); 
                    $(this).siblings(".img_bot .imgs .title").hide();
                }).trigger('click');  

          });  
        },
        btnClick:function (){
            var IsBy = $.idcode.validateCode();
            alert(IsBy);
            console.log(IsBy);
        }
    }

};
</script>

<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
*{-moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -o-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
     outline:none; }
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
.b-box .straight_matter .Tonext a {
  font-size: 14px;
  color: #666666;
  line-height: 29px;
}
.b-box .straight_matter .Tonext a:hover{
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
