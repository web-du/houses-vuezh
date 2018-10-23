<template>
    <div id="buildingSearch">
        <!--楼盘列表-->
        <houses-list :house-list="buildingList" @sendParam="reviceListParam"></houses-list>
        <!--猜你喜欢-->
        <!-- <recommend :houses-list="recHouseList"></recommend> -->
    </div>
</template>

<script>
import housesList from "@/components/main/housesList";
import recommend from "@/components/main/recommend";
export default {
    name: "buildingSearch",
    components: {
        housesList
    },
    props: ["reciveCond"],
    data() {
        return {
            buildingList: [],
            screenCond: [],
            param: []
        };
    },
    watch: {
        //监听父级筛选条件变化
        reciveCond: {
            handler: function(val, oldval) {
                var then = this;
                if (val != oldval) {
                    this.$nextTick(() => {
                        then.screenCond = val;
                        then.getHousesList(val);
                    });
                }
            },
            immediate: true, //关键
            deep: true
        }
    },
    methods: {
        //接收楼盘列表返回参数
        reviceListParam(param) {
            var screen = this.screenCond;
            console.log(param);
            console.log(screen);
            var data = Object.assign(screen, param);
            console.log(data);
            this.getHousesList(data);
        },

        //获取楼盘列表
        getHousesList(data) {
            console.log(data);
            //传入参数
            this.axios
                .post(process.env.API_HOST + "/Houselist/getNewHouseList", data)
                .then(res => {
                    console.log("楼盘搜索列表");
                    console.log(res);
                    this.buildingList = res.data.data;
                })
                .catch(err => {
                    //异常捕获
                });
        }
    },
    mounted() {
    },
};
</script>

<style scoped>
</style>

