<template>
    <div>
        <div class="banner">
            <img src="@/assets/images/about_banner.jpg" width="100%">
        </div>
        <div class="head_func">
            <div class="content">
                <div class="crumbsNav">
                    <ul>
                        <li>
                            <a href="#">房乐士</a>
                            <span>&nbsp;>&nbsp;</span>
                        </li>
                        <li class="active">
                            <a href="#">关于我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="navigator">
                <ul>
                    <li v-for="(item, index) in List" :key="index" :class="{active: currentIndex == index}" @click.stop="switchView(index,item)">
                        <span class="parentNode">{{item.name}}</span>
                        <div class="childNodes" v-show="currentIndex == index">
                            <ul v-if="currentIndex == index">
                                <li v-for="(child, index) in item.child" :key="index" @click.stop="switchChild(index,child.id)" :class="{now: childIndex == index}">{{child.name}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="modular">
                <keep-alive>
                <component :is="currentTabComponent" :nowId="thisIndex" :Con="childCon"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
import comAboutUs from "@/components/home/aboutUs/comAboutUs";
import coopAboutUs from "@/components/home/aboutUs/coopAboutUs";
import contactAboutUs from "@/components/home/aboutUs/contactAboutUs";
import recruitAboutUs from "@/components/home/aboutUs/recruitAboutUs"
import opinionAboutUs from "@/components/home/aboutUs/opinionAboutUs"
import problemAboutUs from "@/components/home/aboutUs/problemAboutUs"
import serviceAboutUs from "@/components/home/aboutUs/serviceAboutUs"
import joinAboutUs from "@/components/home/aboutUs/joinAboutUs"

export default {
    name: "aboutUs",
    components: {
        comAboutUs,
        coopAboutUs,
        contactAboutUs,
        recruitAboutUs,
        opinionAboutUs,
        problemAboutUs,
        serviceAboutUs,
        joinAboutUs
    },
    data() {
        return {
            currentView: "comAboutUs",
            currentIndex: 0,
            childIndex:0,
            List:[],
            Tab:[],
            thisIndex:1,
            childCon:[],
        };
    },
    methods: {
        switchView(index,thisId) {
            this.currentView = this.Tab[index];
            //this.childIndex = 0;
            this.currentIndex = index;
            this.childIndex = 0;
            if(thisId.child.length > 0){
                this.thisIndex = thisId.child[0].id;
                
               this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.thisIndex}).then((response) => {
                    this.childCon = response.data.data;
                    //console.log(this.childCon);
                }).catch((err) => {
                    console.log(err);
                })
            }else{
                this.thisIndex = thisId.id;
            }
        },
        switchChild(index,childId){
            
            this.childIndex = index;
            
            this.thisIndex = childId;
            //console.log(this.thisIndex);
           this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.thisIndex}).then((response) => {
                this.childCon = response.data.data;
                //console.log(this.childCon);
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    computed:{
        currentTabComponent: function () {
            return  this.currentView;
        }
    },
    created(){
        //获取左侧导航
       this.axios.post(process.env.API_HOST+'commonality/region/category_list').then((response) => {
           this.List = response.data.data;
           this.List.forEach((item) => {
               this.Tab.push(item.description)
           })
           //console.log(this.List);
           //console.log(this.Tab);
        })
    },
};
</script>
<style scoped>
.banner img {
    height: 300px;
}

.head_func {
    background: #f2f2f2;
}

.head_func .content {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.crumbsNav ul {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #ccc;
}
.crumbsNav ul li a {
    color: #ccc;
}

.crumbsNav ul li.active a {
    color: #e93e0c;
}

.container {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    padding: 30px 0 50px 0;
    display: flex;
    justify-content: space-between;
}
.navigator {
    width: 160px;
}
.navigator ul li {
    overflow: hidden;
    border-bottom: 1px solid #fff;
    cursor: pointer;
}
.navigator ul li .parentNode {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    background: #f5f5f5;
    display: block;
    font-size: 16px;
    color: #333333;
}

.navigator ul li.active .parentNode {
    color: #fff;
    background: #e93e0c;
}
.childNodes ul li {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    position: relative;
    font-size: 16px;
    color: #333333;
    cursor: pointer;
}
.childNodes ul li.now {
    color: #e93e0c;
}

.childNodes ul li.now::before {
    position: absolute;
    content: '';
    width: 3px;
    height: 14px;
    background-color: #e93e0c;
    left: 0;
    top: 18px;
}
.modular {
    width: 980px;
}
</style>
