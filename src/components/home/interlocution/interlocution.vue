<template>
    <div id="interlocution">
        <div class="header-nav">
            <div class="box clearfix">
                <div class="nav fl">
                    <span><a href="#">房乐士</a></span>
                    <span><a href="#" class="now">房产问答</a></span>
                </div>
                <div class="search fr">
                    <input type="text" placeholder="请输入小区名称">
                    <img src="@/assets/images/Dw-search.png" >
                </div>
            </div>
       </div>
<!--header结束-->

<!--content开始-->
<div class="content">
    <div class="knowledge-page clearfix">
        <div class="nav fl">
            <div class="details">
                <div class="box">
                    <dl v-for="(item,index) in classify" :key="index">
                        <dt>{{item.name}}</dt>
                        <dd v-for="(childr,index) in item.children" :key="index"><router-link  :to="{path:'/interlocution/interlocutionlist', query:{id:item.id}}">{{childr.name}}</router-link></dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="interlocution fr">
            <div class="tabbar clearfix">
              <div class="list-nav fl clearfix">
                <span v-for="(item,index) in tabList"  class="fl" :key="index" :class="{now : isclass==index }" @click="tabfun(index)">{{item.title}}</span>
                <!-- <span class="fl">热门问题</span>
                <span class="fl">待回答问题</span> -->
              </div>
              <router-link to="/interlocution/interlocutionPut" class="fr">我要提问</router-link>
              <!-- <a href="#" class="fr"></a> -->
            </div>
            <!-- <div class="con">
              <ul>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>云湖尚景楼盘怎么样？好不好？</h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：25</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔能尽快法师的技能看</p>
                  </a>
                </li>
              </ul>
            </div> -->
            <keep-alive>
               <component :is="componentId"></component>
            </keep-alive>
           
            <div class="page">
                <div class="box">
                    <span>&lt;&nbsp;&nbsp;&nbsp;&nbsp;上一页</span>
                    <em class="now">1</em>
                    <em>2</em>
                    <em>3</em>
                    <em>4</em>
                    <span>下一页&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
    import interlocutionHot from "@/components/home/interlocution/interlocutionHot.vue";
    import interlocutionNew from "@/components/home/interlocution/interlocutionNew.vue";
    import interlocutionTo from "@/components/home/interlocution/interlocutionTo.vue";
    export default {
        data () {
            return {
                recruit:[],
                classify:[],
                componentId:"interlocutionNew",
                tabList:[
                   {id:0,title:"最新问题"},
                   {id:1,title:"最热问题"},
                   {id:2,title:"待回答问题"}
                ],
                isclass:0
            }
        },
        components:{
          interlocutionNew,
          interlocutionHot,
          interlocutionTo
        },
        created(){
            this.axios.post(process.env.API_HOST +'portal/Interlocution/getCategory',{page:1,size:2}).then((response) => {          
                 this.recruit=response.data.data
                 this.recruit.forEach((item) => {
                      if(item.children.length>0){
                        this.classify.push(item)
                      }
                 });
                console.log(this.recruit)
             }).catch((err) => {
              
            })
        },
        methods:{
            tabfun:function(index){
                this.isclass=index
               if(index==0){
                  this.componentId="interlocutionNew"
               }else if(index==1){
                 this.componentId="interlocutionHot"
               }else{
                  this.componentId="interlocutionTo"
               }
            }
        }

    }
</script>
<style scope>
  .header-nav {
  width: 100%;
  background-color: #f2f2f2;
}
.header-nav .box {
  width: 1200px;
  margin: 0 auto;
  height: 85px;
  background-color: #f2f2f2;
  line-height: 85px;
}
.header-nav .box .nav {
  height: 100%;
}
.header-nav .box .nav span a {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.header-nav .box .nav span a.now {
  color: #e93e0c;
}
.header-nav .box .nav span {
  position: relative;
}
.header-nav .box .nav span:before {
  display: inline-block;
  content: '＞';
  margin-right: 5px;
  font-size: 14px;
}
.header-nav .box .nav span:first-child::before {
  display: none;
}
.header-nav .box .search {
  position: relative;
}
.header-nav .box .search input {
  width: 480px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
  background-color: #fff;
  padding-left: 20px;
  font-size: 16px;
  color: #333333;
}
.header-nav .box .search input::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.header-nav .box .search input:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.header-nav .box .search input:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.header-nav .box .search img {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 30px;
  right: 15px;
}
.knowledge-page {
  padding-top: 30px;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
}
.knowledge-page .nav {
  width: 313px;
}
.knowledge-page .nav .top ul li {
  width: 77px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 16px;
  color: #333333;
  background-color: #f1f1f1;
  margin-right: 1px;
  cursor: pointer;
  font-weight: bold;
}
.knowledge-page .nav .top ul li:hover {
  color: #fff;
  background-color: #e93e0c;
}
.knowledge-page .nav .top ul li.now {
  background-color: #e93e0c;
  color: #fff;
}
.knowledge-page .nav .details .box {
  padding-left: 10px;
}
.knowledge-page .nav .details .box dl {
  border-bottom: 1px solid #f1f1f1;
  padding: 10px 0;
}
.knowledge-page .nav .details .box dt {
  font-size: 16px;
  line-height: 36px;
  color: #333333;
  font-weight: bold;
}
.knowledge-page .nav .details .box dd {
  display: inline-block;
  font-size: 14px;
  line-height: 36px;
  height: 36px;
  color: #333333;
  width: 48%;
}
.knowledge-page .nav .details .box dd a {
  font-size: 14px;
  color: #333333;
}
.knowledge-page .nav .details .box dd a:hover {
  color: #e93e0c;
}
.knowledge-page .list {
  width: 850px;
}
.knowledge-page .list li {
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 20px;
}
.knowledge-page .list li .img img {
  display: block;
  width: 240px;
  height: 180px;
}
.knowledge-page .list li .box {
  width: 590px;
}
.knowledge-page .list li .box h2 {
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  font-weight: bold;
}
.knowledge-page .list li .box > span {
  font-size: 14px;
  color: #999999;
  line-height: 29px;
}
.knowledge-page .list li .box p a {
  font-size: 14px;
  color: #666666;
  line-height: 29px;
}
.knowledge-page .list li .box .describe {
  margin-top: 10px;
}
.knowledge-page .list li .box .describe .label span {
  display: inline-block;
  font-size: 14px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 5px;
  margin-right: 6px;
}
.knowledge-page .list li .box .describe .label span:first-child {
  background-color: #efe8e7;
  color: #e89880;
}
.knowledge-page .list li .box .describe .label span:nth-child(2) {
  background-color: #f5f2e9;
  color: #dbcea4;
}
.knowledge-page .list li .box .describe .label span:nth-child(3) {
  background-color: #eef2f8;
  color: #a9bede;
}
.knowledge-page .list li .box .describe .op span {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
.knowledge-page .list li .box .describe .op span em {
  font-size: 14px;
  color: #666666;
  line-height: 36px;
  display: inline-block;
}
.knowledge-page .list li .box .describe .op span img {
  vertical-align: text-bottom;
}
.knowledge-page .list li .box .describe .op span.now em {
  color: #e93e0c;
}
.knowledge-page .result {
  width: 100%;
}
.knowledge-page .result .result-num {
  font-size: 14px;
  color: #999999;
  line-height: 60px;
  text-align: left;
}
.knowledge-page .result .result-num em {
  display: inline;
}
.knowledge-page .result li {
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 20px;
}
.knowledge-page .result li .img img {
  display: block;
  width: 240px;
  height: 180px;
}
.knowledge-page .result li .box {
  width: 940px;
}
.knowledge-page .result li .box h2 {
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  font-weight: bold;
}
.knowledge-page .result li .box > span {
  font-size: 14px;
  color: #999999;
  line-height: 29px;
}
.knowledge-page .result li .box p a {
  font-size: 14px;
  color: #666666;
  line-height: 29px;
}
.knowledge-page .result li .box .describe {
  margin-top: 10px;
}
.knowledge-page .result li .box .describe .label span {
  display: inline-block;
  font-size: 14px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 5px;
  margin-right: 6px;
}
.knowledge-page .result li .box .describe .label span:first-child {
  background-color: #efe8e7;
  color: #e89880;
}
.knowledge-page .result li .box .describe .label span:nth-child(2) {
  background-color: #f5f2e9;
  color: #dbcea4;
}
.knowledge-page .result li .box .describe .label span:nth-child(3) {
  background-color: #eef2f8;
  color: #a9bede;
}
.knowledge-page .result li .box .describe .op span {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
.knowledge-page .result li .box .describe .op span em {
  font-size: 14px;
  color: #666666;
  line-height: 36px;
  display: inline-block;
}
.knowledge-page .result li .box .describe .op span img {
  vertical-align: text-bottom;
}
.knowledge-page .result li .box .describe .op span.now em {
  color: #e93e0c;
}
/**广告位**/
.advertisement {
  width: 1200px;
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
.interlocution {
  width: 850px;
}
.interlocution .tabbar {
  border-bottom: 2px solid #e93e0c;
}
.interlocution .tabbar .list-nav span {
  width: 97px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
}
.interlocution .tabbar .list-nav span.now {
  background-color: #e93e0c;
  color: #fff;
}
.interlocution .tabbar > a {
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e93e0c;
  color: #fff;
  font-size: 16px;
}
.interlocution .con ul li {
  border-bottom: 1px solid #f5f5f5;
  padding: 15px 0;
}
.interlocution .con ul li .details .q h2 {
  font-size: 16px;
  color: #333333;
  line-height: 36px;
}
.interlocution .con ul li .details .q h2 span {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background-color: #e93e0c;
  margin-right: 10px;
}
.interlocution .con ul li .details > span {
  font-size: 14px;
  line-height: 36px;
  color: #999999;
}
.interlocution .con ul li .time {
  font-size: 14px;
  line-height: 28px;
  color: #999999;
  padding-left: 40px;
}
.interlocution .con ul li .time span {
  margin-right: 20px;
}
.interlocution .con ul li .time span:last-child {
  margin-right: 0;
}
.interlocution .con ul li p {
  font-size: 14px;
  line-height: 28px;
  color: #666666;
}
.interlocution .con ul li p span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: #169bd5;
  margin-right: 10px;
}
.page{
    text-align:center;
    margin:50px 0;

}
.page .box{
    display: inline-block;
}
.page .box span{
    display: inline-block;
    width: 117px;
    height: 40px;
    line-height: 40px;
    text-align:center;
    font-size: 14px;
    color:#949494;
    line-height:40px;
    background-color: #e9e9e9;
    cursor:pointer;
    margin:0 6px;
}
.page .box em{
    display: inline-block;
    width:40px;
    height: 40px;
    line-height:38px;
    text-align:center;
    border:1px solid #d8d8d8;
    font-size:14px;
    color:#888;
    cursor:pointer;
    margin:0 6px;
}
.page .box em.now{
    background-color:#e93e0c;
    color:#fff;
    border-color: #e93e0c;
}

</style>

