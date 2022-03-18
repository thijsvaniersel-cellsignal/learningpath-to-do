<template>
    <div>
        <p v-if="store.errors.length > 0">{{ store.errors }}</p>
        <div v-for="(todo, index) in store.todos" :key="index">            
            <Todo :todo="todo"/>            
        </div>
    </div>
</template>

<script lang="ts">
import Todo from '@/components/todo.vue'
import { useTodoStore } from '@/stores/todo'

export default {
    setup() {
        const store = useTodoStore()

        return {
            store,
            Todo
        }
    }
}
</script>
