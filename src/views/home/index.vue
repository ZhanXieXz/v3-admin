<template>
    <el-button @click="store.commit('changeCount', store.state.count)">{{msg}}</el-button>
    <div>{{store.state.count}}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from 'vuex'
import type { IState } from "@/store/index";
const store = useStore<IState>()

const msg = ref('home')
</script>

<style lang="scss" scoped>

</style>