<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped></style>
