<script setup lang="ts">
import locale from 'element-plus/dist/locale/zh-cn'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';


let objs = ref({
  "name": 'xz',
  "age": 18,
  "name1": 'xz',
  "name2": 'xz',
})
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
