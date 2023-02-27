<template>
    <div 
        class="todo items-center grid grid-cols-6 gap-4 p-2 shadow-sm mb-2 mt-2"
        :class="todo.completed ? 'completed' : ''"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >        
        <div class="col-span-4 flex items-center">
            <a @click="store.todoChangeStatus(todo)" class="cursor-pointer">
                <Checked v-if="todo.completed == true" />                
                <Unchecked v-else />                
            </a>            
            <p @click="store.todoChangeStatus(todo)" class="cursor-pointer block text-xl text-indigo-900 ml-4">{{ todo.todo }}</p>                     
        </div>
        <div class="text-left">
            <p class="text-sm">
                <strong class="text-indigo-900 block">{{ prettyDate(todo.time) }}</strong>
                <span class="text-gray-400">{{ prettyTime(todo.time) }}</span>
            </p>
        </div>                             
        <div class="text-right cursor-pointer flex justify-end">      
            <Drag v-if="hover"/>              
            <a @click="store.deleteTodo(todo)" class="float-right">
                <Delete /> 
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    // SVG
    import Checked from "@/assets/svg/checked.svg?inline";
    import Unchecked from "@/assets/svg/unchecked.svg?inline";
    import Delete from "@/assets/svg/delete.svg?inline";
    import Drag from "@/assets/svg/drag.svg?inline";

    // refs
    import { ref, Ref } from '@nuxtjs/composition-api'

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
        
        components: {
            Checked,
            Unchecked,
            Delete,
            Drag
        },
        
        setup() {
            // store
            const store = useTodoStore()                       
            
            // time
            const { prettyDate, prettyTime } = useTime()
            
            // Reactive vars
            const hover: Ref<boolean> = ref(false)

            return {
                hover,
                prettyDate,
                prettyTime,
                store
            }
        }
    }
</script>

<!-- 
    you can use two style blocks 
    one with scoped css and the other unscoped   
-->
<style>
/* .todo {
    transition: .5s all;    
    cursor: default
} */

.todo:hover {    
    cursor: pointer;
}

.todo svg path {
    fill: #312e81;
}
</style>

<style scoped>
.completed {
    opacity: .5;
}

.completed p {
    text-decoration: line-through;
}
</style>
