<template>
    <div id="contentSearch">
        <img src="@/assets/images/logo_r.png" width="100%" class="logo" />
        <div class="search">
            <div class="searchCond">
                <ul class="condition">
                    <li v-for="(item,index) in searchType" :key="index" :class="{active: currentIndex == index}" @mouseover="choiceType(index)">
                        <a href="javascript:void(0)">{{ item }}</a>
                        <span></span>
                    </li>
                </ul>
                <a href="javascript:void(0)" class="more">更多</a>
            </div>
            <div class="searchInput">
                <input placeholder="请输入区域、商圈、小区、地铁" />
                <button>
                    <img src="@/assets/images/search.png" width="100%">
                </button>
            </div>
            <div class="dropdownBox">
                <template v-if="dropDown!='' && currentIndex == 0">
                    <select-box v-bind:result="dropDown.area.name" v-bind:list="dropDown.area.list"></select-box>
                    <select-box v-bind:result="dropDown.property.name" v-bind:list="dropDown.property.list"></select-box>
                    <select-box v-bind:result="dropDown.range_price.name" v-bind:list="dropDown.range_price.list"></select-box>
                </template>
                <template v-if="dropDown && currentIndex == 1">
                    <select-box v-bind:result="dropDown.city.name" v-bind:list="dropDown.city.list"></select-box>
                    <select-box v-bind:result="dropDown.house_type.name" v-bind:list="dropDown.house_type.list"></select-box>
                    <select-box v-bind:result="dropDown.range_price.name" v-bind:list="dropDown.range_price.list"></select-box>
                </template>
                <template v-if="dropDown && currentIndex == 2 || currentIndex == 3">
                    <select-box v-bind:result="dropDown.city.name" v-bind:list="dropDown.city.list"></select-box>
                    <select-box v-bind:result="dropDown.property.name" v-bind:list="dropDown.property.list"></select-box>
                    <select-box v-bind:result="dropDown.price.name" v-bind:list="dropDown.price.list"></select-box>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import selectBox from "@/components/main/selectBox";

export default {
    name: "contentSearch",
    components: {
        selectBox
    },
    data() {
        return {
            currentIndex: "0",
            searchType: [
                "买新房",
                "买二手房",
                "找商铺",
                "找租房",
                "查房价",
                "房价快讯",
                "地图找房"
            ],
            dropDown: []
        };
    },
    methods: {
        //切换搜索类型
        choiceType(index) {
            if (index <= 3) {
                this.currentIndex = index;
            }
        },

        //搜索条件
        getSearchCondition() {
            this.axios
                .post(process.env.API_HOST + "home/index/getHomeSearchData", {})
                .then(res => {
                    console.log(res.data.data)
                    this.dropDown = res.data.data
                });
        }
    },
    mounted() {
        this.getSearchCondition()
    }
};
</script>
<style scoped>
#contentSearch {
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -337.5px;
    width: 675px;
    height:215px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
}

#contentSearch .logo {
    width: 200px;
    height: 30px;
}

#contentSearch .search {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
}

.search .searchCond {
    overflow: hidden;
    width: 100%;
}

.search .searchCond .condition {
    float: left;
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search .searchCond .condition li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 30px;
}

.search .searchCond .condition li.active a {
    color: #e83703;
}

.search .searchCond .condition li a:hover {
    color: #e83703;
}

.search .searchCond .condition li.active span {
    visibility: visible;
}

.search .searchCond .condition li span {
    width: 27px;
    border: 3px #e83703 solid;
    visibility: hidden;
    margin-top: 5px;
}

.search .searchCond .more {
    float: right;
    align-self: flex-start;
    font-size: 16px;
}

.search .searchCond .more:hover {
    color: #e93e0c;
}

.search .searchCont {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}

.search .searchCont input {
    width: 595px;
    height: 45px;
    outline: none;
    padding-left: 15px;
    overflow: hidden;
    font-size: 14px;
}

.search .searchCont button {
    width: 70px;
    height: 45px;
    background: #e93e0c;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
}

.search .searchCont button img {
    width: 24px;
    height: 24px;
}

.search .searchInput {
    width: 100%;
    height: 45px;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
}

.search .searchInput input {
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding-left: 20px;
    font-size: 14px;
    outline: none;
    border: 0;
}

.search .searchInput button {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #e93e0c;
    border: 0;
}

.search .searchInput button img {
    width: 24px;
    height: 24px;
}

.search .dropdownBox {
    display: flex;
    flex-direction: row;
}
</style>
