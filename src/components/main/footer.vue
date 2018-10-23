<template>
    <div id="pageFooter">
        <footer>
            <ul>
                <li v-for="(item,index) in navList" :key = "index">
                    <router-link to="/aboutUs/aboutUs">{{item.name}}</router-link>
                </li>
            </ul>
            <p>©2018fanleshi.com</p>
            <p>鄂ICP备13017353号-3 鄂公网安备11010802012357号</p>
        </footer>
    </div>
</template>
<script>
export default {
    name: "page-footer",
    data(){
        return{
            navList:[],
        }
    },
    created(){
       this.axios.post(process.env.API_HOST+'commonality/region/category_list').then((response) => {
            this.navList = response.data.data;
        }).catch((err) => {
            console.log(err)
        })
    }
};
</script>
<style scoped>
footer {
    width: 100%;
    height: 160px;
    background: #333333;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

footer ul {
    display: flex;
    flex-direction: row;
}

footer ul li {
    height: 16px;
    line-height: 16px;
    padding: 0 20px;
    border-right: 2px solid #999;
}

footer ul li:nth-last-child(1) {
    border-right: 0;
}

footer ul li a {
    color: #999999;
}

footer p {
    color: #999999;
    font-size: 14px;
    margin-top: 20px;
}
</style>
