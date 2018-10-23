<template>
    <div class="more_box">
        <div class="more_ssp">
            <a href="">&it;上一页</a>
            <span class="cpb current">1</span>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">下一页&gt;></a>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 分页 */
.more_box{height:100px;width:auto;margin:0 auto;clear: both;float: left; position: relative; left: 50%;padding-top: 50px;}
.more_box .more_ssp { position: relative;left: -50%;width: auto;height: 100px;float: left;}
.more_ssp span,.more_ssp a {float:left;width:auto;height:38px;line-height:38px;font-size:14px;color:#888;border:1px solid #d8d8d8;margin-right:10px;padding:0 15px;
	text-align:center;background-color:#fff;cursor:pointer;vertical-align:middle;}
.more_ssp span.cpb:hover,.more_ssp a:hover,.more_ssp span.cpb.in,.more_ssp a.in{width: auto;color: #fff;background: #e93e0c;border:1px solid #e93e0c;height:38px;line-height:38px;padding:0 15px;}
.more_ssp span.current{background: #e93e0c;color: #fff;border:1px solid #e93e0c;}
</style>
