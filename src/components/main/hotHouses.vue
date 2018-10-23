<template>
    <div class="hot_houses">
        <div class="tabbar">
            <a href="javascript:void(0)" class="active">热门楼盘</a>
            <a href="javascript:void(0)">本月开盘</a>
        </div>
        <div class="hot_bot">
            <div class="thead">
                <span class="houses_name">楼盘名称</span>
                <span class="houses_price">价格</span>
            </div>
            <div class="tbody">
                <ul>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景1</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景1</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hot_bot" style="display:none;">
            <div class="thead">
                <span class="houses_name">楼盘名称</span>
                <span class="houses_price">价格</span>
            </div>
            <div class="tbody">
                <ul>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景2</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景2</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="houses_name">常青花园恒大御景</span>
                            <span class="houses_price">15800/㎡</span>
                        </a>
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
.hot_houses {
    margin-top: 20px;
}

.tabbar {
    display: flex;
}

.tabbar a {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #333333;
    text-align: center;
    border-bottom: 2px solid #f5f5f5;
}

.tabbar a.active {
    color: #e93e0c;
    border-color: #e93e0c;
}

.hot_houses .thead {
    padding: 6.5px 10px;
    overflow: hidden;
    font-size: 12px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
    margin-top: 10px;
}

.hot_houses .houses_name {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hot_houses .houses_price {
    color: #666;
    width: 90px;
    text-align: center;
}

.hot_houses .tbody {
    padding: 10px;
}

.hot_houses .tbody ul li a {
    line-height: 35px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.hot_houses .tbody ul li a:hover span {
    color: #e93e0c;
}

.hot_houses .houses_name {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hot_houses .houses_price {
    color: #666;
    width: 90px;
    text-align: center;
}
</style>

