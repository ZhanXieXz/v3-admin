<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="el-aside" width="200px">
                <Menu/>
            </el-aside>
            <el-container>
                <el-header class="el-header">
                    <Breadcrumb/>
                    <FullScreen/>
                </el-header>
                <el-main class="el-main">
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Menu from './components/Menu.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import FullScreen from './components/FullScreen.vue'
</script>

<style lang="scss" scoped>
.common-layout {
    .el-container {
        height: 100vh;
    }
    .el-header {
        background-color: #c6e2ff;
        display: flex;
        align-items: center;
    }
    .el-aside {
        background-color: #304156
    }


    .el-main {
        background-color: #ecf5ff
    }

}
</style>
  