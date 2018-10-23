<template>
  <div id="nav-top">
    <div class="top">
        <ul class="clearfix">
            <li :class="{now : isclass==index}"  v-for="(item,index) in tabList"  class="fl" :key="index"  @click="tabfun(index)">{{item.title}}</li>
        </ul>
    </div>
    <component :is="componentId" :nowId='1'></component>
  </div>
</template>
<script>
    import navDetails from "@/components/home/encyclopedias/navDetails";
    import navDetails1 from "@/components/home/encyclopedias/navDetails1";
    import navDetails2 from "@/components/home/encyclopedias/navDetails2";
    import navDetails3 from "@/components/home/encyclopedias/navDetails3";
    export default {
        data () {
            return {
                recruit:[],
                classify:[],
                componentId:"navDetails",
                tabList:[
                    {id:0,title:"买房"},
                    {id:1,title:"卖房"},
                    {id:2,title:"租房"},
                    {id:3,title:"商城"}
                ],
                isclass:0
            }
        },
        components:{
            navDetails,
            navDetails1,
            navDetails2,
            navDetails3
        },
        created(){
            this.$http.post('/api/commonality/knowledge/category_list',{page:1,size:3}).then((response) => {          
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
                    this.componentId="navDetails"
                }else if(index==1){
                    this.componentId="navDetails1"
                }else if(index==2){
                    this.componentId="navDetails2"
                }else{
                    this.componentId="navDetails3"
                }
            }
        }

    }
    

</script>


<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
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
  float: left;
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
</style>
