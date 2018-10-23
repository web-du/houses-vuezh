<template>
    <div id="opinion">
        <div class="opinion">
        <p>欢迎您来到房乐士意见反馈，您可以通过业务分类选择常见问题，也可以在此直接反馈，我们会尽快给您回复。</p>
        <p><span>*</span>联系方式</p>
        <input type="text" v-model="mobile">
        <p><span>*</span>问题描叙</p>
        <textarea name="" v-model="fknr"></textarea>
        <button type="botton" @click="toSub()">提交信息</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:"opinionAboutUs",
        data(){
            return{
                mobile:'',
                fknr:'',
            }
        },
        methods:{
            toSub(){
                this.axios.post(process.env.API_HOST+'commonality/From/Feedback',{mobile:this.mobile,fknr:this.fknr}).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        created(){
        }
    }
</script>

<style scoped>
    .opinion > p {
        font-size: 14px;
        color: #333333;
        line-height: 36px;
    }
    .opinion > p {
        font-size: 14px;
        color: #333333;
        line-height: 36px;
    }
    .opinion > p span {
        color: #e93e0c;
        vertical-align: middle;
        margin-right: 5px;
    }
    .opinion input {
        display: block;
        width: 300px;
        line-height: 42px;
        height: 44px;
        border: 1px solid #f5f5f5;
        padding-left: 15px;
    }
    .opinion textarea {
        display: block;
        width: 100%;
        height: 275px;
        border: 1px solid #f5f5f5;
        outline: none;
        padding: 15px;
    }
    .opinion > button {
        display: block;
        width: 225px;
        height: 45px;
        line-height: 45px;
        background-color: #e93e0c;
        text-align: center;
        font-size: 16px;
        color: #fff;
        line-height: 36px;
        font-weight: bold;
        margin: 40px auto 0;
        border: none;
        cursor: pointer;
    }
</style>

