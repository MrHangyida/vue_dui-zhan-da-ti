<template>
  <div class="about">
    <ul>
      <h3>{{getData.type}}</h3>
      <!-- :class="{'errorActive':getData.choose===item.id,'successActive':getData.success===item.id&&getData.open}" -->
      <!-- :class="answerFlag?'successActive':'errorActive'" -->
      <li v-for="(item,index) in getData.title" :key="index" :class="{'errorActive':getData.choose===item.id?'errorActive':'','successActive':getData.success===item.id&&getData.open}" @click="nextAnswer(item.id)">{{item.name}}:{{item.tit}}</li>
    </ul>
    <div class="form">
      <p class="next" @click="prevAnswer(true)">下一题</p>
      <p class="submit" @click="submit">提交</p>
      <p class="prev" @click="prevAnswer(false)">上一题</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      getData:(state)=>{return state.data;},
      Index:(state)=>{return state.index;},
      Total:state=> state.total,
    })
  },
  data(){
    return {
      hang:'hang'
    }
  },
  beforeCreat(){

  },
  created(){
    this.$store.dispatch('getData');
  },
  beforeMount(){

  },
  mounted(){
    // console.log(this.Index)
  },
  beforeUpdate(){

  },
  updated(){

  },
  methods:{
    nextAnswer(id){
      if(this.getData.open)return;
      this.$store.dispatch('getNextAnswer',{
        id:id,
        index:this.Index+1
      })
    },
    prevAnswer(flag){
      this.$store.dispatch('getPrevAnswer',{
        flag:flag,
        index:this.Index
      })
    },
    submit(){
      alert('您一共答对'+this.Total+'道题');
    }
  }
}
</script>
<style lang="scss" scoped>
.about{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ul{
    padding: 0 20px;
    flex-shrink: 0;
    h3{
      font-size: 18px;
    }
    li{
      margin-top: 5px;
      padding: 0 0 0 10px;
      flex-shrink: 0;
      font-size: 16px;
    }
    .errorActive{
      color: red;
    }
    .successActive{
      color: green;
    }
  }
  .form{
    height: 50px;
    display: flex;
    padding: 0 20px;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }
}
</style>
