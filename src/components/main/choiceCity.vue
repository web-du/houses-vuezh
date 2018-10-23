<template>
    <div id="choiceCity">
        <button @mouseover="switchCityShow" @mouseout="switchCityHide">
            <span>{{ currentCityList }}</span>
            <img src="@/assets/images/icon_down.png" class="drop-down" width="100%" />
            <div class="cityList" v-show="showCityList">
                <ul>
                    <li v-for="(item, index) in cityList" :key="index" @click="choiceCity">
                        <a href="javascript:void(0)">{{ item }}</a>
                        <div></div>
                    </li>
                </ul>
            </div>
        </button>
    </div>
</template>
<script>
export default {
    name: "choiceCity",
    data() {
        return {
            cityList: [],
            currentCityList: "孝感",
            showCityList: false
        };
    },
    methods: {
        switchCityShow() {
            this.showCityList = true;
        },
        switchCityHide() {
            this.showCityList = false;
        },
        choiceCity(e) {
            this.currentCityList = e.target.innerText;
            this.showCityList = false;
        }
    },
    mounted() {
        this.cityList = [
            "孝感",
            "武汉",
            "武昌",
            "孝感",
            "武汉",
            "武昌",
            "孝感",
            "武汉",
            "武昌"
        ];
    }
};
</script>
<style scoped>
#choiceCity {
    margin-right: 25px;
}

#choiceCity button {
    width: 70px;
    height: 35px;
    position: relative;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    border: 0;
}

#choiceCity button span {
    font-size: 14px;
    color: #fff;
    margin-right: 8px;
}

#choiceCity button img {
    width: 10px;
    height: 5px;
}

#choiceCity .cityList {
    position: absolute;
    width: 390px;
    top: 35px;
    left: 0;
    background: #fff;
    padding: 10px 0;
    overflow: hidden;
    z-index: 999;
}

#choiceCity .cityList ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#choiceCity .cityList ul li {
    font-size: 14px;
    line-height: 14px;
    padding: 10px;
}

#choiceCity .cityList ul li a:hover {
    color: #e93e0c;
}
</style>

