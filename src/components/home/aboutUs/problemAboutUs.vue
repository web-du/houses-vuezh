<template>
    <div id="problem">
        <ul class="problem">
            
            <li>
                <div class="details" v-for="(item,index) in newProblem" :key="index">
                    <h2 :class="{now : currentIndex == index}" @click="Switch(index)">{{item[0].post_title}}</h2>
                    <div class="answer" v-show="currentIndex == index">
                        <p>{{item[0].post_content[0]}}</p>
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
</template>


<script>
    export default{
        name:"problemAboutUs",
        props:{
            nowId:{
                type:Number,
                required:true
            },
            Con:{
                type:Array,
                required:false,
                default: ""
            },
        },
        data(){
            return{
                currentIndex:this.nowId,
            }
        },
        computed:{
            newProblem:function(){
                return this.Con;
            },
        },
        watch:{
            nowId:function(val,oldval){
                this.currentIndex = val;
            }
        },
        created(){

        },
        methods:{
            Switch(index){
                //console.log(this.nowId)
                this.currentIndex = index;
            }
        },
    }
</script>

<style scoped>
    .problem .details h2 {
        font-size: 14px;
        line-height: 36px;
        color: #333333;
        cursor: pointer;
    }
    .problem .details h2::before {
        content: '';
        display: inline-block;
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-left: 5px solid;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        margin-right: 15px;
        color: #dddddd;
    }
    .problem .details h2.now::before {
        content: '';
        display: inline-block;
        width: 0px;
        height: 0px;
        vertical-align: middle;
        border-top: 5px solid;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        margin-right: 10px;
        color: #dddddd;
    }
    .problem .details .answer p {
        font-size: 14px;
        color: #666666;
        line-height: 24px;
        padding-left: 20px;
    }
</style>

