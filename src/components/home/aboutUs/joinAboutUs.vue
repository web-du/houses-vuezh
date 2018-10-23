<template>
    <div id="join">
        <div class="join">
        <ul>
            <li v-for="(item,index) in Join" :key="index">
                <h2 class="clearfix"><span class="fl">{{item[0].post_title}}</span><em class="fr">{{item[0].post_excerpt}}</em></h2>
                <p>{{item[0].post_content[0]}}</p>
                <img :src="item[0].thumbnail" alt="" v-show="item[0].thumbnail">
            </li>
            <!-- <li>
                <h2 class="clearfix"><span class="fl">房乐士代理优势</span><em class="fr">加盟热线：400-8888-888</em></h2>
                <p>深耕地产19年，以专业的平台，完善的管理，先进的技术，优质的产品，及庞大的用户，赢得认可，推动了行业发展。截至 目前，房天下覆盖全球24个国家，658个城市。 2010年，房天下启动"新百城战略"，在更多城市复制美国上市网络公司成功模式，寻找致力于发展房地产家居行业的有志之士，将房地产互联网上市 公司直营城市运营模式和经验与广大代理商分享，共同推动中国房地产家居产业进步和发展。到2018年初，房天下代理扩张至288个城市，覆盖业务站 点505个，合作代理商758个，服务开发商2600个、上亿购房者、近千万业主。</p>
                <img src="@/assets/images/Dw-img15.jpg" >
            </li> -->
        </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:"joinAboutUs",
        props:{
            nowId:Number,
            required:true
        },
        data(){
            return{
                Join:[],
            }
        },
        created(){
           this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.nowId}).then((response) => {
                this.Join = response.data.data;
                //console.log(this.Join);
                //console.log(this.nowId)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>


<style scoped>
    .join ul li h2 {
        border-bottom: 2px solid #e93e0c;
        margin-bottom: 20px;
    }
    .join ul li h2 span {
        font-size: 20px;
        color: #333333;
        line-height: 36px;
        font-weight: bold;
    }
    .join ul li h2 em {
        font-size: 16px;
        line-height: 36px;
        font-weight: bold;
        color: #e93e0c;
    }
    .join ul li p {
        font-size: 14px;
        color: #666666;
        line-height: 24px;
    }
    .join ul li img {
        display: block;
        margin: 30px auto;
        width: 745px;
        height: 430px;
    }
    .join ul li {
        margin-bottom: 30px;
    }
</style>
