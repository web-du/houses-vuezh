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
        <div class="content">
            <div class="put_question clearfix">
                <div class="put fl">
                    <h2>请描述您的问题</h2>
                    <input type="text" name="" value="" placeholder="标题">
                    <div class="con">
                        <textarea name="name" placeholder="向广大网友和顾问提问"  v-model="answertxt"></textarea>
                        <em>0/150</em>
                    </div>
                    <span @click="subtxt()">提问</span>
                </div>
                <div class="notice fr">
                    <h2>如何能获得快速准确的回答？</h2>
                    <ul>
                        <li>问题标题描述准确；</li>
                        <li>如果标题描述不清，可使用详细内容继续描述；</li>
                        <li>如果是楼盘相关问题，请输入正确的楼盘名称；</li>
                        <li>适当的增加悬赏会吸引更多用户回答哦~</li>
                    </ul>
                </div>
           </div>
        </div>
    </div>
</template>

<script>

export default {
        name:"interlocutionPut",
       
        data(){
           return{
             recruit:[],
             answertxt:""  
           }
        },
        created(){

        },
        methods:{
          open3() {
            this.$notify({
              title: '提交成功',
              // message: '这是一条成功的提示消息',
              type: 'success',
              duration:2000
            });
          },
           subtxt(){
            this.axios.post(process.env.API_HOST +'portal/Interlocution/postProblem',{cate_id:10,problem_content:this.answertxt,user_id:1}).then((response) => {      
                console.log(response.data.data) 
                this.open3()
                    
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
.put_question {
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
}
.put_question .put {
  width: 850px;
}
.put_question .put h2 {
  font-size: 16px;
  color: #333333;
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.put_question .put input[type="text"] {
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #333333;
  font-size: 16px;
  border: 1px solid #f5f5f5;
  padding-left: 20px;
  margin-bottom: 15px;
}
.put_question .put input[type="text"]::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put input[type="text"]:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put input[type="text"]:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put .con {
  position: relative;
}
.put_question .put .con em {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 14px;
  color: #999999;
  line-height: 28px;
}
.put_question .put textarea {
  width: 100%;
  height: 150px;
  border: 1px solid #f5f5f5;
  color: #333333;
  font-size: 16px;
  padding: 20px;
  outline: none;
}
.put_question .put textarea::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put textarea:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put textarea:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.put_question .put > span {
  display: block;
  width: 188px;
  height: 36px;
  background-color: #e93e0c;
  text-align: center;
  margin: 30px auto 0;
  font-size: 16px;
  line-height: 36px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.put_question .notice {
  width: 310px;
}
.put_question .notice h2 {
  font-size: 20px;
  color: #333333;
  line-height: 36px;
}
.put_question .notice ul li {
  font-size: 14px;
  color: #333333;
  line-height: 36px;
}
</style>

