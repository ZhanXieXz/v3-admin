<template>
    <div>
        <el-row :gutter="24" class="header">
            <el-col>
                <div class="title" @click="(dialog = !dialog)">数据筛选</div>
            </el-col>
            <el-col>
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-select v-model="params.status">
                            <el-option value="all"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="params.name" placeholder="请输入名称" clearable />
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="table" :gutter="24">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID" />
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="account" label="账号" />
                <el-table-column prop="identity" label="身份" />
                <el-table-column prop="time" label="最后登录时间" />
                <el-table-column prop="status" label="状态" />
                <el-table-column fixed="right" label="操作">
                    <template #default>
                        <el-button link type="primary" size="small">Detail</el-button>
                        <el-button link type="primary" size="small">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                v-model:current-page="params.currentPage"
                v-model:page-size="params.pageSize"
                :page-sizes="[100, 200, 300, 400]"
                small="small"
                layout="total, sizes, prev, pager, next, jumper"
                :total="params.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange">
            </el-pagination>
        </el-row>
    </div>
    <app-dialog-form v-model="dialog"  :title="Tips" @confirm="confirm">
        <div>这是内容</div>
    </app-dialog-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
const dialog = ref(false)
const params = reactive({
    status: 'all',
    name: '',
    currentPage: 1,
    pageSize: 20,
    total: 100
})
const Tips = ref('123123')
const tableData = reactive([])
const handleSizeChange = (val: string) => {
    console.log(val)
}
const handleCurrentChange = (val: string) => {
    console.log(val)
}
const confirm = () => {
    console.log('comfirm')
}
</script>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    padding: 20px 10px 30px;
    border-radius: 6px;
    margin-bottom: 30px;

    .title {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
    }
}
.table {
    padding: 20px 10px 30px;
    background-color: #fff;
    justify-content: flex-end;
    .el-pagination {
        margin-top: 20px;
        float: right;
    }
}
</style>