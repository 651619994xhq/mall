<template>
  <div id="app">
    <transition :name="transitionName">
    <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return {
       isRouterAlive:true
     }
  },
  computed: {
    transitionName() {
      return this.$store.state.transitionName
    },
  },
  provide(){
    return {
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(()=>{
        this.isRouterAlive=true;
      });
    }
  }
}
</script>

<!--&lt;!&ndash;<style lang="scss">&ndash;&gt;  //千万不能用,用了就会影响mint-ui 当想要复写样式的时候复写不了 一直被覆盖-->
<style>
#app {
  width: 100%;
  height: 100%;
}
/*切换页面时的滑动效果*/
.views {
  position: absolute;
  width: 100%;
  transition: all .8s ease;
  top: 0;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .4s ease;
}
.slide-left-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .4s ease;
}
.slide-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

</style>
