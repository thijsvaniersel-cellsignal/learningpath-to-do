<template>
    <div 
        class="todo grid grid-cols-6 gap-4 p-2 shadow-sm border-1 border-indigo-600 mb-4"
        :class="todo.completed ? 'border-solid' : 'border-dotted'">
        <div>
            <a @click="store.todoChangeStatus(todo)">
                {{ todo.completed }}
            </a>
        </div>          
        <div class="col-span-3">
            {{ todo.todo }}
        </div>
        <div class="text-left">
            {{ prettyData(todo.time) }}
        </div>                     
        <div class="text-right cursor-pointer">
            <a @click="store.deleteTodo(todo)">X</a>
        </div>
    </div>
</template>

<script lang="ts">
    // store
    import { useTodoStore } from '@/stores/todo'

    // composables
    import { useTime } from '@/composables/time'

    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        
        setup() {
            // store
            const store = useTodoStore()                       
            
            // time
            const { prettyData } = useTime()
            
            return {
                prettyData,
                store
            }
        }
    }
</script>

<style scoped>

</style>
