<template>
    <div id="infomation">
        <div class="new_house_info">
            <div class="title">
                <span>新房资讯</span>
                <a>更多</a>
            </div>
            <div class="cont_list">
                <ul>
                    <li class="setTop">
                        <a>孝感大菜市场完成改造已对外开放放放放</a>
                    </li>
                    <li>
                        <span></span>
                        <a>孝感大菜市场完成改造已对外开放放放放</a>
                    </li>
                    <li>
                        <span></span>
                        <a>孝感大菜市场完成改造已对外开放放放放</a>
                    </li>
                    <li>
                        <span></span>
                        <a>孝感大菜市场完成改造已对外开放放放放</a>
                    </li>
                    <li>
                        <span></span>
                        <a>孝感大菜市场完成改造已对外开放放放放</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#infomation {
    display: flex;
    flex-direction: column;
}

.new_house_info .title {
    display: flex;
    justify-content: space-between;
}

.new_house_info .title span {
    font-size: 18px;
}

.new_house_info .title a {
    font-size: 14px;
    color: #999999;
}

.new_house_info .title a:hover {
    color: #e93e0c;
}

.cont_list {
    margin-top: 25px;
}

.cont_list ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 30px;
}



.cont_list ul li.setTop a {
    font-size: 16px;
    color: #e93e0c;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
}

.cont_list ul li span {
    display: block;
    width: 4px;
    height: 4px;
    background: #ccc;
    border-radius: 2px;
    margin-right: 10px;
}

.cont_list ul li a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cont_list ul li a:hover {
    color: #e93e0c;
}
</style>

