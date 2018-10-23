<template>
    <div id="rankings">
        <ranking :ranking-list="newsRanking" v-if="newsRanking != ''"></ranking>
        <!--<ranking></ranking>
        <ranking></ranking> -->
    </div>
</template>

<script>
import axios from "axios";
import ranking from "@/components/index/pageContent/ranking";

export default {
    name: "rankings",
    components: {
        ranking
    },
    data() {
        return {
            newsRanking: [],
        }
    },
    mounted() {
        var then = this
        //获取房产资讯
        function getHomeNewsRanking() {
            return axios.post(
                process.env.API_HOST + "home/index/getHomeNewsRanking"
            );
        }

        //并发调用
        axios.all([getHomeNewsRanking()]).then(
            axios.spread(function(home) {
                if (home.status == "200") {
                    console.log(home.data.data)
                    then.newsRanking = home.data.data
                }
            })
        );
    },
};
</script>

<style scoped>
#rankings {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#rankings > div {
    flex: 1;
    margin-right: 50px;
}

#rankings > div:nth-last-child(1) {
    margin-right: 0;
}
</style>

