<script setup lang="ts">
  import { LINK_LIST } from './config/index';

  const linkList = [...LINK_LIST];

</script>

<template>
  <div class="sidebar-container">
    <img class="head" src="../assets/image/head.png" />
    <div class="link-list">
      <div class="link-item cu-pt mb-36" :class="{active: link.path == '/home'}" v-for="link in linkList" :key="link.path">
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
    background-color: #51459e;
    color: #fff;
  }
</style>