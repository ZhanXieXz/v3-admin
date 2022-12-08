<template>
    <div>{{ data }}</div>
    <img :src="data.login_imge" alt="">
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import type { IResponseData } from '@/api/types/common'
import { getLoginInfo } from "@/api/common";

const msg = ref('login')
let data = ref<IResponseData['data']>({})
onMounted(() => {
    getLoginInfo().then( res => {
        console.log(res)
        data.value = res.data.data
    })
})
</script>