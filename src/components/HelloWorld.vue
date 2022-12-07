<script setup lang="ts">
import {  onMounted, ref } from 'vue'

interface User {

  [key: string]: string |number
}

interface Props {
  msg: string,
  bar: number,
  objs: User
}

const props = defineProps<Props>()

const title = ref<HTMLHeadElement>()
onMounted (() => {
  console.log(props.bar);
  
  console.log((title.value as HTMLHeadElement).innerText)
})
</script>

<template>
  <h1 ref="title">{{ msg }}</h1>
  <h1>{{ bar }}</h1>
  <h1>{{ objs.name }}</h1>
  <h1>{{ objs.name1 }}</h1>
  <h1>{{ objs.name2 }}</h1>
  <h1>{{ objs.age }}</h1>
  <h1>{{ objs }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
