<template>
    <div class="hot_review">
        <div class="guide_top">
            <div class="fl">大家都在看</div>
            <a href="" class="more fr">更多</a>
        </div>
        <div class="tbody">
            <ul>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">1</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">2</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">3</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">4</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">5</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">6</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">7</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">8</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">9</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a class="houses_review">
                        <ul>
                            <li class="heading">
                                <span class="num">10</span>
                                <span class="title">央行划出五项重点工作 降准是恐...</span>
                            </li>
                            <li class="readingVolume">77k</li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot_review {
    margin-bottom: 20px;
}

.hot_review .guide_top {
    font-size: 18px;
    color: #333;
    margin: 30px auto 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 20px;
}

.hot_review .guide_top .fl {
    font-size: 20px;
}

.hot_review .guide_top .more {
    font-size: 14px;
    color: #999;
}

.houses_review ul {
    display: flex;
    justify-content: space-between;
}

.houses_review ul li {
    line-height: 30px;
}

.houses_review ul .heading {
    display: flex;
}

.houses_review ul .heading .num {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    margin-right: 10px;
}

.houses_review ul .heading .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 220px;
}

.tbody> ul> li {
    margin-top: 15px;
}

.tbody> ul> li:nth-child(1) {
    margin-top: 0;
}

.tbody> ul> li .num {
    background: #999999;
}

.tbody> ul> li:nth-child(1) .num {
    background: #e93e0c;
}

.tbody> ul> li:nth-child(2)  .num {
    background: #f5d812;
}

.tbody> ul> li:nth-child(3)  .num {
    background: #f3a81b;
}

.houses_review ul .readingVolume {
    color: #999;
}
</style>
