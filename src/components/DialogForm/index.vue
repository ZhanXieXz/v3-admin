<template>
    <el-dialog ref="dialog" :title="title">
        <slot/>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel">Cancel</el-button>
                <el-button type="primary" @click="emit('confirm')">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const dialog = ref(null)

interface EmitsType {
    (e: 'confirm'): void
}

const emit = defineEmits<EmitsType>()
defineProps({
    title: {
        type: String
    }
})

const handleCancel = () => {
    if (dialog.value) {
        dialog.value.visible = false
    }
}
</script>
<style lang="scss" scoped>

</style>