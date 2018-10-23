<template>
    <div id="recommend">
        <div class="title">
            <span>猜你喜欢</span>
        </div>
        <div class="houseList">
            <h2 v-if="housesList.list == 0" class="noResult">暂无房源</h2>
            <div v-for="(houses, index) in housesList.list" :key="index" v-if="housesList.list != 0">
                <building :houses="houses"></building>
            </div>
        </div>
    </div>
</template>

<script>
import building from "@/components/main/building";
export default {
    name: "recommend",
    components: {
        building
    },
    data() {
        return {
            housesList: []
        };
    },
    methods: {
        recommend() {
            this.axios
                .post(process.env.API_HOST + "house/Houselist/getLikeHouselist", {})
                .then(res => {
                    if (res.status == "200") {
                        console.log("猜你喜欢");
                        this.housesList = res.data.data;
                        console.log(this.housesList);
                    }
                });
        }
    },
    mounted() {
        this.recommend();
    }
};
</script>

<style scoped>
#recommend {
    overflow: hidden;
}

.title {
    border-bottom: 2px solid #f5f5f5;
    height: 35px;
    position: relative;
}

.title span {
    position: absolute;
    height: 35px;
    padding: 0 15px;
    color: #e93e0c;
    border-bottom: 2px solid #e93e0c;
    display: block;
}
</style>

