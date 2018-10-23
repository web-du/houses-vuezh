<template>
    <div id="content" class="renting">
        <div class="crumbsSearch">
            <div class="content">
                <div class="crumbs"><a href="">房乐士</a> &gt; <a href="">房产资讯</a> &gt; <span>资讯</span></div>
                <div class="search">
                    <input placeholder="楼盘搜索">
                    <div class="to-search">
                        <input type="submit"  class="btn">
                        <img src="@/assets/images/searcj.png" >
                    </div>
                </div>
            </div>
        </div>
              <!-- select start -->
            <div class="pxTab w1200">
              <div class="tab_top">
                  <ul class="menusTab fl">
                    <li class="cur active">
                      <a href="">区域搜索</a></li>

                    <div class="clear"></div>
                  </ul>
                  <ul class="push fr">
                      <li><a href="">免费发布房源</a></li>
                      <div class="clear"></div>
                  </ul>
                  <div class="clear"></div>
              </div>
              <!-- select start -->
              <div class="pxMain">
                <div class="pxMain_con block">
                  <ul class="tiaoBox">

                    <li>
                      <h2 class="tTit" title="">租金:</h2>
                      <div class="tCon">
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300-400万</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>400万以上</a>
                        <div class="custom">
                          <input type="text" name="">-<input type="text" name=""><span>确定</span></div>
                        <!-- <a href="" rel="nofollow">
                          <span class="inputSty "></span>自定义</a> -->
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </li>
                    <li>
                      <h2 class="tTit" title="">面积</h2>
                      <div class="tCon">
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>50㎡以下</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>50㎡-100㎡</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>100㎡-150㎡</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>150㎡-200㎡</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>200㎡-300㎡</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>300㎡-500㎡</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>500㎡以上</a>
                        <div class="custom">
                          <input type="text" name="">-<input type="text" name=""><span>确定</span></div>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </li>

                    <li>
                      <h2 class="tTit" title="">户型:</h2>
                      <div class="tCon">
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>一居</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>二居</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>三居</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>四居</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>五居</a>
                        <a href="" rel="nofollow">
                          <span class="inputSty "></span>五居以上</a>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </li>

                    <li>
                      <h2 class="tTit" title="">当前条件</h2>
                      <div class="chioce_result">
                        <ul class="fl">
                          <li>北城区<img src="@/assets/images/close.png" alt=""></li>
                          <li>3000以下<img src="@/assets/images/close.png" alt=""></li>

                          <div class="clear"></div>
                        </ul>
                        <div class="delete_c fl"><img src="@/assets/images/dzlp18.jpg" alt="">清空筛选</div>
                        <div class="clear"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
         <div class="bottomAd this">
            <a href="#">
                <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;">
                <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
            </a>
        </div>
            <div class="mainPart rentout-list">
                <div class="part_center renout">
                    <div class="part">
                        <div class="part_left">

                            <div class="houses_list houses_list2">
                                <ul>
                                    <li v-for="(item,index) in recruit" :key="index">
                                        <div class="houses_info">
                                            <div class="houses_describe">
                                                <div class="header">
                                                    <router-link class="title" :to="{path:'/renting/person', query:{id:item.id}}">{{item.title}}</router-link>

                                                    <div class="clear"></div>
                                                </div>
                                                <div class="addr">
                                                    <img src="@/assets/images/dzlp8.png" width="100%" />
                                                    <span>独栋 . {{item.map}} . 卧室（共5个） . 东南向 . 精装</span>

                                                    <div class="clear"></div>
                                                </div>
                                                <div class="addr">
                                                    <img src="@/assets/images/addr.png" width="100%" />
                                                    <span>{{item.area}}</span>
                                                </div>
                                                <div class="addr">
                                                    <span class="form">来源：房乐士网友 </span>
                                                    <span class="time">时间：{{item.date}}</span>
                                                </div>

                                            </div>
                                            <div class="renout_houses_prise">
                                                 <p><span>{{item.price}}</span> 元 /月（预算）</p>

                                            </div>
                                            <div class="clear"></div>
                                       </div>
                                    </li>
       
                                </ul>

                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="more_box">
                     <div class="more_ssp">
                        <a href="">上一页</a>
                        <span class="cpb current">1</span>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="">4</a>
                        <a href="">5</a>
                        <a href="">6</a>
                        <a href="">下一页 ></a>
                     </div>
                     <div class="clear"></div>
            </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                recruit:[]
            }
        },
        created(){
            this.axios.post(process.env.API_HOST +'house/Buildings/getRentoutList').then((response) => {      
                
                 this.recruit=response.data.data
                  console.log(this.recruit)  

             }).catch((err) => {
              
            })
        }
    }
</script>

<style>
  .crumbsSearch{
    background: #f2f2f2;
}
.crumbsSearch .content {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.crumbsSearch .content .crumbs, .crumbsSearch .content .crumbs a {
    font-size: 14px;
    color: #999;
}
.crumbsSearch .content .crumbs span {
    color: #e93e0c;
    font-weight: bold;
}
.crumbsSearch .content .search {
    position: relative;
    overflow: hidden;
}
.crumbsSearch .content .search input {
    width: 451px;
    height: 45px;
    font-size: 14px;
    padding-left: 20px;
    border-radius: 5px;
    outline: none;
}
.crumbsSearch .content .search input.btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 45px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #e93e0c;
}
.to-search{
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 45px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #e93e0c;
}
.to-search img{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 50%;
    margin-left: -12px;
    top:50%;
    margin-top: -12px;
    z-index: 3;
}

.tab_top {
    width: 1200px;
    margin: 40px auto 0;
}
.menusTab {
    width: auto;
    height: 33px;
    margin-top: 11px;
}
.menusTab li.cur {
    width: 115px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    font-size: 14px;
    color: #e93e0c;
    cursor: pointer;
    background: #ffdcd1;
    border: 1px solid #e93e0c;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-right: 5px;
    float: left;
    border-bottom: 0;
}
.menusTab li.cur.active {
    background: #e93e0c;
    z-index: 10;
    color: #fff;
}
.menusTab li a {
    width: 100%;
    display: block;
    color: #e93e0c;
}
.menusTab li.cur.active a {
    color: #fff;
}
.push {
    margin-bottom: 5px;
}
.push li {
    padding: 0 23px;
    height: 40px;
    line-height: 40px;
    background: #e93e0c;
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
    float: right;
}
.push li a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
}
.pxMain {
    width: 1200px;
    border-top: 3px solid #e93e0c;
    overflow: hidden;
    padding-bottom: 17px;
}
.tiaotop {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    height: 42px;
}
.tTit {
    float: left;
    width: 68px;
    line-height: 42px;
    text-align: left;
    color: #999;
    font-size: 14px;
    font-weight: normal;
}
.tCon {
    float: left;
    width: 1090px;
}
.adrMenu {
    line-height: 34px;
    overflow: hidden;
}
.adrMenu dd {
    float: left;
    color: #535d6a;
    font-size: 14px;
    margin-right: 30px;
    cursor: pointer;
}
.adrMenu .curDd {
    color: #fbb100;
    border-bottom:2px solid #e93e0c;
    position: relative;
}
.adrMenu .curDd::after{
    position: absolute;
    content:'';
    left: 50%;
    margin-left: -4px;
    bottom:0;
    width: 0px;
    height: 0px;
    vertical-align: middle;
    border-bottom: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    color: #e93e0c;
}
.tCon .adrMenu .curDd a {
    color: #e93e0c;
    padding: 0 15px;
}
.tCon .adrMenu dd a {
    color: #535d6a;
    width: auto;
}
.tCon a {
    display: block;
    line-height: 42px;
    float: left;
    width: 152px;
    font-size: 14px;
    color: #333;
}
.adrCon {
    margin-bottom: 17px;
}
.quyu, .ditie {
    display: none;
}
.block {
    display: block;
}

.new_di_tab {
    overflow: hidden;
    padding-left: 86px;
    border-bottom: 1px solid #f2f2f2;
}
.new_di_tab li {
    float: left;
    line-height: 35px;
    margin-right: 38px;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    color: #333;
}
.new_di_tab li:hover {
    color: #e93e0c;
}
.new_icon {
    width: 14px;
    height: 7px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -7px;
    display: none;
}

.inputSty {
    display: block;
    cursor: pointer;
    width: 13px;
    height: 13px;
    float: left;
    background-position: -27px 0;
    margin-top: 15px;
    margin-right: 10px;
    border:1px solid #999;
    border-radius: 3px;
}
.tCon .custom {
    display: block;
    line-height: 42px;
    float: left;
    width: 152px;
    font-size: 14px;
    color: #333;
}
.tCon .custom input {
    display: inline-block;
    width: 35px;
    border: 1px solid #ccc;
    padding-left: 5px;
}
.tCon .custom span {
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
    color: #e93e0c;
    cursor: pointer;
}
.select_c, .chioce_result {
    margin-bottom: 2px;
    padding-top: 4px;
}
.select_zhuzhai{
    position: relative;
}
.select_zhuzhai>img{
    position: absolute;
    right:15px;
    top:50%;
    margin-top:-2.5px;
    width: 10px;
    height: 5px;
}
.select_zhuzhai select {
    width: 108px;
    height: 30px;
    line-height: 30px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-size: 14px;
    color: #999;
    border: 1px solid #ccc;
    margin-right: 10px;
    padding-left: 10px;
}
.supurt {
    font-size: 14px;
    color: #333;
    padding-left: 25px;
    line-height: 30px;
    background-size: 13px;
}
.chioce_result ul li {
    float: left;
    padding: 0px 3px 0px 8px;
    font-size: 14px;
    color: #e93e0c;
    border: 1px solid #e93e0c;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
}
.chioce_result ul li img {
    vertical-align: middle;
    margin: -5px 0 0 10px;
    cursor: pointer;
    display: inline-block;
}
.delete_c {
    font-size: 14px;
    color: #999;
    cursor: pointer;
    line-height: 32px;
}
.delete_c img {
    vertical-align: middle;
    margin: -5px 10px 0 0;
}
.bottomAd.this {
    margin-bottom: 0;
}
.bottomAd {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    max-width: 1200px;
}
.bottomAd .bot {
    width: 1176px;
    height: 30px;
    line-height: 30px;
    background: rgba(0,0,0,.5);
    font-size: 14px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 12px;
}
.bottomAd .bot i {
    font-size: 16px;
    color: #e93e0c;
    padding: 0 6px;
}
.bottomAd .bot .date {
    margin-left: 33px;
}
.bottomAd.this {
    margin-bottom: 0;
}
.bottomAd {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    max-width: 1200px;
}
.bottomAd .bot {
    width: 1176px;
    height: 30px;
    line-height: 30px;
    background: rgba(0,0,0,.5);
    font-size: 14px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 12px;
}
.bottomAd .bot i {
    font-size: 16px;
    color: #e93e0c;
    padding: 0 6px;
}
.bottomAd .bot .date {
    margin-left: 33px;
}
.mainPart {
    padding-bottom: 65px;
}
.part_center {
    width: 1200px;
    margin: 0 auto;
}
.part {
    margin-top: 30px;
}
.renout .part_left {
    width: 100%;
}
.renout .part_left{
    width:100% !important;

}
.renout .houses_list ul li{
    overflow:hidden;
}
.renout .houses_info{
    display:block !important;
}
.renout .houses_info .houses_describe{
    float:left;
}
.renout .houses_info .houses_img{
    margin-right:15px;
    float:left;
}
.renout .houses_info .renout_houses_prise{
    float: right;
    font-size:14px;
    color:#666;
    text-align:right;
}
.renout .houses_info .renout_houses_prise span{
   font-size:22px;
   color:#e93e0c;
   font-weight:bold;
}
.renout .houses_info .renout_houses_prise .name{
    margin-top:30px;
}
.houses_list {
    margin-top: 30px;
    width: 100%;
}
.houses_list>ul>li {
    margin-top: 20px;
}
.houses_info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
}
.Dw-adver{width: 100%;}
.houses_describe {width:590px;}
.houses_describe .header {display:flex;justify-content:space-between;align-items:center;}
.houses_describe .header .title {font-size:16px;font-weight:bold;display: inline-block;}
.houses_describe .header .title:hover{color: #e93e0c;}
.houses_describe .header .price {font-size:14px;color:#666666;display:flex;align-items:flex-end;}
.houses_describe .header .price span:nth-child(1) {font-size:20px;font-weight:bold;color:#e93e0c;line-height:20px;}
.houses_describe .addr {display:flex;height:15px;align-items:center;margin-top:15px;}
.houses_describe .addr img {width:12px;margin-right:10px;margin-top: -5px;vertical-align: middle;}
.houses_describe .addr span {font-size:14px;color:#666;}
.more_box{height:50px;width:auto;margin:0 auto;clear: both;float: left; position: relative; left: 50%;padding-top: 50px;top:-70px;}
.more_box .more_ssp { position: relative;left: -50%;width: auto;height: 50px;float: left;}
.more_ssp span,.more_ssp a {float:left;width:auto;height:38px;line-height:38px;font-size:14px;color:#888;border:1px solid #d8d8d8;margin-right:10px;padding:0 15px;
	text-align:center;background-color:#fff;cursor:pointer;vertical-align:middle;}
.more_ssp span.cpb:hover,.more_ssp a:hover,.more_ssp span.cpb.in,.more_ssp a.in{width: auto;color: #fff;background: #e93e0c;border:1px solid #e93e0c;height:38px;line-height:38px;padding:0 15px;}
.more_ssp span.current{background: #e93e0c;color: #fff;border:1px solid #e93e0c;}

</style>
