<template>
    <div class="related_issues fr">
        <h2>相关问题</h2>
        <ul>
          <li class="clearfix" v-for="(item,index) in recruit" :key="index">
            <a href="#" class="clearfix">
            <p class="fl">{{item.problem_content}}</p>
            <span class="fr">{{item.num}}回答</span>
            </a>
          </li>
          <!-- <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li>
          <li class="clearfix">
            <a href="#" class="clearfix">
            <p class="fl">央行划出五项重点工作 降准是恐空二师排污口佩服个人恐怕</p>
            <span class="fr">2回答</span>
            </a>
          </li> -->
        </ul>
      </div>
</template>

<script>
    export default {
        name:"interlocutionrelevan",
        props:{
            answerId:Number
        },
        data(){
           return{
             recruit:[]
           
           }
        },
        created(){
            this.axios.get(process.env.API_HOST+ 'portal/Interlocution/relevantProblem',{params:{id:this.answerId}}).then((response) => {          
                 this.recruit=response.data.data
                 console.log(this.recruit)
             }).catch((err) => {
              
            })
        },
    }
</script>
 
<style>
 
</style>
