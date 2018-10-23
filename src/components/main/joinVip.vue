<template>
    <div id="joinVip">
        <span class="title">已享受房乐士直通车VIP服务</span>
        <p class="personTime">
            <span>702,301</span>人次 </p>
        <a href="javascript:void(0)">立刻报名</a>
    </div>
</template>

<script>
export default {
    name: "joinVip"
};
</script>

<style scoped>
#joinVip {
    padding-bottom: 20px;
    overflow: hidden;
    border-top: 2px solid #e93e0c;
    border: 1px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

#joinVip .title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    display: block;
    background: #f5f5f5;
    font-size: 16px;
    color: #e93e0c;
    border-top: 2px solid #e93e0c;
}

#joinVip .personTime {
    font-size: 14px;
    line-height: 60px;
    height: 60px;
    text-align: center;
}

#joinVip .personTime span {
    font-size: 24px;
    font-weight: bold;
    color: #e93e0c;
    margin-right: 5px;
    
}

#joinVip a {
    width: 225px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border: 0;
    background: #e93e0c;
    font-size: 16px;
    color: #fff;
    display: block;
    margin: 0 auto;
}
</style>

