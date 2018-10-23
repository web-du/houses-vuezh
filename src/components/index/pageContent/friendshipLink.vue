<template>
    <div id="friendshipLink">
        <p class="title">友情链接</p>
        <ul>
            <li v-for="(item, index) in friendshipLink" :key="index">
                <a :href="item.url" target="_blank">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "friendshipLink",
    data() {
        return {
            friendshipLink: []
        };
    },
    mounted() {
        this.axios
            .post(process.env.API_HOST + "home/index/getFriendshipLink", {})
            .then(res => {
                if (res.status == "200") {
                    this.friendshipLink = res.data.data.link_list
                }
            });
    }
};
</script>

<style scoped>
#friendshipLink {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 45px;
}

#friendshipLink .title {
    font-size: 26px;
    font-weight: bold;
}

#friendshipLink ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}

#friendshipLink ul li {
    margin-right: 20px;
    margin-top: 20px;
    font-size: 14px;
    color: #666;
}

#friendshipLink ul li a:hover {
    color: #e93e0c;
}
</style>

