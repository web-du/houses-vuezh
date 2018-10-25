<template>
    <div id="selectBox" @mouseover="dropDownShow" @mouseout="dropDownHide">
        <div class="select">
            <input :placeholder="result" v-model="currentvalue" readonly />
            <img src="@/assets/images/icon_down1.png" width="100%" />
        </div>
        <ul class="option" v-show="optionState">
            <li v-for="(item, index) in list" :key="index" v-on:click="choiceValue">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            optionState: false,
            currentvalue: ""
        };
    },
    props: ["result", "list"],
    methods: {
        dropDownShow() {
            this.optionState = true;
        },
        dropDownHide() {
            this.optionState = false;
        },
        choiceValue(e) {
            var curentValue = e.target.innerText;
            this.currentvalue = curentValue;
            this.optionState = false;
            this.$emit("switchresult", curentValue);
        }
    }
};
</script>
<style scoped>
#selectBox {
    position: relative;
    margin-right: 10px;
}

#selectBox .select {
    position: relative;
    overflow: hidden;
}

#selectBox .select input {
    width: 100px;
    height: 30px;
    background: #fff;
    font-size: 14px;
    color: #999999;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
}

#selectBox .select img {
    width: 10px;
    height: 5px;
    position: absolute;
    top: 15px;
    right: 10px;
}

#selectBox .option {
    position: absolute;
    top: 30px;
    left: 0;
    height: 140px;
    overflow: scroll;
    background: #fff;
    z-index: 999;
    width: 100%;
}

#selectBox .option li {
    width: 110px;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
}
</style>
