<template>
    <div id="aboutUs">
        <h2>{{content}}</h2>
        <!-- <ul>
            <li>房乐士是房地产家居行业专业网络平台，一直专注新房、二手房、租房、家居、房地产研究等领域的互联网创新，在房地产互联网移动及PC均处于行业前列。 根据相关数据显示，截至目前， 房乐士覆盖全球24个国家，658个城市。月均独立访客1.2亿，累计注册用户数1.1亿，经纪人、家装设计师等B端用户数567万，购房、装修等用户9800万。</li>
            <li>房乐士在移动技术、产品、推广方面全面布局，锁定了移动领域的优势地位。截至目前， 房乐士 APP累计装机量1.8亿， APP使用时长559万小时，每天650万精准购房者在线关注，是中国专业的房地产移动应用平台。</li>
            <li>据艾瑞第三方数据显示，2017年4月，房天下APP在活跃人数、启动次数、使用时长等方面远超其他房产类APP。</li>
        </ul> -->
        <p>{{text}}</p>
        <img :src="Url">
    </div>
</template>

<script>
export default {
    name: 'comAboutUs',
    props:{
        nowId:Number,
        required:true
    },
    data(){
        return{
            content:'',
            text:'',
            Url:'',
        }
    },
    created(){
       this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.nowId}).then((response) => {
            this.content = response.data.data[0][0].post_title
            this.text = response.data.data[0][0].post_content[0]
            this.Url = response.data.data[0][0].thumbnail
            
           //console.log(response.data.data)
           //console.log(this.Url)
        })
    }
};
</script>

<style scoped>
#aboutUs h2 {
    font-size: 20px;
}
#aboutUs p {
    font-size: 14px;
    line-height: 28px;
    color: #666666;
}
#aboutUs ul {
    margin-top: 30px;
}

#aboutUs ul li {
    margin-bottom: 10px;
    font: 14px;
    color: #666666;
}

#aboutUs img {
    width: 630px;
    height: 420px;
    margin: 0 auto;
    margin-top: 20px;
    display: block;
}
</style>

