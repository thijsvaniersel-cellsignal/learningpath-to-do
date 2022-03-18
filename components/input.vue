<template>
    <form 
        @submit.prevent="addTodo()"
        class="justify-center w-full mt-2 text-xl overflow-visible"
        >
        <div class="relative">
            <input 
                type="text" 
                class="p-8 w-full pr-20 rounded-lg z-0 border border-indigo-900 mt-2 mb-2 focus:shadow focus:outline-none" 
                placeholder="Add todo..."
                v-model="localTodoInput"
            >
            <div class="absolute top-6 right-4">
                <input type="submit" value="Add todo" class="cursor-pointer p-4 text-white rounded-lg bg-red-500 hover:bg-red-600" />
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

            // add to store
            let todoPayload = {
                todo: localTodoInput.value,
                time: + new Date(),
                completed: false
            }
            store.addToDo(todoPayload)  

            // reset input
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
