<template>
    <div class="bottomAd">
        <img src="@/assets/images/bottom_ad.jpg" width="100%" />
        <span>广告</span>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 分页 */
.bottomAd {width:100%;margin:0 auto;margin-bottom:20px;position:relative;max-width: 1200px;}
.bottomAd img{vertical-align: middle;}
.bottomAd.this{margin-bottom: 0;}
.bottomAd span {width:40px;height:20px;line-height:20px;text-align:center;background:rgba(0,0,0,0.3);position:absolute;left:0;bottom:0;font-size:14px;color:#fff;}
.bottomAd .bot{width: 1176px;height: 30px;line-height: 30px;background: rgba(0,0,0,.5);font-size: 14px;color: #fff;position: absolute;bottom: 0;left:0;padding:0 12px;}
.bottomAd .bot i{font-size: 16px;color: #e93e0c;padding:0 6px;}
.bottomAd .bot .date{margin-left: 33px;}
</style>
