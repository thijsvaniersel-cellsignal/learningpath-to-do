<template>
    <div v-if="store.errors.length > 0" class="w-full text-center p-2 bg-red-300 rounded shadow">
        <p class="text-red-600">
            {{ store.errors }}
        </p>
    </div>
</template>

<script lang="ts">
import { useTodoStore } from '@/stores/todo'

export default {
    setup() {
        const store = useTodoStore()

        return {
            store
        }
    }
}
</script>