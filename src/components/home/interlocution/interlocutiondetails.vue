<template>
    <div id="interlocution">
       <!-- <el-button
        plain
        @click="open3">
        成功
     </el-button> -->
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
    
      <div class="content">
    <div class="interlocution_details clearfix">
      <div class="title fl">
        <div class="con">
          <h2 class="clearfix"><span class="fl">{{recruit.problem_content}}</span><em class="fr">{{recruit.answer_num}}个回答</em></h2>
          <!-- <p>老师您好：近期看了枣园黄村和天宫院的二手房，顺便看了管庄附近京通苑和常营附近，还有瀛海的瀛海府和万和斐丽新房都需要摇号。
最近出台的限竟房转共有产权对这两个楼盘有何影响？相比较市里的老破小，哪个更值得入手，首套首贷，首付200万。老师是否有其他
板块推荐，求指点，另瀛海和天宫院哪个更值得出手。考虑保值。</p> -->
          <div class="time">
            <span>{{recruit.create_time}}</span>
            <span>浏览量：{{recruit.post_hits}}</span>
          </div>
          <div class="to-answer">
            <textarea name="name" placeholder="回答该问题" v-model="answertxt"></textarea>
           
            <em>0/30</em>
            <span @click="subtxt()">提交</span>
          </div>
          <div class="new-q">
            <div class="tabbar clearfix">
              <span class="fl" v-for="(item,index) in tabbarlist" :key="index" :class="{now : isclass==index }" @click="tabfun(index)">{{item.title}}</span>
              <!-- <span class="fl">最新问题</span> -->
            </div>
            <ul>
              <li class="clearfix" v-for="(item,index) in recruit.answer.data" :key="index">
                <div class="img fl">
                  <img src="@/assets/images/Dw-img12.png" >
                </div>
                <div class="text fl">
                  <h2>{{item.user_realname}}<span>置业顾问</span></h2>
                  <p>{{item.answer_content}}</p>
                  <div class="op clearfix">
                    <div class="time fl">
                      <span>{{item.create_time}}</span>
                    </div>
                    <div class="use fr">
                      <span class="have">有用(<em>0</em>)</span>
                      <span class="reply"><a href="#">回复(0)</a></span>
                    </div>
                  </div>
                </div>
              </li>
     
            </ul>
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

        <keep-alive>
               <component :is="componentId" :answerId="answerid"></component>
        </keep-alive>

    </div>
</div>
    </div>
</template>


<script>

    import interlocutionrelevan from "@/components/home/interlocution/interlocutionrelevan.vue";
     export default {
        name:"interlocutiondetalis",
        data(){
            return{
              answerid:this.$route.query.id*1,
              componentId:"interlocutionrelevan",
              recruit:[],
              tabbarlist:[
                {title:"默认排序"},
                {title:"最新答案"}
              ],
              isclass:0,
              answertxt:""
            }
        },
        components:{
          interlocutionrelevan
          
        },
        created(){
              this.axios.post(process.env.API_HOST +'/portal/Interlocution/getProblemDetail',{id:this.$route.query.id,page:1,size:10}).then((response) => {      
        
                 this.recruit=response.data.data
                //  this.recruit.forEach((item) => {
                //       if(item.children.length>0){
                //         this.classify.push(item)
                //       }
                //  });
                
             }).catch((err) => {
                
            })
        
        },
        methods:{
           tabfun(index){
              this.isclass=index
              if(index==1){
              this.axios.get(process.env.API_HOST+ 'portal/Interlocution/getProblemDetail',{params:{id:this.$route.query.id,page:1,size:10,is_new:1}}).then((response) => {      
                console.log(response.data.data)    
                 this.recruit=response.data.data
                
              }).catch((err) => {
                
              })
            }else{
              this.axios.post(process.env.API_HOST +'portal/Interlocution/getProblemDetail',{id:this.$route.query.id,page:1,size:10}).then((response) => {      
                console.log(response.data.data)    
                 this.recruit=response.data.data
                //  this.recruit.forEach((item) => {
                //       if(item.children.length>0){
                //         this.classify.push(item)
                //       }
                //  });
                
             }).catch((err) => {
                
            })
            }
        },
         open3() {
            this.$notify({
              title: '提交成功',
              // message: '这是一条成功的提示消息',
              type: 'success',
              duration:2000
            });
         },
        subtxt(){
            this.axios.post(process.env.API_HOST +'portal/Interlocution/postAnswer',{problem_id:this.$route.query.id,answer_content:this.answertxt,user_id:1}).then((response) => {      
                console.log(response.data.data) 
                this.open3()
                    
             }).catch((err) => {
                
            })

             this.axios.post(process.env.API_HOST +'/portal/Interlocution/getProblemDetail',{id:this.$route.query.id,page:1,size:10}).then((response) => {      
                console.log(response.data.data)    
                 this.recruit=response.data.data
              
                
              }).catch((err) => {
                
            })
        }
      }
      
    }
</script>


<style>
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
.interlocution_details {
  width: 1200px;
  margin: 0 auto;
}
.interlocution_details .title {
  width: 850px;
}
.interlocution_details .title .con h2 {
  font-size: 16px;
  line-height: 36px;
  color: #333333;
}
.interlocution_details .title .con h2 em {
  font-size: 14px;
  line-height: 36px;
  color: #999999;
}
.interlocution_details .title .con p {
  font-size: 14px;
  color: #666666;
  line-height: 28px;
}
.interlocution_details .title .con .time {
  font-size: 14px;
  color: #999999;
  line-height: 28px;
}
.interlocution_details .title .con .time span {
  margin-right: 15px;
}
.interlocution_details .title .con .time span:last-child {
  margin-right: 0;
}
.interlocution_details .title .con .to-answer {
  position: relative;
  margin-top: 15px;
}
.interlocution_details .title .con .to-answer textarea {
  width: 100%;
  height: 150px;
  outline: none;
  border: 1px solid #efefef;
  padding: 22px;
  font-size: 16px;
  color: #333333;
}
.interlocution_details .title .con .to-answer textarea::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.interlocution_details .title .con .to-answer textarea:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.interlocution_details .title .con .to-answer textarea:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.interlocution_details .title .con .to-answer em {
  position: absolute;
  font-size: 16px;
  color: #999999;
  right: 20px;
  bottom: 80px;
}
.interlocution_details .title .con .to-answer > span {
  display: block;
  width: 188px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: #e93e0c;
  color: #fff;
  font-size: 16px;
  margin: 30px auto 0;
  cursor: pointer;
}
.interlocution_details .title .con .new-q .tabbar {
  border-bottom: 2px solid #e93e0c;
  margin-bottom: 20px;
}
.interlocution_details .title .con .new-q .tabbar span {
  width: 97px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
}
.interlocution_details .title .con .new-q .tabbar span.now {
  background-color: #e93e0c;
  color: #fff;
}
.interlocution_details .title .con .new-q ul li {
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 20px;
}
.interlocution_details .title .con .new-q ul li .img {
  margin-right: 20px;
}
.interlocution_details .title .con .new-q ul li .img img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.interlocution_details .title .con .new-q ul li .text {
  width: 750px;
}
.interlocution_details .title .con .new-q ul li .text h2 {
  font-size: 14px;
  color: #333333;
  line-height: 36px;
}
.interlocution_details .title .con .new-q ul li .text h2 span {
  display: inline-block;
  width: 70px;
  height: 30px;
  line-height: 28px;
  border: 1px solid #e93e0c;
  text-align: center;
  font-size: 12px;
  color: #e93e0c;
  margin-left: 10px;
}
.interlocution_details .title .con .new-q ul li .text p {
  font-size: 14px;
  color: #666666;
  line-height: 28px;
}
.interlocution_details .title .con .new-q ul li .text .op .time {
  font-size: 14px;
  line-height: 28px;
  color: #999999;
}
.interlocution_details .title .con .new-q ul li .text .op .use .have {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
  margin-right: 20px;
  cursor: pointer;
}
.interlocution_details .title .con .new-q ul li .text .op .use .have.now {
  color: #e93e0c;
}
.interlocution_details .title .con .new-q ul li .text .op .use .reply a {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.interlocution_details .related_issues {
  width: 310px;
}
.interlocution_details .related_issues > h2 {
  font-size: 20px;
  color: #333333;
  line-height: 36px;
}
.interlocution_details .related_issues ul li p {
  width: 240px;
  font-size: 14px;
  color: #333333;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.interlocution_details .related_issues ul li a:hover p{
	color:#e93e0c;
}
.interlocution_details .related_issues ul li span {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.page{
    text-align:center;
    margin-top: 50px;
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
.new-q{
  margin-bottom:80px;
}
</style>
