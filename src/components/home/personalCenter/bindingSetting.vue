<template>
    <div id="binding">
        <div class="clearfix">
            <div class="img fl">
                <img src="@/assets/images/Dw-img16.png">
            </div>
            <p class="fl">未绑定QQ</p>
            <button class="fr">点击绑定</button>
        </div>
        <div class="clearfix have">
            <div class="img fl">
                <img src="@/assets/images/Dw-img17.png">
            </div>
            <p class="fl">已绑定微信</p>
            <button class="fr">已绑定</button>
        </div>              
    </div>
</template>

<script>
    export default{
        name:"bindingSetting",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    #binding>div{
        height: 100px;
        border-bottom: 1px solid #efefef;
        padding: 25px 80px;
    }
    #binding > div .img {
        margin-right: 20px;
    }
    #binding > div .img img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    #binding > div p {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
        margin-top: 7px;
    }
    #binding > div button {
        width: 98px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border: none;
        background-color: #e93e0c;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    #binding > div.have button {
        background-color: #ccc;
    }
</style>
