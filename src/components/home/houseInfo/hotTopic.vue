<template>
    <div class="special_list" id="specialList">
        <div class="houses" v-for="(cost,index) in infoList" :key="index">
            <div class="header">
                <div class="title">
                    <span class="border"></span>
                    <h3>{{cost.name}}</h3>
                </div>
                <a href="javascript:void(0)" class="more">更多</a>
            </div>
            <div class="content">
                <ul>
                    <li v-for="(item,index) in cost.child" :key="index">
                        <div>
                            <div class="img">
                                <img :src="item.thumbnail" width="100%" />
                                <span>{{item.post_title}}</span>
                            </div>
                            <p class="small_title"> {{item.post_content}}<a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：{{item.post_source}}</span>
                                <span>时间： {{item.update_time}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="active">
            <div class="header">
                <div class="title">
                    <span class="border"></span>
                    <h3>活动专题</h3>
                </div>
                <a href="javascript:void(0)" class="more">更多</a>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="news">
            <div class="header">
                <div class="title">
                    <span class="border"></span>
                    <h3>新闻专题</h3>
                </div>
                <a href="javascript:void(0)" class="more">更多</a>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="img">
                                <img src="@/assets/images/special.jpg" width="100%" />
                                <span>二手房买卖费用 二手房买卖过户流程及费用</span>
                            </div>
                            <p class="small_title">今日住建部发布消息，针对近期房地产市场乱象，为严厉打击侵害 群众利益的违法违规行为，2018年7月初至12月底… <a href="javascript(void)">[详情]</a></p>
                            <div class="source">
                                <span>来源：新浪</span>
                                <span>时间：06-29</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div> -->
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
    name: 'specialList',
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
            // this.title = response.data.data[0][0].post_title
            // this.text = response.data.data[0][0].post_content
            // this.Url = response.data.data[0][0].thumbnail
            // this.date = response.data.data[0][0].create_time
            // this.source = response.data.data[0][0].post_source
            
           console.log(response)
        })
    }
};
</script>

<style scoped>
.video_list,
.special_list {
    width: 100%;
}

.video_list>div,
.special_list>div {
    overflow: hidden;
    margin-top: 30px;
}

.video_list>div:nth-child(1),
.special_list>div:nth-child(1) {
    margin-top: 0;
}

.video_list .header,
.special_list .header {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
}

.video_list .header .title,
.special_list .header .title {
    display: flex;
    align-items: center;
}

.video_list .header .title span,
.special_list .header .title span {
    width: 3px;
    height: 18px;
    background: #e93e0c;
    display: block;
    margin-right: 10px;
}

.video_list .header .title h3,
.special_list .header .title h3 {
    font-size: 20px;
}

.video_list .header .more,
.special_list .header .more,
{
    font-size: 14px;
    color: #999999;
}

.video_list .list {
    margin-top: 20px;
}

.video_list .list div {
    width: 100%;
    overflow: hidden;
}

.video_list .list ul {
    display: flex;
}

.video_list .list ul li {
    margin-right: 20px;
    overflow: hidden;
}

.video_list .list ul li:nth-last-child(1) {
    margin-right: 0;
}

.video_list .list ul li>div {
    width: 270px;
    height: 270px;
}

.video_list .list ul li .video {
    position: relative;
}

.video_list .list ul li .video img {
    width: 100%;
}

.video_list .list ul li .video span {
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 55px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    display: block;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 14px;
}

.video_list .list ul li img {
    width: 100%;
}

.video_list .list ul li h3 {
    font-size: 18px;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
}

.video_list .list ul li .time {
    font-size: 14px;
    color: #999;
    margin-top: 10px;
}

.special_list .special_list>div {}

.special_list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.special_list ul li {
    overflow: hidden;
    margin-top: 20px;
}

.special_list ul li div {
    width: 410px;
}

.special_list ul li div .img {
    position: relative;
    width: 410px;
    height: 187px;
}
.special_list ul li div .img img{vertical-align: middle;width: 100%;height: 100%;}
.special_list ul li div .img span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    height: 45px;
    line-height: 45px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    background: rgba(0, 0, 0, 0.3)
}

.special_list ul li div .small_title {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    margin-top: 10px;
}

.special_list ul li div .small_title a {
    color: #999;
}

.special_list ul li div .source {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
}

.special_list ul li div .source span {
    font-size: 14px;
    color: #999;
}

.special_list ul li div .source span:nth-child(1) {
    margin-right: 40px;
}
</style>
