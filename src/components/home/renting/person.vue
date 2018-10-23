<template>
    <div id="content" class="renting">
        <div class="crumbsSearch">
            <div class="content">
                <div class="crumbs"><a href="">房乐士</a> &gt; <a href="">房产资讯</a> &gt; <span>资讯</span></div>
                <div class="search">
                    <input placeholder="楼盘搜索">
                    <div class="to-search">
                        <input type="submit"  class="btn">
                        <img src="@/assets/images/searcj.png" >
                    </div>
                </div>
            </div>
        </div>
        <div class="rentout-person">
                <div class="rentout-person-tit">
                     <div class="lf">
                         <h2>{{recruit.title}}</h2>
                         <div class="time">
                            <p>来源：房乐士网友</p>
                            <p>时间：{{recruit.date}}</p>
                         </div>
                     </div>
                     <div class="rg">
                          <div class="edit">
                              <img src="@/assets/images/Dw-center01.png" alt=""> 编辑
                          </div>
                          <div class="del">
                              <img src="@/assets/images/dzlp18.jpg" alt=""> 删除
                          </div>
                     </div>
                </div>
                <div class="rentout-person-con">
                    <div class="lf">
                        <p>期望居室：<span>求整租一居</span></p>
                        <p>求租地点: <span>{{recruit.area}}</span></p>
                        <p>租金预算: <span>{{recruit.price}}元/月</span></p>
                        <p>租赁方式: <span>整租</span></p>
                        <p>房屋配套: <span>暂无资料</span></p>
                        <p>入住时间: <span>2018-06-28</span></p>
                        <p>入住留言: <span>房子户型好，基本配备齐全，社区安全，本人有做饭需求</span></p>
                    </div>
                    <div class="rg">
                          <img src="@/assets/images/rentout-person.jpg" alt="">
                          <p>{{recruit.user_nickname}}</p>
                          <div class="tel">
                           <img src="@/assets/images/dzlp10.png" alt=""> <span>{{recruit.mobile}}</span>
                          </div>
                    </div>
                </div>
            </div>
     </div>
     
</template>

<script>
    export default{
        data (){
            return {
                recruit:[]
            }
        },
        created(){
            
             this.axios.post(process.env.API_HOST +'house/Buildings/getRentoutDetail',{id:this.$route.query.id}).then((response) => {      
                
                 this.recruit=response.data.data
                  console.log(this.recruit)  
                 
                
             }).catch((err) => {
              
            })
        
        }
        
    }
</script>

<style>
  .crumbsSearch{
    background: #f2f2f2;
}
.crumbsSearch .content {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.crumbsSearch .content .crumbs, .crumbsSearch .content .crumbs a {
    font-size: 14px;
    color: #999;
}
.crumbsSearch .content .crumbs span {
    color: #e93e0c;
    font-weight: bold;
}
.crumbsSearch .content .search {
    position: relative;
    overflow: hidden;
}
.crumbsSearch .content .search input {
    width: 451px;
    height: 45px;
    font-size: 14px;
    padding-left: 20px;
    border-radius: 5px;
    outline: none;
}
.crumbsSearch .content .search input.btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 45px;
    display: block;
    cursor: pointer;
    text-indent: -9999px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #e93e0c;
}
.rentout-person{
    width:1200px;
    margin:0 auto;
}
.rentout-person .rentout-person-tit{
    overflow:hidden;
    padding:25px 0;
    border-bottom:1px solid #f2f2f2;
}
.rentout-person .rentout-person-tit .lf{
    float:left;

}
.rentout-person .rentout-person-tit .lf h2{
     font-size:16px;
     color:#666;
     font-weight:bold;
     margin-bottom:10px;
}
.rentout-person .rentout-person-tit .lf .time{
     overflow:hidden;
     font-size:14px;
     color:#999;
}
.rentout-person .rentout-person-tit .lf .time p{
    float:left;
    margin-right:35px;
}
.rentout-person .rentout-person-tit .rg{
    float:right;
    font-size:14px;
    color:#666;
    margin-top:30px;
}
.rentout-person .rentout-person-tit .rg .edit{
    /* background:url("../images/Dw-center01.png") 0 center no-repeat; */
    padding-left:30px;
    box-sizing:border-box;
    cursor:pointer;
    margin-right:20px;
    float:left;
}
.rentout-person .rentout-person-tit .rg .del{
    /* background:url("../images/dzlp18.jpg") 0 center no-repeat; */
    padding-left:30px;
    box-sizing:border-box;
    cursor:pointer;
    float:left;

}
.rentout-person .rentout-person-con{
    padding:20px 0;
    box-sizing:border-box;
    min-height:550px;

}
.rentout-person .rentout-person-con .lf{
     width:810px;
     float:left;
     font-size:14px;
     color:#999;
     line-height:36px;
}
.rentout-person .rentout-person-con .lf span{
    color:#666;
}
.rentout-person .rentout-person-con .lf p:last-child{
    margin-top:30px;
}

.rentout-person .rentout-person-con .rg{
     width:390px;
     box-sizing:border-box;
     height:450px;
     border-left:1px solid #f7f7f7;
     text-align:center;
     float: right;
     margin-top:15px;
}
.rentout-person .rentout-person-con .rg img{
     width:90px;
     height:90px;

}
.rentout-person .rentout-person-con .rg p{
      font-size:14px;
      color:#333;
      line-height:36px;
}
.rentout-person .rentout-person-con .rg .tel{
     display:inline-block;
     /* background:url("../images/dzlp10.png") 0 center no-repeat; */
      padding-left:35px;
       font-size:14px;
      color:#666;
}
.rentout-person .rentout-person-con .rg .tel img{
    width: 22px;
    height: 23px;
}
.rentout-person .rentout-person-con .rg .tel span{
      font-weight:bold;

}


.rentout-list .addr{
    height:auto !important;
    overflow:hidden;
}
.rentout-list .addr .form{
     margin-right:30px;
     font-size:14px;
     color:#999;
     display:inline-block;
}
.rentout-list .addr .time{
   display:inline-block;
     font-size:14px;
     color:#999;
}


.renout-bus .houses_label ul li:nth-child(1){
    background: rgb(239,232,231);
    color: #e89880;
}

.houses_type {
    position: absolute;
    top: 0;
    left: 0;
    padding:0 10px;
    width:auto !important;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #e93e0c;
    font-size: 14px;
    color: #fff;
}
</style>
