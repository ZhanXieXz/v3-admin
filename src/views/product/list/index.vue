<template>
<div>
list
</div>
</template>
<script lang="ts" setup>
import { getProList } from "@/api/common";
import { onMounted, reactive, ref } from "vue";
const list = reactive([])
onMounted(() => {
    getProList().then(res => {
        console.log(res)
    })
})
</script>
<style lang="scss" scoped>

</style>