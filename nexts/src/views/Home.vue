<template>
  <div class="home">
      <h3 @click="clickDetail">
        点我进入答题页
      </h3>
  </div>
</template>

<script>
// @ is an alias to /src
import data from '@/mock/data.json'; //直接引入json数据

export default {
  name: 'home',
  data(){
    return {
      data:data
    }
  },
  created(){
  //  console.log(this.data)
  },
  mounted(){

  },
  methods:{
    clickDetail(){
      this.$router.push('/about');
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: orange;
    color: #fff;
    // position: relative;
    // .box{
    //   width: 50px;
    //   height: 50px;
    //   background: #000;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   margin:  auto;
    //   left: 50%;
    //   top: 50%;
    //   transform: translate(-50%,-50%);
    // }
  }
</style>

