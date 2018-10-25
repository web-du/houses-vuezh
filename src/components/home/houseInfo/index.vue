<template>
    <div class="info_list" id="infoLists">
        <ul>
            <li v-for="(item,index) in infoList" :key="index">
              <router-link :to="{ path: '/houseInfo/infoDetail',query:{id:item[0].id}}">
                <div class="info">
                    <div class="info_body">
                        <div class="title">
                            <h3>{{item[0].post_title}}</h3>
                            <span class="setTop">置顶</span>
                        </div>
                        <div class="content">
                            {{item[0].post_excerpt}}
                            <a href="javascript:void(0)">[详情]</a>
                        </div>
                        <div class="explain">
                            <span>来源:{{item[0].post_source}}</span>
                            <span>时间: {{item[0].create_time}}</span>
                        </div>
                    </div>
                    <img :src="item[0].thumbnail" width="100%" class="info_img" />
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
            infoList:[]
        };
    },

    created(){
         this.axios.post(process.env.API_HOST +'commonality/message/message_list',{id:this.nowId}).then((response) => {
            this.infoList=response.data.data.data
            console.log(this.infoList)
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
