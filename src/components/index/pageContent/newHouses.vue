<template>
    <div id="houses">
        <div class="header">
            <span>新楼开盘</span>
            <a href="javascript:void(0)">查看更多</a>
        </div>
        <div class="bottom">
            <ul>
                <li class="active">
                    <div class="date">
                        <span>18-06</span>
                        <span></span>
                    </div>
                    <div class="border">
                        <span></span>
                        <img src="@/assets/images/icon1.png" width="100%" class="icon1" />
                        <img src="@/assets/images/icon2.png" width="100%" class="icon2" />
                    </div>
                </li>
                <li>
                    <div class="date">
                        <span>18-06</span>
                        <span></span>
                    </div>
                    <div class="border">
                        <span></span>
                        <img src="@/assets/images/icon1.png" width="100%" class="icon1" />
                        <img src="@/assets/images/icon2.png" width="100%" class="icon2" />
                    </div>
                </li>
                <li>
                    <div class="date">
                        <span>18-06</span>
                        <span></span>
                    </div>
                    <div class="border">
                        <span></span>
                        <img src="@/assets/images/icon1.png" width="100%" class="icon1" />
                        <img src="@/assets/images/icon2.png" width="100%" class="icon2" />
                    </div>
                </li>
                <li>
                    <div class="date">
                        <span>18-06</span>
                        <span></span>
                    </div>
                    <div class="border">
                        <span></span>
                        <img src="@/assets/images/icon1.png" width="100%" class="icon1" />
                        <img src="@/assets/images/icon2.png" width="100%" class="icon2" />
                    </div>
                </li>
            </ul>
        </div>
        <div class="list">
            <ul class="datelist">
                <li>
                    <ul class="housinglist">
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="housinglist">
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="housinglist">
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="housinglist">
                        <li>
                            <a href="javascript:void(0)">
                                <span class="name">仙女湖豪庭</span>
                                <span class="price">9830/m&sup2;</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#houses {
    margin-top: 20px;
}

#houses .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#houses .header span {
    font-size: 18px;
}

#houses .header a {
    font-size: 14px;
    color: #999;
}

#houses .header a:hover {
    color: #e93e0c;
}

#houses .bottom ul {
    display: flex;
    flex-direction: row;
}

#houses .bottom {
    margin-top: 20px;
}

#houses .bottom ul li {
    flex: 1;
}

#houses .bottom ul li .date {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#houses .bottom ul li .date span {
    display: block;
}

#houses .bottom ul li .date span:nth-child(1) {
    width: 60px;
    height: 20px;
    line-height: 20px;
    background: #999;
    font-size: 14px;
    color: #fff;
    text-align: center;
}

#houses .bottom ul li .date span:nth-child(2) {
    width: 0;
    border-color: #999 transparent;
    border-width: 6px 6px 0px 6px;
    border-style: solid;
}

#houses .bottom ul li.active .date span:nth-child(1) {
    background: #e93e0c;
}

#houses .bottom ul li.active .date span:nth-child(2) {
    border-color: #e93e0c transparent;
}

#houses .bottom ul li .border {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    height: 13px;
    justify-content: center;
}

#houses .bottom ul li .border span {
    width: 100%;
    height: 1px;
    background: #ccc;
}

#houses .bottom ul li .border img {
    width: 13px;
    height: 13px;
    position: absolute;
    left: 22px;
    bottom: 0;
}

#houses .bottom ul li .border .icon1 {
    display: none;
}

#houses .bottom ul li.active .border .icon1 {
    display: block;
}

#houses .bottom ul li.active .border .icon2 {
    display: none;
}

#houses .list {
    margin-top: 10px;
}

#houses .list .datelist {
    display: flex;
    flex-direction: row;
    overflow: auto;
    height: 90px;
}

#houses .list .datelist > li {
    flex: 1;
}

#houses .list .housinglist li {
    margin-top: 10px;
    font-size: 14px;
}

#houses .list .housinglist li:nth-child(1) {
    margin-top: 0;
}

#houses .list .housinglist li a {
    display: flex;
    flex-direction: row;
}

#houses .list .housinglist li a span {
    flex: 1;
}

#houses .list .housinglist li a span:nth-child(2) {
    color: #999;
}
</style>

