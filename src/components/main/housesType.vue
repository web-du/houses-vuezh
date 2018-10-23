<template>
    <div id="housesType">
        <ul>
            <li v-for="(item, index) in housetype" :key="index" :class="{active: index == house_model}" @click="choiceHousesType(index)">
                <a href="javascript:void(0)">{{item.name +'('+item.num+')'}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'housesType',
    props: ['housetype'],
    data() {
        return {
            house_model: 0
        }
    },
    methods: {
        choiceHousesType(index) {
            this.house_model = index
            this.$emit("sendHousesModel", this.house_model)
        }
    },
    mounted() {
        this.$nex
    },
    watch: {
        //监听父组件传值该变化
        housetype: {
            handler:(val,oldval) => {  
                this.housetype = val;
                console.log(this.housetype)
            },  
            immediate:true,//关键
            deep:true
        }
    }
};
</script>

<style scoped>
#housesType {
    display: flex;
    justify-content: space-between;
}

#housesType ul {
    display: flex;
}

#housesType ul li {
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    width: 130px;
    text-align: center;
}

#housesType ul li.active {
    background: #e93e0c;
}

#housesType ul li.active a {
    color: #fff;
}

.sort ul {
    display: flex;
}

.sort ul li {
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    overflow: hidden;
}

.sort ul li a {
    display: flex;
    align-items: center;
}

.sort ul li a:hover span,
.sort ul li.active a span {
    color: #e93e0c;
}

.sort ul li a span {
    margin-right: 5px;
    color: #999999;
}

.sort ul li a img {
    width: 10px;
    height: 12px;
}
</style>

