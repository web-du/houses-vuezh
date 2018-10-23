<template>
    <div id="shoppingGuide">
        <div class="guide_top">
            <span>楼盘导购</span>
            <a href="" class="more">更多</a>
        </div>
        <ul class="guide_bot">
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
            <li><a href=""><span></span>孝感大菜市场完成改造已对外开对外开放开放开</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "shoppingGuide"
};
</script>

<style scoped>
#shoppingGuide {
    width: 100%;
}
#shoppingGuide .guide_top {
    font-size: 18px;
    color: #333;
    margin: 30px auto 10px;
    display: flex;
    justify-content: space-between;
}

#shoppingGuide .guide_top .more {
    font-size: 14px;
    color: #999;
}

#shoppingGuide .guide_top .more:hover {
    color: #e93e0c;
}

#shoppingGuide .guide_bot li {
    list-style-type: circle;
}

#shoppingGuide .guide_bot li a {
    font-size: 14px;
    color: #333;
    display: flex;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
}

#shoppingGuide .guide_bot li a span {
    display: block;
    width: 4px;
    height: 4px;
    background: #ccc;
    border-radius: 2px;
    margin-right: 10px;
}

#shoppingGuide .guide_bot li a:hover {
    color: #e93e0c;
}

#shoppingGuide .guide_bot li a:hover span {
    background: #e93e0c;
}

#shoppingGuide.this {
    margin-bottom: 20px;
}

#shoppingGuide.this .guide_top {
    margin-top: 0;
}
</style>

