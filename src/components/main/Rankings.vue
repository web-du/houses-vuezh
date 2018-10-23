<template>
    <div class="rankings" id="rankings">
        <div class="header">
            <span>大家都在看</span>
            <a href="javascript:void(0)" class="more">更多</a>
        </div>
        <ul class="list">
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">1</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">2</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">3</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">4</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">5</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">6</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">7</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">8</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">9</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <ul>
                        <li class="serialNumber">10</li>
                        <li class="title">央行划出五项重点工作 降准是恐降准是恐降准是恐</li>
                        <li class="readNumber">77k</li>
                    </ul>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rankings {
    overflow: hidden;
    margin-top: 30px;
}

.rankings>.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

.rankings>.header span {
    font-size: 20px;
}

.rankings>.header a {
    font-size: 14px;
    color: #999999;
}

.rankings .list {
    margin-top: 20px;
}

.rankings .list>li {
    display: block;
    margin-top: 15px;
}

.rankings .list>li:nth-child(1) {
    margin-top: 0;
}

.rankings .list>li ul {
    display: flex;
    flex-direction: row;
}

.rankings .list>li ul a {
    display: block;
}

.rankings .list>li ul .serialNumber {
    width: 27px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    display: block;
    color: #fff;
    margin-right: 10px;
    background: #999;
}

.rankings .list>li ul .title {
    font-size: 14px;
    width: 215px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 30px;
}

.rankings .list>li ul .readNumber {
    font-size: 14px;
    color: #999;
}

.rankings .list li:nth-child(1) ul .serialNumber {
    background: #e93e0c;
}

.rankings .list li:nth-child(2) ul .serialNumber {
    background: #f4d712;
}

.rankings .list li:nth-child(3) ul .serialNumber {
    background: #f3a81b;
}
</style>
