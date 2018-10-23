<template>
    <div id="coop">
        <h2>网站合作</h2>
        <ul class="clearfix friend">
            <li class="fl" v-for="(Image,index) in Images" :key="index">
                <img :src="Image.image" >
            </li>
        </ul>
        <div class="more-friend">
            <h2>更多合作伙伴</h2>
            <ul class="clearfix">
                <li v-for="(txt,index) in Con" :key="index">{{txt.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'coopAboutUs',
        props:{
            nowId:Number,
            required:true
        },
        data(){
            return{
                coop:[],
                Images:[],
                Con:[],
            }
        },
        created(){
           this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.nowId}).then((response) => {
                this.coop = response.data.data
                //console.log(this.coop)
                // this.coop.forEach((data) => {
                //     if(data.image){
                //         this.Images.push(data.image)
                //     }else{
                //         this.Con.push(data.name)
                //     }
                // })
                //console.log(this.Images)
                this.Images = this.coop.slice(0,8);
                this.Con = this.coop.slice(8);
                //console.log(this.Images)
            }).catch((err) => {
                console.log(err);
            })
        }
    };
</script>


<style scoped>
    #coop>h2 {
        font-size: 20px;
        color: #333333;
        line-height: 36px;
        font-weight: bold;
    }
    #coop .friend {
        margin-top: 20px;
    }
    #coop .friend li {
        padding: 45px 25px;
        width: 220px;
        height: 140px;
        border: 1px solid #dadada;
        margin-right: 33.33px;
        margin-bottom: 20px;
    }
    #coop .friend li img {
        display: block;
        width: 165px;
        height: 50px;
        margin: 0 auto;
    }
    #coop .more-friend > h2 {
        font-size: 16px;
        line-height: 36px;
        color: #333333;
    }
    #coop .more-friend ul li {
        float: left;
        font-size: 14px;
        color: #666666;
        line-height: 36px;
        width: 120px;
        margin-right: 20px;
    }
    #coop .friend li:nth-child(4n+4) {
        margin-right: 0;
    }
</style>
