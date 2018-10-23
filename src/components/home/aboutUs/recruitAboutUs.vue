<template>
    <div id="recruit">
        <h2>招聘信息</h2>
        <div class="recruit">
            <div class="nav clearfix">
                <span class="fl">招聘岗位</span>
                <span class="fl">招聘人数</span>
                <span class="fl">工作地点</span>
                <span class="fl">发布时间</span>
            </div>
            <div class="sideMenu" style="margin:0 auto">
                <div class="box" v-for="(item,index) in Recruit" :key="index">
                    <h3 class="clearfix" :class="{ on : currentIndex == index }" @click="Switch(index)"><span>{{item.zname}}</span><span>{{item.znumber}}</span><span>{{item.zaddress}}</span><span>{{item.create_time}}</span></h3>
                    <div class="details" v-show="currentIndex == index">
                        <dl>
                            <dt>岗位职责：</dt>
                            <dd v-for="(zer,index) in zerArray[index]" :key="index">{{zer}}</dd>
                        </dl>
                        <dl>
                            <dt>任职资格：</dt>
                            <dd v-for="(zi,index) in ziArray[index]" :key="index">{{zi}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"recruitAboutUs",
        props:{
            nowId:Number,
            required:true
        },
        data(){
            return{
                Recruit:[],
                currentIndex:0,
                zerArray:[],
                ziArray:[],
            }    
        },
        methods:{
            Switch(index){
                this.currentIndex = index;
            }
        },
        computed:{
            zArray:function(){
                return this.Recruit.forEach(function(item){
                    return item.zeren.split("。");
                })
            }
        },
        created(){
           this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.nowId}).then((response) => {
                this.Recruit = response.data.data;
                this.Recruit.forEach((item)=>{
                  this.zerArray.push(item.zeren.split("。"));
                  this.ziArray.push(item.zige.split("。"));
                })
                //console.log(this.Recruit);
                //console.log(this.zerArray)
                //console.log(this.nowId)
            }).catch((err) => {
                console.log(err);
            })
        },
    }
</script>

<style scoped>
    h2 {
        font-size: 20px;
        color: #333333;
        line-height: 36px;
        font-weight: bold;
    }
    .recruit .nav {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
        margin-top: 25px;
    }
    .recruit .nav span {
        width: 25%;
        text-align: center;
        font-size: 16px;
        color: #333333;
    }
    .recruit .sideMenu h3:nth-of-type(odd) {
        background-color: #fff;
    }
    .recruit .sideMenu h3 {
        height: 56px;
        line-height: 56px;
        padding-left: 10px;
        cursor: pointer;
    }
    .recruit .sideMenu h3 span {
        float: left;
        width: 25%;
        height: 56px;
        text-align: center;
        font-size: 16px;
        color: #333333;
        position: relative;
    }
    .recruit .sideMenu h3.on span:first-child::after {
        content: '';
        position: absolute;
        right: 60px;
        top: 25px;
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-top: 4px solid;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
    }
    .recruit .sideMenu h3 span:first-child::after {
        content: '';
        position: absolute;
        right: 60px;
        top: 25px;
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-left: 4px solid;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
    .recruit .sideMenu .details {
        padding: 20px;
    }
    .recruit .sideMenu .details dl {
        margin-bottom: 20px;
    }
    .recruit .sideMenu .details dl dt {
        font-size: 14px;
        color: #666666;
        line-height: 30px;
        font-weight: bold;
    }
    .recruit .sideMenu .details dl dd {
        font-size: 14px;
        color: #666666;
        line-height: 30px;
    }
</style>
