<template>
    <div class="knowledge-list" id="knowledge-list">
        <ul>
            <li class="clearfix" v-for="(item,index) in knowledgeList" :key="index">
                <router-link :to="{ path: '/encyclopedias/knowledgeDetail',query:{id:item.id}}">
                    <div class="img fl">
                        <img :src="item.img">
                    </div>
                    <div class="box fr">
                        <h2>{{item.title}}</h2>
                        <span>{{item.create_time}}</span>
                        <p><a href="#">{{item.content}}</a></p>
                        <div class="describe clearfix">
                            <div class="label fl">
                                <span>在售</span>
                                <span>普通住宅</span>
                                <span>湖景地产</span>
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
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <!--分页-->
        <page-list></page-list>
    </div>
</template>

<script>
import pageList from "@/components/main/pageList";
export default {
    components: {
        pageList
    },
    props:{
        nowId:Number,
        required:true
    },
    name: 'knowledgeList',
    // props:{
    //     nowId:Number,
    //     required:true
    // },
    data() {
        return {
            knowledgeList:[],
        };
    },
    created(){
        this.$http.post('/api/commonality/knowledge/knowledge_list',{cate_id:this.nowId}).then((response) => {
            // this.title = response.data.data[0][0].title
            // this.text = response.data.data[0][0].post_content[0]
            // this.Url = response.data.data[0][0].thumbnail
            // this.date = response.data.data[0][0].create_time
            this.knowledgeList=response.data.data
            
           console.log(response.data.data)
        })
    }
};
</script>

<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
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
.knowledge-page .list li .box p a:hover{
	color:#e93e0c;
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

</style>
