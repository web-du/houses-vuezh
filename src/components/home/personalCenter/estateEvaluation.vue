<template>
    <div class="details">
        <ul>
            <li>
                <div class="premises" v-show="have">
                    <ul>
                        <li class="clearfix">
                            <div class="img fl">
                            </div>
                            <div class="name fr">
                                <div class="box clearfix">
                                <h2 class="fl">求购松江老城2居室</h2>
                                <div class="star fl clearfix">
                                    <img src="@/assets/images/Dw-staron.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                </div>
                                <span class="fl"><em>1</em>分</span>
                                </div>
                                <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18</p>
                                <span class="time fl">2018-06-18 发布</span>
                                <span class="del fr">删除</span>
                            </div>
                        </li>
                        <li class="clearfix">
                            <div class="img fl">
                            </div>
                            <div class="name fr">
                                <div class="box clearfix">
                                <h2 class="fl">求购松江老城2居室</h2>
                                <div class="star fl clearfix">
                                    <img src="@/assets/images/Dw-staron.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                </div>
                                <span class="fl"><em>1</em>分</span>
                                </div>
                                <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18</p>
                                <span class="time fl">2018-06-18 发布</span>
                                <span class="del fr">删除</span>
                            </div>
                        </li>
                        <li class="clearfix">
                            <div class="img fl">
                            </div>
                            <div class="name fr">
                                <div class="box clearfix">
                                <h2 class="fl">求购松江老城2居室</h2>
                                <div class="star fl clearfix">
                                    <img src="@/assets/images/Dw-staron.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                    <img src="@/assets/images/Dw-staroff.png" class="fl">
                                </div>
                                <span class="fl"><em>1</em>分</span>
                                </div>
                                <p>新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房源总价120万起，单价约17000-19000元/㎡，建面新华御湖上园目前在售房㎡左右；项目主力户型为建面约66㎡、82㎡、97㎡和98㎡，总高18</p>
                                <span class="time fl">2018-06-18 发布</span>
                                <span class="del fr">删除</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="notice">{{notice}}</p>
            </li>
        </ul>
        <div class="page" v-show="have">
            <div class="box">
                <span>&lt;&nbsp;&nbsp;&nbsp;&nbsp;上一页</span>
                <em class="now">1</em>
                <em>2</em>
                <em>3</em>
                <em>4</em>
                <span>下一页&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"estateEvaluation",
        data(){
            return{
                //如果没有信息给出友善的提示
                have:true,
                notice:'',
            }
        },
        created(){
            this.axios.get(process.env.API_HOST+'commonality/personal/comment',{params:{type:1}}).then((response) => {
                console.log(response.data);
                if(response.data.data == ""){
                    this.have = false;
                    this.notice = response.data.msg;
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
.notice{
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    color: #666666;
}
    .details{
        padding-bottom: 50px;
    }
    .premises > ul > li {
        padding: 20px 0;
        border-bottom: 1px solid #f2f2f2;
    }
    .premises > ul > li .img {
        width: 144px;
        height: 108px;
        background-color: #e93e0c;
    }
    .premises > ul > li .name {
        width: 816px;
    }
    .premises > ul > li .name .box h2 {
        font-size: 16px;
        line-height: 36px;
        font-weight: bold;
        color: #333333;
    }
    .premises > ul > li .name .box .star {
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 10px;
    }
    .premises > ul > li .name .box .star img {
        width: 18px;
        height: 16px;
        margin-right: 10px;
    }
    .premises > ul > li .name .box span {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
        margin-top: 6px;
    }
    .premises > ul > li .name .box span em {
        color: #e93e0c;
        margin-right: 5px;
    }
    .premises > ul > li .name > p {
        font-size: 14px;
        line-height: 24px;
        color: #666666;
    }
    .premises > ul > li .name .time,.premises > ul > li .name .del {
        font-size: 14px;
        color: #999999;
        line-height: 36px;
        cursor: pointer;
    }
</style>
