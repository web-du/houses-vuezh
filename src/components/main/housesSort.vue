<template>
    <div id="housesSort">
        <ul>
            <li v-for="(item, index) in sort" :key="index" @click="choiceSort(index)" :class="{active: sortIndex == index}">
                <a href="javascript:void(0)">
                    <span>{{item.name}}</span>
                    <img src="@/assets/images/icon_up_active.png" width="100%" v-show="index != 0 && (index*2+1) == orderby" />
                    <img src="@/assets/images/icon_down_active.png" width="100%" v-show="index != 0 && index*2 == orderby" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            sort: [
                {
                    name: "默认排序",
                    orderby: "1"
                },
                {
                    name: "价格",
                    orderby: "2"
                },
                {
                    name: "点评",
                    orderby: "4"
                },
                {
                    name: "开盘时间",
                    orderby: "6"
                }
            ],
            sortIndex: 0,
            orderby: 1
        };
    },
    methods: {
        //选择排序
        choiceSort(index) {
            this.sortIndex = index;
            if (index == 0) {
                this.orderby = 1;
            } else {
                this.orderby =
                    this.orderby == index * 2 ? index * 2 + 1 : index * 2;
            }
            this.$emit("sendOrderby", this.orderby)
        }
    }
};
</script>

<style scoped>
#housesSort ul {
    display: flex;
}

#housesSort ul li {
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    overflow: hidden;
}

#housesSort ul li a {
    display: flex;
    align-items: center;
}

#housesSort ul li a:hover span,
#housesSort ul li.active a span {
    color: #e93e0c;
}

#housesSort ul li a span {
    margin-right: 5px;
    color: #999999;
}

#housesSort ul li a img {
    width: 10px;
    height: 12px;
}
</style>

