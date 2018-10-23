<template>
    <div class="in-details">
        <div class="box" v-for="(item,index) in mail" :key = "index">
            <h2>{{item.title}}</h2>
            <p class="time">{{item.add_time}}</p>
            <p class="conn">{{item.content}}</p>
            <img :src="item.thumb_pic">
        </div>
    </div>
</template>

<script>
    export default{
        name:"Mail",
        data(){
            return{
                mail:[],
            }
        },
        created(){
            this.axios.get(process.env.API_HOST+'commonality/personal/mail_list').then((response) => {
                //console.log(response.data.data)
                this.mail = response.data.data;
                console.log(this.mail)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
.in-details h2 {
    font-size: 16px;
    line-height: 36px;
    font-weight: bold;
    color: #333333;
}
.in-details .time {
    font-size: 14px;
    line-height: 29px;
    color: #999999;
    border-bottom: 1px solid #f2f2f2;
}
.in-details .conn {
    font-size: 14px;
    line-height: 29px;
    color: #999999;
}
.in-details img {
    display: block;
    width: 600px;
    height: 450px;
    margin: 35px auto 0;
}
</style>
