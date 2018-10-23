<template>
    <ul class="list">
        <li>
            <ul class="see">
            <li>
                <h2 class="clearfix"><span class="fl name">凤凰城天境</span><span class="descri fl">配套成熟</span><span class="fr to">已报名</span></h2>
                <ul class="details clearfix">
                <li class="fl"><span>最高优惠:</span>敬请期待</li>
                <li class="fl"><span>集合时间:</span>2018-07-28 09：00</li>
                <li class="fl"><span>看房热线:</span>400-850-8888</li>
                <li class="fl"><span>集合地点:</span>人民广场博物馆南门停车场</li>
                <li class="fl"><span>集合信息:</span>凤凰城天境</li>
                </ul>
            </li>
            <li>
                <h2 class="clearfix"><span class="fl name">凤凰城天境</span><span class="descri fl">配套成熟</span><span class="fr to">已报名</span></h2>
                <ul class="details clearfix">
                <li class="fl"><span>最高优惠:</span>敬请期待</li>
                <li class="fl"><span>集合时间:</span>2018-07-28 09：00</li>
                <li class="fl"><span>看房热线:</span>400-850-8888</li>
                <li class="fl"><span>集合地点:</span>人民广场博物馆南门停车场</li>
                <li class="fl"><span>集合信息:</span>凤凰城天境</li>
                </ul>
            </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default{
        name:"listSeehouse",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.list > li .see > li {
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
}
.list > li .see > li h2 .name {
    font-size: 16px;
    line-height: 36px;
    color: #333333;
    font-weight: bold;
}
.list > li .see > li h2 .descri {
    width: 78px;
    height: 25px;
    line-height: 23px;
    border: 1px solid #e93e0c;
    text-align: center;
    font-size: 14px;
    color: #e93e0c;
    margin-left: 10px;
    margin-top: 5px;
}
.list > li .see > li h2 .to {
    font-size: 14px;
    line-height: 36px;
    color: #999999;
}
.list > li .see > li .details {
    width: 820px;
}
.list > li .see > li .details li {
    width: 410px;
    font-size: 14px;
    line-height: 36px;
    color: #666666;
}
.list > li .see > li .details li span {
    color: #999999;
}
</style>
