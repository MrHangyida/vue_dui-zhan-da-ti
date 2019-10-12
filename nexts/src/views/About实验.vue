<template>
  <div class="about">
    <ul>
      <h3>{{data.type}}</h3>
      <!-- :class="answerFlag?'successActive':'errorActive'" -->
      <li v-for="(item,index) in data.title" :key="index" @click="nextAnswer(index)">{{item.name}}:{{item.tit}}</li>
    </ul>
    <div class="form">
      <p class="next" @click="prevAnswer('下一题')">下一题</p>
      <p class="submit">提交</p>
      <p class="prev" @click="prevAnswer('上一题')">上一题</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      AllData:[],
      data:[],
      index:0,
      answerFlag:false,
    }
  },
  beforeCreat(){

  },
  created(){
     this.$ajax.get('/api/data').then(res=>{
      this.AllData=res.data;
      this.data=res.data[this.index];
    })
  },
  beforeMount(){

  },
  mounted(){

  },
  beforeUpdate(){

  },
  updated(){

  },
  methods:{
    nextAnswer(index){
      let len = this.AllData.length;
      if(this.index<len-1){
        this.index++;
      }
      this.data=this.AllData[this.index];
    },
    prevAnswer(flag){
      let len = this.AllData.length;
      if(flag==='下一题'){
        if(this.index<len-1){
          this.index++;
        }
        this.data=this.AllData[this.index]
      }else if(flag==='上一题'){
        this.index--;
        if(this.index<=0){
          this.index=0;
        }
        this.data=this.AllData[this.index]
      }
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
