<template>
    <template>
        <div class="login">
            <!--
      1. :model="ruleForm"
      2. :rules="rules"
      3. ref="ruleForm"
      4. el-form-item 绑定 prop 属性
     -->
            <el-form class="login-form" label-position="top" ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" :loading="isLoginLoading"
                        @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </template>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import type { IResponseData } from '@/api/types/common'
import { getLoginInfo } from "@/api/common";

const msg = ref('login')
let data = ref<IResponseData['data']>({})
onMounted(() => {
    getLoginInfo().then(res => {
        console.log(res)
        data.value = res.data.data
    })
})


const form = reactive({
    phone: '18201288771',
    password: '111111'
})
const rules = reactive({
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
    ]
})
const isLoginLoading = ref(false)

const onSubmit = () => {}

</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
        width: 300px;
        background: #fff;
        padding: 20px;
        border-radius: 5px;
    }

    .login-btn {
        width: 100%;
    }
}
</style>