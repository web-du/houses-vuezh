<template>
    <div class="box">
        <h2><a href="#" class="clearfix"><span class="fl">热门知识</span><em class="fr">更多</em></a></h2>
        <p class="clearfix">
        <span>在售</span><span>普通住宅</span><span>湖景地产</span><span>湖景地产</span>
        <span>在售</span><span>普通住宅</span><span>湖景地产</span><span>湖景地产</span>
        <span>在售</span><span>普通住宅</span><span>湖景地产</span><span>湖景地产</span>
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.b-box .lovely .box {
  margin-bottom: 20px;
  width: 315px;
}
.b-box .lovely .box h2 span {
  font-size: 20px;
  color: #333333;
  line-height: 36px;
}
.b-box .lovely .box h2 em {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.b-box .lovely .box ul li p {
  font-size: 14px;
  line-height: 36px;
  color: #333333;
  width: 213px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.b-box .lovely .box ul li a:hover p{
	color:#e93e0c;
}
.b-box .lovely .box ul li p span {
  width: 30px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  background-color: #e93e0c;
  color: #fff;
  margin-right: 10px;
}
.b-box .lovely .box ul li span {
  font-size: 14px;
  color: #999999;
  line-height: 36px;
}
.b-box .lovely .box > p {
  margin-top: 15px;
}
.b-box .lovely .box > p span {
  float: left;
  font-size: 14px;
  line-height: 36px;
  padding: 0 10px;
  margin-right: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.b-box .lovely .box > p span:nth-child(4n+1) {
  background-color: #efe8e7;
  color: #e89880;
}
.b-box .lovely .box > p span:nth-child(4n+2) {
  background-color: #f5f2e9;
  color: #dbcea4;
}
.b-box .lovely .box > p span:nth-child(4n+3) {
  background-color: #eef2f8;
  color: #a9bede;
}
.b-box .lovely .box > p span:nth-child(4n+4) {
  background-color: #eef2f8;
  color: #a9bede;
  margin-right: 0;
}

</style>
