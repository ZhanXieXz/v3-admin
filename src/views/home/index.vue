<template>
    <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
import user from '@/utils/user'
import { ref } from "vue";

const msg = ref('home')
console.log(user)
</script>

<style lang="scss" scoped>
div {
    color:$color
}
</style>