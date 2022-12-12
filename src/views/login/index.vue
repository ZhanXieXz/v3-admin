<template>
  <div class="login">
    <el-form
      class="login-form"
      label-position="top"
      ref="form"
      :model="userform"
      :rules="rules"
      label-width="80px"
      @submit.prevent="onSubmit(form)"
    >
      <el-form-item label="用户名" prop="account">
        <el-input v-model="userform.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userform.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-loading="isLoginLoading"
          class="login-btn"
          type="primary"
          native-type="submit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { login } from "@/api/common";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref<FormInstance>();

const userform = reactive({
  account: "admin",
  password: "123456",
});
console.log(userform);
const rules = reactive<FormRules>({
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" },
  ],
});
const isLoginLoading = ref(false);

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  isLoginLoading.value = true;
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(userform).then((res) => {
        router.push("/");
        localStorage.setItem("express_time", res.data.data.express_time + "");
        localStorage.setItem("token", res.data.data.token);
      });
      isLoginLoading.value = false;
    } else {
      console.log("error submit!", fields);
    }
  });
};
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
