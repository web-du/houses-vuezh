<template>
    <div id="paging">
        <div class="content" v-if="pageNum">
            <a href="javascript:void(0)" class="prev" @click="prevPage()">
                <img src="@/assets/images/prevPage.png" width="100%" />上一页
            </a>
            <ul>
                <li v-for="(item, index) in pageNum" :key="index" :class="{active: index+1 == curPage}"><a href="javascript:void(0)" @click = "choicePage(index)">{{item}}</a></li>
            </ul>
            <a href="javascript:void(0)" class="next" @click="nextPage()">
                下一页<img src="@/assets/images/nextPage.png" width="100%" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'paging',
    props: ['pageNum', 'curPage'],
    data() {
        return {
            page: 1
        }
    },
    methods: {
        //选择页码
        choicePage(index) {
            this.page = index + 1;
            console.log(index)
            this.changePageNum()
        },

        //上一页
        prevPage() {
            if (this.page != 1) {
                this.page -= 1
            }
            this.changePageNum()
        },

        //下一页
        nextPage() {
            if (this.page != this.pageNum) {
                this.page += 1
            }
            this.changePageNum()
        },

        //向父组件传递页码
        changePageNum() {
            this.$emit('sendPage', this.page)
        }
    },
    mounted() {
        console.log(this.pageNum)
    },
};
</script>

<style scoped>
#paging {
    display: flex;
    justify-content: center;
    margin: 50px 0;   
}

#paging .content {
    overflow: hidden;
    display: flex;
}

#paging .prev img {
    margin-right: 20px;
}

#paging .next img {
    margin-left: 20px;
}

#paging .prev,
#paging .next {
    width: 115px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9e9e9;
    color: #666;
}

#paging .prev img,
#paging .next img {
    width: 10px;
    height: 12px;
}

#paging ul {
    display: flex;
    margin: 0 10px;
}

#paging ul li {
    margin-right: 10px;
}

#paging ul li:nth-last-child(1) {
    margin-right: 0;
}

#paging ul li a {
    font-size: 14px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    display: block;
    border: 1px solid #e9e9e9;
}

.content li.active a {
    border: 1px solid #e93e0c;
    background: #e93e0c;
    color: #fff;
}
</style>

