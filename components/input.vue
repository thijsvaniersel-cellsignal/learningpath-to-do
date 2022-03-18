<template>
    <form 
        @submit.prevent="addTodo()"
        class="justify-center w-full mt-2"
        >
        <div class="relative">
            <input 
                type="text" 
                class="h-14 p-4 w-full pr-20 rounded-lg z-0 shadow mt-2 mb-2 focus:shadow focus:outline-none" 
                placeholder="Search anything..."
                v-model="localTodoInput"
            >
            <div class="absolute top-2 right-2">
                <input type="submit" value="Add todo" class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600" />
            </div>
        </div>
    </form>
</template>

<script lang="ts">
// Modules
import { ref } from '@nuxtjs/composition-api'

// Store
import { useTodoStore } from '@/stores/todo'

export default {
    setup() {
        // Reactive vars
        let localTodoInput = ref('')

        // store
        const store = useTodoStore()        

        const addTodo = () => {            

            let todoPayload = {
                todo: localTodoInput.value,
                time: + new Date(),
                completed: false
            }

            store.addToDo(todoPayload)  
            localTodoInput.value = ''          
        }

        return {
            localTodoInput,
            addTodo,
            store
        }
    }
}
</script>
