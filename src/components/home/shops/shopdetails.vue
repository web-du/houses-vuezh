<template>
     <div id="onSale">
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
         <div class="mainPart">
                <div class="part_center">
                    <div class="part">
                        <div class="lp_remark w1200">
                             <div class="com_head">
                                 <div class="fl com_head_fl">
                                     <div class="name fl">{{recruit.b_name}}</div>
                                     <div class="num fl"><span>5 </span>分</div>
                                     <div class="bq fl">即将开盘</div>
                                     <div class="clear"></div>
                                 </div>
                                 <div class="fr com_head_fr">
                                      <a href="" class="fx fr"></a>
                                      <a href="" class="sc fr"></a>
                                      <a href="" class="jc fr">纠错</a>
                                      <div class="date fr">更新于2018年06月07日</div>
                                      <div class="clear"></div>
                                 </div>
                                 <div class="clear"></div>

                             </div>
                             <div class="com_nav this stroe_nav">
                               <ul>
                                 <li class="active"><a href="">楼盘首页</a></li>
                                 <li><a href="">楼盘详情</a></li>
                                 <li><a href="">楼盘动态</a></li>
                                 <li><a href="">相关资讯</a></li>
                                 <li><a href="">楼盘房源</a></li>
                                 <li><a href="">楼栋信息</a></li>
                                 <li><a href="">楼盘点评</a></li>
                                 <li><a href="">楼盘问答</a></li>
                                 <li><a href="">位置及周边</a></li>
                                 <li><a href="">楼盘相册</a></li>
                                 <li><a href="">房价走势</a></li>

                                 <div class="clear"></div>
                               </ul>
                           </div>
                     
                            <div class="store">
                                <div class="store-box-1 clearfix">
                                        <div class="lf">
                                            <div class="xqcase_box">
                                                <div class="swiper_top">
                                                    <ul>
                                                        <li v-for="(item,index) in recruit.b_imgs" :key="index">
                                                              <img :src="item" alt="">
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
                                                        <ul>
                                                            <li v-for="(item,index) in recruit.b_imgs" :key="index">
                                                              <img :src="item[index]" alt="">
                                                           </li>
                                                        

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rg">
                                            <div class="price clearfix">
                                                <div class="price1">
                                                价格: <span>{{recruit.b_price}}</span> <i>万元/套起</i>
                                                </div>
                                                <div class="price2">
                                                <img src="@/assets/images/store_icon01.png" alt="">价格说明
                                                <div class="fnzoushi01">
                                                    <div class="sh"></div>
                                                    <p style="word-break: break-all;">一期、二期联排叠拼在售总价800万/套起，一次性付款，银行按揭。</p>
                                                    <p>报价时间：2018-09-05 价格有效期：14天</p>
                                                </div>
                                                </div>
                                                <a class="price2" href="#jgzs">
                                                <img src="@/assets/images/store_icon02.png" alt="">查看价格走势
                                                </a>
                                                <a class="price2" href="#jsq">
                                                <img src="@/assets/images/store_icon03.png" alt="">贷款计算器
                                                </a>
                                                <div class="price2">
                                                <img src="@/assets/images/store_icon04.png" alt="">降价通知我
                                                </div>
                                            </div>
                                            <div class="apply clearfix">
                                                <div class="apply_txt">
                                                    <div class="apply_img">
                                                            优惠团购
                                                    </div>
                                                    <h2>周围看房团报名中，团购群：4312568924</h2>
                                                    <p>时间：2018-07-08</p>

                                                </div>
                                                <div class="apply_btn">
                                                    立即报名
                                                </div>
                                            </div>
                                            <div class="tell">
                                            咨询电话：<span>{{recruit.hot_line}}</span>
                                            </div>
                                            <div class="house_tips">
                                              <ul>
                                                <li class="li1">{{sale_statusfun}}</li>
                                                <li class="li3" v-for="(item,index) in recruit.tags" :key="index">{{item.tags_name}}</li>
                                                <!-- <li class="li3">湖景地产</li>
                                                <li class="li4">在售</li>
                                                <li class="li5">普通住宅</li>
                                                <li class="li6">湖景地产</li>
                                                <li class="li7">在售</li>
                                                <li class="li8">普通住宅</li> -->

                                                <div class="clear"></div>
                                                </ul>
                                            </div>
                                            <div class="infor">
                                                <p>产权年限： <span>{{recruit.d_years}}年</span></p>
                                                <p>楼盘面积: <span>三居（{{recruit.building_area}}）四居（113㎡）五居（146㎡</span> <i class="all">全部</i></p>
                                                <p>楼盘地址: <span>{{recruit.province_text}}{{recruit.city_text}}{{recruit.area_text}}{{recruit.house_address}}</span> <a class="lookmap" href="#ckdt">查看地图</a></p>
                                                <p>开盘时间: <span>{{recruit.start_time}}</span></p>

                                            </div>
                                            <div class="store_more clearfix">
                                                <div class="more">
                                                    更多详细信息》
                                                </div>
                                                <div class="scan">
                                                    扫描到手机
                                                    <div class="erpop" id="smphone">
                                                        <img width="132" height="132" src="@/assets/images/Dw-big-ewm.jpg" class="fr erimg">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="counselor clearfix">
                                                <span>置业顾问：</span>
                                                <ul>
                                                    <li v-for="(item,index) in recruit.mediums" :key="index">
                                                        <div class="counselor_img">
                                                            <img :src="item.avatar" alt="">
                                                            <div class="name">
                                                                房乐士
                                                            </div>

                                                        </div>
                                                        <p>{{item.user_realname}}</p>
                                                        <div class="state on">
                                                        </div>
                                                        <div class="ph_400">
                                                            <div class="bg_400">
                                                            <span>4.6分</span>
                                                            <i>|</i>
                                                            <span class="ph_text">{{item.mobile}}</span>
                                                            <div class="clear"></div>
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
                                       <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;"/>
                                        <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
                                  </div>
                                   <div class="store-box-2">
                                        <div class="dynamic">
                                            <div class="store_tit">
                                                 <h2>云湖尚景楼盘动态</h2>
                                                 <a href="" class="more">更多动态</a>
                                            </div>
                                            <ul>
                                                <li v-for="(item,index) in recruit.house_new" :key="index" >
                                                    <div class="tit clearfix">
                                                        <a href="" class="h2">{{item.n_title}}</a>
                                                        <span>{{item.n_create_time}}</span>
                                                    </div>
                                                    <a href="" class="txt">
                                                       {{item.n_detail}}
                                                    </a>
                                                </li>
                                               <!-- <li>
                                                    <div class="tit">
                                                         <a href="" class="h2">云湖尚景单价约17000-19000元/㎡</a>
                                                        <span>2018-06-18</span>
                                                    </div>
                                                    <a href="" class="txt">
                                                        新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面主要为85-98㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18……
                                                    </a>
                                                </li>
                                                 <li>
                                                    <div class="tit">
                                                         <a href="" class="h2">云湖尚景单价约17000-19000元/㎡</a>
                                                        <span>2018-06-18</span>
                                                    </div>
                                                    <a href="" class="txt">
                                                        新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面主要为85-98㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18……
                                                    </a>
                                                </li> -->
                                            </ul>
                                        </div>
                                         <div class="remark">
                                            <div class="store_tit">
                                                 <h2>云湖尚景楼盘动态</h2>
                                                 <p class="score"></p>
                                                 <a href="" class="myremark">我要点评</a>
                                             </div>

                                         <p class="fx">分享您最真实的居住体验，帮助更多的人找到理想的家，快来点评吧！</p>
                                         <ul>
                                             <li>
                                                 <img src="@/assets/images/jjrdp1.png" alt="" >
                                                 <div class="txt">
                                                     <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18……</p>
                                                     <div class="bot">
                                                         <span>武汉-网友楼市动态 2018-06-18 发布</span>
                                                         <i>回复（0）</i>
                                                         <i>有用（0）</i>
                                                     </div>
                                                 </div>
                                             </li>
                                             <li>
                                                 <img src="@/assets/images/jjrdp1.png" alt="" >
                                                 <div class="txt">
                                                     <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18……</p>
                                                     <div class="bot">
                                                         <span>武汉-网友楼市动态 2018-06-18 发布</span>
                                                         <i>回复（0）</i>
                                                         <i>有用（0）</i>
                                                     </div>
                                                 </div>
                                             </li>

                                          </ul>
                                              <a href="" class="remark_all">查看全部点评</a>
                                        </div>
                                    </div>
                                    <div class="store-box-3">
                                         <div class="store_tit">
                                            <h2>云湖尚景楼盘信息</h2>
                                         </div>
                                         <div class="box-infor">
                                              <h2>基本属性</h2>
                                              <ul>
                                                  <li><i>开  发 商 </i><span>{{recruit.d_developers}}</span></li>
                                                  <li><i>物  业 费</i><span>5.95 元/㎡</span></li>
                                                  <li><i>绿  化 率</i><span>{{recruit.d_greenrate}}</span></li>
                                                  <li><i>产权年限</i><span>{{recruit.d_years}}</span></li>

                                                   <li><i>物业公司</i><span>{{recruit.d_wuye}}</span></li>
                                                  <li><i>容  积 率</i><span>{{recruit.d_rate}}</span></li>
                                                  <li><i>预售证件</i><span>30%</span></li>
                                                  <li><i>产权年限</i><span>京（2018）丰不动产权第0028591号</span></li>
                                                  <li><i>装修情况</i><span>{{decoration}}</span></li>
                                              </ul>
                                         </div>
                                          <div class="box-infor">
                                              <h2>配套设施</h2>
                                              <ul>
                                                  <li><i>附近学校</i><span>{{recruit.near_school}}</span></li>
                                                  <li><i>餐饮娱乐</i><span>古文化广场、北京世界花卉大观园</span></li>
                                                  <li><i>快递信息</i><span>顺丰、天天快递、韵达快递</span></li>
                                                  <li><i>附近医院</i><span>307医院</span></li>
                                                ] <li><i>附近银行</i><span>工商银行、建设银行</span></li>
                                                  <li><i>附近楼盘</i><span>万年花城</span></li>
                                                  <li><i>附近酒店</i><span>玛雅鸟酒店</span></li>
                                                  <li><i>休闲健身</i><span>汽车博物馆</span></li>
                                                  <li><i>其    他</i><span>总部大讲堂</span></li>
                                              </ul>
                                         </div>
                                          <div class="box-infor">
                                              <h2>交通状况</h2>
                                              <ul>
                                                  <li><i>附近学校 </i><span>距地铁10号线首经贸地铁站B口50米、地铁方山线规划中延长线。</span></li>
                                                  <li><i>公共交通</i><span>地铁10号线、地铁方山线（规划中）、公交110路等。</span></li>

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

                                     <div class="store-box-4">
                                         <div class="store_tit">
                                             <a href="javascript:void(0)" class="h2" name="ckdt">位置及周边街景地图</a>
                                             <div class="fun">
                                                 <div class="fun_box">
                                                     <img src="@/assets/images/store_icon07.png" alt="">全屏
                                                 </div>
                                                 <div class="fun_box">
                                                     <img src="@/assets/images/store_icon08.png" alt="">孝感楼盘地图
                                                 </div>
                                                 <div class="fun_box">
                                                     <img src="@/assets/images/store_icon09.png" alt="">驾车
                                                 </div>
                                            </div>
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
                                                                <p>1</p>
                                                                <img src="@/assets/images/map_icon.png" alt="">
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
                                                                 <p>2</p>
                                                                <img src="@/assets/images/map_icon.png" alt="">
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
                                                                <p>3</p>
                                                                 <img src="@/assets/images/map_icon.png" alt="">
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
                                                                <p>4</p>
                                                               <img src="@/assets/images/map_icon.png" alt="">
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
                                                                 <p>5</p>
                                                                 <img src="@/assets/images/map_icon.png" alt="">
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
                                                                <p>6</p>
                                                               <img src="@/assets/images/map_icon.png" alt="">
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
                                
                                  <div class="store-box-5">
                                        <div class="store_tit">
                                            <h2>云湖尚景楼盘信息</h2>
                                             <p> <span v-for="(item,index) in recruit.albums" :key="index"> {{albums(item.data[0].house_type)}}（{{item.num}}）·</span></p>
                                         </div>

                                        <div class="picScroll-left">
                                            <div class="hd">
                                                
                                                <a class="next"><img src="@/assets/images/store_bnext.png" alt=""></a>
                                                <a class="prev"><img src="@/assets/images/store_bprev.png" alt=""></a>
                                            </div>
                                            <div class="bd">
                                                <ul class="picList">
                                                  <li v-for="(item,index) in recruit.albums" :key="index"><a href="" class="img"><img :src="item.data[0].house_imgurl" alt=""></a>
                                                    <p>{{albums(item.data[0].house_type)}}（{{item.num}}）</p>
                                                  </li>
                                                  <!-- <li><a href="" class="img"><img src="@/assets/images/ad5.jpg" alt=""></a>
                                                  <p>交通图（3）</p>
                                                  </li>
                                                  <li><a href="" class="img"><img src="@/assets/images/ad5.jpg" alt=""></a>
                                                   <p>华鸿.公园天下相册</p>
                                                  </li>
                                                  <li><a href="" class="img"><img src="@/assets/images/ad5.jpg" alt=""></a>
                                                  <p>华鸿.公园天下相册</p>
                                                  </li>
                                                  <li><a href="" class="img"><img src="@/assets/images/ad5.jpg" alt=""></a>
                                                  <p>华鸿.公园天下相册</p>
                                                  </li>
                                                  <li><a href="" class="img"><img src="@/assets/images/ad5.jpg" alt=""></a>
                                                  <p>华鸿.公园天下相册</p>
                                                  </li> -->
                                               </ul>
                                            </div>
                                        </div>

                                    </div>
                                
                                    <div class="store_ad">
                                        <!-- <a href=""><img src="@/assets/static/images/ad1.jpg" alt=""></a> -->
                                    </div>
                                    
                                    <div class="store-box-6">
                                        <div class="store_tit">
                                             <a href="javascript:void(0)" class="h2" name="jgzs">云湖尚景价格走势图</a>

                                         </div>
                                         <div class="chaet_tit">
                                            <div class="h2">
                                                <div class="h2_tit">
                                                    本楼盘（住宅）06月平均价格
                                                </div>
                                            </div>
                                            <p><span>￥24000</span>元/㎡ 环比 0%</p>
                                         </div>
                                           <div class="chaet_name">
                                             2017.08-2018.08房价走势图（元/㎡）
                                         </div>
                                         <div class="chaet" id="chaet"></div>
                                    </div>
                                
                                    <div class="rim">
                                        <div class="rim-nav">
                                             <ul>
                                                 <li class="on">您可能感兴趣的新房楼盘</li>
                                                 <li>周边同价位楼盘</li>
                                             </ul>
                                             <a href="" class="more">更多</a>
                                        </div>
                                        <div class="rim-con">
                                            <!-- 感兴趣的新房楼盘 -->
                                              <ul>
                                                  <li v-for="(item,index) in recruit.new_house" :key="index" >
                                                      <a href="" class="img">
                                                        <img :src="item.house_thumb" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>{{item.house_title}}</p>
                                                          <div class="price">
                                                            <span>{{item.house_price}} </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <!-- <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li></li><li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li> -->
                                              </ul>
                                           
                                            <!-- 周边同价位楼盘 -->
                                               <ul>
                                                <li v-for="(item,index) in recruit.price_house" :key="index" >
                                                      <a href="" class="img">
                                                        <img :src="item.house_thumb" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>{{item.house_title}}</p>
                                                          <div class="price">
                                                            <span>{{item.house_price}} </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <!-- <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li></li><li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li> -->
                                              </ul>
                                        </div>
                                    </div>
                                     
                                      <div class="rim r2">
                                        <div class="rim-nav">
                                             <ul>
                                                 <li class="on">周边二手房</li>
                                                 <li>周边商铺</li>
                                                 <li>周边租房</li>
                                             </ul>
                                             <a href="" class="more">更多</a>
                                        </div>
                                        <div class="rim-con">
                                            <!-- 周边二手房 -->
                                              <ul>
                                                  <li v-for="(item,index) in recruit.ner_second_house" :key="index" >
                                                      <a href="" class="img">
                                                        <img :src="item.house_thumb" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>{{item.house_title}}</p>
                                                          <div class="price">
                                                            <span>{{item.house_price}} </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <!-- <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li></li><li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li> -->
                                              </ul>

                                              <!-- 周边商铺 -->
                                              <ul>
                                                  <li v-for="(item,index) in recruit.near_shangpu" :key="index" >
                                                      <a href="" class="img">
                                                        <img :src="item.house_thumb" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>{{item.house_title}}</p>
                                                          <div class="price">
                                                            <span>{{item.house_price}} </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <!-- <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li></li><li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li> -->
                                              </ul>

                                              <!-- 周边租房 -->
                                              <ul>
                                                  <li v-for="(item,index) in recruit.near_zufang" :key="index" >
                                                      <a href="" class="img">
                                                        <img :src="item.house_thumb" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>{{item.house_title}}</p>
                                                          <div class="price">
                                                            <span>{{item.house_price}} </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <!-- <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li></li><li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <a href="" class="img">
                                                        <img src="@/assets/images/ad5.jpg" alt="">
                                                      </a>
                                                      <div class="bot">
                                                          <p>华鸿.公园天下</p>
                                                          <div class="price">
                                                            <span>901-1000 </span>
                                                            万/㎡
                                                          </div>
                                                      </div>
                                                  </li> -->
                                              </ul>
                                        </div>
                                    </div>

                        </div>
                </div>
             </div>
          </div>
      </div>
</div>

</template>

<script>
export default {
    name:"shopdetails",
    data(){
       return{
         recruit:[]
         //sale_status:this.recruit.sale_status
       }
    },
     methods:{
            //楼盘相册图片类型
     albums:function(a){
         if(a==1){
             return "VR"
         }else if(a==2){
             return "效果图"
         }else if(a==3){
             return "实景图"
         }else if(a==4){
             return "交通图"
         }else if(a==5){
             return "样板间"
         }else if(a==6){
             return "活动现场"
         }else if(a==7){
             return "周边配套"
         }else if(a==8){
             return "楼栋平面"
         }else if(a==9){
             return "推荐图片"
         }
      }
     },
    created(){
         console.log(this.$route.query.id)
            this.axios.post(process.env.API_HOST +'house/buildings/getBuildingDetail',{id:this.$route.query.id}).then((response) => {                    
                 this.recruit=response.data.data
                    console.log(this.recruit)  
                
             }).catch((err) => {
              
            })
            
            
        },
    computed:{
        // 销售状态
       sale_statusfun:function(){
           if(this.recruit.sale_status==1){
               return "在售"
           }else if(this.recruit.sale_status==2){
               return "待售"
           }else if(this.recruit.sale_status==3){
               return "在租"
           }else if(this.recruit.sale_status==4){
               return "租售"
           }else if(this.recruit.sale_status==5){
               return "售完"
           }else{
               return "待租"
           }
       },

     //装修状况
     decoration:function(){
          if(this.recruit.sale_status==1){
               return "毛坯"
           }else if(this.recruit.sale_status==2){
               return "非毛坯"
           }else{
               return "公共部分简单装修"
           }
     }
    

    },
    mounted(){
        //楼盘相册标题过滤
        $(".store-box-5 .store_tit p span:last-child").html(2)


      //周边商铺，二手房，新房切换
         $(".rim").each(function(){
             $(this).find(".rim-con ul").eq(0).css("display","block").siblings().css("display","none")
         })
        // $(".rim .rim-con ul").eq(0).css("display","block").siblings().css("display","none")
        $(".rim .rim-nav ul li").click(function(){
              var n=$(this).index()
              console.log(n)
            $(this).addClass("on").siblings().removeClass("on")
            $(this).parents(".rim").find(".rim-con ul").eq(n).css("display","block").siblings().css("display","none")
        })
        $(".rim .rim-nav ul li")

        jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
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
                if(n>0){
                    n--;
                    cg(n)
                    ld(n)
                }

            });

            $(".swiper_top .tnext").click(function(){
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
                console.log(1)
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
                console.log()
                n=$(this).index()
                cg(n)
                rd(n)
            })
        }
}
</script>

<style scoped>
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
.clearfix {
    zoom: 1;
}
.w1200 {
    width: 1200px;
    margin: 0 auto;
}
#content .mainPart{
padding-bottom: 65px;
}
.stroe_nav{
    margin-top:30px;
}
.store .store-box-1{
     margin-bottom:20px;
}
.store .store-box-1 .lf{
    width:550px;
    float: left;
}

/*双向控制css-start*/
 .swiper_top{
    width:550px;
    height:415px;
    position:relative;
    margin-bottom:10px;
}
 .swiper_top ul{
    width:100%;
    height:100%;

}
 .swiper_top ul li{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}

 .swiper_top ul li img{
     display:inline-block;
     width:100%;
     height:100%;
}

 .swiper_top ul li:first-child{
     z-index:10
}
 .swiper_top .tprev{
    display: block !important;
    width:42px;
    height:85px;
    position:absolute;
    top:50%;
    left:10px;
    margin-top:-42.5px;
    z-index:99;
    cursor:pointer;
}
 .swiper_top .tnext{
    display: block !important;
    width:42px;
    height:85px;
    position:absolute;
    top:50%;
    right:10px;
    margin-top:-42.5px;
     z-index:99;
      cursor:pointer;
}
 .swiper_bot{
    width:550px;
    height:88px;
    margin:0 auto;
    position:relative;
}
 .swiper_bot .bprev{
    display: block !important;
    width:32px;
    height:86px;
    position:absolute;
    top:0;
    left:0px;
    z-index:99;
     cursor:pointer;
     background:#7f7f7f;
     text-align:center;
     padding-top:33px;
     box-sizing:border-box;

}
 .swiper_bot .bnext{
    display: block;
    width:32px;
    height:86px;
    position:absolute;
    top:0;
    right:0;
     z-index:99;
      cursor:pointer;
      background:#7f7f7f;
      text-align:center;
      padding-top:33px;
     box-sizing:border-box;
}
 .swiper_bot .bot_view{
    width:480px;
    height:86px;
    margin:0 auto;
    overflow:hidden;
    position:relative;
}
 .swiper_bot ul{
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;

}
 .swiper_bot ul li{
    float:left;
    margin-right:5px;
    width:116px;
    height:86px;
     box-sizing:border-box;

   }
 .swiper_bot ul li:first-child{
     border:2px solid #e93e0c;
}
 .swiper_bot ul li img{
    width:100%;
    height:100%;

}
/*双向控制css-end*/
.store .store-box-1 .rg{
    float:right;
    width:620px;
}
.store .store-box-1 .rg .price{
    font-size:14px;
    color:#999;
    margin-bottom:30px;
}
.store .store-box-1 .rg .price .price1{
    float: left;
    margin-right:20px;
}
.store .store-box-1 .rg .price .price1 span{
    font-size:26px;
    color:#e93e0c;
    font-weight:bold;
}
.store .store-box-1 .rg .price .price1 i{
    color:#333;
}
.store .store-box-1 .rg .price .price2{
     float: left;
     padding-top:10px;
     padding-right:12px;
     line-height:17px;
     display: block;
     color:#999;
     position: relative;
     cursor: pointer;

}
.store .store-box-1 .rg .price .price2:hover{color: #e93e0c;}
.store .store-box-1 .rg .price .price2 img{
    float: left;
     margin-right:4px;
}

.fnzoushi01 {width:406px;height:auto;border:solid 1px #ebebeb;background-color:#fff;position:absolute;top:35px;left:50%;padding:10px;z-index:111;margin-left: -153px;display:none;}
.fnzoushi01 .sh {width:405px;height:9px;
        /* background:url(../@/assets/images/xiala.png); */
        position:absolute;top:-9px;left:0;}
.store .store-box-1 .rg .price .price2:hover .fnzoushi01{color: #999;display:block;}
.store .store-box-1 .rg .apply{
     overflow:hidden;
     margin-bottom:25px;
}
.store .store-box-1 .rg .apply .apply_txt{
     box-sizing:border-box;
     width:520px;
     height:65px;
     padding:10px;
     background:#fef5f3;
     float: left;
}
.store .store-box-1 .rg .apply .apply_txt .apply_img{
      float: left;
      width:40px;
      height:40px;
      border:2px solid #e93e0c;
      box-sizing: border-box;
      font-size: 12px;
      color:#e93e0c;
      padding:3.5px;
      text-align: center;
      line-height: 15px;
      margin-right: 15px;

}
.store .store-box-1 .rg .apply .apply_txt h2{
	  font-size: 18px;
	  color:#333;
	  line-height: 18px;
	  margin-bottom:9px;
	  font-weight: normal;
}
.store .store-box-1 .rg .apply .apply_txt p{
	 font-size:14px;
	 color:#999;
	 line-height: 14px;
}
.store .store-box-1 .rg .apply .apply_btn{
	  width:97px;
	  height: 63px;
	  text-align: center;
	  line-height: 63px;
	  font-size: 14px;
	  color:#fff;
	  cursor: pointer;
	  background: #e93e0c;
	  float:left;

}
.store .store-box-1 .rg .tell{
	font-size: 14px;
	color:#999;
    margin-bottom:15px;
}
.store .store-box-1 .rg .tell span{
	font-size: 24px;
	color:#333;
	font-weight: bold;
}
.store .store-box-1 .rg .infor{
	 font-size: 14px;
	 color:#999;
     margin-bottom:20px;
}
.store .store-box-1 .rg .infor p{
	margin-bottom:10px;
}
.store .store-box-1 .rg .infor span{
	color:#666;
}
.store .store-box-1 .rg .infor .all{
     margin-left:40px;
     cursor:pointer;
}
.store .store-box-1 .rg .infor .lookmap{
     /* background:url("../images/store_icon05.png") 0 center no-repeat; */
     display:inline-block;
     padding-left:24px;
     box-sizing:border-box;
      cursor:pointer;
      color:#666;
}

.store .store-box-1 .rg .store_more{
     font-size: 14px;
      color:#999;
      margin-bottom:15px;
}
.store .store-box-1 .rg .store_more .more{
     float: left;
     cursor:pointer;
}
.store .store-box-1 .rg .store_more .scan{
     float: right;
    /* background:url("../images/store_icon06.png") 0 center no-repeat; */
     padding-left:24px;
     box-sizing:border-box;
     position: relative;
     cursor:pointer;
    
}
.erpop {
    width: 446px;
    height: 172px;
    /* background: url(../images/erpopsjbg.gif) no-repeat 0 0; */
    position: absolute;
    top: 25px;
    left: -333px;
    overflow: hidden;
    z-index: 1111;
    display: none;
}
.store .store-box-1 .rg .store_more .scan:hover .erpop{
    display:block;
}
.com_head .com_head_fl{line-height: 30px;}
.com_head .com_head_fl .name{font-size: 30px;color: #000;font-weight: bold;}
.com_head .com_head_fl .num{font-size: 14px;color: #666;margin:0 10px;}
.com_head .com_head_fl .num span{font-size: 16px;color: #e93e0c;margin-right: 5px;}
.com_head .com_head_fl .bq{padding:5px 10px;font-size: 14px;color: #f45558;border:1px solid #f45558;line-height: 14px;}
.com_head .com_head_fr{font-size: 14px;color: #666;line-height: 30px;}
.com_head .com_head_fr a{display: block;}
.com_head .com_head_fr a.jc{padding:7px 17px;border:1px solid #666;font-size: 14px;color: #666;line-height: 14px;margin-left: 12px;}
/* .com_head .com_head_fr a.fx{background:url("../../static/images/dzlp13.png") no-repeat 0 center;width: 17px;height: 17px;margin-top: 8px;margin-left: 20px;}
.com_head .com_head_fr a.sc{background:url("../../static/images/dzlp14.png") no-repeat 0 center;width: 17px;height: 17px;margin-top: 8px;margin-left: 20px;} */
/* .com_head .com_head_fr a.fx:hover,.com_head .com_head_fr a.fx.active{background:url("../../static/images/dzlp113.png") no-repeat 0 center;}
.com_head .com_head_fr a.sc:hover,.com_head .com_head_fr a.sc.active{background:url("../../static/images/dzlp114.png") no-repeat 0 center;} */
.com_head .house_tips{margin:10px 0 20px;}

.com_nav{width: 100%;height: 50px;background: #e93e0c;margin-bottom: 50px;}
.com_nav ul li {float: left;width: 100px;text-align: center;line-height: 50px;}
.com_nav ul li a{color: #fff;font-size: 16px;}
/* .com_nav ul li:hover,.com_nav ul li.active{background:url("../../static/images/lpdp.jpg") no-repeat center 42px;} */
.com_nav ul li:hover a,.com_nav ul li.active a{font-weight: bold;}
.com_nav.this{margin-bottom: 10px;}

.com_mid .rate_star_list .rate_star{margin-right: 20px;}
.com_hot{border-bottom: 1px solid #f5f5f5;height: 48px;line-height: 48px;color: #333;font-size: 14px;margin-bottom: 20px;}
.com_hot ul li{float: left;font-size: 14px;color: #333;min-width: 95px;text-align: center;line-height: 48px;width: auto;margin-right: 8px;}
.com_hot ul li a{color: #333;}
/* .com_hot ul li.active,.com_hot ul li:hover{background:url("../../static/images/lpdp30.jpg") no-repeat center bottom;} */
.com_hot ul li.active a,.com_hot ul li:hover a{color: #e93e0c;}

.com_pf {margin-bottom: 28px;line-height: 14px;}
.com_pf .name{width: 73px;color: #999;font-size: 14px;}
.com_pf ul li{float: left;font-size: 14px;color: #333;margin-right: 25px;}

.comment_list.this .comment .comment_top .conts{width: 1117px;}
.comment_list.this .com_form .push{width: 1095px;}
.com_head{overflow: hidden;}
.house_tips ul{overflow: hidden;}
.house_tips ul li{padding:7px 10px;margin-right: 10px;margin-bottom: 13px;font-size: 14px;border-radius: 4px;float: left;}
.house_tips ul li.li1{background: #efe8e7;color: #e89880;}
.house_tips ul li.li2{background: #f5f2e9;color: #dbcea4;}
.house_tips ul li.li3{background: #eef2f8;color: #a9bede;}
.house_tips ul li.li4{background: #fcebdb;color: #ff9500;}
.house_tips ul li.li5{background: #def0fd;color: #41affd;}
.house_tips ul li.li6{background: #e8fafc;color: #69c5c8;}
.house_tips ul li.li7{background: #e9f7e1;color: #6fbd41;}
.house_tips ul li.li8{background: #ffe9fe;color: #f57ef6;}
.house_tips ul li.li9{background: #ffffe3;color: #ffc50a;}
.house_tips ul li.li10{background: #ffe2d7;color: #fd7f51;}

.erimg { margin:23px 18px 0 0; }
.ersflogo { position:absolute; right:70px; top:73px; z-index:101;}
.firstright .rig_icon .scanning a .lpt_phone {
    display: block;
    width: 9px;
    height: 20px;
    margin-right: 4px;
    overflow: hidden;
    /* background: url(../images/xf_phone.png) no-repeat left center; */
}
.sfunfooter20120411 td a:hover{color:#c00;text-decoration:none;}
.store .store-box-1 .rg .counselor{
     text-align:center;
     font-size: 14px;
}
.store .store-box-1 .rg .counselor span{
     line-height:85px;
      color:#999;
     float: left;
}
.store .store-box-1 .rg .counselor ul{
     float: left;
}
.store .store-box-1 .rg .counselor ul li{
     float: left;
     position:relative;
     margin-right:15px;
}
.store .store-box-1 .rg .counselor ul li .counselor_img{
      width:60px;
      height:60px;
      position:relative;
      overflow:hidden;
      border-radius:50%;
      margin-bottom:5px;
}
.store .store-box-1 .rg .counselor .counselor_img img{
      width:60px;
      height:60px;
      display:inline-block;
}
.store .store-box-1 .rg .counselor .counselor_img .name{

     width:58px;
     height:22px;
     background:rgba(0,0,0,0.6);
     line-height:22px;
     font-size:12px;
     color:#fff;
     position:absolute;
     left:2.5px;
     bottom: 0;
}
.store .store-box-1 .rg .counselor ul li p {
    color: #333;
}
.store .store-box-1 .rg .counselor .on {
    background: #38a204;
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
.store .store-box-1 .rg .counselor .counselor_rg {
    float: right;
    margin-top: 25px;
}
.store .store-box-1 .rg .counselor ul li:hover .ph_400{
    display: block;
}
.store .store-box-2{
     margin-top:50px;
     overflow:hidden;
     margin-bottom:30px;
}
.store .store-box-2 .dynamic{
    float: left;
    width:560px;
}
.store .store_tit{
    overflow:hidden;
    margin-bottom:15px;
}
.store .store_tit h2,.store .store_tit .h2{
     font-size:20px;
     color:#333;
     font-weight:bold;
     line-height:20px;
     float: left;
     padding-left:10px;
     box-sizing:border-box;
     border-left:2px solid #e93e0c;
     display: block;
}
.store .store_tit .more{
    float: right;
    font-size:14px;
    color:#999;
    line-height:20px;
}
.store .store_tit .more:hover{color: #e93e0c;}
.store .store_tit .score{
    font-size:16px;
    color:#333;
}
.store .store_tit .score span{
     color:#e93e0c;
     font-weight:bold;
}

.store .store-box-2 .dynamic ul li{
     margin-bottom:15px;
     padding-bottom:15px;
     border-bottom:1px solid #f5f5f5;

}
.store .store-box-2 .dynamic ul li:last-child{
    border-bottom:none;
}
.store .store-box-2 .dynamic ul li .tit{
      overflow:hidden;
      line-height:20px;
       margin-bottom:10px;
}
.store .store-box-2 .dynamic ul li .tit .h2{
     font-size:16px;
     color:#000;
     font-weight:normal;
     float: left;
     display: block;
     width: 76%;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
}
.store .store-box-2 .dynamic ul li .tit .h2:hover{color: #e93e0c;text-decoration: underline;}
.store .store-box-2 .dynamic ul li .tit span{
      float: right;
        font-size:14px;
       color:#999;
}
.store .store-box-2 .dynamic ul li .txt{
     display:block;
     font-size:14px;
     color:#666;
     line-height:24px;

}
.store .store-box-2 .remark{
     width:560px;
     float:right;
}

.store .store_tit .myremark{
    font-size:14px;
    color:#e93e0c;
    float: right;
    width:96px;
    height:32px;
    text-align:center;
    line-height:32px;
    border:1px solid #e93e0c;
}
.store .store-box-2 .remark .fx{
     font-size:14px;
     color:#999;
     margin-bottom:15px;
}
.store .store-box-2 .remark ul li{
    margin-bottom:10px;
    overflow:hidden;
}
.store .store-box-2 .remark ul li img{
     width:60px;
     height:60px;
     float: left;
     margin-right:20px;
}
.store .store-box-2 .remark ul li .txt{
    float: left;
    font-size:14px;
    width:480px;
    padding-bottom:20px;
    border-bottom:1px solid #f5f5f5;
}
.store .store-box-2 .remark ul li .txt p{
      color:#666;
    line-height:24px;
    margin-bottom:10px;
}
.store .store-box-2 .remark ul li .txt .bot{
      overflow:hidden;
      color:#999;
}
.store .store-box-2 .remark ul li .txt .bot span{
      float: left;
}
.store .store-box-2 .remark ul li .txt .bot i{
     float: right;
}
.store .store-box-2 .remark ul li .txt .bot i:first-child{
    margin-left:15px;
}
.store .store-box-2 .remark .remark_all{
    display:block;
    text-align:center;
    margin-top:20px;
    font-size:14px;
    color:#999;
}
.store_ad a{
     display:block;
     width:100%;
}.store_ad a img{
     width:100%;
}
.store .store-box-3{
    margin-top:50px;

}
.store .store-box-3 .store_tit{
     margin-bottom:40px;
}
.store .store-box-3 .box-infor{
    font-size:14px;
    color:#999;
    overflow:hidden;
    margin-bottom:30px;
}
.store .store-box-3 .box-infor h2{
    font-size:16px;
    font-weight:normal;
    float: left;
    margin-right:28px;

}
.store .store-box-3 .box-infor ul{
    float:left;
    width:1096px;
    line-height:24px;
}
.store .store-box-3 .box-infor ul li{
    float:left;
    width:315px;
    margin-right:50px;
    margin-bottom:15px;
}
.store .store-box-3 .box-infor ul li i{
     float: left;
     width:57px;
}
.store .store-box-3 .box-infor ul li span{
   float: left;
    color:#666;
    margin-left:18px;
    width:240px;
}
.store .store-box-4{
    margin-top:50px;
}
.store .store_tit .fun{
    float: right;
}
.store .store_tit .fun .fun_box{
    font-size:14px;
    color:#666;
    display:table-cell;
    line-height:20px;
    padding-right:20px;
    cursor:pointer;
}
.store .store_tit .fun .fun_box:last-child{
    padding-right:0px;
}
.store .store_tit .fun .fun_box img{
    vertical-align: middle;
    margin-right:5px;
}

.store .store-box-4{
    margin-bottom:50px;
}
#map{
    height:450px;
    margin-top:20px;
    position:relative;

}
#map img{
    width:100%;
     height:450px;
}
#map .map_nav{
    width:400px;
    position:absolute;
    right:0;
    top:35px;
}
#map .map_nav .map_nav_1 ul{
   overflow:hidden;
}
#map .map_nav .map_nav_1 ul li{
     float:left;
     width:66px;
     height:55px;
     text-align:center;
     line-height:55px;
     background:#f5f5f5;
     font-size:16px;
     color:#666;
}
#map .map_nav .map_nav_1 ul li.on{
    background:#fff;
    color:#e93e0c;
}
#map .map_nav .map_nav_2{
        overflow-y: auto;
        height:340px;
}
#map .map_nav .map_nav_2 ul{
     padding:0 20px;
     box-sizing:border-box;
      background:#fff;
}
#map .map_nav .map_nav_2 ul li{
       overflow:hidden;
       border-bottom:1px solid #f5f5f5;
       height:65px;
       line-height:65px;
}
#map .map_nav .map_nav_2 ul li .number{
     float: left;
     height:65px;
     /* background:url("../images/map_icon.png") center no-repeat; */
     width:20px;
     text-align:center;
     margin-right:10px;
     font-size:14px;
     color:#fff;
    line-height:60px !important;
    position: relative;
}
#map .map_nav .map_nav_2 ul li .number img{
    position:absolute;
    left: 1px;
    top:20px;
    width: 20px;
    height: 29px;
}
#map .map_nav .map_nav_2 ul li .number p{
     position:absolute;
    left: 6px;
    top:20px;
    z-index:20;
    color: #fff;
}
#map .map_nav .map_nav_2 ul li .place {
    overflow:hidden;
    font-size:14px;
    color:#666;
    float: left;
}
#map .map_nav .map_nav_2 ul li:hover{

}
#map .map_nav .map_nav_2 ul li .place p{
      float: left;
      max-width:150px;
      line-height:65px !important;
}
#map .map_nav .map_nav_2 ul li .place i{
      float:left;
      margin-left:3px;
}
#map .map_nav .map_nav_2 ul li .distance{
     font-size:14px;
     color:#999;
     float: right;

}
#map .map_nav .btn{
    width:54px;
    height:55px;
    /* background:#f5f5f5 url("../images/map_btn.png") center no-repeat; */
    position:absolute;
    left:-54px;
    top:0;
}
.store-box-5{
    margin-bottom:30px;
}
.store-box-5 .store_tit p{
    font-size:14px;
    color:#666;
    float: right;
}
.store-box-5 .picScroll-left{
    position:relative;
}
.store-box-5 .picScroll-left ul{
    overflow:hidden;
}
.store-box-5 .picScroll-left ul li{
    margin-right:25px;
    float:left;
}
.store-box-5 .picScroll-left ul li img{
     width:220px;
     height:165px;
     transition:transform 1.5s;
     -webkit-transition:transform 1.5s;
     -moz-transition:transform 1.5s;
     -ms-transition:transform 1.5s;
     transform:scale(1,1);
     -webkit-transfrom:scale(1,1);
     -moz-transfrom:scale(1,1);
     -ms-transfrom:scale(1,1);
}
.store-box-5 .picScroll-left ul li a{
    display:block;
     width:220px;
     height:165px;
     overflow:hidden;
}
.store-box-5 .picScroll-left ul li:hover img{
    transition:transform 1.5s;
     -webkit-transition:transform 1.5s;
     -moz-transition:transform 1.5s;
     -ms-transition:transform 1.5s;
     transform:scale(1.2,1.2);
     -webkit-transfrom:scale(1.2,1.2);
     -moz-transfrom:scale(1.2,1.2);
     -ms-transfrom:scale(1.2,1.2);
}
.store-box-5 .picScroll-left ul li p{
    font-size:14px;
    color:#333333;
    line-height:30px;
}
.store-box-5 .picScroll-left .prev{
   position:absolute;
   width:30px;
   height:165px;
   background:rgba(0,0,0,0.6); 
   left:0;
   top:0;
   display:block;
   z-index:99;
   text-align:center;
}
.store-box-5 .picScroll-left .prev img{
    margin-top:70px;
    display:inline-block;
}
.store-box-5 .picScroll-left .next img{
    margin-top:70px;
    display:inline-block;
}
.store-box-5 .picScroll-left .next{
   position:absolute;
   width:30px;
   height:165px;
   right:0;
   top:0;
   display:block;
   z-index:99;
    background:rgba(0,0,0,0.6); 
    text-align:center;
}
.store-box-6 {
    margin:50px 0;
}
.store-box-6 .chaet_tit{
     margin-top:20px;
     height:80px;
     background:#fef5f3;
     text-align:center;
     font-size:14px;
     color:#666;
     line-height:20px;
     padding:20px;
     box-sizing:border-box;
     margin-bottom:25px;
}
.store-box-6 .chaet_tit .h2{
      font-size:14px;
      color:#666;
      margin-bottom:3px;
}
.store-box-6 .chaet_tit .h2_tit{
        display:inline-block;
        /* background:url("../images/store_icon10.png") 0 center no-repeat; */
        padding-left:20px;
        box-sizing:border-box;
}
.store-box-6 .chaet_tit p span{
       color:#e93e0c;
       font-size:14px;
       font-weight:bold;
}
.store-box-6 .chaet_name{
    font-size:14px;
    color:#666;
    text-align: center;
    margin-bottom:25px;
}
.store-box-6 .chaet{
    width:100%;
    height:188px;
}

.rim{
    margin-bottom:50px;
}
.rim .rim-nav{
    overflow:hidden;
    line-height:50px;
     box-sizing:border-box;
     border-bottom:2px solid #e93e0c;
     margin-bottom:20px;
}
.rim .rim-nav ul{
    float:left;
}
.rim .rim-nav ul li{
    float:left;
    padding:0 20px;
    height:50px;
    line-height:50px;

    font-size:20px;
    color:#333;
    font-weight:bold;;
    cursor:pointer;
}
.rim .rim-nav ul li.on{
    background:#e93e0c;
    color:#fff;
}
.rim .rim-nav .more{
      font-size:14px;
      color:#999;
      float: right;
}
.rim .rim-con ul{
    overflow:hidden;
}
.rim .rim-con ul li{
     float:left;
     width:220px;
     margin-right:25px;
}
.rim .rim-con ul li:last-child{
     margin-right:0;
}
.rim .rim-con ul li .img{
    width:220px;
    height:165px;
    display:block;
    overflow:hidden;
}

.rim .rim-con ul li .img img{
    width:220px;
    height:165px;
    transition:transform 1.5s;
     -webkit-transition:transform 1.5s;
     -moz-transition:transform 1.5s;
     -ms-transition:transform 1.5s;
     transform:scale(1,1);
     -webkit-transfrom:scale(1,1);
     -moz-transfrom:scale(1,1);
     -ms-transfrom:scale(1,1);
}
.rim .rim-con ul li .img:hover img{
    transition:transform 1.5s;
     -webkit-transition:transform 1.5s;
     -moz-transition:transform 1.5s;
     -ms-transition:transform 1.5s;
     transform:scale(1.2,1.2);
     -webkit-transfrom:scale(1.2,1.2);
     -moz-transfrom:scale(1.2,1.2);
     -ms-transfrom:scale(1.2,1.2);
}
.rim .rim-con ul li .bot{
    font-size:14px;
    overflow:hidden;
    color:#333;
    line-height:36px;
}
.rim .rim-con ul li .bot p{
    float:left;
    font-weight:bold;

}
.rim .rim-con ul li .bot .price{
     float: right;
}
.rim .rim-con ul li .bot .price span{
     color:#e93e0c;
     font-weight:bold;

}

</style>
