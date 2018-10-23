<template>
    <div id="content">
        <div class="crumbsSearch">
            <div class="content">
                <div class="crumbs"><a href="">房乐士</a> &gt; <a href="">孝感新房 </a> &gt;<a href="">孝南楼盘 </a> &gt; <span>云湖尚景</span></div>
                <div class="search">
                    <input placeholder="请输入关键字（楼盘名/地名/开发商等）">
                    <div class="box">
                        <img src="@/assets/images/searcj.png" >
                        <input type="submit" class="btn">
                    </div>
                </div>
            </div>
        </div>
        <div class="mainPart">
            <div class="part_center">
                <div class="part">
                    <div class="lp_remark w1200">
                        <div class="com_nav this stroe_nav sec_estate_nav">
                            <ul class="clearfix">
                                <li class="active"><a href="">小区首页</a></li>
                                <li><a href="">小区详情</a></li>
                                <li><a href="">小区二手房源</a></li>
                                <li><a href="">小区点评</a></li>
                                <li><a href="">成交记录</a></li>
                                <li><a href="">价格走势</a></li>
                                <li><a href="">周边配置</a></li>
                                <li><a href="">小区相册</a></li>
                                <li><a href="">小区问答</a></li>
                                <li><a href="">附近小区</a></li>
                                <li><a href="">房价走势</a></li>
                            </ul>
                        </div>

                        <div class="store">
                            <div class="store-box-1 clearfix">

                                <div class="lf">
                                    <div class="xqcase_box">
                                        <div class="swiper_top">
                                            <ul>
                                                <li v-for="(item,index) in Albums" :key="index">
                                                    <img :src="item.house_imgurl" >
                                                </li>
                                            </ul>
                                            <span class="tprev">
                                            <img src="@/assets/images/store_prev.png" alt="">
                                            </span>
                                            <span class="tnext">
                                                <img src="@/assets/images/store_next.png" alt="">
                                            </span>
                                        </div>
                                        <div class="swiper_bot">
                                            <span class="bprev">
                                                <img src="@/assets/images/store_sprev.png" alt="">
                                            </span>
                                            <span class="bnext">
                                                <img src="@/assets/images/store_snext.png" alt="">
                                            </span>
                                            <div class="bot_view">
                                                <ul style="width: 726px;">
                                                    <li v-for="(item,index) in Albums" :key="index">
                                                        <img :src="item.house_imgurl" >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="rg estate_rg">
                                    <div class="sec_estate-title clearfix">
                                        <h2 class="fl">{{EstateDetails.house_title}}</h2>
                                        <div class="com_head fr">
                                            <div class="fr com_head_fr clearfix">
                                                <a href="" class="fx fr">
                                                    <img src="@/assets/images/dzlp13.png" >
                                                </a>
                                                <a href="" class="sc fr">
                                                    <img src="@/assets/images/dzlp14.png" >
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price estate_price clearfix">
                                        <div class="price1">
                                        <span>{{EstateDetails.house_price}}</span> <i>元/㎡ 起</i>
                                        <p>五月参考价</p>
                                        </div>
                                        <div class="price1 estate_price1">
                                        <span>0.39</span> <i>%</i>
                                        <p>环比上月</p>
                                        </div>
                                        <a class="price2" href="#jsq">
                                        <img src="@/assets/images/store_icon03.png" alt="">贷款计算器
                                        </a>
                                    </div>
                                    <div class="apply2">
                                    <div class="apply_txt">
                                        <div class="apply_img">
                                            优惠
                                        </div>
                                        <p>一键咨询最低报价/首付及税费等</p>
                                    </div>
                                    <div class="apply_btn">
                                        询底价
                                    </div>
                                    </div>
                                    <div class="tell">
                                        咨询电话：<span>{{EstateDetails.house_tel}}</span>
                                    </div>
                                    <div class="infor estate_infor">
                                    <p>楼盘地址: <span>{{EstateDetails.house_address}}</span></p>
                                    <p>物业公司：<span>{{EstateDetails.d_wuye}}</span></p>
                                    <p>开 发 商：<span>{{EstateDetails.d_developers}}</span></p>
                                    <p>产权年限：<span>{{EstateDetails.d_years}}</span></p>
                                    <p>二手房源：<span>{{EstateDetails.house_total_num}}套</span></p>
                                    <p>建筑类型：<span>{{EstateDetails.house_model}}</span></p>
                                    <p>最近成交：<span>{{EstateDetails.tradelog_num}}套</span></p>
                                    <p>总 户 数：<span>{{EstateDetails.d_totalholds}}户</span></p>
                                    <p>楼栋总数：<span>{{EstateDetails.d_totalbuildings}}栋</span></p>
                                    </div>
                                    <div class="counselor clearfix">
                                        <span>置业顾问：</span>
                                        <ul>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                <div class="name">
                                                    房乐士
                                                </div>
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on">
                                                </div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="counselor_img">
                                                <img src="@/assets/images/jjrdp1.png" alt="">
                                                </div>
                                                <p>李鹏程</p>
                                                <div class="state on"></div>
                                                <div class="ph_400" :style="note">
                                                    <div class="bg_400 clearfix">
                                                        <span>4.6分</span>
                                                        <i>|</i>
                                                        <span class="ph_text">4008900000 转 378323</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="counselor_rg">
                                            <img src="@/assets/images/store_rg.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bottomAd this">
                                <a href="#">
                                    <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;">
                                    <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
                                </a>
                            </div>

                            <div class="rim estate_rim">
                                <div class="rim-nav">
                                    <ul>
                                        <li class="on">云湖尚景二手房</li>
                                    </ul>
                                    <a href="" class="more">更多</a>
                                </div>
                                <div class="estate_tj">
                                    <p class="clearfix"><em class="fl">价格分布：</em><span><a href="#">3000万以下（10套)</a></span><span><a href="#">3000万-4000万（10套）</a></span><span><a href="#">4000万-5000万（10套）</a></span><span><a href="#">5000万-6000万（10套）</a></span><span><a href="#">6000万-8000万（10套）</a></span><span><a href="#">8000万-10000万（23套）</a></span></p>
                                    <p class="clearfix"><em class="fl">户型分布：</em><span><a href="#">一居（1套)</a></span><span><a href="#">二居（1套）</a></span><span><a href="#">三居（1套）</a></span><span><a href="#">四居（1套）</a></span><span><a href="#">五居（1套）</a></span><span><a href="#">五居以上（1套）</a></span></p>
                                </div>
                                <div class="rim-con estate_rim_con">
                                    <ul>
                                        <li v-for="(item,index) in EstateDetails.second_house" :key="index">
                                            <a href="" class="img">
                                            <img :src="item.b_imgs[0]" alt="">
                                            <span>特价</span>
                                            </a>
                                            <div class="bot">
                                                <p class="name">{{item.house_title}}</p>
                                                <div class="price clearfix">
                                                <span class="ld">{{item.b_price}}<em>元/m2</em></span>
                                                </div>
                                                <p class="xq">{{item.b_orientation}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="store_ad">
                                <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                            </div>
                            <div class="store_ad">
                                <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                            </div>
                            <div class="store_ad">
                                <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                            </div>

                            <div class="store-box-2">
                                <div class="remark" style="float: left;">
                                    <div class="store_tit">
                                            <h2>云湖尚景楼盘动态</h2>
                                            <p class="score"></p>
                                            <a href="" class="myremark">我要点评</a>
                                        </div>

                                    <p class="fx">分享您最真实的居住体验，帮助更多的人找到理想的家，快来点评吧！</p>
                                    <ul>
                                        <li v-for="(item,index) in EstateDetails.house_new" :key="index">
                                            <img src="@/assets/images/jjrdp1.png" alt="">
                                            <div class="txt">
                                                <p>{{item.n_detail}}</p>
                                                <div class="bot">
                                                    <span>武汉-网友楼市动态 {{item.n_create_time}} 发布</span>
                                                    <i>回复（0）</i>
                                                    <i>有用（0）</i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" class="remark_all">查看全部点评</a>
                                </div>
                                <div class="dynamic2 clearfix">
                                    <div class="store_tit">
                                        <h2>云湖尚景问答</h2>
                                        <p class="score"></p>
                                        <a href="" class="more">查看更多</a>
                                    </div>
                                    <div class="dynamic2con" v-for="(item,index) in problem" :key="index">
                                        <div class="que_lf clearfix">
                                            <div class="quelf" style="float: left;"><em>问</em>{{item.problem_content}}</div>
                                            <div class="querg" style="float: right;">{{item.answer_num}}个回答</div>
                                        </div>
                                        <div class="ans_lf">
                                            <div class="anslf" v-for="(ques,index) in item.answer" :key="index"><em>答</em>{{ques.answer_content}}</div>
                                        </div>
                                        <div class="dynamic2conbot clearfix">
                                            <img src="@/assets/images/jjrdp1.png" alt="">

                                            <div class="txt">
                                                <h2>王文军</h2>
                                                <span>置业顾问</span>
                                                <div class="dynamic2conbott1">小区绿化很高，坐落在美丽的后官湖畔。世茂龙湾开发商售楼处刘150经7126理7073</div>
                                                <div class="dynamic2conbott2">选房有疑问，问问小区置业顾问吧</div>
                                                <button>向该小区顾问提问</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="house-infor">
                            <h2 class="clearfix"><span class="fl">云湖尚景成交记录</span><a href="#" class="fr">更多</a></h2>
                            <div class="dh clearfix">
                                <span class="infor">房源信息</span>
                                <span class="mj">面积</span>
                                <span class="qytime">签约时间</span>
                                <span class="cjprice">成交价</span>
                                <span class="cjf">成交均价</span>
                                <span class="sjly">数据来源</span>
                            </div>
                            <ul class="list">
                                    <li class="clearfix">
                                    <div class="img fl">
                                        <img src="@/assets/images/Dw-img21.jpg">
                                    </div>
                                    <div class="text fl">
                                        <h4>2室2厅2卫</h4>
                                        <p>中层(共33)</p>
                                        <p>南北向</p>
                                    </div>
                                    <span class="mj fl">121m2毛坯</span>
                                    <span class="fl qytime">2016-08-28</span>
                                    <span class="cjprice fl"><em>13000</em>万</span>
                                    <span class="cjf fl"><em>1000</em>万/m2</span>
                                    <span class="sjly fl">房乐士</span>
                                    </li>
                            </ul>
                            <p class="seemore"><a href="#">查看全部成交记录</a></p>
                        </div>

                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>

                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>

                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>

                        <div class="store">
                            <div class="store-box-6">
                                    <div class="store_tit">
                                    <a href="javascript:void(0)" class="h2" name="jgzs">云湖尚景价格走势图</a>
                                    </div>
                                    <div class="chaet_tit1 clearfix">
                                        <div class="chaet_tit">
                                            <div class="h2">
                                                <div class="h2_tit">
                                                    本楼盘（住宅）06月平均价格
                                                </div>
                                            </div>
                                            <p><span>￥24000</span>元/㎡ 环比 0%</p>
                                        </div>

                                        <div class="chaet_tit">
                                            <div class="h2">
                                                <div class="h2_tit">
                                                    本楼盘（住宅）06月平均价格
                                                </div>
                                            </div>
                                            <p><span>￥24000</span>元/㎡ 环比 0%</p>
                                        </div>

                                        <div class="chaet_tit">
                                            <div class="h2">
                                                <div class="h2_tit">
                                                    本楼盘（住宅）06月平均价格
                                                </div>
                                            </div>
                                            <p><span>￥24000</span>元/㎡ 环比 0%</p>
                                        </div>
                                    </div>

                                    <div class="chaet_name">
                                        2017.08-2018.08房价走势图（元/㎡）
                                    </div>
                                    <div class="chaet" id="chaet" _echarts_instance_="ec_1539742645026" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 1200px; height: 188px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="1200" height="188" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1200px; height: 188px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px/21px &quot;Microsoft YaHei&quot;; padding: 5px; left: 285px; top: -53px;">2017.10<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#ff6403;"></span>本项目参考价: 6,400<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#a0cb47;"></span>孝感房价: 6,100<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#0186ff;"></span>孝南房价: 5,690</div></div>
                            </div>


                            <div class="store-box-4">
                                    <div class="store_tit clearfix">
                                        <a href="javascript:void(0)" class="h2" name="ckdt">位置及周边街景地图</a>
                                        <em class="fr">驾车</em>
                                    </div>
                                    <div id="map">
                                        <img src="@/assets/images/store_map.jpg" alt="">
                                        <div class="map_nav">
                                            <div class="map_nav_1">
                                                <ul>
                                                    <li class="on">楼盘</li>
                                                    <li>交通</li>
                                                    <li>商业</li>
                                                    <li>学校</li>
                                                    <li>医院</li>
                                                    <li>其他</li>
                                                </ul>
                                            </div>
                                            <div class="map_nav_2">
                                                <ul>
                                                    <li>
                                                    <div class="number">
                                                        1
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                <li>
                                                    <div class="number">
                                                        2
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class="number">
                                                        3
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class="number">
                                                        4
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class="number">
                                                        5
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class="number">
                                                        6
                                                    </div>
                                                    <div class="place">
                                                        <p>派米雷佘山智地</p>
                                                        <i>待售</i>
                                                    </div>
                                                    <div class="distance">
                                                        1590米
                                                    </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        <div class="btn">
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>
                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>
                        <div class="store_ad">
                            <a href=""><img src="@/assets/images/store_ad.jpg" alt=""></a>
                        </div>

                        <div class="store-box-5 estate-box-5">
                            <div class="store_tit">
                                <h2>云湖尚景楼盘信息</h2>
                                </div>
                            <div class="picScroll-left">
                                <div class="hd">
                                    <a class="next"></a>
                                    <a class="prev"></a>
                                </div>
                                <div class="bd">
                                    <div class="tempWrap" style="overflow:hidden; position:relative; width:1225px"><div class="tempWrap" style="overflow:hidden; position:relative; width:1225px"><ul class="picList" style="width: 1470px; left: -245px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>户型（1）</p>
                                        </li>
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>交通图（3）</p>
                                        </li>
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>华鸿.公园天下相册</p>
                                        </li>
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>华鸿.公园天下相册</p>
                                        </li>
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>华鸿.公园天下相册</p>
                                        </li>
                                        <li style="float: left; width: 220px;"><a href=""><img src="@/assets/images/ad5.jpg" alt=""></a>
                                        <p>华鸿.公园天下相册</p>
                                        </li>
                                    </ul></div></div>
                                </div>
                            </div>
                        </div>

                        <div class="store-box-6">
                            <div class="store_tit">
                            <a href="javascript:void(0)" class="h2" name="jsq">云湖尚景房贷计算器</a>
                            <a href="" class="more">更多贷款计算器</a>
                            </div>
                            <div class="con counter">
                                <div class="fdjs fl">
                                <div class="logo">
                                    <div class="img fl">
                                    <img src="@/assets/images/Dw-calculator.png">
                                    </div>
                                    <div class="name fl">
                                    <h2>房贷计算器</h2>
                                    <p>选择基本情况，帮您快速计算房贷</p>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="form">
                                    <div class="line">
                                        <div class="name">估算总价：</div>
                                        <input type="text"><span>万</span>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="line">
                                        <div class="name">首付成数：</div>
                                        <select name="" id="">
                                            <option value="">3成</option>
                                            <option value="">5成</option>
                                            <option value="">7成</option>
                                        </select>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="line">
                                        <div class="name">贷款类别：</div>
                                        <select name="" id="">
                                            <option value="">公积金贷款</option>
                                            <option value="">商业贷款</option>
                                            <option value="">混合贷款</option>
                                        </select>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="line">
                                        <div class="name">贷款时间：</div>
                                        <select name="" id="">
                                            <option value="">10年（120期）</option>
                                            <option value="">20年（240期）</option>
                                            <option value="">30年（360期）</option>
                                        </select>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="questionnaire">
                                    <div class="answer answer1 check">
                                        <ul>
                                            <li><input type="checkbox" id="feature1" class="feature">
                                                <label for="feature1"></label> 等额本息</li>
                                            <li><input type="checkbox" id="feature2" class="feature">
                                                <label for="feature2"></label> 等额本金</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div class="calculate fl">开始<br>计算</div>
                                <div class="jsjg fr">
                                <h2>您的账单</h2>
                                <div class="bill">均价：<span>待定</span>估算总计：<span>约106万</span></div>
                                <div class="pie" id="pie" _echarts_instance_="ec_1539742645027" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 460px; height: 205px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="460" height="205" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 460px; height: 205px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                                <div class="amount">每月还款：<span>17248元</span></div>
                                <div class="tipd">*备注：房贷、税费查询结果仅供参考</div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>

                        <div class="rim">
                            <div class="store_tit">
                                <a href="javascript:void(0)" class="h2" name="jsq">附近小区</a>
                                <a href="" class="more">更多</a>
                                </div>
                            <div class="rim-con">
                                <ul>
                                    <li v-for="(item,index) in EstateDetails.ner_second_house" :key="index">
                                        <a href="" class="img">
                                        <img :src="item.house_thumb" alt="">
                                        </a>
                                        <div class="bot">
                                            <p>{{item.house_title}}</p>
                                            <div class="price">
                                                <span>{{item.house_price}}</span>
                                                元/㎡
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="rim">
                            <div class="store_tit">
                                <a href="javascript:void(0)" class="h2" name="jsq">您可能感兴趣的新房楼盘</a>
                                <a href="" class="more">更多</a>
                                </div>
                            <div class="rim-con">
                                <ul>
                                    <li v-for="(item,index) in EstateDetails.new_house" :key="index">
                                        <a href="" class="img">
                                        <img :src="item.house_thumb" alt="">
                                        </a>
                                        <div class="bot">
                                            <p>{{item.house_title}}</p>
                                            <div class="price">
                                            <span>{{item.b_price}}</span>
                                            元/㎡
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import echarts from 'echarts'
export default {
    
    name:"estateDetails",
    data(){
        return{
            note:{
                backgroundImage: "url("+require("@/assets/images/icon_bg.png")+")",
                backgroundRepeat:"no-repeat",
            },
            EstateDetails:[],
            //相册数据
            Albums:[],
            //截取问答数组的第一个
            problem:[],
        }
    },
    mounted(){
        
    },
    created(){
        this.axios.get(process.env.API_HOST+'secondhouse/Index/EstateDetails',{params:{id:this.$route.query.id}}).then((res) => {
            //console.log(res.data.data);
            this.EstateDetails = res.data.data;
            console.log(this.EstateDetails);
            this.Albums = res.data.data.albums.a1.data;
            this.problem = res.data.data.problem.slice(0,1);
            //console.log(this.problem)
        }).catch((err) => {
            console.log(err);
        })
    }
}

$(function(){
    //$(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});

    $(".swiper_bot ul li:last").css("margin-right",0+"px")

    var botm=parseInt($(".swiper_bot ul li").outerWidth(true))
    var botl=$(".swiper_bot ul li").length*botm
    $(".swiper_bot ul").css("width",botl+"px")

    var bots=botm

    var n=0;
    var i=0;

    function cg(n){
        $(".swiper_top ul li").eq(n).stop(true,true).fadeIn(500).show().siblings().stop(true,true).fadeOut(500).hide()

        $(".swiper_bot ul li").eq(n).css("border","2px solid #e93e0c").siblings().css("border","none")
    }
    // 大图片的点击
    $(".swiper_top .tprev").click(function(){
        console.log(n)
        if(n>0){
            n--;
            cg(n)
            ld(n)
        }
    });
    $(".swiper_top .tnext").click(function(){
        //console.log(n)
        if(n<$(".swiper_bot ul li").length-1){
            n++;
            cg(n)
            rd(n)

        }
    });
    $(".swiper_bot .bprev").click(function(){

        if(n>0){
            n--;
            cg(n)
            ld(n)
        }
    });
    $(".swiper_bot .bnext").click(function(){
        //console.log(1)
        if(n<$(".swiper_bot ul li").length-1){
            n++;
            cg(n)
            rd(n)

        }
    });
    // 右移动算法
    function rd(n){
        if(n>3+i){
            i++
            var speed=$(".swiper_bot ul").position().left-bots
            $(".swiper_bot ul").stop(true,true).animate({left:speed+"px"}, 0.5)
        }
    }
    // 左移动算法
    function ld(n){
        if(n==i-1){
            var speed=$(".swiper_bot ul").position().left+bots
            $(".swiper_bot ul").stop(true,true).animate({left:speed+"px"}, 0.5)
            i--
        }
    }
    $(".bot_view ul li").click(function(){
        //console.log()
        n=$(this).index()
        cg(n)
        rd(n)
    })


    //图片列表
    $(".rim-con ul li:nth-child(5n)").css("margin-right","0")
    $(".dynamic2list table tr:first").css("padding-top","20px")
    $(".dynamic2list table tr:first").css("padding-top","20px")
    $(".store .store-box-1 .rg .price .price_info").hover(function() {
         $(".fnzoushi01").slideDown().stop(true, true).css("overflow","visible");
    }, function() {
         $(".fnzoushi01").slideUp().stop(true, true).css("overflow","visible");
    });
    $(".store .store-box-1 .rg .store_more .scan").hover(function() {
         $(".erpop").slideDown().stop(true, true).css("overflow","visible");
    }, function() {
         $(".erpop").slideUp().stop(true, true).css("overflow","visible");
    });
})

// $(function(){
//     var dom = document.getElementById("pie");
//     var myChart = echarts.init(dom);
//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: "{a} <br/>{b}: {c} 万({d}%)"
//         },
//         color:['#e2574c','#9fd4f5','#f7e77a'],
//         legend: {
//             orient: 'vertical',
//             x: 'left',
//             y: 'center',
//             data:['首付','贷款金额','偿还利息'],
//         toolbox: {
//             show : true,
//             feature : {

//                 saveAsImage : {show: true}
//             }
//         },
//         calculable : true,

//         },
//         series: [
//             {
//                 name:'金额比例',
//                 type:'pie',
//                 radius: ['50%', '70%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center',
//                         label : {
//                             show : false
//                         },
//                         labelLine : {
//                             show : false
//                         }

//                     },
//                     emphasis: {
//                         show: true,
//                         textStyle: {
//                             fontSize: '16',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 data:[
//                     {value:11, name:'首付'},
//                     {value:95, name:'贷款金额'},
//                     {value:8, name:'偿还利息'}
//                 ]
//             }
//         ]
//     };

//     if (option && typeof option === "object") {
//         myChart.setOption(option, true);
//     }
// })
</script>

<style scoped>
#content .crumbsSearch {
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
.crumbsSearch .content .search .box{
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 45px;
    background-color: #e93e0c;
}
.crumbsSearch .content .search .box img{
    position: absolute;
    z-index: 3;
    width: 24px;
    height: 24px;
    left: 50%;
    margin-left: -12px;
    top: 50%;
    margin-top: -12px;
}
.crumbsSearch .content .search input.btn{
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 45px;
    display: block;
    cursor: pointer;
    background-color: #e93e0c;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
#content .mainPart {
    padding-bottom: 65px;
}
#content .part_center {
    width: 1200px;
    margin: 0 auto;
}
.part {
    margin-top: 30px;
}
.com_nav {
    width: 100%;
    height: 50px;
    background: #e93e0c;
    margin-bottom: 50px;
}
.stroe_nav {
    margin-top: 30px;
    margin-bottom: 30px;
}
.com_nav ul li {
    float: left;
    width: 100px;
    text-align: center;
    line-height: 50px;
}
.sec_estate_nav ul li {
    width: 109px;
}
.com_nav ul li a {
    color: #fff;
    font-size: 16px;
    position: relative;
}
.com_nav ul li:hover a, .com_nav ul li.active a {
    font-weight: bold;
}
.com_nav ul li.active a::after{
    position: absolute;
    content:'';
    width: 100%;
    height: 2px;
    background-color: #fff;
    left:0;
    bottom:-8px;
}
.store .store-box-1 {
    margin-bottom: 20px;
}
.store .store-box-1 .lf {
    width: 550px;
    float: left;
}
.swiper_top {
    width: 550px;
    height: 415px;
    position: relative;
    margin-bottom: 10px;
}
.swiper_top ul {
    width: 100%;
    height: 100%;
}
.swiper_top ul li:first-child {
    z-index: 10;
}
.swiper_top ul li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.swiper_top ul li img {
    display: inline-block;
    width: 100%;
    height: 100%;
}
.swiper_top .tprev {
    display: block !important;
    width: 42px;
    height: 85px;
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -42.5px;
    z-index: 99;
    cursor: pointer;
}
.swiper_top .tnext {
    display: block !important;
    width: 42px;
    height: 85px;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -42.5px;
    z-index: 99;
    cursor: pointer;
}
.swiper_bot {
    width: 550px;
    height: 88px;
    margin: 0 auto;
    position: relative;
}
.swiper_bot .bprev {
    display: block !important;
    width: 32px;
    height: 86px;
    position: absolute;
    top: 0;
    left: 0px;
    z-index: 99;
    cursor: pointer;
    background: #7f7f7f;
    text-align: center;
    padding-top: 33px;
    box-sizing: border-box;
}
.swiper_bot .bnext {
    display: block;
    width: 32px;
    height: 86px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    cursor: pointer;
    background: #7f7f7f;
    text-align: center;
    padding-top: 33px;
    box-sizing: border-box;
}
.swiper_bot .bot_view {
    width: 480px;
    height: 86px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}
.swiper_bot ul {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
.swiper_bot ul li:first-child {
    border: 2px solid #e93e0c;
}
.swiper_bot ul li {
    float: left;
    margin-right: 5px;
    width: 116px;
    height: 86px;
    box-sizing: border-box;
}
.swiper_bot ul li img {
    width: 100%;
    height: 100%;
}
.store .store-box-1 .rg {
    float: right;
    width: 620px;
}
.sec_estate-title {
    margin-bottom: 30px;
}
.sec_estate-title h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
    color: #000;
}
.com_head .com_head_fr {
    font-size: 14px;
    color: #666;
    line-height: 30px;
}
.store .store-box-1 .rg .price {
    font-size: 14px;
    color: #999;
    margin-bottom: 30px;
}
.store .store-box-1 .rg .price .price1 {
    float: left;
    margin-right: 20px;
}
.estate_price .price1 {
    margin-right: 88px !important;
}
.store .store-box-1 .rg .price .price1 span {
    font-size: 26px;
    color: #e93e0c;
    font-weight: bold;
}
.store .store-box-1 .rg .price .price1 i {
    color: #333;
}
.estate_price p {
    text-align: center;
}
.store .store-box-1 .rg .price .price1 span {
    font-size: 26px;
    color: #e93e0c;
    font-weight: bold;
}
.estate_price1 span {
    font-size: 16px !important;
    line-height: 36px;
}
.estate_price1 span {
    /* background-image: url(../images/Dw-up.png);
    background-repeat: no-repeat;
    background-position: left center; */
    padding-left: 18px;
}
.store .store-box-1 .rg .price .price2 {
    float: left;
    padding-top: 10px;
    padding-right: 12px;
    line-height: 17px;
    display: block;
    color: #999;
    position: relative;
    cursor: pointer;
}
.estate_price .price2 {
    float: right !important;
}
.store .store-box-1 .rg .price .price2 img {
    float: left;
    margin-right: 4px;
}
.store .store-box-1 .rg .apply2 {
    width: 620px;
    margin-bottom: 20px;
    overflow: hidden;
}
.estate_rg .apply2, .estate_rg .tell {
    margin-bottom: 10px !important;
}
.store .store-box-1 .rg .apply2 .apply_txt {
    box-sizing: border-box;
    width: 520px;
    height: 44px;
    padding: 10px;
    background: #f5f5f5;
    float: left;
}
.store .store-box-1 .rg .apply2 .apply_txt .apply_img {
    float: left;
    width: 40px;
    height: 24px;
    border: 2px solid #e93e0c;
    box-sizing: border-box;
    font-size: 12px;
    color: #e93e0c;
    padding: 3.5px;
    text-align: center;
    line-height: 15px;
    margin-right: 15px;
}
.store .store-box-1 .rg .apply2 .apply_txt p {
    font-size: 14px;
    color: #999;
    line-height: 24px;
}
.store .store-box-1 .rg .apply2 .apply_btn {
    width: 97px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    background: #e93e0c;
    float: left;
}
.store .store-box-1 .rg .tell {
    font-size: 14px;
    color: #999;
    margin-bottom: 15px;
}
.store .store-box-1 .rg .tell span {
    font-size: 24px;
    color: #333;
    font-weight: bold;
}
.store .store-box-1 .rg .infor {
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
}
.estate_rg .estate_infor {
    margin-bottom: 10px !important;
}
.store .store-box-1 .rg .infor p {
    margin-bottom: 10px;
}
.store .store-box-1 .rg .infor span {
    color: #666;
}
.store .store-box-1 .rg .counselor {
    text-align: center;
    font-size: 14px;
}
.store .store-box-1 .rg .counselor span {
    line-height: 85px;
    color: #999;
    float: left;
}
.store .store-box-1 .rg .counselor ul {
    float: left;
}
.store .store-box-1 .rg .counselor ul li {
    float: left;
    position: relative;
    margin-right: 15px;
}
.store .store-box-1 .rg .counselor ul li .counselor_img {
    width: 60px;
    height: 60px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 5px;
}
.store .store-box-1 .rg .counselor .counselor_img img {
    width: 60px;
    height: 60px;
}
.store .store-box-1 .rg .counselor .counselor_img .name {
    width: 58px;
    height: 22px;
    background: rgba(0,0,0,0.6);
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    position: absolute;
    left: 2.5px;
    bottom: 0;
}
.store .store-box-1 .rg .counselor ul li p {
    color: #333;
}
.store .store-box-1 .rg .counselor .on {
    background: #38a204;
}
.store .store-box-1 .rg .counselor .state {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cccccc;
    position: absolute;
    right: 2px;
    top: 6px;
}
.store .store-box-1 .rg .counselor ul li .ph_400 {
    position: absolute;
    top: -55px;
    left: 50%;
    margin-left: -125px;
    color: #666666;
    font-size: 14px;
    line-height: 37px;
    /* background: url(../images/icon_bg.png) no-repeat; */
    width: 251px;
    height: 49px;
    display: none;
    text-align: center;
    z-index: 112;
}
.bg_400 {
    line-height: 37px;
    display: inline-block;
}
.store .store-box-1 .rg .counselor ul li .ph_400 span, .ph_400 i {
    float: left;
    font-style: normal;
    line-height: 37px;
    color: #999;
}
.ph_400 i {
    margin: 0 9px;
    color: #dfdfdf;
    font-size: 21px;
}
.store .store-box-1 .rg .counselor .counselor_rg {
    float: right;
    margin-top: 25px;
}
.estate_infor p:nth-child(n+4) {
    display: inline-block;
    width: 48%;
}
.store .store-box-1 .rg .counselor .on {
    background: #38a204;
}
.store .store-box-1 .rg .counselor ul li:hover .ph_400 {
    display: block;
}
.rim {
    margin-bottom: 50px;
    margin-top: 50px;
}
.rim .rim-nav {
    overflow: hidden;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 2px solid #e93e0c;
    margin-bottom: 20px;
}
.estate_rim .rim-nav {
    margin-bottom: 0 !important;
}
.rim .rim-nav ul {
    float: left;
}
.rim .rim-nav ul li {
    float: left;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
}
.rim .rim-nav ul li.on {
    background: #e93e0c;
    color: #fff;
}
.rim .rim-nav .more {
    font-size: 14px;
    color: #999;
    float: right;
}
.estate_rim .estate_tj p em {
    font-size: 14px;
    color: #999;
    line-height: 36px;
}
.estate_rim .estate_tj p span {
    float: left;
    font-size: 14px;
    line-height: 36px;
    margin-right: 20px;
}
.estate_rim .estate_tj p span a {
    color: #333;
}
.rim .rim-con ul {
    overflow: hidden;
}
.rim .rim-con ul li {
    float: left;
    width: 220px;
    margin-right: 25px;
}
.estate_rim_con>ul>li {
    margin-bottom: 10px;
}
.rim .rim-con ul li .img {
    width: 220px;
    height: 165px;
    display: block;
    overflow: hidden;
}
.estate_rim_con .img {
    position: relative;
}
.rim .rim-con ul li .img img {
    width: 220px;
    height: 165px;
    transition: transform 1.5s;
    -webkit-transition: transform 1.5s;
    -moz-transition: transform 1.5s;
    -ms-transition: transform 1.5s;
    transform: scale(1,1);
    -webkit-transfrom: scale(1,1);
    -moz-transfrom: scale(1,1);
    -ms-transfrom: scale(1,1);
}
.estate_rim_con .img span {
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 32px;
    z-index: 3;
    background-color: #e93e0c;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
}
.rim .rim-con ul li .bot {
    font-size: 14px;
    overflow: hidden;
    color: #333;
    line-height: 36px;
}
.rim .rim-con ul li .bot p {
    float: left;
    font-weight: bold;
}
.estate_rim_con .bot .name {
    float: none !important;
    line-height: 24px;
}
.rim .rim-con ul li .bot .price {
    float: right;
}
.estate_rim_con .bot .price {
    float: none !important;
}
.estate_rim_con .bot .price .ld {
    float: left;
    font-size: 14px;
    line-height: 24px;   
    color: #e93e0c;
    font-weight: bold;
}
.estate_rim_con .bot .price .ld em{
    color: #333;
    margin-left: 5px;
    font-weight: normal !important;
}
.rim .rim-con ul li .bot .price span {
    color: #e93e0c;
    font-weight: bold;
}
.estate_rim_con .bot .price .d {
    float: right !important;
    line-height: 24px;
}
.estate_rim_con .bot .price .d em {
    color: #333 !important;
}
.estate_rim_con .bot .xq {
    font-size: 14px;
    line-height: 24px;
    color: #333;
    float: none !important;
    font-weight: normal !important;
}
.rim .rim-con ul li .img:hover img {
    transition: transform 1.5s;
    -webkit-transition: transform 1.5s;
    -moz-transition: transform 1.5s;
    -ms-transition: transform 1.5s;
    transform: scale(1.2,1.2);
    -webkit-transfrom: scale(1.2,1.2);
    -moz-transfrom: scale(1.2,1.2);
    -ms-transfrom: scale(1.2,1.2);
}
.estate_rim .estate_tj p span a:hover {
    color: #e93e0c;
}
.store_ad a {
    display: block;
    width: 100%;
}
.store_ad a img {
    width: 100%;
}
.store .store-box-2 {
    margin-top: 50px;
    overflow: hidden;
    margin-bottom: 30px;
}
.store .store-box-2 .remark {
    width: 560px;
    float: right;
}
.store .store_tit {
    overflow: hidden;
    margin-bottom: 15px;
}
.store_tit h2 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    border-left: 2px solid #e93e0c;
    margin-bottom: 15px;
}
.store .store_tit h2, .store .store_tit .h2 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    float: left;
    padding-left: 10px;
    box-sizing: border-box;
    border-left: 2px solid #e93e0c;
    display: block;
}
.store .store_tit .score {
    font-size: 16px;
    color: #333;
}
.store .store_tit .myremark {
    font-size: 14px;
    color: #e93e0c;
    float: right;
    width: 96px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border: 1px solid #e93e0c;
}
.store .store-box-2 .remark .fx {
    font-size: 14px;
    color: #999;
    margin-bottom: 15px;
}
.store .store-box-2 .remark ul li {
    margin-bottom: 10px;
    overflow: hidden;
}
.store .store-box-2 .remark ul li img {
    width: 60px;
    height: 60px;
    float: left;
    margin-right: 20px;
}
.store .store-box-2 .remark ul li .txt {
    float: left;
    font-size: 14px;
    width: 480px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
}
.store .store-box-2 .remark ul li .txt p {
    color: #666;
    line-height: 24px;
    margin-bottom: 10px;
}
.store .store-box-2 .remark ul li .txt .bot {
    overflow: hidden;
    color: #999;
}
.store .store-box-2 .remark ul li .txt .bot span {
    float: left;
}
.store .store-box-2 .remark ul li .txt .bot i {
    float: right;
}
.store .store-box-2 .remark .remark_all {
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #999;
}
.store .store-box-2 .dynamic2 {
    float: right;
    width: 560px;
}
.store .dynamic2 .store_tit {
    overflow: hidden;
    margin-bottom: 20px;
}
.dynamic2con .quelf {
    font-size: 16px;
    line-height: 30px;
    color: #000;
    margin-bottom: 10px;
    max-width: 500px;
    overflow: hidden;
    height: 30px;
}
.dynamic2con .quelf em {
    font-size: 14px;
    line-height: 30px;
    color: #fff;
    background: #e93e0c;
    padding: 5px 8px;
    margin-right: 9px;
}
.dynamic2con .querg {
    font-size: 16px;
    line-height: 30px;
    color: #999;
}
.dynamic2con .anslf {
    font-size: 14px;
    line-height: 30px;
    color: #999;
}
.dynamic2con .anslf em {
    font-size: 14px;
    line-height: 30px;
    color: #fff;
    background: #169bd5;
    padding: 5px 8px;
    margin-right: 9px;
}
.dynamic2conbot {
    margin-top: 20px;
}
.dynamic2conbot img {
    width: 60px;
    height: 60px;
    float: left;
    margin-right: 20px;
}
.dynamic2conbot .txt {
    width: 478px;
    float: right;
}
.dynamic2conbot .txt h2 {
    font-size: 14px;
    line-height: 30px;
    color: #333;
    float: left;
}
.dynamic2conbot .txt span {
    font-size: 14px;
    line-height: 30px;
    color: #333;
    border: 1px solid #e93e0c;
    padding: 8px 9px;
    margin-left: 9px;
}
.dynamic2conbot .txt .dynamic2conbott1 {
    font-size: 14px;
    line-height: 28px;
    color: #666;
    margin-top: 10px;
}
.dynamic2conbot .txt .dynamic2conbott2 {
    font-size: 14px;
    line-height: 28px;
    color: #999;
    margin-top: 10px;
}
.dynamic2conbot .txt button {
    font-size: 16px;
    line-height: 36px;
    color: #fff;
    width: 188px;
    height: 36px;
    background: #e93e0c;
    text-align: center;
    margin-top: 10px;
}
.house-infor {
    margin-top: 30px;
}
.house-infor h2 {
    font-size: 20px;
    line-height: 36px;
    font-weight: bold;
    position: relative;
    padding-left: 12px;
    margin-bottom: 10px;
}
.house-infor h2::before {
    position: absolute;
    width: 3px;
    height: 18px;
    background-color: #e93e0c;
    content: '';
    left: 0;
    top: 9px;
}
.house-infor h2 a {
    font-size: 14px;
    color: #999;
}
.house-infor .dh {
    width: 100%;
    height: 45px;
    background-color: #f5f5f5;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 170px;
    text-align: center;
    float: left;
}
.house-infor .dh span.infor {
    width: 335px;
    text-align: left;
    padding-left: 15px;
}
.house-infor ul.list li {
    float: none;
    margin-bottom: 0;
    padding: 20px 0;
    border-bottom: 1px solid #f5f5f5;
}
.house-infor ul.list .img {
    margin-right: 20px;
}
.house-infor ul.list .img img {
    width: 145px;
    height: 110px;
    display: block;
}
.house-infor ul.list .text {
    width: 175px;
}
.house-infor ul.list .text h4 {
    font-size: 14px;
    line-height: 36px;
    font-weight: bold;
    color: #333;
}
.house-infor ul.list .text p {
    font-size: 14px;
    color: #666;
    line-height: 36px;
}
.house-infor ul.list span {
    font-size: 14px;
    color: #666;
    text-align: center;
    width: 170px;
    margin-top: 45px;
}
.house-infor ul.list span em {
    font-weight: bold;
    color: #e93e0c;
    margin-right: 5px;
}
.house-infor p.seemore {
    text-align: center;
    font-size: 14px;
    color: #999;
    line-height: 36px;
    margin: 15px 0;
}
.store-box-6 {
    margin: 50px 0;
}
.store .store_tit {
    overflow: hidden;
    margin-bottom: 15px;
}
.store .store_tit h2, .store .store_tit .h2 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    float: left;
    padding-left: 10px;
    box-sizing: border-box;
    border-left: 2px solid #e93e0c;
    display: block;
}
.store-box-6 .chaet_tit {
    margin-top: 20px;
    height: 80px;
    background: #fef5f3;
    text-align: center;
    font-size: 14px;
    color: #666;
    line-height: 20px;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 25px;
}
.store-box-6 .chaet_tit {
    width: 33%;
    float: left;
    margin-right: 0.3%;
}
.chaet_tit2 .chaet_tit {
    background: #f5f5f5;
}
.store-box-6 .chaet_tit .h2 {
    font-size: 14px;
    color: #666;
    margin-bottom: 3px;
}
.store-box-6 .chaet_tit .h2_tit {
    display: inline-block;
    /* background: url(../images/store_icon10.png) 0 center no-repeat; */
    padding-left: 20px;
    box-sizing: border-box;
}
.store-box-6 .chaet_tit p span {
    color: #e93e0c;
    font-size: 14px;
    font-weight: bold;
}
.store-box-6 .chaet_name {
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 25px;
}
.store-box-6 .chaet {
    width: 100%;
    height: 188px;
}
.store .store-box-4 {
    margin-bottom: 50px;
}

.store .store-box-4 {
    margin-top: 50px;
}
.store .store_tit {
    overflow: hidden;
    margin-bottom: 15px;
}
.store .store_tit em {
    font-size: 14px;
    color: #666;
}
#map {
    height: 450px;
    margin-top: 20px;
    position: relative;
}
#map img {
    width: 100%;
    height: 450px;
}
#map .map_nav {
    width: 400px;
    position: absolute;
    right: 0;
    top: 35px;
}
#map .map_nav .map_nav_1 ul {
    overflow: hidden;
}
#map .map_nav .map_nav_1 ul li {
    float: left;
    width: 66px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    background: #f5f5f5;
    font-size: 16px;
    color: #666;
}
#map .map_nav .map_nav_1 ul li.on {
    background: #fff;
    color: #e93e0c;
}
#map .map_nav .map_nav_2 {
    overflow-y: auto;
    height: 340px;
}
#map .map_nav .map_nav_2 ul {
    padding: 0 20px;
    box-sizing: border-box;
    background: #fff;
}
#map .map_nav .map_nav_2 ul li {
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    height: 65px;
    line-height: 65px;
}
#map .map_nav .map_nav_2 ul li .number {
    float: left;
    height: 65px;
    /* background: url(../images/map_icon.png) center no-repeat; */
    width: 20px;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
    color: #fff;
    line-height: 60px !important;
}
#map .map_nav .map_nav_2 ul li .place {
    overflow: hidden;
    font-size: 14px;
    color: #666;
    float: left;
}
#map .map_nav .map_nav_2 ul li .place p {
    float: left;
    max-width: 150px;
    line-height: 65px !important;
}
#map .map_nav .map_nav_2 ul li .place i {
    float: left;
    margin-left: 3px;
}
#map .map_nav .map_nav_2 ul li .distance {
    font-size: 14px;
    color: #999;
    float: right;
}
.estate-box-5 {
    margin-top: 40px;
}
.store-box-5 .picScroll-left {
    position: relative;
}
.store-box-5 .picScroll-left .next {
    position: absolute;
    width: 30px;
    height: 165px;
    /* background: rgba(0,0,0,0.6) url(../images/store_bnext.png) center no-repeat; */
    background-color: rgba(0,0,0,0.6);
    right: 0;
    top: 0;
    display: block;
    z-index: 99;
}
.store-box-5 .picScroll-left .prev {
    position: absolute;
    width: 30px;
    height: 165px;
    /* background: rgba(0,0,0,0.6) url(../images/store_bprev.png) center no-repeat; */
    background-color: rgba(0,0,0,0.6);
    left: 0;
    top: 0;
    display: block;
    z-index: 99;
}
.store-box-5 .picScroll-left ul li{
    margin-right:25px;
    float: left;
}
.store-box-6 .counter .logo {
    margin-bottom: 20px;
}
.store-box-6 .counter .logo .img {
    margin-right: 20px;
}
.store-box-6 .counter .logo .name {
    font-size: 14px;
    color: #999;
    line-height: 26px;
}
.store-box-6 .counter .logo .name h2 {
    font-size: 18px;
    color: #333;
    font-weight: normal;
}
.store-box-6 .counter .form .line {
    line-height: 45px;
    margin-bottom: 15px;
    position: relative;
}
.store-box-6 .counter .form .line .name {
    width: 78px;
    font-size: 14px;
    color: #666;
    float: left;
}
.store-box-6 .counter .form .line input {
    padding: 0 20px;
    width: 340px;
    height: 43px;
    line-height: 43px;
    border: 1px solid #ccc;
    float: left;
    font-size: 14px;
    color: #333;
}
.store-box-6 .counter .form .line span {
    position: absolute;
    right: 20px;
    font-size: 14px;
    color: #666;
}
.store-box-6 .counter .form .line select {
    padding: 0 20px;
    width: 340px;
    height: 43px;
    line-height: 43px;
    border: 1px solid #ccc;
    float: left;
    font-size: 14px;
    color: #333;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    /* background: url(../images/down_icon.png) no-repeat 94% center; */
}
.store-box-6 .counter .questionnaire {
    background: none;
    padding-bottom: 0;
}
.store-box-6 .counter .questionnaire .answer {
    padding-left: 78px;
}
.questionnaire .answer {
    margin-bottom: 30px;
    padding-left: 30px;
    box-sizing: border-box;
}
.questionnaire .answer ul {
    overflow: hidden;
}
.questionnaire .answer ul li {
    overflow: hidden;
    float: left;
    height: 45px;
    line-height: 45px;
    position: relative;
    padding-left: 30px;
    margin-right: 25px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
}
.questionnaire .check ul li {
    padding-left: 0;
}
.questionnaire .answer ul li .feature {
    display: none;
}
.questionnaire .answer ul li label {
    background-color: white;
    border: 2px solid #ccc;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    position: relative;
    margin-right: 10px;
}
.store-box-6 .counter .calculate {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    text-align: center;
    background: #e93e0c;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    line-height: 22px;
    padding-top: 26px;
    margin: 128px 108px 0;
    cursor: pointer;
}
.store-box-6 .counter .calculate:hover {
    opacity: .8;
}
.store-box-6 .counter .jsjg h2 {
    font-size: 18px;
    color: #333;
    font-weight: normal;
}
.store-box-6 .counter .jsjg .bill {
    font-size: 14px;
    color: #666;
}
.store-box-6 .counter .jsjg .bill span {
    font-weight: bold;
    margin-right: 44px;
}
.store-box-6 .counter .jsjg .amount {
    font-size: 14px;
    color: #333;
    margin-bottom: 32px;
}
.store-box-6 .counter .jsjg .amount span {
    font-size: 28px;
    color: #e93e0c;
    font-weight: bold;
}
.store-box-6 .counter .jsjg .tipd {
    font-size: 14px;
    color: #999;
}
.rim {
    margin-bottom: 50px;
    margin-top: 50px;
}
.rim .rim-con ul li {
    float: left;
    width: 220px;
    margin-right: 25px;
}
.rim .rim-con ul li .img {
    width: 220px;
    height: 165px;
    display: block;
    overflow: hidden;
}
.rim .rim-con ul li .img img {
    width: 220px;
    height: 165px;
    transition: transform 1.5s;
    -webkit-transition: transform 1.5s;
    -moz-transition: transform 1.5s;
    -ms-transition: transform 1.5s;
    transform: scale(1,1);
    -webkit-transfrom: scale(1,1);
    -moz-transfrom: scale(1,1);
    -ms-transfrom: scale(1,1);
}
.rim .rim-con ul li .img:hover img {
    transition: transform 1.5s;
    -webkit-transition: transform 1.5s;
    -moz-transition: transform 1.5s;
    -ms-transition: transform 1.5s;
    transform: scale(1.2,1.2);
    -webkit-transfrom: scale(1.2,1.2);
    -moz-transfrom: scale(1.2,1.2);
    -ms-transfrom: scale(1.2,1.2);
}
.rim .rim-con ul li .bot {
    font-size: 14px;
    overflow: hidden;
    color: #333;
    line-height: 36px;
}
.rim .rim-con ul li .bot p {
    float: left;
    font-weight: bold;
}
.rim .rim-con ul li .bot .price {
    float: right;
}
.rim .rim-con ul li .bot .price span {
    color: #e93e0c;
    font-weight: bold;
}
.rim .rim-con ul li:last-child {
    margin-right: 0;
}
.store_tit {
    overflow: hidden;
    margin-bottom: 15px;
}
.store_tit .h2 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    float: left;
    padding-left: 10px;
    box-sizing: border-box;
    border-left: 2px solid #e93e0c;
    display: block;
}
.store_tit .more {
    float: right;
    font-size: 14px;
    color: #999;
    line-height: 20px;
}
.com_head .com_head_fr a.fx {
    width: 17px;
    height: 17px;
    margin-left: 20px;
}
</style>
