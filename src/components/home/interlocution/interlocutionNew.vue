<template>
     <div class="con">
              <ul>
                <li v-for="(item,index) in recruit" :key="index">
                 <router-link  :to="{path:'/interlocution/interlocutiondetails', query:{id:item.id}}">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>{{item.problem_content}}</h2>
                      </div>
                      <span class="fr">{{item.answer_num}}个回答</span>
                    </div>
                    <div class="time">
                      <span>{{item.create_time}}</span>
                      <span>浏览量：{{item.post_hits}}</span>
                    </div>
                     <p v-if="answer(item.answer)"><span>答</span>{{item.answer[0].answer_content}}</p>
                  </router-link>
                </li>
                <!-- <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="details clearfix">
                      <div class="q fl">
                        <h2><span>问</span>租福成五期一室一厅的房子价格500元每月 </h2>
                      </div>
                      <span class="fr">0个回答</span>
                    </div>
                    <div class="time">
                      <span>2018-07-16 14:40:36</span>
                      <span>浏览量：3</span>
                    </div>
                    <p><span>答</span>云湖尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔尚景楼盘小区绿化很高，坐
落在美丽的后官湖畔尚景楼盘小区绿化很高，坐落在美丽的后官湖畔能尽快法师的技能看</p>
                  </a>
                </li> -->
              </ul>
            </div>
</template>

<script>
    export default {
        name:"interlocutionNew",
        data () {
            return {
                recruit:[],
                classify:[],
                
            }
        },
        created(){
            this.axios.post(process.env.API_HOST +'portal/Interlocution/getProblem',{is_new:1}).then((response) => {      
               
                 this.recruit=response.data.data.data
                //  this.recruit.forEach((item) => {
                //       if(item.children.length>0){
                //         this.classify.push(item)
                //       }
                //  });
                console.log(this.recruit)
             }).catch((err) => {
              
            })
        },
        methods:{
            answer(itemarr){
               
                if(itemarr.length>0){
                    return true
                }
            }
        }

    }
</script>
