<template>
  <div id="navDetails">
    <div class="details">
        <div class="box">
            <dl v-for="(item,index) in infos" :key="index">
                <dt>{{item.name}}</dt>
                <dd v-for="(cost,index) in item.child" :key="index"><a href="#">{{cost.name}}</a></dd>
            </dl>
        </div>
    </div>
  </div>
</template>

<script>
export default {
        name:"navDetails",
        props:{
            nowId:Number,
            required:true
        },
        data() {
            return {
                infos:[],
                // title1:'',
                // text1:[],
            };
        },
        created(){
            this.$http.post('/api/commonality/knowledge/category_list',{id:this.nowId}).then((response) => {
                this.infos = response.data.data[0].child
                // this.text2 = response.data.data[0].child[0].child[1].name
                // this.text3 = response.data.data[0].child[0].child[2].name
                console.log(response)
            })
        }

    }
</script>

<style scoped>
.hide { display:none;}
.fl { float:left;}
.fr { float:right;}
.clearfix:after { content:" "; display:block; clear:both; height:0; }
.clearfix { zoom:1; }
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
