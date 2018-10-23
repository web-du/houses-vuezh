<template>
    <div id="service">
        <ul class="service">
            <li v-for="(item,index) in newProblem" :key="index">
            <h2>{{item[0].post_title}}</h2>
            <ol type="1">
                <li>{{item[0].post_content}}</li>
            </ol>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"serviceAboutUs",
        props:{
            nowId:{
                type:Number,
                required:true
            },
            Con:{
                type:Array,
                required:false,
                default: ""
            }
        },
        computed:{
            newProblem:function(){
                return this.Con;
            }
        },
        created(){
        },
    }
</script>

<style scoped>
    .service > li h2 {
        font-size: 20px;
        color: #333333;
        line-height: 36px;
        font-weight: bold;
    }
    .service > li > ol > li {
        margin-left: 15px;
        list-style: decimal;
        font-size: 14px;
        line-height: 24px;
        color: #666;
    }
    .service > li > ol > li ol li {
        margin-left: 15px;
        list-style: upper-alpha;
    }
</style>
