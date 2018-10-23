<template>
    <div id="contact">
        <h2>{{contact.post_title}}</h2>
        <div class="contact-box">
        <p :style ="note"><span>{{ Tel[0] }}</span><span>{{ Tel[1] }}</span></p>
        <p :style="note1">{{ Tel[2] }}</p>
        <div class="map">
            <img src="@/assets/images/Dw-map.jpg" >
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"contactAboutUs",
        props:{
            nowId:Number,
            required:true
        },
        data(){
            return{
                note: {
                    backgroundImage: "url(" + require("@/assets/images/Dw-tel.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20px 16px",
                    backgroundPosition:"left center",
                },
                note1:{
                    backgroundImage: "url(" + require("@/assets/images/Dw-addre.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20px 16px",
                    backgroundPosition:"left center",
                },
                contact:{},
                Tel:[],
            }
        },
        created(){
           this.axios.post(process.env.API_HOST+'commonality/region/article_list',{id:this.nowId}).then((response) => {
                this.contact = response.data.data[0][0];
                response.data.data[0][0].post_content.forEach((data) => {
                    this.Tel.push(data)
                })
                //console.log(this.contact);
                //console.log(this.contact.post_content);
                //console.log(this.Tel)
            }).catch((err) => {
                console.log(err);
            })
        }
    };
</script>

<style scoped>
    h2 {
        font-size: 20px;
        color: #333333;
        line-height: 36px;
        font-weight: bold;
    }
    .contact-box p {
        font-size: 14px;
        line-height: 36px;
        color: #666666;
        padding-left: 25px;
    }
    .contact-box p span{
        margin-right: 25px;
    }
    .contact-box .map {
        width: 100%;
        height: 440px;
        margin-top: 30px;
    }
    .contact-box .map img {
        display: block;
        width: 100%;
        height: 440px;
    }
</style>
