import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AllData:[],
    data:[],
    index:0,
    total:0,
  },
  mutations: {
    setData(state,data){
      state.AllData=data;
      state.data=data[state.index];
    },
    setNextAnswer(state,data){
      let {id,index}=data;
      let len =state.AllData.length;
      if(index>=len-1){
        index=len-1;
      }
      state.AllData[state.index].open=true;
      state.AllData[state.index].choose=id;
      if(id===state.AllData[state.index].success){
        state.total++;
      }
      state.index=index;
      state.data=state.AllData[index];
    },
    setPrevAnswer(state,data){
      let {flag,index}=data;
      let len =state.AllData.length;
      if(flag){
        let ind=index+1;
        if(ind>=len){
          ind=len-1;
        }
        state.index=ind;
        state.data=state.AllData[ind];
      }else if(flag===false){
        let ind=index-1;
        if(ind<=0){
          ind=0;
        }
        state.index=ind;
        state.data=state.AllData[ind];
      }
    }
  },
  actions: {
    getData(store){
      axios.get('/api/data').then(res=>{
        store.commit('setData',res.data);
      })
    },
    getNextAnswer(store,obj){
      let {id,index}=obj;
      store.commit('setNextAnswer',{id,index})
    },
    getPrevAnswer(store,obj){
      let {flag,index}=obj;
      store.commit('setPrevAnswer',{flag,index})
    }
  },
  getters:{

  }
})
