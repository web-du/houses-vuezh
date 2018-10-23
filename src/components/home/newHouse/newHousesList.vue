<template>
    <div id="newHousesList">
        <!--面包屑导航-->
        <crumbs-search></crumbs-search>
        <div class="screen_tabbar">
            <ul>
                <li v-for="(item, index) in search_type" :key="index" :class="{active: search_index == index}" :style="{left: index == 0 ? 0:index*110+(index-1)*10+'px'}" @click="switchSearchType(index, item.assembly)">
                    <a href="javascript:void(0)" class="shape">
                        <span v-show="index!= 0" class="left_triangle">
                        </span> <span class="rectangle">{{item.name}}</span>
                        <span class="right_triangle"></span>
                    </a>
                </li>
            </ul>
            <div class="btn">
                <a href="#">免费发布房源</a>
                <a href="#">帮你找房</a>
            </div>
        </div>
        <keep-alive>
            <component v-bind:is="curHousesType"></component>
        </keep-alive>
    </div>
</template>

<script>
import crumbsSearch from "@/components/main/crumbsSearch";
import buildingSearch from "@/components/home/newHouse/buildingSearch";
import housesSearch from "@/components/home/newHouse/housesSearch";
import schoolHouse from "@/components/home/newHouse/schoolDistrictHouse";
export default {
    name: "newHousesList",
    components: {
        buildingSearch,
        crumbsSearch,
        schoolHouse,
        housesSearch
    },
    data() {
        return {
            search_type: [
                {
                    name: '楼盘搜索',
                    assembly: 'buildingSearch'
                },
                {
                    name: '房源搜索',
                    assembly: 'housesSearch'
                },
                {
                    name: '学区搜索',
                    assembly: 'schoolHouse'
                }
            ],
            search_index: 0,
            curHousesType: 'buildingSearch'
        };
    },
    methods: {
        //切换搜索类型
        switchSearchType(index, assembly) {
            console.log(index);
            this.search_index = index;
            this.curHousesType = assembly
        }
    }
};
</script>

<style scoped>
.screen_tabbar {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-bottom: 3px solid #e93e0c;
}

.screen_tabbar ul {
    position: relative;
    width: 450px;
    height: 30px;
    align-self: flex-end;
}

.screen_tabbar ul li {
    position: absolute;
    top: 0;
    overflow: hidden;
}

.screen_tabbar ul li a {
    display: flex;
    flex-direction: row;
}

.screen_tabbar ul li .rectangle {
    display: block;
    width: 110px;
    height: 30px;
    border-radius: 3px 3px 0 0;
    background: #ffdcd1;
    font-size: 14px;
    color: #e93e0c;
    text-align: center;
    line-height: 30px;
}

.screen_tabbar ul li .left_triangle {
    width: 0;
    height: 0;
    border-color: #ffdcd1 transparent;
    border-width: 0 0px 28px 10px;
    border-style: solid;
    margin-top: 2px;
    display: block;
}

.screen_tabbar ul li .right_triangle {
    display: block;
    width: 0;
    height: 0;
    border-color: #ffdcd1 transparent;
    border-width: 0 10px 28px 0;
    border-style: solid;
    margin-top: 2px;
}

.screen_tabbar ul li.active {
    z-index: 2;
}

.screen_tabbar ul li.active .rectangle {
    background: #e93e0c;
    color: #fff;
}

.screen_tabbar ul li.active .left_triangle,
.screen_tabbar ul li.active .right_triangle {
    border-color: #e93e0c transparent;
}

.screen_tabbar .btn {
    display: flex;
}

.screen_tabbar .btn a {
    height: 40px;
    line-height: 40px;
    padding: 0 25px;
    background: #e93e0c;
    color: #fff;
    font-size: 16px;
}

.screen_tabbar .btn a:nth-child(1) {
    margin-right: 10px;
}
</style>

