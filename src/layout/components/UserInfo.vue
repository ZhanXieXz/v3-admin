<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ name }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLayout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { logout } from "@/api/common";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from "@/store/index";

const router = useRouter()

const name = computed(() => {
  return store.state.userInfo?.name
})

const handleLayout = () => {
  ElMessageBox.confirm(
    '确认退出吗?', {}
  )
    .then(async () => {
      await logout();

      router.replace({
        name: 'login'
      })

      // removeItem('userinfo')
      store.commit('changeUserInfo', null)

      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })


}
</script>

<style scoped>

</style>
