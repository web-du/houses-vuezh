<template>
    <div id="pageHeader">
        <div id="navigation">
            <div class="content">
                <img src="@/assets/images/logo_r.png" width="100%" class="logo" />
                <choice-city></choice-city>
                <nav-list></nav-list>
            </div>
        </div>
        <!-- <broadcast :bannerHeight="450"></broadcast> -->
    </div>
</template>

<script>
import choiceCity from "@/components/main/choiceCity"
import navList from "@/components/main/navList"
import broadcast from "@/components/main/broadcast"
export default {
    name: 'pageHeader',
    components: {
        choiceCity,
        navList,
        broadcast
    }
};
</script>

<style scoped>
#navigation {
    background: #333333;
}

#navigation .content {
    width: 1200px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
#navigation .logo {
    width: 200px;
    height: 30px;
    margin-right: 15px;
}
#navigation .choiceCity {
    position: relative;
    width: 70px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #2b2b2b;
    margin-right: 40px;
    border: 0;
}
#navigation .choiceCity span {
    font-size: 14px;
    color: #fff;
    margin-right: 8px;
}
#navigation .choiceCity img {
    width: 10px;
    height: 5px;
}

.citylist {
    position: absolute;
    top: 30px;
    left: 0;
    width: 390px;
    padding: 10px 0;
    background: #fff;
}
.citylist ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.citylist ul li {
    font-size: 14px;
    line-height: 14px;
    padding: 10px;
}

/*导航*/
#navigation .nav {
    width: 710px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 100px;
}
#navigation .nav > li {
    position: relative;
    padding: 10px 15px;
}
#navigation .nav > li.actives {
    background: #fff;
}
#navigation .nav > li.actives > a {
    color: #e93e0c;
}
#navigation .nav > li .childNav {
    position: absolute;
    top: 36px;
    left: 0;
    padding: 10px 15px;
    z-index: 111;
    background: #fff;
    display: none;
}
#navigation .nav > li .childNav ul {
    display: flex;
    flex-direction: column;
}
#navigation .nav > li .childNav ul li a {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    color: #666666;
    display: block;
}
#navigation .nav > li .childNav ul li a:hover {
    color: #e93e0c;
}
#navigation .nav > li .childNav ul li.btn a {
    background: #e93e0c;
    color: #fff;
    text-align: center;
    border-radius: 5px;
}
#navigation .nav > li > a {
    font-size: 16px;
    color: #fff;
    cursor: pointer;
}
#navigation .nav > li.active > a {
    color: #e93e0c;
}
#navigation .signIn {
    width: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#navigation .signIn a {
    font-size: 14px;
    color: #e93e0c;
}
</style>

