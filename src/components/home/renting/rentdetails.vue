<template>
   <div id="content" class="renting">
        <div class="crumbsSearch">
            <div class="content">
                <div class="crumbs"><a href="">房乐士</a> > <a href="">房产资讯</a> > <span>资讯</span></div>
                <div class="search">
                    <input placeholder="楼盘搜索" />
                     <div class="to-search">
                        <input type="submit"  class="btn">
                        <img src="@/assets/images/searcj.png" >
                    </div>
                </div>
            </div>
        </div>
        <div class="sec-house-details w1200">
            <div class="top-nav">
                <ul>
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
                    <div class="clear">
                    </div>
                </ul>
            </div>
           <div class="house-details">
                <div class="img-box fl">
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
              <div class="con-box fr">
                    <div class="op">
                        <h2 class="fl">{{recruit.b_name}}</h2>
                        <div class="collect fr">
                        <img src="@/assets/images/Dw-xin.png" class="xin fl">
                        <img src="@/assets/images/Dw-feng.png" class="feng fr">
                        <div class="clear">
                        </div>
                        </div>
                        <div class="clear">

                        </div>
                    </div>
                    <p class="time">发布于2018年06月07日</p>
                    <div class="money clearfix">
                        <p class="fl"><em>{{recruit.b_price}}</em>万</p>

                    </div>
                    <div class="mj-list">
                        <ul class="clearfix">
                        <li>
                            <h2>4室2室2卫</h2>
                            <p>低楼层 . 共32层</p>
                        </li>
                        <li>
                            <h2>{{recruit.building_area}}</h2>
                            <p>南北</p>
                        </li>
                        <li>
                            <h2>158元/m2</h2>
                            <p>{{decoration}}</p>
                        </li>
                        </ul>
                    </div>
                    <div class="tj-list">
                        <ul class="clearfix">
                        <li>
                            <span>楼盘位置：</span><span><em>云湖尚景</em>{{recruit.province_text}}{{recruit.city_text}}{{recruit.house_address}}</span>
                        </li>
                        <li>
                            <span>楼盘区域：</span>
                            <span>{{recruit.area_text}}</span>
                        </li>
                        <li>
                            <span>周边学校：</span>
                            <span class="shcool" v-for="(item,index) in recruit.school" :key="index">{{item.s_name}}</span>
                        </li>
                        </ul>
                    </div>
                    <div class="house_tips">
                            <ul>
                                <li class="li1">{{sale_statusfun}}</li>
                                <li class="li3" v-for="(item,index) in recruit.tags" :key="index">{{item.tags_name}}</li>
                            <div class="clear"></div>
                            </ul>
                        </div>
                    <div class="ag clearfix">
                        <div class="img fl">
                        <div class="box">
                            <!-- <img :src="recruit.mediums[0].avatar" > -->
                            <p>房乐士</p>
                        </div>
                        <i></i>
                        </div>
                        <div class="name fl">
                        <p>李鹏程</p>
                        <!-- <span>{{recruit.mediums[0].user_realname}}</span> -->
                        <h2 class="clearfix">
                            <img src="@/assets/images/Dw-telphone.png" class="fl" />
                            <span>{{recruit.hot_line}}</span>
                        </h2>
                        </div>
                        <div class="fl to-consult">
                        咨询顾问
                        </div>
                    </div>
                    </div>
                    <div class="clear">
                    </div>
                 </div>
            
            
        </div>
        <div class="bottomAd this">
            <img src="@/assets/images/dzlp1.png" width="100%" style="vertical-align: middle;"/>
            <div class="bot">已有<i>238</i>人参与<em class="date">距离结束：198 天 12 时 56 分 27 秒</em></div>
        </div>
         <div class="mainPart">
                <div class="part_center">
                    <div class="part">
                        <div class="part_left">
                          <div class="house-infor">
                            <h2>房源描述</h2>
                              <p> {{recruit.d_near_facilities}}</p>
                              

                              <div class="txt">
                               
                              </div>
                           </div>

                          <div class="house-infor">
                            <h2>配套设施</h2>
                            <div class="assort">
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon1.png" alt="">
                                    <p>床</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon1.png" alt="">
                                    <p>宽带</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon3.png" alt="">
                                    <p>电视</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon4.png" alt="">
                                    <p>冰箱</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon5.png" alt="">
                                    <p>洗衣机</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon6.png" alt="">
                                    <p>空调</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon7.png" alt="">
                                    <p>热水器</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon8.png" alt="">
                                    <p>暖气</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon9.png" alt="">
                                    <p>车库</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon10.png" alt="">
                                    <p>阁楼</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon11.png" alt="">
                                    <p>停车位</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon12.png" alt="">
                                    <p>阳光房</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon13.png" alt="">
                                    <p>露台</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon14.png" alt="">
                                    <p>游泳池</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon15.png" alt="">
                                    <p>电磁炉</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon16.png" alt="">
                                    <p>沙发</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon17.png" alt="">
                                    <p>衣柜</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon18.png" alt="">
                                    <p>天然气</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon19.png" alt="">
                                    <p>抽油烟机</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon20.png" alt="">
                                    <p>微波炉</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon21.png" alt="">
                                    <p>消毒柜</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon22.png" alt="">
                                    <p>电梯</p>
                               </div>
                               <div class="assort-box">
                                   <img src="@/assets/images/assort_icon23.png" alt="">
                                    <p>桌椅</p>
                               </div>
                                <div class="assort-box">
                                   <img src="@/assets/images/assort_icon24.png" alt="">
                                    <p>独卫</p>
                               </div>
                            </div>
                          </div>
                          <div class="house-infor">
                            <h2>房源图片</h2>
                            <ul class="clearfix">
                              <li v-for="(item,index) in recruit.b_imgs" :key="index">
                                <img :src="item" >
                                <!-- <span class="sm">效果图</span> -->
                              </li>
                              <!-- <li>
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
                              </li> -->
                            </ul>
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

                          <div class="house-infor">
                             <h2>同小区出租房源</h2>
                              <div class="rent">
                                 <div class="rent-box" v-for="(item,index) in recruit.near_shangpu" :key="index">
                                    <a href="" class="img">
                                      <img :src="item.house_thumb" alt="">
                                    </a>
                                    <div class="bot">
                                        <i>{{item.b_name}}</i>
                                        <div class="price">
                                          <span>{{item.house_price}}</span>
                                          元/月
                                        </div>
                                    </div>
                                    <p>朝阳 . 3室2厅 . 304.0㎡</p>
                                 </div>
                                 <!-- <div class="rent-box">
                                    <a href="" class="img">
                                      <img src="@/assets/images/ad5.jpg" alt="">
                                    </a>
                                    <div class="bot">
                                        <i>中国铁建青秀城</i>
                                        <div class="price">
                                          <span>1056</span>
                                          元/月
                                        </div>
                                    </div>
                                    <p>朝阳 . 3室2厅 . 304.0㎡</p>
                                 </div>
                                 <div class="rent-box">
                                    <a href="" class="img">
                                      <img src="@/assets/images/ad5.jpg" alt="">
                                    </a>
                                    <div class="bot">
                                        <i>中国铁建青秀城</i>
                                        <div class="price">
                                          <span>1056</span>
                                          元/月
                                        </div>
                                    </div>
                                    <p>朝阳 . 3室2厅 . 304.0㎡</p>
                                 </div>
                                 <div class="rent-box">
                                    <a href="" class="img">
                                      <img src="@/assets/images/ad5.jpg" alt="">
                                    </a>
                                    <div class="bot">
                                        <i>中国铁建青秀城</i>
                                        <div class="price">
                                          <span>1056</span>
                                          元/月
                                        </div>
                                    </div>
                                    <p>朝阳 . 3室2厅 . 304.0㎡</p>
                                 </div> -->
                              </div>
                          </div>





                        </div>
                        <div class="part_right">
                           <div class="guide">
                              <div class="guide_top">
                                 <div class="fl">同小区同价位房源</div>
                                 <a href="" class="more fr">更多</a>
                                 <div class="clear"></div>
                              </div>
                              <ul class="special_house_list">
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
                              <div class="guide_top">
                                 <div class="fl">同小区在租房源</div>
                                 <a href="" class="more fr">更多</a>
                                 <div class="clear"></div>
                              </div>
                              <ul class="special_house_list">
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
</template>

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

.sec-house-details .top-nav {
    width: 100%;
    background-color: #e93e0c;
    margin: 25px 0;
    overflow: hidden;
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

.sec-house-details .house-details{overflow: hidden;}
.sec-house-details .house-details .con-box{width:625px;}
.sec-house-details .house-details .con-box .op{overflow: hidden;}
.sec-house-details .house-details .con-box .op h2{width:510px;font-size:30px;font-weight:bold;line-height:36px;color:#000;}
.sec-house-details .house-details .con-box .op .collect img{width:20px;height:20px;cursor: pointer;margin-top:8px;}
.sec-house-details .house-details .con-box .op .collect img.feng{margin-left:25px;}
.sec-house-details .house-details .con-box .time{font-size:14px;color:#666;line-height:36px;}
.sec-house-details .house-details .con-box .money p{font-size:14px;line-height:36px;color:#666;}
.sec-house-details .house-details .con-box .money p:nth-child(1){margin-right:60px;}
.sec-house-details .house-details .con-box .money p em{font-size:26px;color:#e93e0c;font-weight:bold;margin-right:5px;}
.sec-house-details .house-details .con-box .money p span{display: inline-block;width:16px;height:16px;border:1px solid #666;line-height:14px;font-size:14px;border-radius:50%;text-align:center;margin-left:3px;}
.sec-house-details .house-details .con-box .mj-list{border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5;margin:20px 0 15px;}
.sec-house-details .house-details .con-box .mj-list ul li{float:left;text-align:center;margin-right:70px;}
.sec-house-details .house-details .con-box .mj-list ul li:last-child{margin-right:0;}
.sec-house-details .house-details .con-box .mj-list ul li h2{font-size:18px;color:#333;line-height:36px;}
.sec-house-details .house-details .con-box .mj-list ul li p{font-size:14px;line-height:36px;color:#666;}
.sec-house-details .house-details .con-box .tj-list{border-bottom:1px solid #f5f5f5;}
.sec-house-details .house-details .con-box .tj-list li span{font-size:14px;line-height:36px;color:#666;}
.sec-house-details .house-details .con-box .tj-list li .shcool:after{content: "、";width: auto;height: auto;}
.sec-house-details .house-details .con-box .tj-list li .shcool:last-child:after{content: "";width: auto;height: auto;} 
.sec-house-details .house-details .con-box .tj-list li em{color:#e93e0c;margin-right:3px;}
.sec-house-details .house-details .con-box .ag{padding: 30px 0 35px;}
.sec-house-details .house-details .con-box .ag .img{position:relative;width:60px;height:60px;border-radius:50%;margin-right:20px;}
.sec-house-details .house-details .con-box .ag .img .box{position:relative;width:60px;height:60px;border-radius:50%;overflow: hidden;}
.sec-house-details .house-details .con-box .ag .img img{width:60px;height:60px;border-radius:50%;}
.sec-house-details .house-details .con-box .ag .img p{position:absolute;width:60px;height:24px;line-height:24px;z-index:3;background-color:rgba(0,0,0,0.5);font-size:12px;color:#fff;left:0;bottom:0;text-align:center;}
.sec-house-details .house-details .con-box .ag .img i{position:absolute;width:10px;height:10px;border-radius:50%;background-color:#38a204;z-index:3;top:7px;right:2px;}
.sec-house-details .house-details .con-box .ag .name{margin-right:120px;}
.sec-house-details .house-details .con-box .ag .name p{font-size:14px;line-height:30px;color:#333;}
.sec-house-details .house-details .con-box .ag .name>span{font-size:14px;line-height:24px;color:#999;display:block;}
.sec-house-details .house-details .con-box .ag .name>h2{font-size:14px;color:#666;line-height:36px;font-weight:bold;}
.sec-house-details .house-details .con-box .ag .name>h2 img{width:22px;height:22px;margin-top:7px;margin-right:10px;}
.sec-house-details .house-details .con-box .ag .to-consult{width:188px;height:36px;line-height:36px;text-align:center;background-color:#e93e0c;color:#fff;cursor:pointer;padding-left:10px;margin-top:30px;}
.renting .house_tips {
    margin-top: 20px;
}
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
#content .mainPart {
    padding-bottom: 65px;
    overflow: hidden;
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
.renting .house-infor h2 a {
    float: right;
}
.house-infor h2 a {
    font-size: 14px;
    color: #999;
}
.renting .house-infor p {
    font-size: 14px;
    color: #666;
    line-height: 24px;
}
.renting .house-infor .txt {
    font-size: 14px;
    color: #666;
    line-height: 24px;
    margin-top: 50px;
}
.renting .house-infor .assort{
    overflow:hidden;
}
.renting .house-infor .assort .assort-box{
    width:12.5%;
    float:left;
    text-align:center;

    margin-bottom:45px;
}
.renting .house-infor h2 a{
    float: right;
}
.renting .house-infor .rent{
    overflow:hidden;
}
.renting .house-infor .rent-box:last-child{
    margin-right:0;
}
.renting .house-infor .rent-box{
      overflow:hidden;
      width:200px;
      margin-right:15px;
      float: left;
}
.renting .house-infor .rent-box a{
    display:block
}
.renting .house-infor .rent-box a img{
     width:200px;
     height:150px;
}
.renting .house-infor .rent-box .bot{
    overflow:hidden;
     font-size:14px;
     line-height:25px;
}
.renting .house-infor .rent-box .bot i{
    float: left;
    font-weight: bold;
    color:#333333;
}
.renting .house-infor .rent-box .bot .price{
    float: right;
    color:#666;

}
.renting .house-infor .rent-box .bot .price span{
    color: #e93e0c;
    font-weight: bold;
}
.renting .house-infor .rent-box p{
    line-height:15px;
}
.part_right .special_house_img .sale{
    position:absolute;
    width:50px;
    height:32px;
    left:0;
    top:0;
    font-size:14px;
    color:#fff;
    line-height:32px;
    background:#e93e0c;
    text-align:center;
}
.house-infor>ul>li{position:relative;float: left;margin-bottom:10px;}
.house-infor>ul>li:nth-child(2n+1){float: right;}
.house-infor>ul>li .sm{position:absolute;width:80px;height:28px;line-height:28px;text-align:center;font-size:14px;color:#fff;background-color:rgba(0,0,0,0.5);left:0;bottom:0;z-index:3;}
.house-infor>ul>li img{display:block;}
.house-infor .quarters .img{margin-right:20px;}
.house-infor .quarters .img img{display:block;width:220px;height:165px;}
.house-infor .quarters .name h3 span{font-size:16px;line-height:36px;color:#666;text-decoration: underline;margin-right:20px;}
.house-infor .quarters .name h3 i{font-size:14px;color:#666;line-height:36px;}
.house-infor .quarters .name h3 i em{color:#e93e0c;font-weight:bold;margin:0 5px;}
.house-infor .quarters .name ul{width:600px;}
.house-infor .quarters .name ul li{float:left;width:300px;height:36px;line-height:36px;}
.house-infor .quarters .name ul li span{font-size:14px;color:#999;line-height:36px;float:left;}
.house-infor .quarters .name ul li p{float: left;height:36px;line-height:36px;color:#666;margin-left:18px;}
.house-infor .quarters .name ul li p i{text-decoration:underline;margin-right:25px;}
.house-infor .quarters .name ul li p i:last-child{margin-right:0;}
.house-infor .echart{margin:15px auto;height: 314px;}
.house-infor .echart img{display:block;width:100%;height:315px;}
.house-infor .map{margin:15px auto;}
.house-infor .map img{display:block;width:850px;height:450px;}
.house-infor .dh{width:100%;height:45px;background-color:#f5f5f5;}
.house-infor .dh span{height:45px;line-height:45px;font-size:14px;color:#333;width:115px;text-align:center;float: left;}
.house-infor .dh span.infor{width:255px;text-align:left;padding-left:15px;}
.house-infor ul.list .img{margin-right:20px;}
.house-infor ul.list .img img{width:145px;height:110px;display:block;}
.house-infor ul.list .text{width:105px;}
.house-infor ul.list .text h4{font-size:14px;line-height:36px;font-weight:bold;color:#333;}
.house-infor ul.list .text p{font-size:14px;color:#666;line-height:36px;}
.house-infor ul.list span{font-size:14px;color:#666;text-align:center;width:115px;margin-top:45px;}
.house-infor ul.list span em{font-weight:bold;color:#e93e0c;margin-right:5px;}
.house-infor ul.list li{float: none;margin-bottom:0;padding:20px 0;border-bottom:1px solid #f5f5f5;}
.house-infor p.seemore{text-align:center;font-size:14px;color:#999;line-height:36px;margin:15px 0;}

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
.part .part_right {
    width: 310px;
    float: right;
}
.guide {
    width: 100%;
}
.guide .guide_top {
    font-size: 18px;
    color: #333;
    margin: 30px auto 10px;
    overflow: hidden;
}
.guide .guide_top .more {
    font-size: 14px;
    color: #999;
}
.part_right .special_house_list>li {margin-bottom:15px;width: 310px;height: 110px;}
.part_right .special_house_img {width:145px;position:relative;height: 110px;float: left;overflow: hidden;}
.part_right .special_house_img img{vertical-align: middle;width: 100%;height: 100%;-webkit-transform:scale(1);transform:scale(1);-moz-transform:scale(1);z-index:0;transition:all linear 0.2s;}
.part_right .special_house_img:hover img{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05);-moz-transform:scale(1.05);z-index:1;}
.price_reduction {position:absolute;top:0;left:0;}
.price_reduction ul {overflow:hidden;background:#e93e0c;padding-top:5px;}
.price_reduction ul li {width:46px;height:15px;line-height:15px;font-size:12px;color:#e9e60c;text-align: center;}
.price_reduction .title img {width:10px;height:12px;}
.price_reduction .triangle {display:block;width:0;height:0;border-style:solid;border-color:#e93e0c transparent;border-width:10px 22.5px 0 22.5px;}
.special_house_detail {padding-top:4px;overflow:hidden;width: 148px;float: right;}
.special_house_detail .title{width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 14px;color: #333;font-weight: bold;line-height: 14px;margin-bottom: 14px;display: block;}
.special_house_detail ul li {color:#666;font-size:14px;line-height:25px;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.special_house_detail ul li span {color:#e93e0c;font-weight:bold;}
.special_house_detail .sign_up {width:180px;height:45px;line-height:45px;text-align:center;color:#fff;font-size:14px;background:#e93e0c;display:block;margin-top:20px;}
.special_house_detail .title:hover{color: #e93e0c;}

.part_right .data{width: 308px;border:1px solid #f5f5f5;border-top:2px solid #e93e0c;margin-bottom: 32px;}
.part_right .data .top{height: 46px;line-height: 46px;background: #f5f5f5;text-align: center;width: 100%;font-size: 16px;color: #e93e0c;}
.part_right .data .bot ul{padding:0 20px;}
.part_right .data .bot ul li{padding-left:27px;font-size: 14px;color: #666;line-height: 65px;border-bottom: 1px dashed #f5f5f5; }
.part_right .data .bot ul li:last-child{border: 0;}
.part_right .data .bot ul li span{font-size: 26px;color: #e93e0c;font-weight: bold;margin-right: 3px;}
</style>

<script>
    export default {
        data () {
            return {
              recruit:[]    
            }
        },
         created(){

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