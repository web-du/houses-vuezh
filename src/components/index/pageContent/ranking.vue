<template>
    <div id="ranking">
        <p class="title">{{rankingList.news_ranking.name}}</p>
        <div class="tabbar">
            <a @click="choiceRanking(0)" class="active">
                <span>资讯排行</span>
                <div class="border">
                    <span class="jiao"></span>
                    <span class="chang"></span>
                </div>
            </a>
            <a @click="choiceRanking(1)">
                <span>导购排行</span>
                <div class="border">
                    <span class="jiao"></span>
                    <span class="chang"></span>
                </div>
            </a>
        </div>
        <ul class="list news_ranking" v-if="rankingList">
            <li v-for="(item, index) in rankingList.news_ranking.list" :key="index">
                <span>{{index+1}}</span>
                <a href="javascript:void(0)">{{item.post_title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ranking",
    props: ["rankingList"],
    methods: {
        //选择排行榜
        choiceRanking(index) {
            this.newsRankingIndex = index
        }
    },
    mounted() {
        console.log(this.rankingList)
    }
};
</script>

<style scoped>
#ranking {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#ranking .title {
    font-size: 26px;
    font-weight: bold;
}

#ranking .tabbar {
    width: 100%;
    margin-top: 15px;
    display: flex;
    border-bottom: 2px solid #f5f5f5;
}

#ranking .tabbar a {
    flex: 1;
    border: 0;
    background: none;
    height: 45px;
    line-height: 45px;
    font-size: 20px;
    position: relative;
    text-align: center;
    cursor: pointer;
}

#ranking .tabbar a.active span {
    color: #e93e0c;
}

#ranking .tabbar a.active .border {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
}

#ranking .tabbar a.active .jiao {
    display: block;
    width: 0;
    border-color: #e93e0c transparent;
    border-width: 0 6px 6px 6px;
    border-style: solid;
    margin: 0 auto;
}

#ranking .tabbar a.active .chang {
    display: block;
    border-bottom: 2px solid #e93e0c;
}

#ranking .list {
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

#ranking .list li {
    height: 28px;
    line-height: 28px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
}

#ranking .list li:nth-child(1) {
    margin-top: 0;
}

#ranking .list li span {
    display: block;
    width: 30px;
    height: 30px;
    font-size: 14px;
    color: #fff;
    background: #e93e0c;
    margin-right: 10px;
    text-align: center;
}

#ranking .list li a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#ranking .list li a:hover {
    color: #e93e0c;
}
</style>

