<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <el-menu-item index="/">
          <span>首页</span>
        </el-menu-item>

        <el-sub-menu index="/product">
            <template #title>商品</template>
            <el-menu-item index="/product/product_list">商品列表</el-menu-item>
            <el-menu-item index="/product/product_attr">商品规格</el-menu-item>
            <el-menu-item index="/product/product_classify">商品分类</el-menu-item>
            <el-menu-item index="/product/product_reply">商品评论</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/order">
            <template #title>订单</template>
            <el-menu-item index="/order/order_list">订单列表</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/media">
          <span>媒体</span>
        </el-menu-item>

        <el-sub-menu index="/permission">
            <template #title>权限</template>
            <el-menu-item index="/permission/permission_role">角色</el-menu-item>
            <el-menu-item index="/permission/permission_admin">管理员</el-menu-item>
            <el-menu-item index="/permission/permission_rule">权限规则</el-menu-item>
        </el-sub-menu>

      </el-menu>
</template>


<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>