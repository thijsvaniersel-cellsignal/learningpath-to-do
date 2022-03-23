<template>
    <section class="flex flex-row justify-between">
        <div :class="completed == true ? 'completed' : 'not-completed'">    
            <p v-if="completed == true || todoStore.todos.length == 0">
                Sit back, and relax!
            </p>
            <p v-else>
                Not completed {{ uncompleted }}
            </p>               
        </div>        
        <div v-if="todoStore.todos.length > 0" class="nav-buttons">
            <a @click="deleteAll">Delete all</a>
            <a @click="completeAll">Complete all</a>
        </div>        
    </section>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import { useTodoStore } from '@/stores/todo'

export default {
    setup() {
        // store
        const userStore = useUserStore()
        const todoStore = useTodoStore()

        // methods 
        const deleteAll = () => {
            todoStore.deleteAllTodo()
        }

        const completeAll = () => {
            todoStore.completeAllTodo()
        }        

        return {
            userStore,
            todoStore,
            deleteAll,
            completeAll
        }
    },

    computed: {
        uncompleted() {
            return useTodoStore().countUncompleted
        },
        completed() {
            return useUserStore().listCompleted
        }
    }
}
</script>

<style scoped>
p {
    font-weight: bold;
}
.completed {
    color: green;
}
.nav-buttons a {
    border: 1px solid black;
    padding: .5em;
    cursor: pointer;
}
</style>