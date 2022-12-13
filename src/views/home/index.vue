<template>
    <div>{{store.state.userInfo?.name}}</div>123
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from 'vuex'
import type { State } from "@/store/index";
const store = useStore<State>()

const msg = ref('home')
</script>

<style lang="scss" scoped>

</style>