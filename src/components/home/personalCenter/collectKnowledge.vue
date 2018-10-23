<template>
    <div class="collection-box">
        <ul class="known">
            <li class="clearfix">
            <p class="fl">外地人买房被限购怎么办？注意这5大问题！ </p>
            <div class="fr"><span class="fl time">2018-07-24 10:12</span><span class="fl del">删除</span></div>
            </li>
            <li class="clearfix">
            <p class="fl">外地人买房被限购怎么办？注意这5大问题！ </p>
            <div class="fr"><span class="fl time">2018-07-24 10:12</span><span class="fl del">删除</span></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"collectKnowledge",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .collection-box > .known > li {
        height: 65px;
        line-height: 65px;
        border-bottom: 1px solid #f2f2f2;
    }
    .collection-box > .known > li p {
        font-size: 14px;
        line-height: 65px;
        color: #333333;
        font-weight: bold;
    }
    .collection-box > .known > li span {
        font-size: 14px;
        line-height: 65px;
        color: #999999;
    }
    .collection-box > .known > li span.del {
        margin-left: 80px;
        cursor: pointer;
    }
</style>
