<template>
    <div id="container">
        <div id="content">
            <div class="crumbsSearch">
                <div class="content">
                    <div class="crumbs"><a href="">房乐士</a> > <a href="">房产资讯</a> > <span>资讯</span></div>
                    <div class="search">
                        <input placeholder="楼盘搜索" />
                        <div class="box">
                            <input type="submit" class="btn">
                            <img src="@/assets/images/searcj.png" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec-house-details w1200">
              <div class="top-nav">
                <ul class="clearfix">
                    <li><a href="">房源信息</a></li>
                    <li><a href="">小区详情</a></li>
                    <li><a href="">税费计算器</a></li>
                    <li><a href="">房源图片</a></li>
                    <li><a href="">周边配套</a></li>
                    <li><a href="">经纪人评价</a></li>
                    <li><a href="">特价房</a></li>
                    <li><a href="">小区成交</a></li>
                    <li><a href="">周边租房</a></li>
                    <li><a href="">周边二手房</a></li>
                    <li><a href="">周边商铺</a></li>
                </ul>
              </div>
              <div class="house-details clearfix">
                <div class="img-box fl">
                     <div class="xqcase_box">
                       <div class="swiper_top">
                            <ul>
                                <li v-for="(item,index) in getSecondHouseDetail.b_imgs" :key="index">
                                    <img :src="item" >
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
                                    <li v-for="(item,index) in getSecondHouseDetail.b_imgs" :key="index">
                                        <img :src="item" >
                                    </li>
                               </ul>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="con-box fr">
                  <div class="op clearfix">
                    <h2 class="fl">{{getSecondHouseDetail.house_title}}</h2>
                    <div class="collect fr clearfix">
                      <img src="@/assets/images/Dw-xin.png" class="xin fl">
                      <img src="@/assets/images/Dw-feng.png" class="feng fr">
                    </div>
                  </div>
                  <p class="time">更新于{{getSecondHouseDetail.create_time}}</p>
                  <div class="money clearfix">
                    <p class="fl"><em>16501</em>万</p>
                    <p class="fl">首付预算约115.6万&nbsp;&nbsp;&nbsp;&nbsp;月供9,765元（仅供参考）<span class="problem">?</span></p>
                    <div class="shoufu_tan">
                        <h5>首付预算=净首付+税费+其他费用</h5>
                        <p>净首付：等于房屋成交价格减去银行贷款金额，默认按照最多可贷款金额计算。<br>税费：一般需要缴纳契税、个税、增值税及附加、综合地价款、土地出让金等。<br>其他：居间服务费，具体数额可咨询房屋经纪人。</p>
                    </div>
                  </div>
                  <div class="mj-list">
                    <ul class="clearfix">
                      <li>
                        <h2>{{HouseType}}</h2>
                        <p>{{getSecondHouseDetail.b_buildfloor | Buildfloor}} . 共32层</p>
                      </li>
                      <li>
                        <h2>{{getSecondHouseDetail.b_acreage}}m2</h2>
                        <p>南北</p>
                      </li>
                      <li>
                        <h2>{{getSecondHouseDetail.house_price}}元/m2</h2>
                        <p>精装修</p>
                      </li>
                    </ul>
                  </div>
                  <div class="tj-list">
                    <ul class="clearfix">
                      <li>
                        <span>楼盘位置：</span><span><em>云湖尚景</em>{{getSecondHouseDetail.house_address}}</span>
                      </li>
                      <li>
                        <span>楼盘区域：</span>
                        <span>江岸区百步亭</span>
                      </li>
                      <li>
                        <span>周边学校：</span>
                        <span>{{getSecondHouseDetail.near_school}}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="ag clearfix" v-for="(item,index) in getSecondHouseDetail.mediums" :key="index">
                    <div class="img fl">
                      <div class="box">
                        <img :src="item.avatar" >
                        <p>房乐士</p>
                      </div>
                      <i></i>
                    </div>
                    <div class="name fl">
                      <p>{{getSecondHouseDetail.mediums[0].user_realname}}</p>
                      <span>我是该房屋实勘人，清楚该房屋状况</span>
                      <h2 class="clearfix">
                        <img src="@/assets/images/Dw-telphone.png" class="fl" />
                        <span>{{getSecondHouseDetail.mediums[0].mobile}}</span>
                      </h2>
                    </div>
                    <div class="fl to-consult" :style="note">
                      咨询顾问
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottomAd this">
            	<a href="#">
		            <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;"/>
		            <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
		        </a>
            </div>
            <div class="mainPart">
                <div class="part_center">
                    <div class="part clearfix">
                        <div class="part_left">
                          <div class="house-infor">
                            <h2>房源信息</h2>
                            <table>
                              <tr>
                                <td>基本属性</td>
                                <td>
                                  <ul class="clearfix">
                                    <li class="fl">
                                      <span>建筑年代</span>
                                      <span>2005年</span>
                                    </li>
                                    <li class="fl">
                                      <span>产权性质</span>
                                      <span>商品房</span>
                                    </li>
                                    <li class="fl">
                                      <span>有无电梯</span>
                                      <span>{{Isdis}}</span>
                                    </li>
                                    <li class="fl">
                                      <span>挂牌时间</span>
                                      <span>2018-04-25</span>
                                    </li>
                                    <li class="fl">
                                      <span>建筑结构</span>
                                      <span>平层</span>
                                    </li>
                                    <li class="fl">
                                      <span>住宅类型</span>
                                      <span>{{Operast}}</span>
                                    </li>
                                    <li class="fl">
                                      <span>建筑类别</span>
                                      <span>楼板</span>
                                    </li>
                                    <li class="fl">
                                      <span>房源编号</span>
                                      <span>{{getSecondHouseDetail.house_number}}</span>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </table>
                            <h2>房源特色</h2>
                            <table>
                              <tr>
                                <td>核心卖点：</td>
                                <td>
                                  <ul>
                                    <li>1、碧桂园海昌天澜三期属于成熟小区，可购房入户。</li>
                                    <li>2、卧室私密性好，温馨，客厅宽敞，通风，得房率很高。</li>
                                    <li>3、楼层好，视野好，采光好。</li>
                                    <li>4、看房方便，房东诚心出售</li>
                                    <li>5、周边生活配套设施</li>
                                  </ul>
                                  <p class="sm">如果这套房子不合您意可以点击我的头像进入我的店铺有更多合适您的房源或者一定能找到能符合您要求的房源</p>
                                </td>
                              </tr>
                              <tr>
                                <td>业主心态</td>
                                <td><p>房东现在急用钱，需要钱周转，所以这套大房子，以低于市场价出售，现代城再也找不到这便宜的房子啦。有钥匙，看房子很方便。</p></td>
                              </tr>
                              <tr>
                                <td>小区配套</td>
                                <td>
                                  <p>交通：距离2号线地铁、车站3分钟等 商业：银行、健身房等 教育：学校（小学、中学）等 医疗：附近医院等 内部环境：环境整洁程度等 车位情况：有无车位、车位多少等 安保措施：保安情况等 其他：比如居民素质、建筑材质等</p>
                                </td>
                              </tr>
                              <tr>
                                <td>服务介绍</td>
                                <td><p>本人从事房地产多年，公司有大量好房源，欢迎进入我的店铺查看，欢迎随时电话咨询，相信我的专业，为您置业安家保驾护航。</p></td>
                              </tr>
                            </table>
                          </div>
                          <div class="sec-calculator">
                            <div class="nav clearfix">
                              <ul class="fl clearfix">
                                <li class="fl now">税费计算器</li>
                                <li class="fl" >更多计算器</li>
                              </ul>
                              <p class="fr">*备注：税费查询结果仅供参考</p>
                            </div>
                            <div class="con clearfix">
                              <div class="fdjs fl">
                                <div class="logo clearfix">
                                  <div class="img fl">
                                    <img src="@/assets/images/Dw-calculator.png" >
                                  </div>
                                  <div class="name fl">
                                    <h2>房贷计算器</h2>
                                    <p>选择基本情况，帮您快速计算房贷</p>
                                  </div>
                                </div>
                                <table class="cal" style="border-collapse:separate; border-spacing:0px 10px;">
                                  <tr>
                                    <td>房屋：</td>
                                    <td class="house-type clearfix">
                                      <span class="type"><i></i>新房</span>
                                      <span class="type"><i class="on"></i>二手房</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>房屋面积：</td>
                                    <td class="mj">
                                      <input type="text">
                                      <span>m2</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>房屋单价：</td>
                                    <td class="mj">
                                      <input type="text">
                                      <span>元/m2</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>首次购买：</td>
                                    <td class="house-type clearfix">
                                      <span class="type"><i></i>是</span>
                                      <span class="type"><i class="on"></i>否</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>有无电梯：</td>
                                    <td class="house-type clearfix">
                                      <span class="type"><i></i>有</span>
                                      <span class="type"><i class="on"></i>无</span>
                                    </td>
                                  </tr>
                                </table>
                                <span class="begin">开始计算</span>
                              </div>
                              <div class="jsjg fr">
                                <h2>计算结果</h2>
                                <ul>
                                  <li>
                                    <span>房贷总额：</span><span><em>1100000001</em>元</span>
                                  </li>
                                  <li>
                                    <span>工本费：</span><span><em>95</em>元</span>
                                  </li>
                                  <li>
                                    <span>契税：</span><span><em>8</em>元</span>
                                  </li>
                                  <li>
                                    <span>权属登记税：</span><span><em>95</em>元</span>
                                  </li>
                                  <li>
                                    <span>维修基金：</span><span><em>8</em>万</span>
                                  </li>
                                  <li>
                                    <span>合计：</span><span><em>17248</em>元</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="house-infor">
                            <h2>房源图片</h2>
                            <ul class="clearfix">
                              <li>
                                <img src="@/assets/images/Dw-img27.jpg" >
                                <span class="sm">效果图</span>
                              </li>
                              <li>
                                <img src="@/assets/images/Dw-img28.jpg" >
                                <span class="sm">室内</span>
                              </li>
                              <li>
                                <img src="@/assets/images/Dw-img29.jpg" >
                                <span class="sm">户型图</span>
                              </li>
                              <li>
                                <img src="@/assets/images/Dw-img30.jpg" >
                                <span class="sm">实景图</span>
                              </li>
                              <li>
                                <img src="@/assets/images/Dw-img31.jpg" >
                                <span class="sm">实景图</span>
                              </li>
                            </ul>
                          </div>
                          <div class="house-infor">
                            <h2>小区信息</h2>
                            <div class="quarters clearfix">
                              <div class="img fl">
                                <img src="@/assets/images/Dw-img21.jpg" >
                              </div>
                              <div class="name fl">
                                <h3><span>云湖尚景</span><i>(参考均价<em>20105</em>元/m2)</i></h3>
                                <ul class="clearfix">
                                  <li class="clearfix" ><span>同比去年</span><p class="up"><em>20.05</em>%</p></li>
                                  <li class="clearfix" ><span>环比上月</span><p class="down"><em>20.05</em></p>%</li>
                                  <li class="clearfix" ><span>物业类型</span><p>住宅</p></li>
                                  <li class="clearfix" ><span>物业费用</span><p>1.5元/m2</p></li>
                                  <li class="clearfix" ><span>建筑类型</span><p>板塔结合</p></li>
                                  <li class="clearfix" ><span>建筑年代</span><p>2008年</p></li>
                                  <li class="clearfix" ><span>当前挂牌</span><p><i>24套在售房源</i><i>7套出租房源</i></p></li>
                                </ul>
                              </div>
                            </div>
                            <div class="echart" id="echart"></div>
                          </div>
                          <div class="house-infor">
                            <h2>位置及周边 街景地图
                               <a href="">驾车</a>
                            </h2>
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
                                <li class="clearfix" v-for="(item,index) in getSecondHouseDetail.tradelog" :key="index">
                                    <div class="img fl">
                                    <img src="@/assets/images/Dw-img21.jpg" >
                                    </div>
                                    <div class="text fl">
                                    <h4>{{item.b_huxing}}</h4>
                                    <p>{{item.b_buildfloor | Buildfloor}}(共{{item.b_floor}})</p>
                                    <p>{{item.b_orientation}}</p>
                                    </div>
                                    <span class="mj fl">{{item.house_map}}</span>
                                    <span class="fl qytime">{{item.qian_time}}</span>
                                    <span class="cjprice fl"><em>{{item.deal_price}}</em>元/m2</span>
                                    <span class="cjf fl"><em>{{item.deal_avgprice}}</em>元/m2</span>
                                    <span class="sjly fl">{{item.from}}</span>
                                </li>
                            </ul>
                            <p class="seemore"><a href="#">查看全部成交记录</a></p>
                          </div>
                          <div class="house-infor">
                            <h2 class="clearfix"><span class="fl">置业顾问评价</span><a class="fr">查看更多</a></h2>
                            <div class="comment_list">
                                   <div class="comment">
                                        <p>
                                          <span>好评率<em>88%</em></span>
                                          <span>真实度<em>4.5</em></span>
                                          <span>满意度<em>4.5</em></span>
                                          <span>专业度<em>4.5</em></span>
                                        </p>
                                        <div class="comment_top clearfix">
                                           <div class="img_logo fl">
                                            <img src="@/assets/images/jjrdp1.png" >
                                            <p>王文军</p>
                                          </div>
                                           <div class="conts scenic_score fr">
                                              <div class="evaluate_img clearfix">
                                                  <div class="fl names">请您对他的服务进项点评</div>
                                                  <ul class="fl hp_img clearfix">
                                                      <li class="li1 active">好评</li>
                                                      <li class="li2">中评</li>
                                                      <li class="li3">差评</li>
                                                  </ul>
                                              </div>
                                              <div class="star_list clearfix">
                                                  <div class="evaluate fl clearfix">
                                                      <div class="pf_name fl">房屋信息真实度</div>
                                                      <div class="starRating fl">
                                                          <p class="photo">
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                          </p>
                                                      </div>
                                                  </div>
                                                  <div class="evaluate fl clearfix">
                                                      <div class="pf_name fl">服务态度满意度</div>
                                                      <div class="starRating fl">
                                                          <p class="photo">
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                          </p>
                                                      </div>
                                                  </div>
                                                  <div class="evaluate fl clearfix">
                                                      <div class="pf_name fl">业务水平专业度</div>
                                                      <div class="starRating fl">
                                                          <p class="photo">
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                              <span><i class="high"></i><i class="nohigh"></i></span>
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="pj_text">
                                                  <div class="text_area">
                                                      <textarea name="" placeholder="说说置业顾问在服务过程中的表现，对您有哪些帮助？"></textarea>
                                                      <p>0/30</p>
                                                  </div>
                                              </div>
                                              <div class="bot_btn">
                                                  <button class="submit_btn fl">提交评论</button>
                                              </div>
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
                          <div class="house-infor">
                            <h2 class="clearfix"><span class="fl">您感兴趣的新房</span><a class="fr">更多</a></h2>
                            <ul class="special_house_list clearfix">
                                  <li v-for="(item,index) in getSecondHouseDetail.new_house" :key="index">
                                      <div class="special_house_img">
                                          <a href="" class="img"><img :src="item.house_thumb" width="100%"></a>
                                          <div class="price_reduction">
                                              <ul>
                                                  <li class="title">
                                                      <span>降</span>
                                                      <img src="@/assets/images/price_reduction.png" width="100%">
                                                  </li>
                                                  <li>
                                                      <span class="range">{{item.b_discount}}</span>
                                                  </li>
                                              </ul>
                                              <span class="triangle"></span>
                                          </div>
                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">{{item.b_name}}</a>
                                          <ul>
                                              <li>市场价: {{item.b_market_price}} 元/m2</li>
                                              <li>活动价:&nbsp;<span>{{item.b_activity_price}}</span>&nbsp; 元/m2</li>
                                              <li>建面:{{item.b_acreage}} ㎡</li>
                                          </ul>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div class="house-infor">
                            <h2 class="clearfix"><span class="fl">同价位二手房</span><a class="fr">更多</a></h2>
                            <ul class="special_house_list clearfix">
                                <li v-for="(item,index) in getSecondHouseDetail.price_house" :key="index">
                                    <div class="special_house_img">
                                        <a href="" class="img">
                                            <img :src="item.house_thumb" width="100%">
                                        </a>
                                    </div>
                                    <div class="special_house_detail">
                                        <a href="" class="title">{{item.house_title}}</a>
                                        <ul class="clearfix">
                                            <li class="fl">单价: {{item.b_price}}元/m2</li>
                                            <li class="fr">建面: {{item.b_acreage}} ㎡</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                          </div>
                        </div>
                        <div class="part_right">
                            <div class="guide">
                              <div class="guide_top clearfix">
                                 <div class="fl">同小区二手房</div>
                                 <a href="" class="more fr">更多</a>
                              </div>
                              <ul class="special_house_list">
                                  <li>
                                      <div class="special_house_img">
                                          	<a href class="img">
                                          		<img src="@/assets/images/special_house.jpg" width="100%" />
                                          	</a>
                                            <div class="sale">
                                              	特价
                                          	</div>
                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                          <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                              </ul>
                            </div>
                            <div class="guide">
                              <div class="guide_top clearfix">
                                 <div class="fl">同小区同价位二手房</div>
                                 <a href="" class="more fr">更多</a>
                              </div>
                              <ul class="special_house_list">
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>
                                            <div class="sale">
                                              特价
                                          </div>
                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                         <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="special_house_img">
                                          <a href class="img"><img src="@/assets/images/special_house.jpg" width="100%" /></a>

                                      </div>
                                      <div class="special_house_detail">
                                          <a href="" class="title">[南昌] 中国铁建青秀城</a>
                                          <ul>
                                              <li><span>105.76 万元</span>/套</li>
                                              <li>93.92 ㎡</li>
                                              <li>4室2厅 · 低层 · 南北向</li>
                                          </ul>
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

export default {
    name:"handHousedetail",
    data(){
        return{
            note:{
                backgroundImage: "url(" + require("@/assets/images/Dw-consult.png")+")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "45px 9px",
                backgroundSize: "22px 22px",
            },
            getSecondHouseDetail:{},
        }
    },
    filters:{
        //判断楼层
        Buildfloor:function(val){
            switch (val){
                case 1:
                    return "低层";
                    break;
                case 2:
                    return "多层";
                    break;
                case 3:
                    return "小高层";
                    break;
                case 4:
                    return "高层";
                    break;
                case 5:
                    return "超高层";
                    break;
                default:
                    return "无匹配数据";
            }
        }
    },
    computed:{
        //判断是否有电梯
        Isdis:function(){
            switch (this.getSecondHouseDetail.b_buildfloor){
                case 0:
                    return "有";
                    break;
                case 1:
                    return "没有";
                    break;
                default:
                    return "无匹配数据";
            }
        },
        //判断住宅类型
        Operast:function(){
            switch (this.getSecondHouseDetail.house_operast){
                case "1":
                    return "住宅";
                    break;
                case "2":
                    return "别墅";
                    break;
                case "3":
                    return "写字楼";
                    break;
                case "4":
                    return "商铺";
                    break;
                default:
                    return "无匹配数据";
            }
        },
        //判断户型分类
        HouseType:function(){
            switch (this.getSecondHouseDetail.house_type){
                case "1":
                    return "一居室";
                    break;
                case "2":
                    return "二居室";
                    break;
                case "3":
                    return "三居室";
                    break;
                case "4":
                    return "四居室";
                    break;
                case "5":
                    return "五居室";
                    break;
                default:
                    return "无匹配数据";
            }
        }

    },
    created(){
        this.axios.get(process.env.API_HOST+"secondhouse/Index/getSecondHouseDetail",{params:{id:this.$route.query.id}}).then((res) => {
            //console.log(res.data.data);
            this.getSecondHouseDetail = res.data.data;
            console.log(this.getSecondHouseDetail)
        }).catch((err) => {
            console.log(err);
        })
    },
    mounted(){
        //计算器单选
        $(".fdjs .house-type .type").click(function(){
            $(this).find("i").addClass('on');
            $(this).siblings().find("i").removeClass('on')
        })


        /**左右轮播**/
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
            console.log(n)

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

$(function(){
        $(".problem").hover(function(){
                $(".shoufu_tan").toggle()
            })

            $(".pxMain_con .tiaoBox li").each(function(){
                var lis = $(this).find('.tCon a .inputSty ');
                for(var i=0;i<lis.length;i++){
                var li = lis[i];
                    $(li).click(function(event) {
                    $(this).toggleClass('on_check');
                });
                }
            });
            $(".chioce_result ul li img").click(function(event) {
            $(this).parent(".chioce_result ul li").remove();
            });
            $(".interlocution .tabbar a").click(function(){
            $(this).addClass("active").siblings(".active").removeClass("active");
            var n = $(this).index(".interlocution .tabbar a");
            $(".interlocution ul").eq(n).show().siblings(".interlocution ul").hide();
            });
            $(".hot_houses .tabbar a").click(function(){
            $(this).addClass("active").siblings(".active").removeClass("active");
            var n = $(this).index(".hot_houses .tabbar a");
            $(".hot_houses .hot_bot").eq(n).show().siblings(".hot_houses .hot_bot").hide();
            });




    $(".comment_list .comment .comment_top .conts .date .fr span.reply").click(function(event) {
        $(this).parents(".comment_list .comment .comment_top .conts").find('.comment_list .comment .comment_top .conts .com_form').show();
    });
    $(".scenic_score .evaluate_img ul li").click(function(event) {
        $(".scenic_score .evaluate_img ul li").removeClass('active');
        $(this).addClass('active');
    });
    $(".scenic_score .read span").click(function(event) {
        $(this).toggleClass('active');
    });
    $(".scenic_score .bot_btn .fl span").click(function(event) {
        $(this).toggleClass('active');
    });


    //评分
    var starRating = 0;
    $('.photo span').on('click',function () {
        var index = $(this).index()+1;
        $(this).prevAll().find('.high').css('z-index',1)
        $(this).find('.high').css('z-index',1)
        $(this).nextAll().find('.high').css('z-index',0)
        starRating = index*1;
        $(this).parents(".starRating").find('.starNum').html(starRating.toFixed(0)+'分');
    })
})
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
    display: block;
    cursor: pointer;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #e93e0c;
}
.crumbsSearch .content .search input.btn {
    width: 54px;
    height: 45px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #e93e0c;
}
.crumbsSearch .content .search .box img{
    position: absolute;
    z-index: 3;
    width: 24px;
    height: 24px;
    left:50%;
    margin-left: -12px;
    top:50%;
    margin-top: -12px;
}
.sec-house-details .top-nav {
    width: 100%;
    background-color: #e93e0c;
    margin: 25px 0;
}
.sec-house-details .top-nav ul li {
    float: left;
    height: 50px;
    text-align: center;
    line-height: 50px;
    width: 109.09px;
}
.sec-house-details .top-nav ul li a {
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
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
.swiper_top ul li:first-child {
    z-index: 10;
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
.swiper_bot ul li {
    float: left;
    margin-right: 5px;
    width: 116px;
    height: 86px;
    box-sizing: border-box;
}
.swiper_bot ul li:first-child {
    border: 2px solid #e93e0c;
}
.swiper_bot ul li img {
    width: 100%;
    height: 100%;
}
.sec-house-details .house-details .con-box {
    width: 625px;
}
.sec-house-details .house-details .con-box .op h2 {
    width: 510px;
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    color: #000;
}
.sec-house-details .house-details .con-box .op .collect img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-top: 8px;
}
.sec-house-details .house-details .con-box .op .collect img.feng {
    margin-left: 25px;
}
.sec-house-details .house-details .con-box .time {
    font-size: 14px;
    color: #666;
    line-height: 36px;
}
.sec-house-details .house-details .con-box .money {
    position: relative;
}
.sec-house-details .house-details .con-box .money p {
    font-size: 14px;
    line-height: 36px;
    color: #666;
}
.sec-house-details .house-details .con-box .money p:nth-child(1) {
    margin-right: 60px;
}
.sec-house-details .house-details .con-box .money p em {
    font-size: 26px;
    color: #e93e0c;
    font-weight: bold;
    margin-right: 5px;
}
.sec-house-details .house-details .con-box .money p {
    font-size: 14px;
    line-height: 36px;
    color: #666;
}
.sec-house-details .house-details .con-box .money p span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #666;
    line-height: 14px;
    font-size: 14px;
    border-radius: 50%;
    text-align: center;
    margin-left: 3px;
    cursor: pointer;
}
.sec-house-details .house-details .con-box .money .shoufu_tan {
    position: absolute;
    z-index: 11;
    top: -140px;
    right: 85px;
    width: 421px;
    padding: 13px;
    color: #fff;
    border-radius: 2px;
    background-color: rgba(0,0,0,0.5);
    display: none;
}
.sec-house-details .house-details .con-box .money .shoufu_tan h5 {
    font-size: 12px;
    margin-bottom: 10px;
}
.sec-house-details .house-details .con-box .money .shoufu_tan p {
    font-size: 12px;
    line-height: 18px;
    color: #fff;
}
.sec-house-details .house-details .con-box .mj-list {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 20px 0 15px;
}
.sec-house-details .house-details .con-box .mj-list ul li {
    float: left;
    text-align: center;
    margin-right: 70px;
}
.sec-house-details .house-details .con-box .mj-list ul li h2 {
    font-size: 18px;
    color: #333;
    line-height: 36px;
}
.sec-house-details .house-details .con-box .mj-list ul li p {
    font-size: 14px;
    line-height: 36px;
    color: #666;
}
.sec-house-details .house-details .con-box .tj-list {
    border-bottom: 1px solid #f5f5f5;
}
.sec-house-details .house-details .con-box .tj-list li span {
    font-size: 14px;
    line-height: 36px;
    color: #666;
}
.sec-house-details .house-details .con-box .tj-list li em {
    color: #e93e0c;
    margin-right: 3px;
}
.sec-house-details .house-details .con-box .ag {
    padding: 30px 0 35px;
}
.sec-house-details .house-details .con-box .ag .img {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
}
.sec-house-details .house-details .con-box .ag .img .box {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
}
.sec-house-details .house-details .con-box .ag .img img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.sec-house-details .house-details .con-box .ag .img p {
    position: absolute;
    width: 60px;
    height: 24px;
    line-height: 24px;
    z-index: 3;
    background-color: rgba(0,0,0,0.5);
    font-size: 12px;
    color: #fff;
    left: 0;
    bottom: 0;
    text-align: center;
}
.sec-house-details .house-details .con-box .ag .img i {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #38a204;
    z-index: 3;
    top: 7px;
    right: 2px;
}
.sec-house-details .house-details .con-box .ag .name {
    margin-right: 120px;
}
.sec-house-details .house-details .con-box .ag .name p {
    font-size: 14px;
    line-height: 30px;
    color: #333;
}
.sec-house-details .house-details .con-box .ag .name>span {
    font-size: 14px;
    line-height: 24px;
    color: #999;
    display: block;
}
.sec-house-details .house-details .con-box .ag .name>h2 {
    font-size: 14px;
    color: #666;
    line-height: 36px;
    font-weight: bold;
}
.sec-house-details .house-details .con-box .ag .name>h2 img {
    width: 22px;
    height: 22px;
    margin-top: 7px;
    margin-right: 10px;
}
.sec-house-details .house-details .con-box .ag .to-consult {
    width: 188px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #e93e0c;
    color: #fff;
    cursor: pointer;
    padding-left: 10px;
    margin-top: 30px;
}
.bottomAd {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    max-width: 1200px;
}
.bottomAd.this {
    margin-bottom: 0;
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
.part .part_left {
    width: 850px;
    float: left;
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
.house-infor table tr td:first-child {
    font-size: 16px;
    color: #999;
    line-height: 36px;
    vertical-align: top;
    width: 80px;
}
.house-infor table tr td li {
    font-size: 14px;
    line-height: 36px;
    color: #999;
    width: 50%;
}
.house-infor table tr td li span:last-child {
    font-size: 14px;
    color: #666;
    margin-left: 15px;
}
.house-infor table tr td .sm {
    font-size: 14px;
    line-height: 36px;
    color: #999;
    width: 37%;
}
.house-infor table tr td p {
    font-size: 14px;
    line-height: 36px;
    color: #999;
}
.sec-calculator {
    margin-top: 30px;
}
.sec-calculator .nav {
    border-bottom: 2px solid #e93e0c;
}
.sec-calculator .nav ul li {
    width: 140px;
    line-height: 45px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
}
.sec-calculator .nav ul li.now {
    background-color: #e93e0c;
    color: #fff;
}
.sec-calculator .nav p {
    font-size: 14px;
    color: #999;
    margin-top: 13px;
}
.sec-calculator .con .fdjs .logo {
    margin: 15px 0;
}
.sec-calculator .con .fdjs .logo .img {
    margin: 0 15px 0 20px;
}
.sec-calculator .con .fdjs .logo img {
    width: 50px;
    height: 50px;
}
.sec-calculator .con .fdjs .logo h2 {
    font-size: 18px;
    color: #333;
    line-height: 24px;
}
.sec-calculator .con .fdjs .logo p {
    font-size: 14px;
    color: #999;
    line-height: 24px;
}
.sec-calculator .con .fdjs .cal .house-type span {
    float: left;
    height: 45px;
    line-height: 45px;
    position: relative;
    padding-left: 30px;
    margin-right: 30px;
    cursor: pointer;
}
.sec-calculator .con .fdjs .cal tr td{
    font-size: 16px;
}
.cal .house-type span i {
    width: 18px;
    height: 18px;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 13px;
    border:2px solid #ccc;
    border-radius: 50%;
}
.cal .house-type span i.on {
    border-color:#e93e0c;
}
.cal .house-type span i.on::after{
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content:'';
    background-color: #e93e0c;
    left:50%;
    top:50%;
    margin-left: -4px;
    margin-top: -4px;
}
.sec-calculator .con .fdjs .cal .mj {
    position: relative;
}
.sec-calculator .con .fdjs .cal .mj input {
    display: block;
    width: 360px;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    padding-left: 10px;
    border: 1px solid #ccc;
}
.sec-calculator .con .fdjs .cal .mj span {
    position: absolute;
    font-size: 14px;
    color: #333;
    right: 20px;
    top: 15px;
}
.sec-calculator .con .fdjs .begin {
    width: 360px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #e93e0c;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    display: block;
    cursor: pointer;
}
.sec-calculator .con .jsjg h2 {
    font-size: 16px;
    color: #333;
    line-height: 36px;
    margin-bottom: 50px;
}
.sec-calculator .con .jsjg li {
    margin: 20px 0;
}
.sec-calculator .con .jsjg li span {
    font-size: 14px;
    line-height: 24px;
    color: #333;
}
.sec-calculator .con .jsjg li span:first-child {
    width: 100px;
    display: inline-block;
    text-align: right;
}
.sec-calculator .con .jsjg li:first-child span em {
    color: #e93e0c;
}
.sec-calculator .con .jsjg li span em {
    display: inline-block;
    width: 105px;
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
    color: #333;
}
.house-infor>ul>li {
    position: relative;
    float: left;
    margin-bottom: 10px;
}
.house-infor>ul>li:nth-child(2n+1) {
    float: right;
}
.house-infor>ul>li img {
    display: block;
}
.house-infor>ul>li .sm {
    position: absolute;
    width: 80px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    bottom: 0;
    z-index: 3;
}
.house-infor .quarters .img {
    margin-right: 20px;
}
.house-infor .quarters .img img {
    display: block;
    width: 220px;
    height: 165px;
}
.house-infor .quarters .name h3 span {
    font-size: 16px;
    line-height: 36px;
    color: #666;
    text-decoration: underline;
    margin-right: 20px;
}
.house-infor .quarters .name h3 i {
    font-size: 14px;
    color: #666;
    line-height: 36px;
}
.house-infor .quarters .name h3 i em {
    color: #e93e0c;
    font-weight: bold;
    margin: 0 5px;
}
.house-infor .quarters .name ul {
    width: 600px;
}
.house-infor .quarters .name ul li {
    float: left;
    width: 300px;
    height: 36px;
    line-height: 36px;
}
.house-infor .quarters .name ul li span {
    font-size: 14px;
    color: #999;
    line-height: 36px;
    float: left;
}
.house-infor .quarters .name ul li p {
    float: left;
    height: 36px;
    line-height: 36px;
    color: #666;
    margin-left: 18px;
}
.quarters .name ul li p.up em {
    color: #e93e0c;
    font-weight: bold;
    /* background-image: url(../static/images/Dw-up.png);
    background-repeat: no-repeat;
    background-position: left center; */
    padding-left: 15px;
    margin-right: 5px;
}
.quarters .name ul li p.down em {
    color: #009900;
    font-weight: bold;
    /* background-image: url(../static/images/Dw-down.png);
    background-repeat: no-repeat;
    background-position: left center; */
    padding-left: 15px;
    margin-right: 5px;
}
.house-infor .quarters .name ul li p {
    float: left;
    height: 36px;
    line-height: 36px;
    color: #666;
    margin-left: 18px;
}
.house-infor .quarters .name ul li p i {
    text-decoration: underline;
    margin-right: 25px;
}
.house-infor h2 a {
    font-size: 14px;
    color: #999;
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
#map .map_nav .btn {
    width: 54px;
    height: 55px;
    /* background: #f5f5f5 url(../images/map_btn.png) center no-repeat; */
    background-color: #f5f5f5;
    position: absolute;
    left: -54px;
    top: 0;
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
    width: 115px;
    text-align: center;
    float: left;
}
.house-infor .dh span.infor {
    width: 255px;
    text-align: left;
    padding-left: 15px;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 115px;
    text-align: center;
    float: left;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 115px;
    text-align: center;
    float: left;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 115px;
    text-align: center;
    float: left;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 115px;
    text-align: center;
    float: left;
}
.house-infor .dh span {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    width: 115px;
    text-align: center;
    float: left;
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
.house-infor ul.list .text {
    width: 105px;
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
.house-infor ul.list .text p {
    font-size: 14px;
    color: #666;
    line-height: 36px;
}
.house-infor ul.list span {
    font-size: 14px;
    color: #666;
    text-align: center;
    width: 115px;
    margin-top: 45px;
}
.house-infor ul.list span {
    font-size: 14px;
    color: #666;
    text-align: center;
    width: 115px;
    margin-top: 45px;
}
.house-infor ul.list span {
    font-size: 14px;
    color: #666;
    text-align: center;
    width: 115px;
    margin-top: 45px;
}
.house-infor ul.list span em {
    font-weight: bold;
    color: #e93e0c;
    margin-right: 5px;
}
.house-infor ul.list span {
    font-size: 14px;
    color: #666;
    text-align: center;
    width: 115px;
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
a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
.comment_list {
    padding-top: 20px;
}
.comment_list .comment {
    width: 100%;
    height: auto;
}
.comment_list .comment>p {
    margin-bottom: 15px;
}
.comment_list .comment>p span {
    font-size: 14px;
    color: #666;
    line-height: 36px;
    margin-right: 35px;
}
.comment_list .comment>p span em {
    font-size: 14px;
    color: #e93e0c;
    font-weight: bold;
    margin-left: 5px;
}
.comment_list .comment .comment_top {
    width: 100%;
    height: auto;
    padding: 0 0 20px;
}
.comment_list .comment .comment_top .img_logo {
    width: 60px;
    height: 60px;
}
.comment_list .comment .comment_top .img_logo img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.comment_list .comment .comment_top .img_logo p {
    font-size: 14px;
    color: #333;
    line-height: 36px;
    text-align: center;
}
.comment_list .comment .comment_top .conts {
    width: 765px;
    height: auto;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 20px;
}
.comment_list .comment .comment_top .conts.scenic_score {
    border: 0;
    padding-bottom: 0;
}
.scenic_score .evaluate_img .names {
    font-size: 14px;
    color: #666;
    margin-right: 24px;
    line-height: 34px;
    margin-bottom: 20px;
}
.scenic_score .evaluate_img ul li {
    float: left;
    font-size: 12px;
    color: #999;
    padding-left: 34px;
    width: 70px;
    height: 27px;
    line-height: 27px;
    border: 1px solid #ccc;
    margin-right: 10px;
    cursor: pointer;
}
.scenic_score .evaluate_img ul li.li1 {
    /* background: url(../../static/images/jjrdp15.png) no-repeat 11px center; */
}
.scenic_score .evaluate_img ul li.li1.active {
    /* background: url(../../static/images/jjrdp10.png) no-repeat #e93e0c 11px center; */
    border: 1px solid #e93e0c;
    color: #fff;
}
.scenic_score .evaluate_img ul li.li2 {
    /* background: url(../../static/images/jjrdp16.png) no-repeat 11px center; */
}
.scenic_score .evaluate_img ul li.li3 {
    /* background: url(../../static/images/jjrdp17.png) no-repeat 11px center; */
}
.scenic_score .pf_name {
    width: 109px;
    font-size: 14px;
    color: #666;
}
.starRating .photo span {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 16px;
    overflow: hidden;
    margin-right: 5px;
    cursor: pointer;
}
.starRating .photo span .high {
    position: absolute;
    width: 18px;
    height: 16px;
    top: 0;
    left: 0;
    /* background: url(../../static/images/jjrdp8.png); */
    z-index: 1;
}
.starRating .photo span .nohigh {
    position: absolute;
    width: 18px;
    height: 16px;
    top: 0;
    left: 0;
    /* background: url(../../static/images/jjrdp9.png); */
}
.scenic_score .pj_text {
    padding: 15px 0;
}
.scenic_score .pj_text .text_area {
    position: relative;
    width: 765px;
    height: 130px;
}
.scenic_score .pj_text .text_area textarea {
    width: 743px;
    padding: 18px 10px;
    height: 92px;
    border: 1px solid #f5f5f5;
    font-size: 14px;
    color: #999;
    resize: none;
}
.scenic_score .pj_text .text_area p {
    font-size: 16px;
    color: #999;
    line-height: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
}
.scenic_score .bot_btn {
    margin: 30px 0 0 63px;
}
.scenic_score .bot_btn .fl {
    line-height: 36px;
}
.scenic_score .bot_btn .submit_btn {
    display: block;
    outline: none;
    border: 0;
    width: 188px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    background: #e93e0c;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
}
.store_ad a img {
    display: inline-block;
    width: 100%;
}
.house-infor>ul>li {
    position: relative;
    float: left;
    margin-bottom: 10px;
}
.house-infor>ul>li:nth-child(2n+1) {
    float: right;
}
.house-infor .special_house_list>li {
    float: left !important;
    margin-right: 16.5px;
    width: 200px;
}
.house-infor .special_house_list>li .special_house_img>a img {
    display: block;
    width: 200px;
    height: 150px;
}
.price_reduction {
    position: absolute;
    top: 0;
    left: 0;
}
.price_reduction ul {
    overflow: hidden;
    background: #e93e0c;
    padding-top: 5px;
}
.price_reduction ul li {
    width: 46px;
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    color: #e9e60c;
    text-align: center;
}
.house-infor .price_reduction .title img {
    display: inline-block;
    vertical-align: bottom;
}
.price_reduction .title img {
    width: 10px;
    height: 12px;
}
.price_reduction .triangle {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #e93e0c transparent;
    border-width: 10px 22.5px 0 22.5px;
}
.special_house_detail {
    padding-top: 4px;
    overflow: hidden;
    width: 148px;
    float: right;
}
.special_house_detail .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    line-height: 14px;
    margin-bottom: 14px;
    display: block;
}
.special_house_detail ul li {
    color: #666;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.special_house_detail ul li span {
    color: #e93e0c;
    font-weight: bold;
}
.part .part_right {
    width: 310px;
    float: right;
}
.guide .guide_top {
    font-size: 18px;
    color: #333;
    margin: 30px auto 10px;
}
.guide .guide_top .more {
    font-size: 14px;
    color: #999;
}
.part_right .special_house_list>li {
    margin-bottom: 15px;
    width: 310px;
    height: 110px;
}
.part_right .special_house_img {
    width: 145px;
    position: relative;
    height: 110px;
    float: left;
    overflow: hidden;
}
.part_right .special_house_img img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -moz-transform: scale(1);
    z-index: 0;
    transition: all linear 0.2s;
}
.part_right .special_house_img .sale {
    position: absolute;
    width: 48px;
    height: 32px;
    z-index: 3;
    background-color: #e93e0c;
    font-size: 14px;
    color: #fff;
    text-align: center;
    left: 0;
    top: 0;
    line-height: 32px;
}
.special_house_detail {
    padding-top: 4px;
    overflow: hidden;
    width: 148px;
    float: right;
}
.special_house_detail .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    line-height: 14px;
    margin-bottom: 14px;
    display: block;
}
.special_house_detail ul li {
    color: #666;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.special_house_detail ul li span {
    color: #e93e0c;
    font-weight: bold;
}
.house-infor .special_house_list>li:last-child {
    margin-right: 0;
}
.house-infor .special_house_detail {
    width: 100%;
}
.house-infor ul.list .img img {
    width: 145px;
    height: 110px;
    display: block;
}
</style>
