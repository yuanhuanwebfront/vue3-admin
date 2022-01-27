<script setup lang="ts">
  import { LINK_LIST } from './config/index';
  import { ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  // 获取路由实例
  const router = useRouter();
  const route = useRoute();

  // computed使用
  const cptCurpath = computed(() => {
    return '/' + route.path.split('/')[1]
  })

  let chooseRoute = (path:string) => {
    // ref语法使用 .value获取值
    router.push(path)
  }





</script>

<template>
  <div class="sidebar-container">
    <img class="head" src="../assets/image/head.png" />
    <div class="link-list">
      <div class="link-item cu-pt mb-36" :class="{active: link.path == cptCurpath}" 
        v-for="link in LINK_LIST" :key="link.path" :title="link.name" @click="chooseRoute(link.path)">
        <i class="iconfont" :class="link.icon"></i>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .sidebar-container{
    width: 96px;
    height: 100vh;
    padding: 40px 12px;
    background-color: #c5d3f9;
    text-align: center;
    overflow: hidden;
  }
  .sidebar-container .head{
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
  .link-list{
    margin-top: 60px;
  }
  .link-item{
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin: 0 auto;
    margin-bottom: 36px;
    border-radius: 12px;
    color: #51459e;
    background-color: #f8faff;
    transition: 0.5s;
    box-shadow: 0 0 5px 10px #c5d3f9;
  }
  .link-item:hover{
    background-color: rgba(81, 69, 158, 0.1);
  }
  .link-item .iconfont{
    font-size: 18px;
  }
  .link-item.active{
    position: relative;
    background-color: #51459e;
    color: #fff;
  }
  .link-item.active::before{
    position: absolute;
    content: '';
    width: 120px;
    height: 120px;
    border-radius: 80px;
    background-color: #f2f7ff;
    top: -44px;
    right: -133px;
  }
  .link-item.active::after{
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #51459e;
    right: -27px;
    top: 14px;
  }
</style>