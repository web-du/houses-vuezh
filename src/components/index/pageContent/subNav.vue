<template>
    <div id="subNav">
        <div class="nav" v-for="(nav, index) in subNav" :key="index">
            <span class="title">{{ nav.type }}</span>
            <ul>
                <li v-for="(item, index) in nav.list" :key="index">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'subNav',
    data() {
        return {
           subNav: [{
            type: '直销',
            list: [{
                name: '新房直销',
                link: 'javascript:void(0)'
            }, {
                name: '新房直销',
                link: 'javascript:void(0)'
            }, {
                name: '新房直销',
                link: 'javascript:void(0)'
            }, {
                name: '新房直销',
                link: 'javascript:void(0)'
            }]
        }, {
            type: '买房',
            list: [{
                name: '新房购买',
                link: 'javascript:void(0)'
            }, {
                name: '新房购买',
                link: 'javascript:void(0)'
            }, {
                name: '新房购买',
                link: 'javascript:void(0)'
            }, {
                name: '新房购买',
                link: 'javascript:void(0)'
            }]
        }, {
            type: '卖房',
            list: [{
                name: '我要卖房',
                link: 'javascript:void(0)'
            }, {
                name: '我要卖房',
                link: 'javascript:void(0)'
            }, {
                name: '我要卖房',
                link: 'javascript:void(0)'
            }, {
                name: '我要卖房',
                link: 'javascript:void(0)'
            }]
        }, {
            type: '商业',
            list: [{
                name: '成熟商业',
                link: 'javascript:void(0)'
            }, {
                name: '成熟商业',
                link: 'javascript:void(0)'
            }, {
                name: '成熟商业',
                link: 'javascript:void(0)'
            }, {
                name: '成熟商业',
                link: 'javascript:void(0)'
            }]
        }, {
            type: '租房',
            list: [{
                name: '找租房源',
                link: 'javascript:void(0)'
            }, {
                name: '找租房源',
                link: 'javascript:void(0)'
            }, {
                name: '找租房源',
                link: 'javascript:void(0)'
            }, {
                name: '找租房源',
                link: 'javascript:void(0)'
            }]
        }]
        }
    }
}
</script>
<style scoped>
    #subNav {
        display: flex;
        padding: 50px 0;
    }

    .nav {
        flex: 1;
        display: flex;
        align-items: center;   
        height: 45px;
        border-right: 1px solid #cccccc;
        margin-right: 20px;
    }

    .nav:nth-last-child(1) {
        margin-right: 0;
        border-right: 0;
    }

    .nav .title {
        font-size: 22px;
        color: #e93e0c;
        font-weight: bold;
        margin-right: 10px;
    }

    .nav ul {
        width: 140px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .nav ul li a:hover {
        color: #e93e0c;
    }
</style>
