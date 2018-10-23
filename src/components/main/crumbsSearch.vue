<template>
    <div id="crumbsSearch">
        <div class="content">
            <div class="crumbs">
                <a href="">房乐士</a> > <a href="">孝感新房</a> > <span>孝感8月入驻楼盘</span>
            </div>
            <div class="search">
                <input placeholder="楼盘搜索" v-bind="searchResult" />
                <a href="javascript:void(0)" @click="search">
                    <img src="@/assets/images/searcj.png">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'crumbsSearch',
        data() {
            return {
                searchResult: ''
            }
        },
        methods: {
            search() {
                if (se)
                console.log(this.searchResult)
                // this.$emit("search", this.searchResult);
            }
        }
    }
</script>

<style scoped>
#crumbsSearch {
    background: #f2f2f2;
}

#crumbsSearch .content {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.crumbs,
.crumbs a {
    font-size: 14px;
    color: #999;
}

.crumbs span {
    color: #e93e0c;
    font-weight: bold;
}

.crumbs a:hover {
    color: #e93e0c;
}

.search {
    overflow: hidden;
    position: relative;
}

.search input {
    width: 460px;
    height: 45px;
    padding-left: 20px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
}

.search a {
    width: 55px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #e93e0c;
}

.search a img {
    width: 24px;
    height: 24px;
}
</style>

