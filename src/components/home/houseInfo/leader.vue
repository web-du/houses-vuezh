<template>
    <div class="info_list" id="index">
        <ul>
            <li v-for="(item,index) in infoList" :key="index">
              <router-link :to="{ path: '/houseInfo/infoDetail',query:{id:item.id}}">
                <div class="info">
                    <div class="info_body">
                        <div class="title">
                            <h3>{{title}}</h3>
                            <span class="setTop">置顶</span>
                        </div>
                        <div class="content">
                            {{text}}
                            <a href="javascript:void(0)">[详情]</a>
                        </div>
                        <div class="explain">
                            <span>来源:{{source}}</span>
                            <span>时间: {{date}}</span>
                        </div>
                    </div>
                    <img :src="Url" width="100%" class="info_img" />
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
    name: 'index',
    // props:{
    //     nowId:Number,
    //     required:true
    // },
    data() {
        return {
            title:'',
            text:'',
            Url:'',
            date:'',
            source:'',
            infoList:[],
        };
    },
    mounted(){
        this.$http.post('/api/commonality/message/message_list',{id:this.nowId}).then((response) => {
            this.infoList=response.data.data
            this.title = response.data.data[0][0].post_title
            this.text = response.data.data[0][0].post_content
            this.Url = response.data.data[0][0].thumbnail
            this.date = response.data.data[0][0].create_time
            this.source = response.data.data[0][0].post_source
            
           console.log(response)
        })
    }
};
</script>

<style scoped>
.info_list {
    overflow: hidden;
    width: 100%;
}

.info_list li {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d8d8d8;
}

.info_list li:nth-child(1) {
    margin-top: 0;
}

.info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info .info_body {
    width: 580px;
}

.info_body .title {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.info_body .title h3 {
    font-size: 18px;
    margin-right: 10px;
}

.info_body .title span {
    display: block;
    width: 48px;
    height: 23px;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    color: #f45558;
    border: 1px solid #f45558;
}

.info_body .content {
    font-size: 14px;
    color: #666;
    margin-top: 20px;
    line-height: 30px;
    max-height: 90px;
    overflow: hidden;
}

.info_body .content a {
    color: #666;
}

.info_body .explain {
    margin-top: 30px;
}

.info_body .explain span {
    font-size: 14px;
    color: #999999;
}

.info_body .explain span:nth-child(1) {
    margin-right: 30px;
}

.info .info_img {
    width: 250px;
    height: 190px;
}

</style>
